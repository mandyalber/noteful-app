import React from 'react';
import { render } from '@testing-library/react'; 
import NoteDetails from './NoteDetails';
import { BrowserRouter } from 'react-router-dom';
 
describe('NoteDetails component', () => {
  test('renders NoteDetails component', () => {
    const match = {params : { id: 1 } };
    render(<BrowserRouter><NoteDetails match={match}/></BrowserRouter>);

  });
});