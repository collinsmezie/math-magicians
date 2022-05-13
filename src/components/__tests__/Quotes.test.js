import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Quotes from '../Quotes';

describe('Quotes page of the App', () => {
  test('Builds the snapshot of the Quotes component safely', () => {
    const rend = renderer.create(<Quotes />);
    expect(rend.toJSON()).toMatchSnapshot();
  });
  test('Render Quotes component', () => {
    render(<Quotes />);
  });
});
