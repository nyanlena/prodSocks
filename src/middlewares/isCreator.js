import { Initiative } from '../../db/models';

export default async function isCreator(req, res, next) {
  const { id } = req.params;
  console.log(req.params);
  const currentInitiative = await Initiative.findOne({ where: id });
  if (req.session?.user?.id === currentInitiative.author_id) return next();
  return res.sendStatus(403);
}
