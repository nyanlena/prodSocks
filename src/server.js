import express from 'express';
import morgan from 'morgan';
import path from 'path';
import * as dotenv from 'dotenv';
import session from 'express-session';
import store from 'session-file-store';
import jsxRender from './utils/customRender';
import { pathMiddleware } from './middlewares';
import indexRouter from './routes/indexRouter';
import generatorRouter from './routes/generatorRouter'
import apiRouter from './routes/apiRouter';
import authRouter from './routes/authRouter'

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;
const FileStore = store(session);

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

const sessionConfig = {
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: true,
  store: new FileStore(),
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60,
    httpOnly: true,
  },
};

app.use(express.json());
app.use(pathMiddleware);
app.use(express.static('public'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(session(sessionConfig));
app.use((req, res, next) => {
  res.locals.path = req.originalURL;
  res.locals.user = req.session?.user;
  console.log(res.locals.user, '<--------');
  next();
});
app.use('/', apiRouter);
app.use('/', authRouter);
app.use('/', indexRouter);
app.use('/', generatorRouter)

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
