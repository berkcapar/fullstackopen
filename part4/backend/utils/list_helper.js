
const dummy = (blogs) => {
    return 1;
  }


const totalLikes = (blogs) => blogs.reduce((sum,{likes}) => sum + likes,0) || 0

const favoriteBlog = (blogs) => blogs.length ? blogs
  .sort((a,b) => b.likes - a.likes)
  .map(blog => ({
    title: blog.title,
    author: blog.author,
    likes: blog.likes,
  }))[0] : null
  
  module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
  }