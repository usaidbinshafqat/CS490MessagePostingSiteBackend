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
    where: { UID: UID }
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

router.put('/likes/:id', verifyToken, async (req, res) => {
  const messageID = req.params.MessageID
  await message.increment('Likes', { by: 1, where: { MessageID: messageID } })
  res.json({ success: true })
})

module.exports = router
