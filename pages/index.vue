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
    <section class="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center w-full" style="background-image: url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1500&q=80');">
      <div class="absolute inset-0 bg-black/70 bg-gradient-to-br from-black via-indigo-900/80 to-black/80" />
      <div class="relative z-10 w-full max-w-3xl mx-auto px-4 text-center flex flex-col items-center">
        <div class="mb-6">
          <span class="inline-block bg-white/10 text-white text-sm px-5 py-2 rounded-full backdrop-blur font-medium border border-white/20 shadow-md">
            New: Explore our latest deep dives on Vue, Nuxt, and web tech! <a href="/blog" class="font-semibold underline underline-offset-2 hover:text-blue-200 ml-1">Read articles <span aria-hidden="true">→</span></a>
          </span>
        </div>
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-xl">
          Insights and Tutorials for Modern Web Developers
        </h1>
        <p class="text-lg md:text-xl text-white/80 mb-10 max-w-xl mx-auto">
          TechBlog brings you the latest in web development, JavaScript frameworks, and best practices. Level up your skills with hands-on guides, tips, and industry news.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <NuxtLink
            to="/blog"
            class="bg-indigo-500 hover:bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg transition-colors duration-300 text-base"
          >
            Explore Articles
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg font-semibold border border-white/20 shadow-lg transition-colors duration-300 text-base"
          >
            Learn More <span aria-hidden="true">→</span>
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
