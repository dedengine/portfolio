import { render, screen } from '@testing-library/svelte';
import { test, expect } from 'vitest';
import HomePage from '../src/pages/HomePage.svelte';

test('renders the home page heading', () => {
  render(HomePage);
  expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
});
