import React from 'react'
import PropTypes from 'prop-types'

const BlogForm = ({
  handleAdding,
  handleTitleChange,
  handleAuthorChange,
  handleUrlChange,
  title,
  author,
  url,

}) => {
  return (
    <div>
      <h2>Create New</h2>
      <form onSubmit={handleAdding}>
        <div>
      Title:
          <input
            type = "text"
            name = "Title"
            value = {title}
            onChange = {handleTitleChange}
          />
        </div>

        <div>
       Author:
          <input
            type = "text"
            name = "Author"
            value = {author}
            onChange = {handleAuthorChange}
          />
        </div>

        <div>
       Url:
          <input
            type = "text"
            name = "Title"
            value = {url}
            onChange = {handleUrlChange}
          />
        </div>
        <button type = "submit">Create!</button>
      </form>
    </div>
  )
}

BlogForm.propTypes = {
  handleAdding: PropTypes.func.isRequired,
  handleAuthorChange: PropTypes.func.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
  handleUrlChange: PropTypes.func.isRequired,
  title: PropTypes.func.isRequired,
  author: PropTypes.func.isRequired,
  url:PropTypes.func.isRequired
}



export default BlogForm