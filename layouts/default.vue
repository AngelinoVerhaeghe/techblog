<script setup>
import { useRoute } from "vue-router";

import Footer from "~/components/app/footer.vue";

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
    <Footer />
  </div>
</template>
