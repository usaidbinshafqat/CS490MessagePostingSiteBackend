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

router.post('/addFollower', async (req, res) => {
  const Following = req.body.Following
  const UID = req.body.UID

  await userfollowing.findOrCreate({
    where: {UID: UID, Following: Following}
  })

  res.json(UID)
})

router.post('/unfollow', async (req, res) => {
  const Following = req.body.Following
  const UID = req.body.UID

  await userfollowing.destroy({
    where: {UID: UID, Following: Following}
  })

  res.json(UID)
})

module.exports = router
