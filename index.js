const express = require('express')
const mongoose = require('mongoose')
const fs = require('fs')

const keys = require('./config/keys')

require('./models/Users')
require('./services/passport')

mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const app = express()


require('./utils/cookies')(app)
require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT,() => {
  console.log(`Listening on port ${PORT}`);
})