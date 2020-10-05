import React from 'react';
import { render } from '@testing-library/react'; 
import NoteSideBar from './NoteSideBar';
import { BrowserRouter } from 'react-router-dom';
 
describe('NoteSideBar component', () => {
  test('renders Note component', () => {
    const match = {params : { id: 1 } };
    render(<BrowserRouter><NoteSideBar match={match}/></BrowserRouter>);

  });
});