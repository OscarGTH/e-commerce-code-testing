/*
 * Unit tests for Clamp module (clamp.js)
 */

import clamp from '../src/clamp.js';

test('returns clamped value with values 1,2,3', () => {
  expect(clamp(1,2,3)).toBe(2);
});

test('returns clamped value with values 2,2,3', () => {
  expect(clamp(2,2,3)).toBe(2);
});

test('returns clamped value with values 2,1,3', () => {
  expect(clamp(2,1,3)).toBe(2);
});

test('returns clamped value with values 3,1,3', () => {
  expect(clamp(3,1,3)).toBe(3);
});

test('returns clamped value with values 4,1,3', () => {
  expect(clamp(4,1,3)).toBe(3);
});

test('returns clamped value with values 0.5,0.6,1.5', () => {
  expect(clamp(0.5,0.6,1.5)).toBe(0.6);
});

test('returns NaN when given NaN', () => {
    expect(clamp(NaN, NaN, NaN)).toBe(NaN);
});

