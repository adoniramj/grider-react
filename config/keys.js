// DO NOT RENAME FILE

if (process.env.NODE_ENV === 'production'){
  module.exports = require('./prod')
} else {
  // in development return dev keys
  module.exports = require('./dev')
}

