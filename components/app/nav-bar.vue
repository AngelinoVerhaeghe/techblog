<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const isMenuOpen = ref(false);
const route = useRoute();

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

const isHome = computed(() => route.path === "/");
</script>

<template>
  <nav
    role="navigation"
    class="transition-colors duration-300" :class="[
      isHome
        ? 'bg-transparent absolute top-0 left-0 w-full z-50'
        : 'bg-white shadow-md sticky top-0 left-0 w-full z-50',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <div class="flex items-center flex-shrink-0">
          <NuxtLink to="/" class="flex items-center group">
            <svg class="h-8 w-8 mr-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 24C6 14 18 14 24 24C30 34 42 34 46 24" :stroke="isHome ? '#38bdf8' : '#6366f1'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2 24C6 34 18 34 24 24C30 14 42 14 46 24" :stroke="isHome ? '#6366f1' : '#38bdf8'" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="sr-only">Home</span>
          </NuxtLink>
        </div>
        <!-- Center Menu -->
        <div class="hidden md:flex space-x-8 mx-auto" :class="[isHome ? 'text-white' : 'text-gray-900']">
          <NuxtLink to="/" class="font-semibold text-sm hover:underline underline-offset-4 transition" :class="[isHome ? 'text-white' : 'text-gray-900']">
            Home
          </NuxtLink>
          <NuxtLink to="/blog" class="font-semibold text-sm hover:underline underline-offset-4 transition" :class="[isHome ? 'text-white' : 'text-gray-900']">
            Blog
          </NuxtLink>
          <NuxtLink to="/about" class="font-semibold text-sm hover:underline underline-offset-4 transition" :class="[isHome ? 'text-white' : 'text-gray-900']">
            About
          </NuxtLink>
          <NuxtLink to="/contact" class="font-semibold text-sm hover:underline underline-offset-4 transition" :class="[isHome ? 'text-white' : 'text-gray-900']">
            Contact
          </NuxtLink>
        </div>
        <!-- Mobile Menu Button -->
        <div class="md:hidden flex items-center">
          <button
            class="hover:text-indigo-600 focus:outline-none transition-colors duration-300" :class="[isHome ? 'text-white' : 'text-gray-900']"
            :aria-expanded="isMenuOpen"
            aria-label="Toggle menu"
            @click="toggleMenu"
          >
            <div class="w-6 h-6 flex flex-col justify-center items-center">
              <span
                class="w-6 h-0.5 rounded transition-all duration-300"
                :class="[isHome ? 'bg-white' : 'bg-gray-900', { 'rotate-45 translate-y-1': isMenuOpen }]"
              />
              <span
                class="w-6 h-0.5 rounded mt-1 transition-all duration-300"
                :class="[isHome ? 'bg-white' : 'bg-gray-900', { 'opacity-0': isMenuOpen }]"
              />
              <span
                class="w-6 h-0.5 rounded mt-1 transition-all duration-300"
                :class="[isHome ? 'bg-white' : 'bg-gray-900', { '-rotate-45 -translate-y-1': isMenuOpen }]"
              />
            </div>
          </button>
        </div>
      </div>
      <!-- Mobile Menu: Slide-in from right with glassmorphism -->
      <transition name="slide-fade">
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 z-50 flex justify-end md:hidden"
        >
          <div class="absolute inset-0 bg-black/30" @click="closeMenu" />
          <div
            class="relative w-4/5 max-w-xs h-full bg-white/30 backdrop-blur-lg border-l border-white/30 shadow-2xl flex flex-col px-6 py-8 space-y-2 transition-transform duration-300 ease-in-out"
            style="right: 0;"
          >
            <button
              class="absolute top-4 right-4 text-2xl text-gray-700 hover:text-indigo-600 focus:outline-none"
              aria-label="Close menu"
              @click="closeMenu"
            >
              &times;
            </button>
            <NuxtLink to="/" class="block px-3 py-3 rounded-md text-lg font-semibold transition-colors duration-300 hover:bg-white/20" :class="[(isHome ? 'text-white' : 'text-gray-900')]" @click="closeMenu">
              Home
            </NuxtLink>
            <NuxtLink to="/blog" class="block px-3 py-3 rounded-md text-lg font-semibold transition-colors duration-300 hover:bg-white/20" :class="[(isHome ? 'text-white' : 'text-gray-900')]" @click="closeMenu">
              Blog
            </NuxtLink>
            <NuxtLink to="/about" class="block px-3 py-3 rounded-md text-lg font-semibold transition-colors duration-300 hover:bg-white/20" :class="[(isHome ? 'text-white' : 'text-gray-900')]" @click="closeMenu">
              About
            </NuxtLink>
            <NuxtLink to="/contact" class="block px-3 py-3 rounded-md text-lg font-semibold transition-colors duration-300 hover:bg-white/20" :class="[(isHome ? 'text-white' : 'text-gray-900')]" @click="closeMenu">
              Contact
            </NuxtLink>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<style scoped>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.slide-fade-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-fade-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-fade-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
