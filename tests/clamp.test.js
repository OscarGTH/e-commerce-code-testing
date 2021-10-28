import clamp from '../src/clamp.js';

test('returns clamped value', () => {
  expect(clamp(1,2,3)).toEqual(2);
});
