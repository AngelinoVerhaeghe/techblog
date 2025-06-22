<script setup lang="ts">
import PostCard from "~/components/blog/post-card.vue";

const { blogPosts } = useBlogPosts();

const features = ref([
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Built with Nuxt 3 for optimal performance and developer experience",
  },
  {
    icon: "🎨",
    title: "Beautiful Design",
    description: "Modern UI crafted with Tailwind CSS and attention to detail",
  },
  {
    icon: "🔧",
    title: "Developer Friendly",
    description: "Composition API, TypeScript, and best practices throughout",
  },
  {
    icon: "📱",
    title: "Responsive",
    description: "Perfect experience on desktop, tablet, and mobile devices",
  },
]);

const latestPosts = computed(() => blogPosts.value.slice(0, 3));

const stats = ref([
  { number: "100+", label: "Articles Published" },
  { number: "50K+", label: "Monthly Readers" },
  { number: "5+", label: "Years Experience" },
  { number: "100%", label: "Open Source" },
]);
</script>

<template>
  <div>
    <!-- Hero Section -->
    <section class="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-20">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Welcome to
          <span class="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
            TechBlog
          </span>
        </h1>
        <p class="text-xl md:text-2xl mb-8 text-indigo-100 max-w-3xl mx-auto leading-relaxed">
          Your gateway to modern web development insights, tutorials, and cutting-edge technologies.
          Built with Nuxt 3, Vue 3, and Tailwind CSS.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/blog"
            class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Explore Articles
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center"
          >
            <div class="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">
              {{ stat.number }}
            </div>
            <div class="text-gray-600">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-gray-50">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Why Choose TechBlog?
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with practical insights to help you build better web applications.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div class="text-4xl mb-4">
              {{ feature.icon }}
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-3">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Latest Posts Section -->
    <section class="py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up to date with the latest trends and best practices in web development.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PostCard
            v-for="post in latestPosts"
            :key="post.slug"
            :post="post"
          />
        </div>

        <div class="text-center mt-12">
          <NuxtLink
            to="/blog"
            class="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors duration-300"
          >
            View All Articles
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-indigo-500 to-purple-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 class="text-4xl font-bold mb-6">
          Ready to Get Started?
        </h2>
        <p class="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
          Join thousands of developers who are already building amazing web applications with modern technologies.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/contact"
            class="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
          >
            Get in Touch
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors duration-300"
          >
            Learn More
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
