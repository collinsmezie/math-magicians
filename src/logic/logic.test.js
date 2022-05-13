import calculate from './calculate';

describe('test input configuration/combination logic', () => {
  test('test next', () => {
    const obj = { total: '5', next: null, operation: '+' };
    const button = '5';
    const result = calculate(obj, button);

    expect(result.next).toEqual('5');
  });

  test('test object operation property', () => {
    const obj = { total: null, next: '10', operation: null };
    const button = 'x';
    const result = calculate(obj, button);

    expect(result.operation).toEqual('x');
  });

  test('test object total property', () => {
    const obj = { total: null, next: '10', operation: null };
    const button = '-';
    const result = calculate(obj, button);

    expect(result.total).toEqual('10');
  });
});
