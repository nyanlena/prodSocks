import express from 'express';
import {Sock, Color, Picture, Pattern, Favorite, Basket} from '../../db/models'


const indexRouter = express.Router();

indexRouter.get('/generator', async (req, res) => {
  const allColor = await Color.findAll();
  const allPicture = await Picture.findAll();
  const allPattern = await Pattern.findAll();
  res.render('Layout', {allColor, allPicture, allPattern});
});

indexRouter.post('/generator/favorite', async (req,res) => {
  const {color,pattern,picture,curId} = req.body;
  const c = await Color.findOne({where:{name:color}})
  const pat = await Pattern.findOne({where:{name:pattern}})
  const pic = await Picture.findOne({where:{name:picture}})
  const sockCreate = await Sock.create({color_id:c.id,pattern_id:pat.id,picture_id:pic.id})
  await Favorite.create({user_id:curId,sock_id:sockCreate.id})
})

indexRouter.post('/generator/basket', async (req,res) => {
  const {color,pattern,picture,curId} = req.body;
  const c = await Color.findOne({where:{name:color}})
  const pat = await Pattern.findOne({where:{name:pattern}})
  const pic = await Picture.findOne({where:{name:picture}})
  const sockCreaete = await Sock.create({color_id:c.id,pattern_id:pat.id,picture_id:pic.id})
  await Basket.create({user_id:curId,sock_id:sockCreaete.id})
})

export default indexRouter;