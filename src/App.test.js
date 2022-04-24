import App from './App';
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import {GlobalProvider} from './context/Store'

beforeEach(() => {
  render(<GlobalProvider><App /></GlobalProvider>);
})

test('renders active button', () => {
  const activeButton = screen.getByText('Active')
  expect(activeButton).toBeInTheDocument()
});

test('renders inActive button', () => {
  const inActiveButton = screen.getByText(/inactive/i)
  expect(inActiveButton).toBeInTheDocument()
});

test('Should renders the form elements', () => {
  const input = screen.getByPlaceholderText(/name/i)
  const submitButton = screen.getByRole('button', {name: /enviar/i})
  expect(input).toBeInTheDocument()
  expect(submitButton).toBeInTheDocument()
});

test('Should retreat a random user from API', async () => {
  const input = screen.getByPlaceholderText(/name/i)
  const submitButton = screen.getByRole('button', {name: /enviar/i})
  fireEvent.change(input, {target: {value: 'David'}})
  fireEvent.click(submitButton)

  const user = await screen.findByText(/david/i)
  expect(user).toBeInTheDocument()
});