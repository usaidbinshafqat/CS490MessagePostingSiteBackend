const express = require('express')
const router = express.Router()

const { hashtags } = require('../models')

router.get('/', async (req, res) => {
  const listHashTags = await hashtags.findAll()
  res.json(listHashTags)
})

router.post('/', async (req, res) => {
  const HashTag = req.body
  await hashtags.create(HashTag)
  res.json(HashTag)
})

module.exports = router
