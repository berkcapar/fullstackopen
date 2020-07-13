require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
app.use(express.json())
const Blog = require('./models/blog')
const { response } = require('express')


app.get('/api/blogs', (request, response)=>{
    Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
    const blog = new Blog(request.body)
  
    blog
      .save()
      .then(result => {
        response.status(201).json(result)
      })
  })

const PORT = process.env.PORT
app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})

