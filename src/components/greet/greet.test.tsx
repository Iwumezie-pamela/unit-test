import { render, screen } from "@testing-library/react"
import Greet from "./Greet"


test('expect to render hello world', () => {
    render(<Greet />)
    const textElement = screen.getByText(/Hello World/i)
    expect(textElement).toBeInTheDocument()
})

test('expect to render hello world with name', () => {
    render(<Greet name='pamela' />)
    const textElement = screen.getByText('Hello World pamela')
    expect(textElement).toBeInTheDocument()
})