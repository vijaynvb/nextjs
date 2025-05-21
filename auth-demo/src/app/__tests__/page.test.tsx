// __tests__/page.test.jsx
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../page'

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })

    it('Check content of head is "Home', () => {
    render(<Page />)
 
    const heading = screen.getByRole('heading', 
      { name: /Mini/i } // Use regex to match the text
    )
 
    expect(heading).toBeInTheDocument()
  })


  it('Check content of head is "Home', () => {
    render(<Page />)
 
    const text = screen.getByText(/Mini/i)
 
    expect(text).toBeInTheDocument()
  })
})