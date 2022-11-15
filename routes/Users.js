const express = require('express')
const router = express.Router()

const { user } = require('../models')
const { verifyToken } = require('../middlewares/AuthMiddleware')
const bcrypt = require('bcrypt')

const { sign } = require('jsonwebtoken')
require('dotenv').config()

router.get('/', async (req, res) => {
  const listOfUsers = await user.findAll()
  res.json(listOfUsers)
})

router.get('/byId/:UID', async (req, res) => {
  const UID = req.params.UID

  const userInfo = await user.findAll({
    where: { UID: UID }
  })
  res.json(userInfo)
})

router.get('/byage/:Age', async (req, res) => {
  const Age = req.params.Age

  const userInfo = await user.findAll({
    where: { Age: Age }
  })
  res.json(userInfo)
})

router.get('/bycity/:City', async (req, res) => {
  const City = req.params.City

  const userInfo = await user.findAll({
    where: { City: City }
  })
  res.json(userInfo)
})

router.get('/byusername/:Username', async (req, res) => {
  const Username = req.params.Username

  const userInfo = await user.findAll({
    where: { Username: Username }
  })
  res.json(userInfo)
})

router.get('/isAuth', verifyToken, async (req, res) => {
  const userAuth = req.body
  const Username = req.user.Username
  userAuth.Username = Username
  res.json(userAuth)
})

router.post('/', async (req, res) => {
  const {
    Username,
    Password,
    Email,
    DateOfRegistration,
    FirstName,
    LastName,
    PicturePath,
    Country,
    City,
    Age
  } = req.body
  bcrypt.hash(Password, 10).then(hash => {
    user.create({
      Username: Username,
      Password: hash,
      Email: Email,
      DateOfRegistration: DateOfRegistration,
      FirstName: FirstName,
      LastName: LastName,
      PicturePath: PicturePath,
      Country: Country,
      City: City,
      Age: Age
    })
    res.json('Success')
  })
})

router.post('/login', async (req, res) => {
  const { Username, Password } = req.body

  const userLogin = await user.findOne({
    where: {
      Username: Username
    }
  })
  if (!userLogin) {
    res.json({ message: "User doesn't exist" })
  } else {
    bcrypt.compare(Password, userLogin.Password).then(match => {
      if (!match) {
        res.json({ message: 'Wrong Username/Password!' })
      } else {
        const accessToken = sign(
          { Username: userLogin.Username, UID: userLogin.UID },
          `${process.env.ACCESS_TOKEN_SECRET}`
        )
        res.json(accessToken)
      }
    })
  }
})

module.exports = router
