import compact from '../src/compact.js';

it('does not compact truthy values', () => {
  expect(compact(["hello", true]))
    .toEqual(['hello', true]);
});

it('does not change an empty list', () => {
  expect(compact([]))
    .toEqual([]);
});

it('gets rid of 0', () => {
  expect(compact([0, 'hello']))
    .toEqual(['hello']);
});

it('gets rid of all falsy values', () => {
  expect(compact([false, null, 0, '', undefined, NaN]))
    .toEqual([]);
});

