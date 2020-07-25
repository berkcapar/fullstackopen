const morgan = require('morgan')



const tokenExtractor = (request, response, next) => {
  const authorization = request.get('authorization')
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    request.token = authorization.substring(7)
  }
  next()
}


morgan.token('body', function (req) {
  if (process.env.NODE_ENV !== 'test' || req.method !== 'POST') {
    return ' '
  }
  return JSON.stringify(req.body)
})


module.exports = {
  morgan,
  tokenExtractor
}