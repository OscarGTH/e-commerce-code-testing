/*
 * Unit tests for slice module (slice.js)
 */

import slice from '../src/slice.js';

test('testing with [1,2,3,4] and 0 and 1 as indexes', () => {
  expect(slice([1,2,3,4], 0, 1)).toIncludeSameMembers([1]);
});

test('testing with [1,2,3,4] and 0 and -1 as indexes', () => {
  expect(slice([1,2,3,4], 0, -1)).toIncludeSameMembers([1,2,3]);
});

test('testing with [1,2,3,4] with -2 and -1 as indexes', () => {
  expect(slice([1,2,3,4], -2, -1)).toIncludeSameMembers([3]);
});

test('testing with [1,2,3,4] with -3 and 3 as indexes', () => {
  expect(slice([1,2,3,4], -3, 3)).toIncludeSameMembers([2,3]);
});

test('testing with [1,2,3,4] with 1 as start index', () => {
  expect(slice([1,2,3,4], 1)).toIncludeSameMembers([2,3,4]);
});

test('testing with null with 1 as start index', () => {
  expect(slice(null, 1)).toBeEmpty();
});

test('testing with [1,2,3] and with null  as start index', () => {
  expect(slice([1,2,3], null)).toIncludeSameMembers([1,2,3]);
});
