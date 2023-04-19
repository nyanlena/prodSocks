import express from 'express';
import morgan from 'morgan';
import path from 'path';
import * as dotenv from 'dotenv';
import jsxRender from './utils/customRender';
import { pathMiddleware } from './middlewares';
import indexRouter from './routes/indexRouter';
import favoritesRouter from './routes/favoritesRouter';

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.engine('jsx', jsxRender);
app.set('view engine', 'jsx');
app.set('views', path.join(__dirname, 'components'));

app.use(express.json());
app.use(pathMiddleware);
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/favorites', favoritesRouter);

app.listen(PORT, () => {
  console.log('server start on port ', PORT);
});
