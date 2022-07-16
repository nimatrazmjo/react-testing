const { BrowserRouter } = require('react-router-dom');
import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';

const MockFollowerList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );  
}

describe('FlollowersList', () => {
  it('Should render followers items', async () => {
    render(<MockFollowerList />);
    const firstFollowerDevElement = await screen.findByTestId('follower-item-0');
    expect(firstFollowerDevElement).toBeInTheDocument();
  });

  it('Should render multiple follower items', async () => { 
    render(<MockFollowerList />);
    const followerItems = await screen.findAllByTestId(/follower-item/i);
    expect(followerItems.length).toBe(5);

  })
});