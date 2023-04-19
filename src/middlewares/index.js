/* eslint-disable import/prefer-default-export */
export const pathMiddleware = (req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
};
