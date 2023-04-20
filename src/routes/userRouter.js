import express from 'express';

const userRouter = express.Router();

userRouter.get('/signup', (req, res) => {
  res.render('Layout', {});
});

userRouter.get('/login', (req, res) => {
  const user = req.session?.user;
  res.render('Layout', { user });
});

export default userRouter;
