import React from 'react';
import { render } from '@testing-library/react'; 
import NoteListMain from './NoteListMain';
import { BrowserRouter } from 'react-router-dom';
 
describe('NoteListMain component', () => {
  test('renders NoteListMain component', () => {
    const match = {params : { id: 1 } };
    render(<BrowserRouter><NoteListMain match={match}/></BrowserRouter>);

  });
});    
