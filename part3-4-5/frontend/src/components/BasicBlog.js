import React from 'react'

const BasicBlog = ({ blog }) => {
  return(
    <div className='title-author'>
      {blog.title} {blog.author}
    </div>
  )
}

export default BasicBlog

