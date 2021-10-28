/*
 * Unit tests for isObjectLike module (isObjectLike.js)
 */

import isObjectLike from '../src/isObjectLike.js';

test('testing with empty object', () => {
  expect(isObjectLike({})).toBeTrue();
});

test('testing with Date object', () => {
  expect(isObjectLike(new Date())).toBeTrue();
});

test('testing with string', () => {
  expect(isObjectLike("hello")).toBeFalse();
});

test('testing with integer', () => {
  expect(isObjectLike(4)).toBeFalse();
});

test('testing with boolean value', () => {
  expect(isObjectLike(true)).toBeFalse();
});

test('testing with null', () => {
  expect(isObjectLike(null)).toBeFalse();
});

test('testing with undefined', () => {
  expect(isObjectLike(undefined)).toBeFalse();
});

