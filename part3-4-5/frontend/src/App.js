import React, { useState, useEffect, useRef } from 'react'
import blogService from './services/blogs'
import loginService from './services/login'
import BlogForm from './components/BlogForm'
import Togglable from './components/Togglable'
import ActiveUser from './components/ActiveUser'
import Blogs from './components/Blogs'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user,setUser] = useState(null)
  const [title,SetTitle] = useState('')
  const [author,SetAuthor] = useState('')
  const [url,SetUrl] = useState('')
  const BlogFormRef = useRef()

  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )
  }, [])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogUser')
    if(loggedUserJSON){
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService.setToken(user.token)
    }
  },[])

  const handleLogin = async  (event) => {
    event.preventDefault()
    try {
      const user = await loginService.login({
        username, password
      })
      window.localStorage.setItem('loggedBlogUser', JSON.stringify(user))
      setUser(user)
      setUsername('')
      setPassword('')
    } catch(exception){
      
    }
  }

  const handleLogout = async (event) => {
    event.preventDefault()
    window.localStorage.clear()
    setUser(null)
  }

  const handleLikes = (event) => {
    event.preventDefault()
    const id = event.target.value
    const blog = blogs.find(n => n.id === id)
    const changedBlog = {
      title: blog.title,
      author:blog.author,
      url: blog.url,
      likes: blog.likes + 1,
      user: blog.user.id
    }

    blogService.update(id, changedBlog).then(returnedBlog => {
      setBlogs(blogs.map(blog => blog.id !== id ? blog : returnedBlog))})
  }

  const addBlog = (event) => {
    BlogFormRef.current.toggleVisibility()
    event.preventDefault()
    const BlogObject = {
      title: title,
      author: author,
      url: url
    }
    blogService.create(BlogObject).then(data => {
      setBlogs(blogs.concat(data))
      SetTitle('')
      SetAuthor('')
      SetUrl('')
    })
  }

if(user === null){
    return (
      <div>
        <form onSubmit = {handleLogin}>
          <div>
          username
            <input
              type="text"
              value={username}
              name= "Username"
              onChange = {({ target }) => setUsername(target.value)}
            />
          </div>
          <div>
          password
            <input
              type = "password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <button type = "submit">login</button>
        </form>
      </div>
    )
  }
  return (
    <div>
      <ActiveUser user = {user} handleLogout = {handleLogout} />
      <Togglable buttonLabel = "Add new Blog" ref={BlogFormRef}>
        <BlogForm
          handleAdding = {addBlog}
          handleLogout={handleLogout}
          handleTitleChange = {({ target }) => SetTitle(target.value)}
          handleAuthorChange = {({ target }) => SetAuthor(target.value)}
          handleUrlChange = {({ target }) => SetUrl(target.value)}
          title = {title}
          author = {author}
          url = {url}
          blogs = {blogs}
        />
      </Togglable>

      <Blogs blogs={blogs} handleLikes={handleLikes}/>

    </div>
  )
}


export default App