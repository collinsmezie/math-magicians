import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import DisplayTotal from '../DisplayTotal';

describe('Display page of the App', () => {
  test('Builds the snapshot of the Display component safely', () => {
    const rend = renderer.create(<DisplayTotal />);
    expect(rend.toJSON()).toMatchSnapshot();
  });
  test('Render Display component', () => {
    render(<DisplayTotal />);
  });
});
