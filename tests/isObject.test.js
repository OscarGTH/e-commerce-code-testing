import isObject from '../src/isObject.js';

test('empty object is an object', () => {
  expect(isObject({}))
    .toBe(true);
});

test('Date is an object', () => {
  expect(isObject(new Date()))
    .toBe(true);
});

test('array is an object', () => {
  expect(isObject(['hi']))
    .toBe(true);
});

test('function is an object', () => {
  expect(isObject(x => x + 1))
    .toBe(true);
});

test('null is not an object', () => {
  expect(isObject(null))
    .toBe(false);
});

test('string is not an object', () => {
  expect(isObject('hi'))
    .toBe(false);
});

test('undefined is not an object', () => {
  expect(isObject(undefined))
    .toBe(false);
});

test('0 is not an object', () => {
  expect(isObject(0))
    .toBe(false);
});

test('true is not an object', () => {
  expect(isObject(true))
    .toBe(false);
});

