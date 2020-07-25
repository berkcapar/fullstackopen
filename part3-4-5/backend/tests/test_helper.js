const Blog = require('../models/blogs')

const initialBlogs = [
  {
    title: 'First blog title',
    author: 'John Doe',
    url: 'https://john.doe/first',
    likes: 8
  },
  {
    title: 'Some other blog title',
    author: 'Jane Smith',
    url: 'https://jane-smith.com/another-blog',
    likes: 6
  },
  {
    title: 'A third entry',
    author: 'Jane Smith',
    url: 'https://jane-smith.com/third-entry',
    likes: 4
  }
]

const blogsInDb = async () => {
  const blogs = await Blog.find({})
  return blogs.map(blog=>blog.toJSON())
}

module.exports = {
  initialBlogs,
  blogsInDb
} 