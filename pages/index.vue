<script setup lang="ts">
// Using Composition API with script setup
const count = ref(0);

const incrementCount = () => {
  count.value++;
};
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <div class="text-center mb-4">
        <Icon name="tabler:brand-github" class="w-12 h-12 text-gray-800 mb-3" />
        <h1 class="text-3xl font-bold text-gray-800">
          Welcome to My Tech Blog
        </h1>
      </div>
      <p class="text-gray-600 text-center mb-6">
        This is a minimal setup using Nuxt 3, Composition API, and Tailwind CSS.
      </p>
      <div class="space-y-4">
        <div class="bg-blue-50 p-4 rounded-md">
          <h2 class="text-lg font-semibold text-blue-800 mb-2">Features</h2>
          <ul class="text-blue-700 space-y-1">
            <li>• Nuxt 3 with Composition API</li>
            <li>• Script setup syntax</li>
            <li>• Tailwind CSS styling</li>
            <li>• TypeScript support</li>
            <li>• Nuxt Icon integration</li>
          </ul>
        </div>
        <button
          @click="incrementCount"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200"
        >
          Clicked {{ count }} times
        </button>
      </div>
    </div>
  </div>
</template>
