/* eslint-disable import/prefer-default-export */
export const pathMiddleware = (req, res, next) => {
  res.locals.path = req.originalUrl;
  next();
};

export const authMiddleware = async (req, res, next) => {
  res.locals.path = req.originalUrl;
  res.locals.user = req.session?.user;
  console.log(res.locals.user, '<--------');
  next();
};
