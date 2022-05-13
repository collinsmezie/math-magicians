import operate from './operate';

describe('Tests for Arithmetic operations', () => {
  test('test for addition operator', () => {
    const num1 = 10;
    const num2 = 20;
    const operation = '+';

    expect(operate(num1, num2, operation)).toEqual('30');
  });

  test('test for subtraction operator', () => {
    const num1 = 10;
    const num2 = 20;
    const operation = '-';

    expect(operate(num1, num2, operation)).toEqual('-10');
  });

  test('test for multiplication operator', () => {
    const num1 = 10;
    const num2 = 20;
    const operation = 'x';

    expect(operate(num1, num2, operation)).toEqual('200');
  });

  test('test for division operator', () => {
    const num1 = 100;
    const num2 = 20;
    const operation = '÷';

    expect(operate(num1, num2, operation)).toEqual('5');
  });
});
