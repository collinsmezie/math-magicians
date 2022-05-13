import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

describe('Header page of the App', () => {
  test('Render Header component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
  });
});
