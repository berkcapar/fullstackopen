const morgan = require('morgan')

morgan.token('body', function (req) {
  if (process.env.NODE_ENV !== 'test' || req.method !== 'POST') {
    return ' '
  }
  return JSON.stringify(req.body)
})


module.exports = {
  morgan
}