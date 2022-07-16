import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TodoFooter from '../TodoFooter';

const MockTodoFooter = ({numberOfIncompleteTasks}) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
}

describe('TodoFooter', () => {

  it('Should render "task" when the number of incomplete tasks is one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const footerElement = screen.getByText(/1 task left/i);
    expect(footerElement).toBeInTheDocument();
  });

  it('Should render "tasks" when the number of incomplete tasks is more than one', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={2} />);
    const footerElement = screen.getByText(/2 tasks left/i);
    expect(footerElement).toBeInTheDocument();
  });
});