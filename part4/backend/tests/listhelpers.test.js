const listHelper = require('../utils/list_helper')
const list_helper = require('../utils/list_helper')
const testdb = require('../utils/testdb')



test('dummy returns one', () => {
  const blogs = []
  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
    
    test('of empty list is zero', () => {
      const result = listHelper.totalLikes(testdb.listWithZeroBlogs)
      expect(result).toBe(0)
    })
  
    test('when list has only one blog equals the likes of that', () => {
      const result = listHelper.totalLikes(testdb.listWithOneBlog)
      expect(result).toBe(5)
    })
  
    test('of a bigger list is calculated right', () => {
      const result = listHelper.totalLikes(testdb.listWithManyBlogs)
      expect(result).toBe(36)
    })
  })

  describe('which blogs has most likes', () => {
      test('of empty list with zero blogs', () =>{
          const result = list_helper.favoriteBlog(testdb.listWithZeroBlogs)
          const expected = {}
          expect (result).toEqual(expected)
      })
      test('of many blogs', () => {
          const result = listHelper.favoriteBlog(testdb.listWithManyBlogs)
          const expected = {
            title: 'Canonical string reduction',
            author: 'Edsger W. Dijkstra',
            likes: 12
          }
          expect(result).toEqual(expected)
      })

  })