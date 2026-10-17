import { test, expect } from 'vitest';
import { get } from 'svelte/store';
import { postsConfig } from '../src/lib/config/posts';
import { language } from '../src/lib/stores/language';

test('post config has posts with rendered html', () => {
  const config = get(postsConfig);
  expect(config.posts.length).toBeGreaterThan(0);
  expect(config.posts[0].html).toContain('<h1>');
});

test('post lookup by slug works like the template route', () => {
  const post = get(postsConfig).posts.find((p) => p.slug === 'posts/docker-basics');
  expect(post?.title).toBe('Docker Basics for Developers');
});

test('indonesian posts are translated and have rendered html', () => {
  language.set('id');
  const config = get(postsConfig);
  language.set('en');

  expect(config.posts.every((p) => p.html.startsWith('<h1>'))).toBe(true);
  expect(config.posts.find((p) => p.slug === 'posts/docker-basics')?.title).toBe(
    'Dasar-Dasar Docker untuk Developer',
  );
});
