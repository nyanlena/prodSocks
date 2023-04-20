import express from 'express';
import Sequelize from 'sequelize';

import nodemailer from 'nodemailer';
import { Basket, Sock, Color, Pattern, Picture } from '../../db/models';

const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'mail',
  auth: {
    user: 'a_karvatskaya@mail.ru', // email отправителя
    pass: '25453Ann_', // пароль отправителя
  },
});

const mailOptions = {
  from: 'a_karvatskaya@mail.ru',
  to: 'info@enjoysocks.ru', // email получателя
  subject: 'Новый заказ',
  text: 'Новый заказ',
};
router.get('/', async (req, res) => {
  const usId = res.locals.user.id;
  const buy = await Basket.findAll({ where: { user_id: usId }, raw: true });
  const arr = await Basket.findAll({
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
  const arr2 = arr.map((elem) => ({
    sock_id: elem.sock_id,
    pattern: elem['Sock.Pattern.name'],
    color: elem['Sock.Color.name'],
    picture: elem['Sock.Picture.name'],
  }));
  const initState = { arr2 };
  res.render('Layout', initState);
});

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Email sent: ${info.response}`);
  }
});
router.post('/send', (req, res) => {
  sendMail(); // вызываем функцию отправки письма
  res.redirect('/');
});

router.delete('/:id', async (req, res) => {
  try {
    const buy = req.params.id;
    // Находим и удаляем запись с указанным ID
    // await
    buy.destroy({ where: { id: req.params.id } });

    // console.log("++++++++++++++++++++", id);
    // Перенаправляем пользователя на страницу со списком всех записей
    return res.sendStatus(200);
  } catch (error) {
    // Если происходит ошибка, отправляем ответ со статусом 500 и сообщением об ошибке
    res.status(500).send(error.message);
  }
});

export default router;
