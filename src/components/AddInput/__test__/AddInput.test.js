import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from '../AddInput';
const mockFn = jest.fn();
describe('AddInput', () => {
  it('should render correctly', () => {
    const { container } = render(<AddInput />);
    expect(container).toMatchSnapshot();
  });
  it('Should render the input and button', () => {
    const { getByPlaceholderText, getByText } = render(<AddInput />);
    const input = getByPlaceholderText('Add a new task here...');
    const button = getByText('Add');
    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('SHould be able to type in the input', () => {
    const { getByPlaceholderText } = render(<AddInput />);
    const input = getByPlaceholderText('Add a new task here...');
    expect(input).toBeInTheDocument();
    expect(input).toHaveValue('');
    input.value = 'test';
    expect(input).toHaveValue('test');
  });

  it('Should have empty input when the button is clicked', () => {
    const { getByText, getByPlaceholderText } = render(<AddInput todos={[]} setTodos={mockFn} />);
    const input = getByPlaceholderText(/Add a new task here.../i);
    const button = getByText('Add');
    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.click(button);
    expect(input.value).toBe('');
  });

});