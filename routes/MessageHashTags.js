const express = require('express')
const router = express.Router()

const { messagehashtags } = require('../models')

router.get('/:MessageID/:HashTagID', async (req, res) => {
  const MessageID = req.params.MessageID
  const HashTagID = req.params.HashTagID

  const listOfMessageHashTags = await messagehashtags.findAll({
    where: {
      MessageID: MessageID,
      HashTagID: HashTagID
    }
  })
  res.json(listOfMessageHashTags)
})

router.post('/', async (req, res) => {
  const messageHashTag = req.body
  await messagehashtags.create(messageHashTag)
  res.json(messageHashTag)
})

module.exports = router
