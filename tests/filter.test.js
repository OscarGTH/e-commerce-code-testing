import filter from '../src/filter.js';

// Helper predicates
const isEven = n => n % 2 === 0;
const isOdd = n => n % 2 === 1;
const isBetween = (a, b) => n => a <= n && n <= b;
const isEqual = a => b => a === b;

it('does not change an empty array', () => {
  expect(filter([], isEven))
    .toEqual([]);
});

it('filters even numbers', () => {
  expect(filter([1, 2, 3, 4], isEven))
    .toEqual([2, 4]);
});

it('filters odd numbers', () => {
  expect(filter([1, 2, 3, 4], isOdd))
    .toEqual([1, 3]);
});

it('filters numbers between', () => {
  expect(filter([1, 3, 5], isBetween(2, 4)))
    .toEqual([3]);
});

it('filters non-equal things', () => {
  expect(filter(['dairy', 'dry', 'fruit'], isEqual('dairy')))
    .toEqual(['dairy']);
});

it('does not change a null', () => {
  expect(filter(null, isEven))
    .toEqual(null);
});

