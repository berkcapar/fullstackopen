import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import BasicBlog from './BasicBlog'


describe('<BasicBlog/>', () => {
  let component
  let mockHandler
  let blogex = { title: 'Japan Tour', author: 'Berk Çapar', likes:'10' }

  beforeEach(() => {
    const mockHandler = jest.fn()
    component = render(<BasicBlog blog ={blogex} onClick ={mockHandler}/>)
  })

  test('renders the title', () => {
    const div = component.container.querySelector('.title-author')
    expect(div).toHaveTextContent(
      'Japan Tour'
    )
  })
  test('renders the author', () => {
    const div = component.container.querySelector('.title-author')
    expect(div).toHaveTextContent(
      'Berk Çapar'
    )
  })
  test('clicking the button twice calls event handler twice', () => {
    const button = component.getByText('like')
    fireEvent.click(button)
    fireEvent.click(button)
    expect(mockHandler.mock.calls).toHaveLength(2)

  })


})