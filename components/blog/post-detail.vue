<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <article class="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
    <header class="mb-8">
      <h1 class="text-4xl font-extrabold text-gray-900 mb-4">
        {{ post.title }}
      </h1>
      <img
        :src="post.imageUrl"
        :alt="`Image for ${post.title}`"
        class="w-full h-96 object-cover rounded-lg mb-4"
      >
      <div class="flex items-center text-gray-500 text-sm">
        <p>By {{ post.author }}</p>
        <span class="mx-2">&middot;</span>
        <p>{{ new Date(post.date).toLocaleDateString('nl-NL', { day: 'numeric', month: 'long', year: 'numeric' }) }}</p>
        <span class="mx-2">&middot;</span>
        <p>{{ post.readTime }}</p>
      </div>
    </header>
    <div class="prose prose-lg max-w-none" v-html="post.content" />
  </article>
</template>
