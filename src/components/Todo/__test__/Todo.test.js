import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from '../Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  )
}

const addTodo = (tods) => {
  tods.forEach(todo => {
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = screen.getByText(/Add/i);
    fireEvent.change(inputElement, { target: { value: todo } });
    fireEvent.click(buttonElement);
  });
}

describe('Todo', () => { 
  it('Should render same text passed into title prop', () => {
    const task = 'Add new task';
    const { getByText, getByPlaceholderText } = render(<MockTodo />);
    addTodo([task])
    const devElement = screen.getByText(task);
    expect(devElement).toBeInTheDocument();
  });

  it('Should render multiple elements', () => {
    const { getByText, getByPlaceholderText } = render(<MockTodo />);
    const inputElement = getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = getByText(/Add/i);
    fireEvent.change(inputElement, { target: { value: 'Add new task' } });
    fireEvent.click(buttonElement);
    
    fireEvent.change(inputElement, { target: { value: 'Add new task' } });
    fireEvent.click(buttonElement);
    fireEvent.change(inputElement, { target: { value: 'Add new task' } });
    fireEvent.click(buttonElement);
    const devElement = screen.getAllByTestId('task-container');
    expect(devElement).toHaveLength(3);
  });

  it('Tasks should not have completed class when initially rendered', () => {
    const { getByText, getByPlaceholderText } = render(<MockTodo />);
    const inputElement = getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = getByText(/Add/i);
    fireEvent.change(inputElement, { target: { value: 'Add new task' } });
    fireEvent.click(buttonElement);
    const devElement = screen.getByTestId('task-container');
    expect(devElement).not.toHaveClass('todo-item-active');
  });

  it('Tasks should have completed class when completed', () => {
    const { getByText, getByPlaceholderText } = render(<MockTodo />);
    const inputElement = getByPlaceholderText(/Add a new task here.../i);
    const buttonElement = getByText(/Add/i);
    fireEvent.change(inputElement, { target: { value: 'Add new task' } });
    fireEvent.click(buttonElement);
    const devElement = screen.getByTestId('task-container');
    fireEvent.click(devElement);
    expect(devElement).toHaveClass('todo-item-active');
  });
});
