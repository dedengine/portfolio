import { render, screen, fireEvent } from '@testing-library/svelte';
import { test, expect } from 'vitest';
import ProjectsPage from '../src/pages/ProjectsPage.svelte';
import { projectsConfig } from '../src/lib/config/projects';

test('projects page shows six per page and paginates', async () => {
  const { container } = render(ProjectsPage);
  const titles = () => [...container.querySelectorAll('img')].map((img) => img.getAttribute('alt'));

  expect(titles()).toEqual(projectsConfig.items.slice(0, 6).map((item) => item.title));

  await fireEvent.click(screen.getByRole('button', { name: 'Next' }));
  expect(titles()).toEqual(projectsConfig.items.slice(6, 12).map((item) => item.title));

  await fireEvent.click(screen.getByRole('button', { name: 'Previous' }));
  expect(titles()).toEqual(projectsConfig.items.slice(0, 6).map((item) => item.title));
});
