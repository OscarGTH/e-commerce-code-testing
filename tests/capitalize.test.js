import capitalize from '../src/capitalize.js';

test('hello -> Hello', () => {
  expect(capitalize('hello'))
    .toBe('Hello');
});

test('HELLO -> Hello', () => {
  expect(capitalize('HELLO'))
    .toBe('Hello');
});

test('Hello -> Hello', () => {
  expect(capitalize('Hello'))
    .toBe('Hello');
});

test('h3ll0 -> H3ll0', () => {
  expect(capitalize('h3ll0'))
    .toBe('H3ll0');
});

test('3hlo -> 3hlo', () => {
  expect(capitalize('3hlo'))
    .toBe('3hlo');
});

test('HELLO WORLD -> Hello world', () => {
  expect(capitalize('HELLO WORLD'))
    .toBe('Hello world');
});

test('äpple bänänä -> Äpple bänänä', () => {
  expect(capitalize('äpple bänänä'))
    .toBe('Äpple bänänä');
});

