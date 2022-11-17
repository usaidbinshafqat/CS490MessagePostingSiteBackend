const express = require('express')
const router = express.Router()

const { message } = require('../models')
const { verifyToken } = require('../middlewares/AuthMiddleware')

router.get('/', async (req, res) => {
  const listOfMessages = await message.findAll({
    order: [['createdAt', 'DESC']]
  })
  res.json(listOfMessages)
})

router.get('/byId/:UID', async (req, res) => {
  const UID = req.params.UID

  const userMessages = await message.findAll({
    where: { UID: UID },
    order: [['createdAt', 'DESC']]
  })
  res.json(userMessages)
})

router.post('/', verifyToken, async (req, res) => {
  const messageGet = req.body
  const UID = req.user.UID
  messageGet.UID = UID
  await message.create(messageGet)
  res.json(messageGet)
})

router.get('/bymsgid/:id', async (req, res) => {
  const MessageID = req.params.id

  const message = await message.findOne({
    where: { MessageID: MessageID },
    order: [['createdAt', 'DESC']]
  })
  res.json(messages)
})

router.get('/bylikes', async (req, res) => {
  const Messages = await message.findAll({ order: [['Likes', 'DESC']] })
  res.json(Messages)
})

router.get("/bypost/:Post", async (req, res) => {
  const Post = req.params.Post;
  const listMessages = await message.findOne({ where: { Message: Post } });
  res.json(listMessages);
});

router.post("/likes/:id", function (req, res, next) {
 const update = message.update(
    {Likes: req.body.Likes},
   { where: { MessageID: req.params.id} }  )
   res.json(update);
 })

module.exports = router
