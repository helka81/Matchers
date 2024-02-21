import sortByHealth from '../index';

describe('sortByHealth function', () => {
  test.each([
    [
      [{ name: 'мечник', health: 10 }, { name: 'маг', health: 100 }, { name: 'лучник', health: 80 }],
      [{ name: 'маг', health: 100 }, { name: 'лучник', health: 80 }, { name: 'мечник', health: 10 }]
    ]
  ])('should sort heroes by health in descending order', (input, expected) => {
    expect(sortByHealth(input)).toEqual(expected);
  });
});