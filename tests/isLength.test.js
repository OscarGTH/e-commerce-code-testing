import isLength from '../src/isLength.js';

test('number 5 is a length', () => {
  expect(isLength(5))
    .toBe(true);
});

test('number 9007199254740991 is a length', () => {
  expect(isLength(9007199254740991))
    .toBe(true);
});

test('number 0 is a length', () => {
  expect(isLength(0))
    .toBe(true);
});

test('string is not a length', () => {
  expect(isLength('3'))
    .toBe(false);
});

test('negative number is not a length', () => {
  expect(isLength(-5))
    .toBe(false);
});

test('numbre 35.5 is not a length', () => {
  expect(isLength(35.5))
    .toBe(false);
});

test('number 9007199254740992 is not a length', () => {
  expect(isLength(9007199254740992))
    .toBe(false);
});

