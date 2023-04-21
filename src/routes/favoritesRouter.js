import express from 'express';
import Sequelize from 'sequelize';

import { Favorite, Sock, Color, Pattern, Picture } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const usId = res.locals.user.id;

  const favorite = await Favorite.findAll({ where: { user_id: usId }, raw: true });

  const arr = await Favorite.findAll({
    where: { user_id: usId },
    raw: true,
    include: [
      {
        model: Sock,
        attributes: ['id', 'color_id', 'pattern_id', 'picture_id'],
        include: [
          { model: Pattern, attributes: ['name'] },
          { model: Color, attributes: ['name'] },
          { model: Picture, attributes: ['name'] },
        ],
        raw: true,
      },
    ],
  });
  const arr1 = arr.map((elem) => ({
    sock_id: elem.sock_id,
    pattern: elem['Sock.Pattern.name'],
    color: elem['Sock.Color.name'],
    picture: elem['Sock.Picture.name'],
  }));
  // .map(
  //   (sock) => sock.sock_id,
  // );


  const initState = { arr1 };

  res.render('Layout', initState);
});

router.post('/:id', (req, res) => {
  const { productId } = req.body; // Получаем айди продукта из тела запроса
  const baseLink = 'https://wa.me/?text=';
  const productLink = `https://example.com/product/${productId}`;
  const message = `Посмотри, что я нашел: ${productLink}`;
  const shareLink = `${baseLink}${encodeURIComponent(message)}`;
  // console.log(shareLink);
  res.setHeader('Content-Type', 'application/json');
  res.send(shareLink); // Отправляем клиенту ссылку на отправку в ответ
});

router.delete('/:id', async (req, res) => {
  try {
    const favorite = req.params.id;
   
    // Находим и удаляем запись с указанным ID
    // await
    await Favorite.destroy({ where: { sock_id: favorite } });

    // Перенаправляем пользователя на страницу со списком всех записей
    return res.sendStatus(200);
  } catch (error) {
    // Если происходит ошибка, отправляем ответ со статусом 500 и сообщением об ошибке
    res.status(500).send(error.message);
  }
});

export default router;
