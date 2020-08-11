const express = require('express')
require('./services/passport')  //executing passport.use()

const app = express()

require('./routes/authRoutes')(app)

const PORT = process.env.PORT || 5000
app.listen(PORT)