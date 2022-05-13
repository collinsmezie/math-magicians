import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import CalculatorInterface from '../Calculator';

describe('Calculator page of the App', () => {
  test('Builds the snapshot of the Calculator component safely', () => {
    const rend = renderer.create(<CalculatorInterface />);
    expect(rend.toJSON()).toMatchSnapshot();
  });
  test('Render Calculator component', () => {
    render(<CalculatorInterface />);
  });
});
