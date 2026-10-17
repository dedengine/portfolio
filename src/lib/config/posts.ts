// Two language versions of the same blog content: the English entries are the
// original auto-generated posts, the Indonesian entries mirror them one to one.
import { derived } from 'svelte/store';
import { language } from '../stores/language';

const en = {
  "title": "Blog Posts",
  "description": "Technical articles, tutorials, and insights about web development and EdgeOne platform.",
  "backButton": "Back to Home",
  "noPosts": "No posts found matching your search.",
  "searchPlaceholder": "Search posts by title...",
  "pagination": {
    "previous": "Previous",
    "next": "Next"
  },
  "postedOn": "Posted on",
  "minRead": "min read",
  "notFound": "Post not found",
  "posts": [
    {
      "title": "Docker Basics for Developers",
      "description": "Learn the fundamentals of Docker and containerization",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post1.jpg",
      "slug": "posts/docker-basics",
      "tags": [
        "docker",
        "devops",
        "containers",
        "deployment"
      ],
      "author": "Lisa Wang",
      "readTime": "5",
      "content": "\n# Docker Basics for Developers\n\nDocker has revolutionized how we deploy and run applications. Let's learn the basics of containerization with Docker.\n\n## Core Concepts\n\n- Containers\n- Images\n- Dockerfile\n- Docker Compose\n\n## Example Dockerfile\n\n```dockerfile\n# Base image\nFROM node:18-alpine\n\n# Set working directory\nWORKDIR /app\n\n# Copy package files\nCOPY package*.json ./\n\n# Install dependencies\nRUN npm install\n\n# Copy source code\nCOPY . .\n\n# Build application\nRUN npm run build\n\n# Expose port\nEXPOSE 3000\n\n# Start application\nCMD [\"npm\", \"start\"]\n```\n\n## Common Commands\n\n1. `docker build -t myapp .`\n2. `docker run -p 3000:3000 myapp`\n3. `docker-compose up`\n4. `docker ps`\n",
      "html": "<h1>Docker Basics for Developers</h1>\n<p>Docker has revolutionized how we deploy and run applications. Let&#39;s learn the basics of containerization with Docker.</p>\n<h2>Core Concepts</h2>\n<ul>\n<li>Containers</li>\n<li>Images</li>\n<li>Dockerfile</li>\n<li>Docker Compose</li>\n</ul>\n<h2>Example Dockerfile</h2>\n<pre><code class=\"language-dockerfile\"># Base image\nFROM node:18-alpine\n\n# Set working directory\nWORKDIR /app\n\n# Copy package files\nCOPY package*.json ./\n\n# Install dependencies\nRUN npm install\n\n# Copy source code\nCOPY . .\n\n# Build application\nRUN npm run build\n\n# Expose port\nEXPOSE 3000\n\n# Start application\nCMD [&quot;npm&quot;, &quot;start&quot;]\n</code></pre>\n<h2>Common Commands</h2>\n<ol>\n<li><code>docker build -t myapp .</code></li>\n<li><code>docker run -p 3000:3000 myapp</code></li>\n<li><code>docker-compose up</code></li>\n<li><code>docker ps</code></li>\n</ol>\n"
    },
    {
      "title": "Getting Started with Next.js 14",
      "description": "A comprehensive guide to building modern web applications with Next.js 14",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post2.jpg",
      "slug": "posts/getting-started-with-nextjs",
      "tags": [
        "nextjs",
        "react",
        "web development",
        "tutorial"
      ],
      "author": "Jane Smith",
      "readTime": "5",
      "content": "\n# Getting Started with Next.js 14\n\nNext.js 14 brings exciting new features and improvements to the React framework. In this guide, we'll explore the key features and learn how to build modern web applications.\n\n## Key Features\n\n- Server Components\n- App Router\n- Server Actions\n- Improved Performance\n\n## Getting Started\n\n```bash\nnpx create-next-app@latest my-app\ncd my-app\nnpm run dev\n```\n\n## Best Practices\n\n1. Use Server Components by default\n2. Implement proper error boundaries\n3. Optimize images with next/image\n4. Leverage the new App Router\n",
      "html": "<h1>Getting Started with Next.js 14</h1>\n<p>Next.js 14 brings exciting new features and improvements to the React framework. In this guide, we&#39;ll explore the key features and learn how to build modern web applications.</p>\n<h2>Key Features</h2>\n<ul>\n<li>Server Components</li>\n<li>App Router</li>\n<li>Server Actions</li>\n<li>Improved Performance</li>\n</ul>\n<h2>Getting Started</h2>\n<pre><code class=\"language-bash\">npx create-next-app@latest my-app\ncd my-app\nnpm run dev\n</code></pre>\n<h2>Best Practices</h2>\n<ol>\n<li>Use Server Components by default</li>\n<li>Implement proper error boundaries</li>\n<li>Optimize images with next/image</li>\n<li>Leverage the new App Router</li>\n</ol>\n"
    },
    {
      "title": "Designing GraphQL APIs",
      "description": "Best practices for designing and implementing GraphQL APIs",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post3.jpg",
      "slug": "posts/graphql-api",
      "tags": [
        "graphql",
        "api",
        "backend",
        "web development"
      ],
      "author": "Tom Wilson",
      "readTime": "5",
      "content": "\n# Designing GraphQL APIs\n\nGraphQL provides a powerful way to build flexible APIs. Let's explore how to design and implement GraphQL APIs effectively.\n\n## Schema Design\n\n```graphql\ntype User {\n  id: ID!\n  name: String!\n  email: String!\n  posts: [Post!]!\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  content: String!\n  author: User!\n  comments: [Comment!]!\n}\n\ntype Query {\n  user(id: ID!): User\n  posts: [Post!]!\n}\n\ntype Mutation {\n  createPost(input: CreatePostInput!): Post!\n  updatePost(id: ID!, input: UpdatePostInput!): Post!\n}\n```\n\n## Best Practices\n\n1. Use proper types\n2. Implement pagination\n3. Handle errors gracefully\n4. Use fragments for reusability\n\n## Implementation Tips\n\n- Use DataLoader for batching\n- Implement proper caching\n- Handle authentication\n- Monitor performance\n",
      "html": "<h1>Designing GraphQL APIs</h1>\n<p>GraphQL provides a powerful way to build flexible APIs. Let&#39;s explore how to design and implement GraphQL APIs effectively.</p>\n<h2>Schema Design</h2>\n<pre><code class=\"language-graphql\">type User {\n  id: ID!\n  name: String!\n  email: String!\n  posts: [Post!]!\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  content: String!\n  author: User!\n  comments: [Comment!]!\n}\n\ntype Query {\n  user(id: ID!): User\n  posts: [Post!]!\n}\n\ntype Mutation {\n  createPost(input: CreatePostInput!): Post!\n  updatePost(id: ID!, input: UpdatePostInput!): Post!\n}\n</code></pre>\n<h2>Best Practices</h2>\n<ol>\n<li>Use proper types</li>\n<li>Implement pagination</li>\n<li>Handle errors gracefully</li>\n<li>Use fragments for reusability</li>\n</ol>\n<h2>Implementation Tips</h2>\n<ul>\n<li>Use DataLoader for batching</li>\n<li>Implement proper caching</li>\n<li>Handle authentication</li>\n<li>Monitor performance</li>\n</ul>\n"
    },
    {
      "title": "My Blog Journey",
      "description": "A personal journey of learning and growth in web development",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post1.jpg",
      "slug": "posts/mcp-template-list",
      "tags": [
        "web development",
        "learning",
        "personal"
      ],
      "author": "John Doe",
      "readTime": "5",
      "content": "\n# My Blog Journey\n\nWelcome to my personal blog where I share my experiences and insights about web development. This is a space where I document my learning journey and share knowledge with others.\n\n## What I've Learned\n\n- Modern web development practices\n- Frontend frameworks and tools\n- Backend technologies\n- Best practices and tips\n\n## Getting Started\n\n```bash\nnpm install\nnpm run dev\n```\n\n## About This Blog\n\nThis blog is built using modern web technologies and follows best practices in web development. Feel free to explore and learn from my experiences.\n",
      "html": "<h1>My Blog Journey</h1>\n<p>Welcome to my personal blog where I share my experiences and insights about web development. This is a space where I document my learning journey and share knowledge with others.</p>\n<h2>What I&#39;ve Learned</h2>\n<ul>\n<li>Modern web development practices</li>\n<li>Frontend frameworks and tools</li>\n<li>Backend technologies</li>\n<li>Best practices and tips</li>\n</ul>\n<h2>Getting Started</h2>\n<pre><code class=\"language-bash\">npm install\nnpm run dev\n</code></pre>\n<h2>About This Blog</h2>\n<p>This blog is built using modern web technologies and follows best practices in web development. Feel free to explore and learn from my experiences.</p>\n"
    },
    {
      "title": "Building Microservices with Node.js",
      "description": "A practical guide to building scalable microservices using Node.js",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post2.jpg",
      "slug": "posts/nodejs-microservices",
      "tags": [
        "nodejs",
        "microservices",
        "backend",
        "architecture"
      ],
      "author": "David Brown",
      "readTime": "5",
      "content": "\n# Building Microservices with Node.js\n\nMicroservices architecture has become a popular approach for building scalable applications. Let's explore how to implement it using Node.js.\n\n## Architecture Overview\n\n- Service Discovery\n- API Gateway\n- Message Queues\n- Containerization\n\n## Implementation Example\n\n```javascript\n// Example of a microservice using Express\nconst express = require(\"express\");\nconst app = express();\n\napp.get(\"/api/users\", async (req, res) => {\n  try {\n    const users = await userService.getAllUsers();\n    res.json(users);\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});\n\n// Service registration\nconst serviceRegistry = {\n  register: (service) => {\n    // Implementation\n  },\n};\n```\n\n## Best Practices\n\n1. Use containerization\n2. Implement circuit breakers\n3. Handle service discovery\n4. Monitor service health\n",
      "html": "<h1>Building Microservices with Node.js</h1>\n<p>Microservices architecture has become a popular approach for building scalable applications. Let&#39;s explore how to implement it using Node.js.</p>\n<h2>Architecture Overview</h2>\n<ul>\n<li>Service Discovery</li>\n<li>API Gateway</li>\n<li>Message Queues</li>\n<li>Containerization</li>\n</ul>\n<h2>Implementation Example</h2>\n<pre><code class=\"language-javascript\">// Example of a microservice using Express\nconst express = require(&quot;express&quot;);\nconst app = express();\n\napp.get(&quot;/api/users&quot;, async (req, res) =&gt; {\n  try {\n    const users = await userService.getAllUsers();\n    res.json(users);\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});\n\n// Service registration\nconst serviceRegistry = {\n  register: (service) =&gt; {\n    // Implementation\n  },\n};\n</code></pre>\n<h2>Best Practices</h2>\n<ol>\n<li>Use containerization</li>\n<li>Implement circuit breakers</li>\n<li>Handle service discovery</li>\n<li>Monitor service health</li>\n</ol>\n"
    },
    {
      "title": "React Performance Optimization Techniques",
      "description": "Learn how to optimize your React applications for better performance",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post3.jpg",
      "slug": "posts/react-performance",
      "tags": [
        "react",
        "performance",
        "optimization",
        "frontend"
      ],
      "author": "Mike Chen",
      "readTime": "5",
      "content": "\n# React Performance Optimization Techniques\n\nPerformance optimization is crucial for delivering a smooth user experience. Let's explore various techniques to optimize React applications.\n\n## Key Optimization Areas\n\n- Component Memoization\n- Code Splitting\n- Virtual Lists\n- State Management\n\n## Code Examples\n\n```jsx\n// Using React.memo for component memoization\nconst MemoizedComponent = React.memo(({ data }) => {\n  return (\n    <div>\n      {data.map((item) => (\n        <Item key={item.id} {...item} />\n      ))}\n    </div>\n  );\n});\n\n// Using useMemo for expensive calculations\nconst memoizedValue = useMemo(() => {\n  return computeExpensiveValue(a, b);\n}, [a, b]);\n```\n\n## Best Practices\n\n1. Use React.memo for pure components\n2. Implement proper code splitting\n3. Optimize re-renders\n4. Use proper key props\n",
      "html": "<h1>React Performance Optimization Techniques</h1>\n<p>Performance optimization is crucial for delivering a smooth user experience. Let&#39;s explore various techniques to optimize React applications.</p>\n<h2>Key Optimization Areas</h2>\n<ul>\n<li>Component Memoization</li>\n<li>Code Splitting</li>\n<li>Virtual Lists</li>\n<li>State Management</li>\n</ul>\n<h2>Code Examples</h2>\n<pre><code class=\"language-jsx\">// Using React.memo for component memoization\nconst MemoizedComponent = React.memo(({ data }) =&gt; {\n  return (\n    &lt;div&gt;\n      {data.map((item) =&gt; (\n        &lt;Item key={item.id} {...item} /&gt;\n      ))}\n    &lt;/div&gt;\n  );\n});\n\n// Using useMemo for expensive calculations\nconst memoizedValue = useMemo(() =&gt; {\n  return computeExpensiveValue(a, b);\n}, [a, b]);\n</code></pre>\n<h2>Best Practices</h2>\n<ol>\n<li>Use React.memo for pure components</li>\n<li>Implement proper code splitting</li>\n<li>Optimize re-renders</li>\n<li>Use proper key props</li>\n</ol>\n"
    },
    {
      "title": "Web Security Best Practices",
      "description": "Essential security practices for modern web applications",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post1.jpg",
      "slug": "posts/security-best-practices",
      "tags": [
        "security",
        "web development",
        "best practices",
        "authentication"
      ],
      "author": "John Security",
      "readTime": "5",
      "content": "\n# Web Security Best Practices\n\nSecurity is crucial for any web application. Let's explore essential security practices to protect your applications.\n\n## Key Security Areas\n\n- Authentication\n- Authorization\n- Data Encryption\n- Input Validation\n\n## Implementation Examples\n\n```javascript\n// Example of secure password hashing\nconst bcrypt = require(\"bcrypt\");\n\nasync function hashPassword(password) {\n  const salt = await bcrypt.genSalt(12);\n  return bcrypt.hash(password, salt);\n}\n\n// Example of JWT implementation\nconst jwt = require(\"jsonwebtoken\");\n\nfunction generateToken(user) {\n  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {\n    expiresIn: \"1h\",\n  });\n}\n```\n\n## Security Checklist\n\n1. Use HTTPS\n2. Implement proper authentication\n3. Sanitize user input\n4. Use secure headers\n5. Regular security audits\n",
      "html": "<h1>Web Security Best Practices</h1>\n<p>Security is crucial for any web application. Let&#39;s explore essential security practices to protect your applications.</p>\n<h2>Key Security Areas</h2>\n<ul>\n<li>Authentication</li>\n<li>Authorization</li>\n<li>Data Encryption</li>\n<li>Input Validation</li>\n</ul>\n<h2>Implementation Examples</h2>\n<pre><code class=\"language-javascript\">// Example of secure password hashing\nconst bcrypt = require(&quot;bcrypt&quot;);\n\nasync function hashPassword(password) {\n  const salt = await bcrypt.genSalt(12);\n  return bcrypt.hash(password, salt);\n}\n\n// Example of JWT implementation\nconst jwt = require(&quot;jsonwebtoken&quot;);\n\nfunction generateToken(user) {\n  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {\n    expiresIn: &quot;1h&quot;,\n  });\n}\n</code></pre>\n<h2>Security Checklist</h2>\n<ol>\n<li>Use HTTPS</li>\n<li>Implement proper authentication</li>\n<li>Sanitize user input</li>\n<li>Use secure headers</li>\n<li>Regular security audits</li>\n</ol>\n"
    },
    {
      "title": "Advanced Tailwind CSS Tips and Tricks",
      "description": "Learn how to leverage Tailwind CSS for better UI development",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post2.jpg",
      "slug": "posts/tailwind-css-tips",
      "tags": [
        "css",
        "tailwind",
        "frontend",
        "design"
      ],
      "author": "Sarah Wilson",
      "readTime": "5",
      "content": "\n# Advanced Tailwind CSS Tips and Tricks\n\nTailwind CSS has revolutionized how we build user interfaces. Here are some advanced tips to help you get the most out of this utility-first CSS framework.\n\n## Custom Configuration\n\n```javascript\n// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        primary: \"#1a73e8\",\n        secondary: \"#34a853\",\n      },\n    },\n  },\n};\n```\n\n## Best Practices\n\n1. Use @apply for repeated patterns\n2. Leverage custom plugins\n3. Optimize for production\n4. Use arbitrary values when needed\n\n## Component Examples\n\n```html\n<div\n  class=\"flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm\"\n>\n  <h2 class=\"text-xl font-semibold text-gray-900 dark:text-white\">\n    Card Title\n  </h2>\n  <button\n    class=\"px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark\"\n  >\n    Click Me\n  </button>\n</div>\n```\n",
      "html": "<h1>Advanced Tailwind CSS Tips and Tricks</h1>\n<p>Tailwind CSS has revolutionized how we build user interfaces. Here are some advanced tips to help you get the most out of this utility-first CSS framework.</p>\n<h2>Custom Configuration</h2>\n<pre><code class=\"language-javascript\">// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        primary: &quot;#1a73e8&quot;,\n        secondary: &quot;#34a853&quot;,\n      },\n    },\n  },\n};\n</code></pre>\n<h2>Best Practices</h2>\n<ol>\n<li>Use @apply for repeated patterns</li>\n<li>Leverage custom plugins</li>\n<li>Optimize for production</li>\n<li>Use arbitrary values when needed</li>\n</ol>\n<h2>Component Examples</h2>\n<pre><code class=\"language-html\">&lt;div\n  class=&quot;flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm&quot;\n&gt;\n  &lt;h2 class=&quot;text-xl font-semibold text-gray-900 dark:text-white&quot;&gt;\n    Card Title\n  &lt;/h2&gt;\n  &lt;button\n    class=&quot;px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark&quot;\n  &gt;\n    Click Me\n  &lt;/button&gt;\n&lt;/div&gt;\n</code></pre>\n"
    },
    {
      "title": "Testing React Applications",
      "description": "A comprehensive guide to testing React applications with Jest and React Testing Library",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post3.jpg",
      "slug": "posts/testing-react",
      "tags": [
        "react",
        "testing",
        "jest",
        "frontend"
      ],
      "author": "Emma Davis",
      "readTime": "5",
      "content": "\n# Testing React Applications\n\nTesting is crucial for maintaining high-quality React applications. Let's explore different testing strategies and tools.\n\n## Testing Tools\n\n- Jest\n- React Testing Library\n- Cypress\n- MSW (Mock Service Worker)\n\n## Example Tests\n\n```jsx\nimport { render, screen, fireEvent } from \"@testing-library/react\";\nimport userEvent from \"@testing-library/user-event\";\nimport Counter from \"./Counter\";\n\ndescribe(\"Counter\", () => {\n  test(\"renders counter with initial value\", () => {\n    render(<Counter />);\n    expect(screen.getByText(\"Count: 0\")).toBeInTheDocument();\n  });\n\n  test(\"increments counter when button is clicked\", async () => {\n    render(<Counter />);\n    const button = screen.getByRole(\"button\", { name: /increment/i });\n    await userEvent.click(button);\n    expect(screen.getByText(\"Count: 1\")).toBeInTheDocument();\n  });\n});\n```\n\n## Testing Strategies\n\n1. Unit Testing\n2. Integration Testing\n3. End-to-End Testing\n4. Snapshot Testing\n",
      "html": "<h1>Testing React Applications</h1>\n<p>Testing is crucial for maintaining high-quality React applications. Let&#39;s explore different testing strategies and tools.</p>\n<h2>Testing Tools</h2>\n<ul>\n<li>Jest</li>\n<li>React Testing Library</li>\n<li>Cypress</li>\n<li>MSW (Mock Service Worker)</li>\n</ul>\n<h2>Example Tests</h2>\n<pre><code class=\"language-jsx\">import { render, screen, fireEvent } from &quot;@testing-library/react&quot;;\nimport userEvent from &quot;@testing-library/user-event&quot;;\nimport Counter from &quot;./Counter&quot;;\n\ndescribe(&quot;Counter&quot;, () =&gt; {\n  test(&quot;renders counter with initial value&quot;, () =&gt; {\n    render(&lt;Counter /&gt;);\n    expect(screen.getByText(&quot;Count: 0&quot;)).toBeInTheDocument();\n  });\n\n  test(&quot;increments counter when button is clicked&quot;, async () =&gt; {\n    render(&lt;Counter /&gt;);\n    const button = screen.getByRole(&quot;button&quot;, { name: /increment/i });\n    await userEvent.click(button);\n    expect(screen.getByText(&quot;Count: 1&quot;)).toBeInTheDocument();\n  });\n});\n</code></pre>\n<h2>Testing Strategies</h2>\n<ol>\n<li>Unit Testing</li>\n<li>Integration Testing</li>\n<li>End-to-End Testing</li>\n<li>Snapshot Testing</li>\n</ol>\n"
    },
    {
      "title": "TypeScript Best Practices in 2024",
      "description": "Essential TypeScript patterns and practices for modern web development",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post1.jpg",
      "slug": "posts/typescript-best-practices",
      "tags": [
        "typescript",
        "javascript",
        "programming",
        "best practices"
      ],
      "author": "Alex Johnson",
      "readTime": "5",
      "content": "\n# TypeScript Best Practices in 2024\n\nTypeScript has become an essential tool in modern web development. Let's explore the best practices that will help you write more maintainable and type-safe code.\n\n## Type Safety\n\n- Use strict mode\n- Leverage type inference\n- Define proper interfaces\n- Use type guards effectively\n\n## Code Organization\n\n```typescript\n// Example of a well-organized TypeScript module\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\nclass UserService {\n  async getUser(id: string): Promise<User> {\n    // Implementation\n  }\n}\n```\n\n## Advanced Features\n\n1. Generics\n2. Utility Types\n3. Decorators\n4. Type Guards\n",
      "html": "<h1>TypeScript Best Practices in 2024</h1>\n<p>TypeScript has become an essential tool in modern web development. Let&#39;s explore the best practices that will help you write more maintainable and type-safe code.</p>\n<h2>Type Safety</h2>\n<ul>\n<li>Use strict mode</li>\n<li>Leverage type inference</li>\n<li>Define proper interfaces</li>\n<li>Use type guards effectively</li>\n</ul>\n<h2>Code Organization</h2>\n<pre><code class=\"language-typescript\">// Example of a well-organized TypeScript module\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\nclass UserService {\n  async getUser(id: string): Promise&lt;User&gt; {\n    // Implementation\n  }\n}\n</code></pre>\n<h2>Advanced Features</h2>\n<ol>\n<li>Generics</li>\n<li>Utility Types</li>\n<li>Decorators</li>\n<li>Type Guards</li>\n</ol>\n"
    }
  ]
};

const id = {
  "title": "Artikel Blog",
  "description": "Artikel teknis, tutorial, dan catatan tentang pengembangan web dan platform EdgeOne.",
  "backButton": "Kembali ke Beranda",
  "noPosts": "Tidak ada artikel yang cocok dengan pencarianmu.",
  "searchPlaceholder": "Cari artikel berdasarkan judul...",
  "pagination": {
    "previous": "Sebelumnya",
    "next": "Berikutnya"
  },
  "postedOn": "Diposting pada",
  "minRead": "menit baca",
  "notFound": "Artikel tidak ditemukan",
  "posts": [
    {
      "title": "Dasar-Dasar Docker untuk Developer",
      "description": "Pelajari dasar-dasar Docker dan containerisasi",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post1.jpg",
      "slug": "posts/docker-basics",
      "tags": [
        "docker",
        "devops",
        "containers",
        "deployment"
      ],
      "author": "Lisa Wang",
      "readTime": "5",
      "content": "\n# Dasar-Dasar Docker untuk Developer\n\nDocker telah mengubah cara kita men-deploy dan menjalankan aplikasi. Mari pelajari dasar-dasar containerisasi dengan Docker.\n\n## Konsep Inti\n\n- Container\n- Image\n- Dockerfile\n- Docker Compose\n\n## Contoh Dockerfile\n\n```dockerfile\n# Image dasar\nFROM node:18-alpine\n\n# Set direktori kerja\nWORKDIR /app\n\n# Salin file package\nCOPY package*.json ./\n\n# Install dependensi\nRUN npm install\n\n# Salin kode sumber\nCOPY . .\n\n# Build aplikasi\nRUN npm run build\n\n# Buka port\nEXPOSE 3000\n\n# Jalankan aplikasi\nCMD [\"npm\", \"start\"]\n```\n\n## Perintah Umum\n\n1. `docker build -t myapp .`\n2. `docker run -p 3000:3000 myapp`\n3. `docker-compose up`\n4. `docker ps`\n",
      "html": "<h1>Dasar-Dasar Docker untuk Developer</h1>\n<p>Docker telah mengubah cara kita men-deploy dan menjalankan aplikasi. Mari pelajari dasar-dasar containerisasi dengan Docker.</p>\n<h2>Konsep Inti</h2>\n<ul>\n<li>Container</li>\n<li>Image</li>\n<li>Dockerfile</li>\n<li>Docker Compose</li>\n</ul>\n<h2>Contoh Dockerfile</h2>\n<pre><code class=\"language-dockerfile\"># Image dasar\nFROM node:18-alpine\n\n# Set direktori kerja\nWORKDIR /app\n\n# Salin file package\nCOPY package*.json ./\n\n# Install dependensi\nRUN npm install\n\n# Salin kode sumber\nCOPY . .\n\n# Build aplikasi\nRUN npm run build\n\n# Buka port\nEXPOSE 3000\n\n# Jalankan aplikasi\nCMD [&quot;npm&quot;, &quot;start&quot;]\n</code></pre>\n<h2>Perintah Umum</h2>\n<ol>\n<li><code>docker build -t myapp .</code></li>\n<li><code>docker run -p 3000:3000 myapp</code></li>\n<li><code>docker-compose up</code></li>\n<li><code>docker ps</code></li>\n</ol>\n"
    },
    {
      "title": "Mulai dengan Next.js 14",
      "description": "Panduan lengkap membangun aplikasi web modern dengan Next.js 14",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post2.jpg",
      "slug": "posts/getting-started-with-nextjs",
      "tags": [
        "nextjs",
        "react",
        "web development",
        "tutorial"
      ],
      "author": "Jane Smith",
      "readTime": "5",
      "content": "\n# Mulai dengan Next.js 14\n\nNext.js 14 membawa fitur-fitur baru yang menarik dan peningkatan untuk framework React. Di panduan ini, kita akan menjelajahi fitur utamanya dan belajar membangun aplikasi web modern.\n\n## Fitur Utama\n\n- Server Components\n- App Router\n- Server Actions\n- Performa yang Lebih Baik\n\n## Memulai\n\n```bash\nnpx create-next-app@latest my-app\ncd my-app\nnpm run dev\n```\n\n## Praktik Terbaik\n\n1. Pakai Server Components secara default\n2. Terapkan error boundary yang tepat\n3. Optimalkan gambar dengan next/image\n4. Manfaatkan App Router yang baru\n",
      "html": "<h1>Mulai dengan Next.js 14</h1>\n<p>Next.js 14 membawa fitur-fitur baru yang menarik dan peningkatan untuk framework React. Di panduan ini, kita akan menjelajahi fitur utamanya dan belajar membangun aplikasi web modern.</p>\n<h2>Fitur Utama</h2>\n<ul>\n<li>Server Components</li>\n<li>App Router</li>\n<li>Server Actions</li>\n<li>Performa yang Lebih Baik</li>\n</ul>\n<h2>Memulai</h2>\n<pre><code class=\"language-bash\">npx create-next-app@latest my-app\ncd my-app\nnpm run dev\n</code></pre>\n<h2>Praktik Terbaik</h2>\n<ol>\n<li>Pakai Server Components secara default</li>\n<li>Terapkan error boundary yang tepat</li>\n<li>Optimalkan gambar dengan next/image</li>\n<li>Manfaatkan App Router yang baru</li>\n</ol>\n"
    },
    {
      "title": "Merancang API GraphQL",
      "description": "Praktik terbaik merancang dan mengimplementasikan API GraphQL",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post3.jpg",
      "slug": "posts/graphql-api",
      "tags": [
        "graphql",
        "api",
        "backend",
        "web development"
      ],
      "author": "Tom Wilson",
      "readTime": "5",
      "content": "\n# Merancang API GraphQL\n\nGraphQL memberi cara yang ampuh untuk membangun API yang fleksibel. Mari jelajahi cara merancang dan mengimplementasikan API GraphQL dengan efektif.\n\n## Desain Skema\n\n```graphql\ntype User {\n  id: ID!\n  name: String!\n  email: String!\n  posts: [Post!]!\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  content: String!\n  author: User!\n  comments: [Comment!]!\n}\n\ntype Query {\n  user(id: ID!): User\n  posts: [Post!]!\n}\n\ntype Mutation {\n  createPost(input: CreatePostInput!): Post!\n  updatePost(id: ID!, input: UpdatePostInput!): Post!\n}\n```\n\n## Praktik Terbaik\n\n1. Pakai tipe yang tepat\n2. Terapkan pagination\n3. Tangani error dengan rapi\n4. Pakai fragment agar bisa dipakai ulang\n\n## Tips Implementasi\n\n- Pakai DataLoader untuk batching\n- Terapkan caching yang tepat\n- Tangani autentikasi\n- Pantau performa\n",
      "html": "<h1>Merancang API GraphQL</h1>\n<p>GraphQL memberi cara yang ampuh untuk membangun API yang fleksibel. Mari jelajahi cara merancang dan mengimplementasikan API GraphQL dengan efektif.</p>\n<h2>Desain Skema</h2>\n<pre><code class=\"language-graphql\">type User {\n  id: ID!\n  name: String!\n  email: String!\n  posts: [Post!]!\n}\n\ntype Post {\n  id: ID!\n  title: String!\n  content: String!\n  author: User!\n  comments: [Comment!]!\n}\n\ntype Query {\n  user(id: ID!): User\n  posts: [Post!]!\n}\n\ntype Mutation {\n  createPost(input: CreatePostInput!): Post!\n  updatePost(id: ID!, input: UpdatePostInput!): Post!\n}\n</code></pre>\n<h2>Praktik Terbaik</h2>\n<ol>\n<li>Pakai tipe yang tepat</li>\n<li>Terapkan pagination</li>\n<li>Tangani error dengan rapi</li>\n<li>Pakai fragment agar bisa dipakai ulang</li>\n</ol>\n<h2>Tips Implementasi</h2>\n<ul>\n<li>Pakai DataLoader untuk batching</li>\n<li>Terapkan caching yang tepat</li>\n<li>Tangani autentikasi</li>\n<li>Pantau performa</li>\n</ul>\n"
    },
    {
      "title": "Perjalanan Blog Saya",
      "description": "Cerita perjalanan belajar dan berkembang di pengembangan web",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post1.jpg",
      "slug": "posts/mcp-template-list",
      "tags": [
        "web development",
        "learning",
        "personal"
      ],
      "author": "John Doe",
      "readTime": "5",
      "content": "\n# Perjalanan Blog Saya\n\nSelamat datang di blog pribadi saya, tempat saya berbagi pengalaman dan wawasan tentang pengembangan web. Di sini saya mencatat perjalanan belajar dan berbagi ilmu dengan orang lain.\n\n## Yang Saya Pelajari\n\n- Praktik pengembangan web modern\n- Framework dan alat frontend\n- Teknologi backend\n- Praktik terbaik dan tips\n\n## Memulai\n\n```bash\nnpm install\nnpm run dev\n```\n\n## Tentang Blog Ini\n\nBlog ini dibangun dengan teknologi web modern dan mengikuti praktik terbaik dalam pengembangan web. Silakan menjelajah dan belajar dari pengalaman saya.\n",
      "html": "<h1>Perjalanan Blog Saya</h1>\n<p>Selamat datang di blog pribadi saya, tempat saya berbagi pengalaman dan wawasan tentang pengembangan web. Di sini saya mencatat perjalanan belajar dan berbagi ilmu dengan orang lain.</p>\n<h2>Yang Saya Pelajari</h2>\n<ul>\n<li>Praktik pengembangan web modern</li>\n<li>Framework dan alat frontend</li>\n<li>Teknologi backend</li>\n<li>Praktik terbaik dan tips</li>\n</ul>\n<h2>Memulai</h2>\n<pre><code class=\"language-bash\">npm install\nnpm run dev\n</code></pre>\n<h2>Tentang Blog Ini</h2>\n<p>Blog ini dibangun dengan teknologi web modern dan mengikuti praktik terbaik dalam pengembangan web. Silakan menjelajah dan belajar dari pengalaman saya.</p>\n"
    },
    {
      "title": "Membangun Microservices dengan Node.js",
      "description": "Panduan praktis membangun microservices yang skalabel dengan Node.js",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post2.jpg",
      "slug": "posts/nodejs-microservices",
      "tags": [
        "nodejs",
        "microservices",
        "backend",
        "architecture"
      ],
      "author": "David Brown",
      "readTime": "5",
      "content": "\n# Membangun Microservices dengan Node.js\n\nArsitektur microservices sudah jadi pendekatan populer untuk membangun aplikasi yang skalabel. Mari jelajahi cara menerapkannya dengan Node.js.\n\n## Gambaran Arsitektur\n\n- Service Discovery\n- API Gateway\n- Message Queue\n- Containerisasi\n\n## Contoh Implementasi\n\n```javascript\n// Contoh microservice dengan Express\nconst express = require(\"express\");\nconst app = express();\n\napp.get(\"/api/users\", async (req, res) => {\n  try {\n    const users = await userService.getAllUsers();\n    res.json(users);\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});\n\n// Registrasi service\nconst serviceRegistry = {\n  register: (service) => {\n    // Implementasi\n  },\n};\n```\n\n## Praktik Terbaik\n\n1. Pakai containerisasi\n2. Terapkan circuit breaker\n3. Tangani service discovery\n4. Pantau kesehatan service\n",
      "html": "<h1>Membangun Microservices dengan Node.js</h1>\n<p>Arsitektur microservices sudah jadi pendekatan populer untuk membangun aplikasi yang skalabel. Mari jelajahi cara menerapkannya dengan Node.js.</p>\n<h2>Gambaran Arsitektur</h2>\n<ul>\n<li>Service Discovery</li>\n<li>API Gateway</li>\n<li>Message Queue</li>\n<li>Containerisasi</li>\n</ul>\n<h2>Contoh Implementasi</h2>\n<pre><code class=\"language-javascript\">// Contoh microservice dengan Express\nconst express = require(&quot;express&quot;);\nconst app = express();\n\napp.get(&quot;/api/users&quot;, async (req, res) =&gt; {\n  try {\n    const users = await userService.getAllUsers();\n    res.json(users);\n  } catch (error) {\n    res.status(500).json({ error: error.message });\n  }\n});\n\n// Registrasi service\nconst serviceRegistry = {\n  register: (service) =&gt; {\n    // Implementasi\n  },\n};\n</code></pre>\n<h2>Praktik Terbaik</h2>\n<ol>\n<li>Pakai containerisasi</li>\n<li>Terapkan circuit breaker</li>\n<li>Tangani service discovery</li>\n<li>Pantau kesehatan service</li>\n</ol>\n"
    },
    {
      "title": "Teknik Optimasi Performa React",
      "description": "Pelajari cara mengoptimalkan aplikasi React agar lebih cepat",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post3.jpg",
      "slug": "posts/react-performance",
      "tags": [
        "react",
        "performance",
        "optimization",
        "frontend"
      ],
      "author": "Mike Chen",
      "readTime": "5",
      "content": "\n# Teknik Optimasi Performa React\n\nOptimasi performa penting untuk menghadirkan pengalaman pengguna yang mulus. Mari jelajahi berbagai teknik untuk mengoptimalkan aplikasi React.\n\n## Area Optimasi Utama\n\n- Memoization Komponen\n- Code Splitting\n- Virtual List\n- Manajemen State\n\n## Contoh Kode\n\n```jsx\n// Memakai React.memo untuk memoization komponen\nconst MemoizedComponent = React.memo(({ data }) => {\n  return (\n    <div>\n      {data.map((item) => (\n        <Item key={item.id} {...item} />\n      ))}\n    </div>\n  );\n});\n\n// Memakai useMemo untuk perhitungan yang berat\nconst memoizedValue = useMemo(() => {\n  return computeExpensiveValue(a, b);\n}, [a, b]);\n```\n\n## Praktik Terbaik\n\n1. Pakai React.memo untuk komponen murni\n2. Terapkan code splitting yang tepat\n3. Optimalkan re-render\n4. Pakai key prop yang tepat\n",
      "html": "<h1>Teknik Optimasi Performa React</h1>\n<p>Optimasi performa penting untuk menghadirkan pengalaman pengguna yang mulus. Mari jelajahi berbagai teknik untuk mengoptimalkan aplikasi React.</p>\n<h2>Area Optimasi Utama</h2>\n<ul>\n<li>Memoization Komponen</li>\n<li>Code Splitting</li>\n<li>Virtual List</li>\n<li>Manajemen State</li>\n</ul>\n<h2>Contoh Kode</h2>\n<pre><code class=\"language-jsx\">// Memakai React.memo untuk memoization komponen\nconst MemoizedComponent = React.memo(({ data }) =&gt; {\n  return (\n    &lt;div&gt;\n      {data.map((item) =&gt; (\n        &lt;Item key={item.id} {...item} /&gt;\n      ))}\n    &lt;/div&gt;\n  );\n});\n\n// Memakai useMemo untuk perhitungan yang berat\nconst memoizedValue = useMemo(() =&gt; {\n  return computeExpensiveValue(a, b);\n}, [a, b]);\n</code></pre>\n<h2>Praktik Terbaik</h2>\n<ol>\n<li>Pakai React.memo untuk komponen murni</li>\n<li>Terapkan code splitting yang tepat</li>\n<li>Optimalkan re-render</li>\n<li>Pakai key prop yang tepat</li>\n</ol>\n"
    },
    {
      "title": "Praktik Terbaik Keamanan Web",
      "description": "Praktik keamanan penting untuk aplikasi web modern",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post1.jpg",
      "slug": "posts/security-best-practices",
      "tags": [
        "security",
        "web development",
        "best practices",
        "authentication"
      ],
      "author": "John Security",
      "readTime": "5",
      "content": "\n# Praktik Terbaik Keamanan Web\n\nKeamanan sangat penting untuk aplikasi web apa pun. Mari jelajahi praktik keamanan utama untuk melindungi aplikasimu.\n\n## Area Keamanan Utama\n\n- Autentikasi\n- Otorisasi\n- Enkripsi Data\n- Validasi Input\n\n## Contoh Implementasi\n\n```javascript\n// Contoh hashing password yang aman\nconst bcrypt = require(\"bcrypt\");\n\nasync function hashPassword(password) {\n  const salt = await bcrypt.genSalt(12);\n  return bcrypt.hash(password, salt);\n}\n\n// Contoh implementasi JWT\nconst jwt = require(\"jsonwebtoken\");\n\nfunction generateToken(user) {\n  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {\n    expiresIn: \"1h\",\n  });\n}\n```\n\n## Daftar Periksa Keamanan\n\n1. Pakai HTTPS\n2. Terapkan autentikasi yang tepat\n3. Bersihkan input pengguna\n4. Pakai security header\n5. Audit keamanan secara berkala\n",
      "html": "<h1>Praktik Terbaik Keamanan Web</h1>\n<p>Keamanan sangat penting untuk aplikasi web apa pun. Mari jelajahi praktik keamanan utama untuk melindungi aplikasimu.</p>\n<h2>Area Keamanan Utama</h2>\n<ul>\n<li>Autentikasi</li>\n<li>Otorisasi</li>\n<li>Enkripsi Data</li>\n<li>Validasi Input</li>\n</ul>\n<h2>Contoh Implementasi</h2>\n<pre><code class=\"language-javascript\">// Contoh hashing password yang aman\nconst bcrypt = require(&quot;bcrypt&quot;);\n\nasync function hashPassword(password) {\n  const salt = await bcrypt.genSalt(12);\n  return bcrypt.hash(password, salt);\n}\n\n// Contoh implementasi JWT\nconst jwt = require(&quot;jsonwebtoken&quot;);\n\nfunction generateToken(user) {\n  return jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET, {\n    expiresIn: &quot;1h&quot;,\n  });\n}\n</code></pre>\n<h2>Daftar Periksa Keamanan</h2>\n<ol>\n<li>Pakai HTTPS</li>\n<li>Terapkan autentikasi yang tepat</li>\n<li>Bersihkan input pengguna</li>\n<li>Pakai security header</li>\n<li>Audit keamanan secara berkala</li>\n</ol>\n"
    },
    {
      "title": "Tips dan Trik Lanjutan Tailwind CSS",
      "description": "Pelajari cara memanfaatkan Tailwind CSS untuk UI yang lebih baik",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post2.jpg",
      "slug": "posts/tailwind-css-tips",
      "tags": [
        "css",
        "tailwind",
        "frontend",
        "design"
      ],
      "author": "Sarah Wilson",
      "readTime": "5",
      "content": "\n# Tips dan Trik Lanjutan Tailwind CSS\n\nTailwind CSS telah mengubah cara kita membangun antarmuka pengguna. Berikut beberapa tips lanjutan agar kamu bisa memaksimalkan framework CSS utility-first ini.\n\n## Konfigurasi Kustom\n\n```javascript\n// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        primary: \"#1a73e8\",\n        secondary: \"#34a853\",\n      },\n    },\n  },\n};\n```\n\n## Praktik Terbaik\n\n1. Pakai @apply untuk pola yang berulang\n2. Manfaatkan plugin kustom\n3. Optimalkan untuk produksi\n4. Pakai nilai arbitrer saat perlu\n\n## Contoh Komponen\n\n```html\n<div\n  class=\"flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm\"\n>\n  <h2 class=\"text-xl font-semibold text-gray-900 dark:text-white\">\n    Judul Kartu\n  </h2>\n  <button\n    class=\"px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark\"\n  >\n    Klik Saya\n  </button>\n</div>\n```\n",
      "html": "<h1>Tips dan Trik Lanjutan Tailwind CSS</h1>\n<p>Tailwind CSS telah mengubah cara kita membangun antarmuka pengguna. Berikut beberapa tips lanjutan agar kamu bisa memaksimalkan framework CSS utility-first ini.</p>\n<h2>Konfigurasi Kustom</h2>\n<pre><code class=\"language-javascript\">// tailwind.config.js\nmodule.exports = {\n  theme: {\n    extend: {\n      colors: {\n        primary: &quot;#1a73e8&quot;,\n        secondary: &quot;#34a853&quot;,\n      },\n    },\n  },\n};\n</code></pre>\n<h2>Praktik Terbaik</h2>\n<ol>\n<li>Pakai @apply untuk pola yang berulang</li>\n<li>Manfaatkan plugin kustom</li>\n<li>Optimalkan untuk produksi</li>\n<li>Pakai nilai arbitrer saat perlu</li>\n</ol>\n<h2>Contoh Komponen</h2>\n<pre><code class=\"language-html\">&lt;div\n  class=&quot;flex items-center justify-between p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm&quot;\n&gt;\n  &lt;h2 class=&quot;text-xl font-semibold text-gray-900 dark:text-white&quot;&gt;\n    Judul Kartu\n  &lt;/h2&gt;\n  &lt;button\n    class=&quot;px-4 py-2 bg-primary text-white rounded-md hover:bg-primary-dark&quot;\n  &gt;\n    Klik Saya\n  &lt;/button&gt;\n&lt;/div&gt;\n</code></pre>\n"
    },
    {
      "title": "Menguji Aplikasi React",
      "description": "Panduan lengkap menguji aplikasi React dengan Jest dan React Testing Library",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post3.jpg",
      "slug": "posts/testing-react",
      "tags": [
        "react",
        "testing",
        "jest",
        "frontend"
      ],
      "author": "Emma Davis",
      "readTime": "5",
      "content": "\n# Menguji Aplikasi React\n\nPengujian sangat penting untuk menjaga kualitas aplikasi React. Mari jelajahi berbagai strategi dan alat pengujian.\n\n## Alat Pengujian\n\n- Jest\n- React Testing Library\n- Cypress\n- MSW (Mock Service Worker)\n\n## Contoh Tes\n\n```jsx\nimport { render, screen, fireEvent } from \"@testing-library/react\";\nimport userEvent from \"@testing-library/user-event\";\nimport Counter from \"./Counter\";\n\ndescribe(\"Counter\", () => {\n  test(\"renders counter with initial value\", () => {\n    render(<Counter />);\n    expect(screen.getByText(\"Count: 0\")).toBeInTheDocument();\n  });\n\n  test(\"increments counter when button is clicked\", async () => {\n    render(<Counter />);\n    const button = screen.getByRole(\"button\", { name: /increment/i });\n    await userEvent.click(button);\n    expect(screen.getByText(\"Count: 1\")).toBeInTheDocument();\n  });\n});\n```\n\n## Strategi Pengujian\n\n1. Unit Testing\n2. Integration Testing\n3. End-to-End Testing\n4. Snapshot Testing\n",
      "html": "<h1>Menguji Aplikasi React</h1>\n<p>Pengujian sangat penting untuk menjaga kualitas aplikasi React. Mari jelajahi berbagai strategi dan alat pengujian.</p>\n<h2>Alat Pengujian</h2>\n<ul>\n<li>Jest</li>\n<li>React Testing Library</li>\n<li>Cypress</li>\n<li>MSW (Mock Service Worker)</li>\n</ul>\n<h2>Contoh Tes</h2>\n<pre><code class=\"language-jsx\">import { render, screen, fireEvent } from &quot;@testing-library/react&quot;;\nimport userEvent from &quot;@testing-library/user-event&quot;;\nimport Counter from &quot;./Counter&quot;;\n\ndescribe(&quot;Counter&quot;, () =&gt; {\n  test(&quot;renders counter with initial value&quot;, () =&gt; {\n    render(&lt;Counter /&gt;);\n    expect(screen.getByText(&quot;Count: 0&quot;)).toBeInTheDocument();\n  });\n\n  test(&quot;increments counter when button is clicked&quot;, async () =&gt; {\n    render(&lt;Counter /&gt;);\n    const button = screen.getByRole(&quot;button&quot;, { name: /increment/i });\n    await userEvent.click(button);\n    expect(screen.getByText(&quot;Count: 1&quot;)).toBeInTheDocument();\n  });\n});\n</code></pre>\n<h2>Strategi Pengujian</h2>\n<ol>\n<li>Unit Testing</li>\n<li>Integration Testing</li>\n<li>End-to-End Testing</li>\n<li>Snapshot Testing</li>\n</ol>\n"
    },
    {
      "title": "Praktik Terbaik TypeScript di 2024",
      "description": "Pola dan praktik TypeScript penting untuk pengembangan web modern",
      "date": "2024-03-20",
      "image": "/assets/images/posts/post1.jpg",
      "slug": "posts/typescript-best-practices",
      "tags": [
        "typescript",
        "javascript",
        "programming",
        "best practices"
      ],
      "author": "Alex Johnson",
      "readTime": "5",
      "content": "\n# Praktik Terbaik TypeScript di 2024\n\nTypeScript sudah jadi alat penting dalam pengembangan web modern. Mari jelajahi praktik terbaik yang membantumu menulis kode yang lebih mudah dirawat dan aman tipe.\n\n## Keamanan Tipe\n\n- Pakai mode strict\n- Manfaatkan inferensi tipe\n- Definisikan interface yang tepat\n- Pakai type guard secara efektif\n\n## Organisasi Kode\n\n```typescript\n// Contoh modul TypeScript yang tertata\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\nclass UserService {\n  async getUser(id: string): Promise<User> {\n    // Implementasi\n  }\n}\n```\n\n## Fitur Lanjutan\n\n1. Generics\n2. Utility Types\n3. Decorators\n4. Type Guards\n",
      "html": "<h1>Praktik Terbaik TypeScript di 2024</h1>\n<p>TypeScript sudah jadi alat penting dalam pengembangan web modern. Mari jelajahi praktik terbaik yang membantumu menulis kode yang lebih mudah dirawat dan aman tipe.</p>\n<h2>Keamanan Tipe</h2>\n<ul>\n<li>Pakai mode strict</li>\n<li>Manfaatkan inferensi tipe</li>\n<li>Definisikan interface yang tepat</li>\n<li>Pakai type guard secara efektif</li>\n</ul>\n<h2>Organisasi Kode</h2>\n<pre><code class=\"language-typescript\">// Contoh modul TypeScript yang tertata\ninterface User {\n  id: string;\n  name: string;\n  email: string;\n}\n\nclass UserService {\n  async getUser(id: string): Promise&lt;User&gt; {\n    // Implementasi\n  }\n}\n</code></pre>\n<h2>Fitur Lanjutan</h2>\n<ol>\n<li>Generics</li>\n<li>Utility Types</li>\n<li>Decorators</li>\n<li>Type Guards</li>\n</ol>\n"
    }
  ]
};

export const postsConfig = derived(language, ($lang) => ($lang === 'id' ? id : en));
