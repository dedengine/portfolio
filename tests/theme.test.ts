import { test, expect } from 'vitest';
import { theme } from '../src/lib/stores/theme';

test('applies and removes the dark class on the document element', () => {
  const unsubscribe = theme.subscribe(() => {});

  theme.set('light');
  expect(document.documentElement.classList.contains('dark')).toBe(false);

  theme.set('dark');
  expect(document.documentElement.classList.contains('dark')).toBe(true);

  unsubscribe();
});
