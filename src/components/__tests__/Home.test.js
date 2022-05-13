import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Home from '../Home';

describe('Home page of the App', () => {
  test('Builds the snapshot of the Home component safely', () => {
    const rend = renderer.create(<Home />);
    expect(rend.toJSON()).toMatchSnapshot();
  });
  test('Render Home component', () => {
    render(<Home />);
  });
});
