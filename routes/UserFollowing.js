const express = require('express')
const router = express.Router()

const { userfollowing } = require('../models')

router.get('/', async (req, res) => {
  const listOfUserfollowing = await userfollowing.findAll()
  res.json(listOfUserfollowing)
})

router.post('/', async (req, res) => {
  const userfollowingget = req.body
  await userfollowing.create(userfollowingget)
  res.json(userfollowingget)
})

module.exports = router
