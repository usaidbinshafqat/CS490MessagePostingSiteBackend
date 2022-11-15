const express = require('express')
const router = express.Router()

const { hashtags } = require('../models')

router.get('/', async (req, res) => {
  const listHashTags = await hashtags.findAll()
  res.json(listHashTags)
})

router.post("/", async (req, res) => {
  const HashTag = req.body
  const [hashtag, created] = await hashtags.findOrCreate({
      where: { HashTag: JSON.stringify(HashTag).slice(12,-2) },
    });
  res.json(hashtag.HashTag)
})

router.get('/byhashtag/:HashTag', async (req, res) => {
  const HashTag = req.params.HashTag

  const Hash = await hashtags.findOne({
    where: { HashTag: HashTag }
  })
  res.json(Hash);
})

module.exports = router
