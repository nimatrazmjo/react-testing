import { render, screen } from '@testing-library/react';
import Header from '../Header';

it('Should pass same text passed into title props', () => {
  render(<Header title="my todos" />);
  const headerElement = screen.getByText(/my todos/i);
  expect(headerElement).toBeInTheDocument();
});

// it('Should pass same text passed into title props', () => {
//   render(<Header title="my todos" />);
//   const headerElement = screen.getByRole('heading');
//   expect(headerElement).toBeInTheDocument();
// });

it('Should pass same text passed into title props', () => {
  render(<Header title="my todos" />);
  const headerElement = screen.getByRole('heading', { name: /my todos/i });
  expect(headerElement).toBeInTheDocument();
});

it('Should test by id', () => {
  render(<Header title="my todos" />);
  const headerElement = screen.getByTestId('header-1', { name: /my todos/i });
  expect(headerElement).toBeInTheDocument();
});

// FIND BY

it('Should pass same text passed into title props', async () => {
  render(<Header title="my todos" />);
  const headerElement =await  screen.findByText(/my todos/i);
  expect(headerElement).toBeInTheDocument();
});