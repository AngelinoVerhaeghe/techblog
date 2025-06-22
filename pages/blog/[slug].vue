<script setup lang="ts">
import { useRoute } from "vue-router";

import PostDetail from "~/components/blog/post-detail.vue";
import { useBlogPosts } from "~/composables/use-blog-posts";

import type { BlogPost } from "../../types/blog";

import { usePrevNext } from "../../composables/use-prev-next";

const route = useRoute();
const { blogPosts } = useBlogPosts();

const post = computed<BlogPost | undefined>(() => {
  return blogPosts.value.find((p: BlogPost) => p.slug === route.params.slug);
});

const { prevPost, nextPost } = usePrevNext(post);
</script>

<template>
  <div class="bg-gray-50 min-h-screen py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <PostDetail v-if="post" :post="post" />
      <div v-else class="text-center">
        <h1 class="text-2xl text-gray-700">
          Post not found
        </h1>
      </div>

      <!-- Post Navigation -->
      <div v-if="post" class="mt-12 flex justify-between items-center max-w-4xl mx-auto">
        <!-- Previous Post -->
        <NuxtLink
          v-if="prevPost"
          :to="`/blog/${prevPost.slug}`"
          class="flex items-center space-x-3 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200"
        >
          <span>&larr;</span>
          <div>
            <span class="text-sm text-gray-500">Previous Post</span>
            <h4 class="text-md font-bold text-gray-800">
              {{ prevPost.title }}
            </h4>
          </div>
        </NuxtLink>
        <div v-else class="w-1/2" />

        <!-- Next Post -->
        <NuxtLink
          v-if="nextPost"
          :to="`/blog/${nextPost.slug}`"
          class="flex items-center space-x-3 p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 text-right"
        >
          <div>
            <span class="text-sm text-gray-500">Next Post</span>
            <h4 class="text-md font-bold text-gray-800">
              {{ nextPost.title }}
            </h4>
          </div>
          <span>&rarr;</span>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
