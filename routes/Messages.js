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

router.post('/', async (req, res) => {
  const Likes = req.body
  const MessageID = req.body

  await message.update({ Likes: Likes }, { where: { MessageID: MessageID } })
  res.json(Likes)
})

router.put('/likes/:id', verifyToken, async (req, res) => {
  const messageID = req.params.MessageID
  await message.increment('Likes', { by: 1, where: { MessageID: messageID } })
  res.json({ success: true })
})

router.get('/bylikes', async (req, res) => {
  const Messages = await message.findAll({ order: [['Likes', 'DESC']] })
  res.json(Messages)
})

module.exports = router
