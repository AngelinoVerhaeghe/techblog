import type { Ref } from "vue";

import type { BlogPost } from "~/types/blog";

import { useBlogPosts } from "~/composables/use-blog-posts";

export function usePrevNext(currentPost: Ref<BlogPost | undefined>) {
  const { blogPosts } = useBlogPosts();

  const currentIndex = computed(() => {
    if (!currentPost.value) {
      return -1;
    }
    return blogPosts.value.findIndex(p => p.slug === currentPost.value!.slug);
  });

  const prevPost = computed(() => {
    if (currentIndex.value > 0) {
      return blogPosts.value[currentIndex.value - 1];
    }
    return null;
  });

  const nextPost = computed(() => {
    if (currentIndex.value < blogPosts.value.length - 1 && currentIndex.value !== -1) {
      return blogPosts.value[currentIndex.value + 1];
    }
    return null;
  });

  return { prevPost, nextPost };
}
