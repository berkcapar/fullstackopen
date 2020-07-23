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

  test('all notes are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
      .expect(function(res) {
        res.body.length === helper.initialBlogs.length
      })
  })

  afterAll(async () => {
    mongoose.connection.close()
    await new Promise(resolve => setTimeout(() => resolve(), 500)); // avoid jest open handle error
  })