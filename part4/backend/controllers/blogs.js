const blogsRouter = require('express').Router()
const Blog = require('../models/blogs')
const { request } = require('../app')
const { response } = require('express')
const User = require('../models/user')
const jwt = require('jsonwebtoken')


blogsRouter.get('/', async (request, response)=>{
  const blogs = await Blog.find({}).populate('user', {username:1, name:1})
  response.json(blogs.map(blog => blog.toJSON()))

})


blogsRouter.post('/', async (request, response) => {
  const body = (request.body)
  const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  }
  
  const user = await User.findById(decodedToken.id)

  const blog = new Blog({
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
    user: user._id
  })

  const savedBlog = await blog.save()
  user.blogs = user.blogs.concat(savedBlog._id)
  await user.save()
    response.json(savedBlog)
})


blogsRouter.delete('/:id', async (request, response,next) => {

const blog = await Blog.findById(request.params.id)
const decodedToken = jwt.verify(request.token, process.env.SECRET)
  if (!request.token || !decodedToken.id) {
    return response.status(401).json({ error: 'token missing or invalid' })
  } try { 
  if (blog.user.toString() !== decodedToken.id.toString()) {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } else {
    return response.status(401).json({ error: 'a blog can only be deleted by the user who added the blog' })
  }} catch (exception){
    response.status(400).end()
    next(exception)
  }
})

blogsRouter.put('/:id', async(request,response) => {
 const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, { new: true })
 response.json(updatedBlog.toJSON())

})

  module.exports = blogsRouter