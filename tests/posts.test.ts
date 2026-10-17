import { test, expect } from 'vitest';
import { postsConfig } from '../src/lib/config/posts';

test('post config has posts with rendered html', () => {
  expect(postsConfig.posts.length).toBeGreaterThan(0);
  expect(postsConfig.posts[0].html).toContain('<h1>');
});

test('post lookup by slug works like the template route', () => {
  const post = postsConfig.posts.find((p) => p.slug === 'posts/docker-basics');
  expect(post?.title).toBe('Docker Basics for Developers');
});
