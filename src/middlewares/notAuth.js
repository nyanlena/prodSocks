export default function notAuth(req, res, next) {
  if (!req.session?.user?.id) return next();
  return res.sendStatus(403);
}
