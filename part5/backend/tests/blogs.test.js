const mongoose = require ('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blogs')

beforeEach(async () => {
    await Blog.deleteMany({})
  
    for (let blog of helper.initialBlogs) {
      let blogObject = new Blog(blog)
      await blogObject.save()
    }
  })

  test('all blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .expect(function(res) {
        res.body.length === helper.initialBlogs.length
      })
  })

  test ('of adding a blog', async () =>{
    const newBlog = {
      title: 'Valid Blog Test Entry',
      author: 'Lo Wang',
      url: 'https://lowang.com/valid-entry',
      likes: 6
    }
    await api
    .post('/api/blogs')
    .send(newBlog)
    .expect(201)
    .expect('Content-Type', /application\/json/)

    const blogsAtEnd = await helper.blogsInDb()
    expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1)
    
    expect(blogsAtEnd).toEqual(
      expect.arrayContaining([
        expect.objectContaining(newBlog)
      ])
    )
  })

  afterAll(async () => {
    mongoose.connection.close()
    // await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
  })