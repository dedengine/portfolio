// Public files live under the deploy base (/portfolio/ on GitHub Pages), not the site root
export const asset = (path: string) => import.meta.env.BASE_URL + path.replace(/^\//, '');
