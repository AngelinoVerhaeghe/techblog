<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function handleOutsideClick(e) {
  if (!e.target.closest("nav")) {
    closeMenu();
  }
}

onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick);
});
</script>

<template>
  <nav role="navigation" class="bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo/Brand -->
        <div class="flex-shrink-0">
          <NuxtLink to="/" class="text-white font-bold text-xl hover:text-gray-100 transition-colors duration-300">
            <span class="bg-gradient-to-r from-white to-gray-100 bg-clip-text text-transparent">
              TechBlog
            </span>
          </NuxtLink>
        </div>

        <!-- Navigation Links - Desktop -->
        <div class="hidden md:flex space-x-8">
          <NuxtLink
            to="/"
            class="text-white font-medium px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
            active-class="bg-white/20 font-semibold"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="text-white font-medium px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
            active-class="bg-white/20 font-semibold"
          >
            Blog
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="text-white font-medium px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
            active-class="bg-white/20 font-semibold"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-white font-medium px-3 py-2 rounded-md text-sm transition-all duration-300 hover:bg-white/10 hover:-translate-y-0.5"
            active-class="bg-white/20 font-semibold"
          >
            Contact
          </NuxtLink>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button
            class="text-white hover:text-gray-100 focus:outline-none focus:text-gray-100 transition-colors duration-300"
            :aria-expanded="isMenuOpen"
            aria-label="Toggle menu"
            @click="toggleMenu"
          >
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span
                class="w-6 h-0.5 bg-white rounded transition-all duration-300"
                :class="{ 'rotate-45 translate-y-1': isMenuOpen }"
              />
              <span
                class="w-6 h-0.5 bg-white rounded mt-1 transition-all duration-300"
                :class="{ 'opacity-0': isMenuOpen }"
              />
              <span
                class="w-6 h-0.5 bg-white rounded mt-1 transition-all duration-300"
                :class="{ '-rotate-45 -translate-y-1': isMenuOpen }"
              />
            </div>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        class="md:hidden transition-all duration-300 ease-in-out"
        :class="{ 'max-h-64 opacity-100': isMenuOpen, 'max-h-0 opacity-0': !isMenuOpen }"
      >
        <div class="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-b-lg shadow-lg">
          <NuxtLink
            to="/"
            class="text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:bg-white/10"
            active-class="bg-white/20 font-semibold"
            @click="closeMenu"
          >
            Home
          </NuxtLink>
          <NuxtLink
            to="/blog"
            class="text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:bg-white/10"
            active-class="bg-white/20 font-semibold"
            @click="closeMenu"
          >
            Blog
          </NuxtLink>
          <NuxtLink
            to="/about"
            class="text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:bg-white/10"
            active-class="bg-white/20 font-semibold"
            @click="closeMenu"
          >
            About
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300 hover:bg-white/10"
            active-class="bg-white/20 font-semibold"
            @click="closeMenu"
          >
            Contact
          </NuxtLink>
        </div>
      </div>
    </div>
  </nav>
</template>
