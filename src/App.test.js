import { render, screen } from '@testing-library/react';
import App from './App';
import Home from './Home';
import Menu from './Menu';
import Profile from './profile';
import About from './About';

test('renders learn react link', () => {
  render(<App />);
  
});

test('renders learn react link', () => {
  render(<Home />);
  
});

// test('renders learn react link', () => {
//   render(<Menu />);
  
// });
test('renders learn react link', () => {
  render(<Profile />);
  
});

test('renders learn react link', () => {
  render(<About />);
  
});