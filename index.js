const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = {
  origin: '*',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 200,
  exposedHeaders: [
    'Content-Length',
    'X-Requested-With',
    ' Authorization',
    'Content-Type'
  ]
}

//updating to heroku deployment

require('dotenv').config()

app.use(express.json())
app.use(cors(corsOptions))
const db = require('./models')

// Routers
const userRouter = require('./routes/Users')
app.use('/users', userRouter)

const messageRouter = require('./routes/Messages')
app.use('/message', messageRouter)

const hashTagRouter = require('./routes/HashTags')
app.use('/hashtag', hashTagRouter)

const messageHashTagRouter = require('./routes/MessageHashTags')
app.use('/messagehashtag', messageHashTagRouter)

const userFollowingTagRouter = require('./routes/UserFollowing')
app.use('/userfollowing', userFollowingTagRouter)

db.sequelize.sync().then(() => {
  app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port 3000')
  })
})
