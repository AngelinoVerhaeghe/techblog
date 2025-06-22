<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article
    class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
  >
    <!-- Post Image -->
    <NuxtLink :to="`/blog/${post.slug}`">
      <img
        :src="post.imageUrl"
        :alt="`Image for ${post.title}`"
        class="w-full h-48 object-cover"
      >
    </NuxtLink>

    <!-- Post Content -->
    <div class="p-6">
      <!-- Category Badge -->
      <span
        class="inline-block bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-0.5 rounded-full mb-3"
      >
        {{ post.category }}
      </span>

      <!-- Title -->
      <h2
        class="text-xl font-bold text-gray-900 mb-3"
      >
        <NuxtLink
          :to="`/blog/${post.slug}`"
          class="hover:text-indigo-600 transition-colors duration-300"
        >
          {{ post.title }}
        </NuxtLink>
      </h2>

      <!-- Excerpt -->
      <p class="text-gray-600 mb-4 line-clamp-3">
        {{ post.excerpt }}
      </p>

      <!-- Meta Information -->
      <div class="flex items-center justify-between text-sm text-gray-500">
        <div class="flex items-center space-x-2 text-xs">
          <span>{{ post.author }}</span>
          <span>•</span>
          <time :datetime="post.date">{{
            new Date(post.date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' })
          }}</time>
          <span>•</span>
          <a
            :href="`mailto:${post.authorEmail}`"
            class="hover:text-gray-700"
          >
            {{ post.authorEmail }}
          </a>
        </div>
        <span>{{ post.readTime }}</span>
      </div>

      <!-- Read More Button -->
      <NuxtLink
        :to="`/blog/${post.slug}`"
        class="inline-block mt-4 text-indigo-600 hover:text-indigo-800 font-medium transition-colors duration-300"
      >
        Read more →
      </NuxtLink>
    </div>
  </article>
</template>
