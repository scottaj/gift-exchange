import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import userEvent from '@testing-library/user-event'

test('renders gift exchange link', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/Gift Exchanges/i);
  expect(linkElement).toBeInTheDocument();
});

test('requires auth to view gift exchanges', async () => {
  const user = userEvent.setup();
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/Gift Exchanges/i);
  await user.click(linkElement);

  const loginHeader = screen.getByRole("heading", {level: 1});
  expect(loginHeader).toHaveTextContent("Login");

  const loginElement = screen.getByLabelText(/Username/);
  await user.type(loginElement, "user1");
  await user.click(screen.getByRole("button", {name: "Login"}));

  await waitFor(() => {
    expect(screen.getByRole("heading", {level: 1})).toHaveTextContent("Gift Exchanges");
  });
});

test("shows greeting after you log in", async () => {
  const user = userEvent.setup();
  render(<BrowserRouter><App /></BrowserRouter>);

  const loginLinkElement = screen.getByRole("link", {name: "Login"});
  await user.click(loginLinkElement);

  const loginElement = screen.getByLabelText(/Username/);
  await user.type(loginElement, "user1");
  await user.click(screen.getByRole("button"));

  await waitFor(() => {
    expect(screen.getByText(/Hello user1/)).toBeInTheDocument()
  });
})