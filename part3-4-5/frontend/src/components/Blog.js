import React, { useState } from 'react'

const Blog = ({ blog,handleLikes }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }
  const [expand, setExpand] = useState('false')

  const hideWhenExpanded = { display: expand ? 'none' : '' }
  const showWhenExpanded = { display: expand ? '' : 'none' }

  return (
    <div className={blogStyle}>
      <div style = {hideWhenExpanded} onClick = {() => setExpand(!expand)}>
        <button onClick = { () => setExpand(!expand)}>Show</button>
        {blog.title} {blog.author}
      </div>
      <div style = {showWhenExpanded} >
        <button onClick={ () => setExpand(!expand)}>Hide</button>
        {blog.title} {blog.author}
        <a href={blog.url}>{blog.url}</a>
        {blog.likes} likes <button type='button' value={blog.id} onClick={handleLikes}>like</button>
      </div>
    </div>

)
}
export default Blog
