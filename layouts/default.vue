<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Navigation Bar -->
    <AppNavBar />

    <!-- Main Content -->
    <div v-if="route.path === '/'">
      <NuxtPage />
    </div>
    <main v-else class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <NuxtPage />
    </main>

    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-8 mt-auto">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <p class="text-gray-300">
            © {{ new Date().getFullYear() }} TechBlog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
