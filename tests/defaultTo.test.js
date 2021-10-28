/*
 * Unit tests for DefaultTo module (defaultTo.js)
 */

import defaultTo from '../src/defaultTo.js';

test('test with NaN and number as default', () => {
  expect(defaultTo(NaN, 5)).toBe(5);
});

test('test with null and string as default', () => {
  expect(defaultTo(null, "hello world")).toBe("hello world");
});

test('test with undefined and empty array as default', () => {
  expect(defaultTo(undefined, [])).toBeArrayOfSize(0);
});

test('test with string and string as default', () => {
  expect(defaultTo("test", "hello")).toBe("test");
});

test('test with number and string as default', () => {
  expect(defaultTo(0, "test")).toBe(0);
});

