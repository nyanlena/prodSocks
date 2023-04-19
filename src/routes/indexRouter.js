import express from 'express';

const indexRouter = express.Router();

indexRouter.get('/', (req, res) => {
  res.render('Layout', {});
});

export default indexRouter;
