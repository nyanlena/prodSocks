import express from 'express';
import Sequelize from 'sequelize';

import { Favorite } from '../../db/models';

const router = express.Router();

router.get('/', async (req, res) => {
  const favorite = await Favorite.findAll();
  const initState = { favorite };
  res.render('Layout', initState);
});
router.post('/:id', (req, res) => {
  const { productId } = req.body; // Получаем айди продукта из тела запроса
  const baseLink = 'https://wa.me/?text=';
  const productLink = `https://example.com/product/${productId}`;
  const message = `Посмотри, что я нашел: ${productLink}`;
  const shareLink = `${baseLink}${encodeURIComponent(message)}`;
  console.log(shareLink);
  res.send(shareLink); // Отправляем клиенту ссылку на отправку в ответ
});
router.delete('/:id', async (req, res) => {
  try {
    const favorite = req.params.id;
    // Находим и удаляем запись с указанным ID
    // await
    favorite.destroy({ where: { id: req.params.id } });

    // console.log("++++++++++++++++++++", id);
    // Перенаправляем пользователя на страницу со списком всех записей
    return res.sendStatus(200);
  } catch (error) {
    // Если происходит ошибка, отправляем ответ со статусом 500 и сообщением об ошибке
    res.status(500).send(error.message);
  }
});

// export default router;
// import express from 'express';

// const router = express.Router();

// const favorite = [
//   { user_id: 1, sock_id: 2, id: 3 },
//   { user_id: 2, sock_id: 3, id: 4 },
// ];

// router.get('/', async (req, res) => {
//   const initState = { favorite };
//   res.render('Layout', initState);
// });

// router.post('/:id', (req, res) => {
//   const { productId } = { user_id: 1, sock_id: 2, id: 3 };
//   // const { productId } = req.body; // Получаем айди продукта из тела запроса
//   const baseLink = 'https://wa.me/?text=';
//   const productLink = `https://example.com/product/${productId}`;
//   const message = `Посмотри, что я нашел: ${productLink}`;
//   const shareLink = `${baseLink}${encodeURIComponent(message)}`;
//   console.log(shareLink);
//   res.send(shareLink); // Отправляем клиенту ссылку на отправку в ответ
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const index = favorite.findIndex((el) => el.id === req.params.id);
//     if (index !== -1) {
//       favorite.splice(index, 1);
//       return res.sendStatus(200);
//     }
//     return res.sendStatus(404);
//   } catch (error) {
//     // Если происходит ошибка, отправляем ответ со статусом 500 и сообщением об ошибке
//     res.status(500).send(error.message);
//   }
// });

export default router;
