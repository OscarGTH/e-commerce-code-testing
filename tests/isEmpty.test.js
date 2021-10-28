/*
 * Unit and integration tests for isEmpty module (isEmpty.js)
 */

import isEmpty from '../src/isEmpty.js';

test('testing emptiness of null', () => {
  expect(isEmpty(null)).toBeTrue();
});

test('testing emptiness of 0', () => {
  expect(isEmpty(0)).toBeTrue();
});

test('testing emptiness of Boolean value true', () => {
  expect(isEmpty(true)).toBeTrue();
});

test('testing emptiness of NaN ', () => {
  expect(isEmpty(NaN)).toBeTrue();
});

test('testing emptiness [1,2,3]', () => {
  expect(isEmpty([1,2,3])).toBeFalse();
});

test('testing emptiness of string "test"', () => {
  expect(isEmpty("test")).toBeFalse();
});

test('testing emptiness of object {"0": "test"}', () => {
  expect(isEmpty({'0':'test'})).toBeFalse();
});

test('testing emptiness of Map object ', () => {
  expect(isEmpty(new Map([['hi', 'hey']]))).toBeFalse();
});

test('testing emptiness of Set object ', () => {
  expect(isEmpty(new Set(['a','b','c']))).toBeFalse();
});

test('testing emptiness of zero filled Int8Array', () => {
  expect(isEmpty(new Int8Array(2).fill(0))).toBeFalse();
});

