import { useState } from "#app";

const blogPostsData = [
  {
    id: 1,
    slug: "getting-started-with-vue-3-composition-api",
    title: "Getting Started with Vue 3 Composition API",
    imageUrl: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt: "Learn the basics of Vue 3 Composition API and how it improves code organization and reusability.",
    content: `
      <p class="mb-6">Vue 3's Composition API represents a fundamental shift in how we write Vue components. It provides a more flexible way to organize component logic and enables better code reuse across components.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Why Composition API?</h2>
      <p class="mb-6">The Composition API was introduced to address several limitations of the Options API, particularly when dealing with complex components and logic reuse. It allows you to organize code by logical concerns rather than by options.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Basic Setup</h2>
      <p class="mb-6">To use the Composition API, you need to import the necessary functions from Vue:</p>
      <pre class="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto"><code>import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const doubleCount = computed(() => count.value * 2)
    
    onMounted(() => {
      console.log('Component mounted')
    })
    
    return {
      count,
      doubleCount
    }
  }
}</code></pre>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Key Concepts</h2>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li><strong>ref()</strong> - Creates reactive references for primitive values</li>
        <li><strong>reactive()</strong> - Creates reactive objects</li>
        <li><strong>computed()</strong> - Creates computed properties</li>
        <li><strong>watch()</strong> - Watches for changes in reactive data</li>
        <li><strong>Lifecycle hooks</strong> - onMounted, onUnmounted, etc.</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
      <p class="mb-6">The Composition API offers several advantages:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Better TypeScript support</li>
        <li>Improved tree-shaking</li>
        <li>Better logic reuse through composables</li>
        <li>More flexible code organization</li>
      </ul>
      
      <p class="mb-6">The Composition API is not a replacement for the Options API, but rather a complementary feature that gives you more flexibility in how you structure your components.</p>
    `,
    author: "John Doe",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Vue.js",
    tags: ["Vue.js", "Composition API", "JavaScript", "Frontend"],
  },
  {
    id: 2,
    slug: "building-responsive-uis-with-tailwind-css",
    title: "Building Responsive UIs with Tailwind CSS",
    imageUrl: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt: "Discover how to create beautiful, responsive user interfaces using Tailwind CSS utility classes.",
    content: `
      <p class="mb-6">Tailwind CSS has revolutionized the way we build user interfaces by providing a utility-first approach to styling. Instead of writing custom CSS, you compose styles using predefined utility classes.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">What is Tailwind CSS?</h2>
      <p class="mb-6">Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs without leaving your HTML. It's highly customizable and designed to be responsive by default.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
      <p class="mb-6">To get started with Tailwind CSS, you need to install it and configure it in your project:</p>
      <pre class="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto"><code>npm install -D tailwindcss
npx tailwindcss init</code></pre>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Basic Example</h2>
      <p class="mb-6">Here's a simple example of how to use Tailwind CSS:</p>
      <pre class="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto"><code>&lt;div class="bg-blue-500 text-white p-4 rounded-lg shadow-md"&gt;
  &lt;h1 class="text-2xl font-bold mb-2"&gt;Hello Tailwind!&lt;/h1&gt;
  &lt;p class="text-blue-100"&gt;This is styled with utility classes.&lt;/p&gt;
&lt;/div&gt;</code></pre>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Responsive Design</h2>
      <p class="mb-6">Tailwind makes responsive design easy with responsive prefixes:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li><code>sm:</code> - Small screens (640px and up)</li>
        <li><code>md:</code> - Medium screens (768px and up)</li>
        <li><code>lg:</code> - Large screens (1024px and up)</li>
        <li><code>xl:</code> - Extra large screens (1280px and up)</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Best Practices</h2>
      <p class="mb-6">When using Tailwind CSS, consider these best practices:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Use consistent spacing and sizing</li>
        <li>Leverage responsive utilities</li>
        <li>Extract common patterns into components</li>
        <li>Use the @apply directive for complex components</li>
      </ul>
    `,
    author: "Jane Smith",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "CSS",
    tags: ["CSS", "Tailwind CSS", "Responsive Design", "Frontend"],
  },
  {
    id: 3,
    slug: "nuxt-3-future-of-vuejs-development",
    title: "Nuxt 3: The Future of Vue.js Development",
    imageUrl: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    excerpt: "Explore the new features and improvements in Nuxt 3 that make Vue.js development even better.",
    content: `
      <p class="mb-6">Nuxt 3 is the next generation of the Nuxt framework, built on top of Vue 3 and Vite. It brings significant improvements in performance, developer experience, and functionality.</p>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">What's New in Nuxt 3?</h2>
      <p class="mb-6">Nuxt 3 introduces several major improvements over Nuxt 2:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Built on Vue 3 and Vite</li>
        <li>Improved TypeScript support</li>
        <li>Better performance with Nitro server engine</li>
        <li>Enhanced developer experience</li>
        <li>New composables and utilities</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
      <p class="mb-6">Creating a new Nuxt 3 project is straightforward:</p>
      <pre class="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto"><code>npx nuxi@latest init my-nuxt-app
cd my-nuxt-app
npm install
npm run dev</code></pre>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Key Features</h2>
      <h3 class="text-xl font-semibold text-gray-900 mb-3">Auto-imports</h3>
      <p class="mb-6">Nuxt 3 automatically imports components, composables, and utilities, reducing boilerplate code:</p>
      <pre class="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto"><code>// No need to import - automatically available
const { data } = await useFetch('/api/posts')
const { $fetch } = useNuxtApp()</code></pre>
      
      <h3 class="text-xl font-semibold text-gray-900 mb-3">Server Routes</h3>
      <p class="mb-6">Create API routes easily with the new server directory:</p>
      <pre class="bg-gray-100 p-4 rounded-lg mb-6 overflow-x-auto"><code>// server/api/posts.ts
export default defineEventHandler(async (event) => {
  return {
    posts: [
      { id: 1, title: 'Post 1' },
      { id: 2, title: 'Post 2' }
    ]
  }
})</code></pre>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Performance Improvements</h2>
      <p class="mb-6">Nuxt 3 offers significant performance improvements:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Faster development server with Vite</li>
        <li>Better tree-shaking and code splitting</li>
        <li>Improved SSR and SSG performance</li>
        <li>Optimized bundle sizes</li>
      </ul>
      
      <h2 class="text-2xl font-bold text-gray-900 mb-4">Migration from Nuxt 2</h2>
      <p class="mb-6">While Nuxt 3 is a major update, the migration process is well-documented and many concepts remain the same. The main changes involve:</p>
      <ul class="list-disc list-inside mb-6 space-y-2">
        <li>Updating to Vue 3 syntax</li>
        <li>Using the new composables</li>
        <li>Adapting to the new directory structure</li>
        <li>Updating configuration options</li>
      </ul>
    `,
    author: "Mike Johnson",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "Nuxt.js",
    tags: ["Nuxt.js", "Vue.js", "Full-stack", "JavaScript"],
  },
];

export function useBlogPosts() {
  const blogPosts = useState("blogPosts", () => blogPostsData);
  return {
    blogPosts,
  };
}
