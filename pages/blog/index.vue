<script setup>
import BlogPostCard from "~/components/blog/post-card.vue";

const { blogPosts } = useBlogPosts();
</script>

<template>
  <div class="max-w-7xl mx-auto">
    <!-- Page Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Blog
      </h1>
      <p class="text-xl text-gray-600">
        Latest insights, tutorials, and updates from our team
      </p>
    </div>

    <!-- Blog Posts Grid -->
    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <BlogPostCard
        v-for="post in blogPosts"
        :key="post.id"
        :post="post"
      />
    </div>

    <!-- Newsletter Signup -->
    <div class="mt-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-center text-white">
      <h3 class="text-2xl font-bold mb-4">
        Stay Updated
      </h3>
      <p class="text-indigo-100 mb-6">
        Get the latest posts and updates delivered to your inbox.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Enter your email"
          class="flex-1 px-4 py-2 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
        >
        <button class="bg-white text-indigo-600 px-6 py-2 rounded-md font-medium hover:bg-gray-100 transition-colors duration-300">
          Subscribe
        </button>
      </div>
    </div>
  </div>
</template>
