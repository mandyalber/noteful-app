import React from 'react';
import { render } from '@testing-library/react'; 
import Note from './Note';
import { BrowserRouter } from 'react-router-dom';
 
describe('Note component', () => {
  test('renders Note component', () => {
    render(<BrowserRouter><Note /></BrowserRouter>);

  });
});