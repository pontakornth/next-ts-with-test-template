import Header from '../components/Header'
import { render, screen } from '@testing-library/react'

it('render correctly', () => {
  render(<Header />)
  screen.getByText(/hello/i)
})
