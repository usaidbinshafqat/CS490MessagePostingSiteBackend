const express = require('express')
const router = express.Router()
const { verifyToken } = require('../middlewares/AuthMiddleware')

const { userfollowing } = require('../models')

router.get('/', async (req, res) => {
  const listOfUserfollowing = await userfollowing.findAll()
  res.json(listOfUserfollowing)
})

router.post('/', verifyToken, async (req, res) => {
  const userfollowingget = req.body
  const UID = req.user.UID
  userfollowingget.UID = UID
  await userfollowing.create(userfollowingget)
  res.json(userfollowingget)
})

module.exports = router
