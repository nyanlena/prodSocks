import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!(name && email && password)) res.sendStatus(400);

  const [user, created] = await User.findOrCreate({
    where: { email },
    defaults: { name, password: await bcrypt.hash(password, 5) },
  });

  if (!created) res.sendStatus(403);

  req.session.user = {
    id: user.id,
    email: user.email,
    name: user.name,
  };

  res.sendStatus(200);
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) return res.sendStatus(400);

    const user = await User.findOne({ where: { email } });

    if (!user) return res.sendStatus(408);

    if (!(await bcrypt.compare(password, user.password))) return res.sendStatus(408);

    req.session.user = {
      id: user.id,
      email: user.email,
      name: user.name,
    };

    return res.sendStatus(200);
  } catch (e) {
    return res.sendStatus(408);
  }
});

router.get('/logout', (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid').sendStatus(200);
});

export default router;
