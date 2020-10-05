import React from 'react';
import { render } from '@testing-library/react'; 
import NoteListSideBar from './NoteListSideBar';
 
describe('NoteListSideBar component', () => {
  test('renders Note component', () => {
    render(<NoteListSideBar/>);

  });
});