<script setup>
// No script needed unless for dynamic year, which is handled inline
</script>

<template>
  <footer class="bg-gray-900 text-gray-300 pt-12 pb-6 px-4 border-t border-gray-800">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        <!-- Logo and tagline -->
        <div class="flex-1 mb-8 md:mb-0">
          <div class="flex items-center mb-4">
            <svg class="h-8 w-8 mr-2" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 24C6 14 18 14 24 24C30 34 42 34 46 24" stroke="#38bdf8" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M2 24C6 34 18 34 24 24C30 14 42 14 46 24" stroke="#6366f1" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="text-xl font-bold text-white">TechBlog</span>
          </div>
          <p class="mb-6 max-w-xs text-gray-400">
            Insights, tutorials, and news for developers and tech enthusiasts. Stay ahead in the world of technology with our curated content.
          </p>
          <!-- Social icons -->
          <div class="flex space-x-4">
            <NuxtLink to="https://facebook.com" target="_blank" aria-label="Facebook" class="hover:text-white">
              <Icon name="tabler:brand-facebook" size="24" />
            </NuxtLink>
            <NuxtLink to="https://instagram.com" target="_blank" aria-label="Instagram" class="hover:text-white">
              <Icon name="tabler:brand-instagram" size="24" />
            </NuxtLink>
            <NuxtLink to="https://x.com" target="_blank" aria-label="X (Twitter)" class="hover:text-white">
              <Icon name="tabler:brand-x" size="24" />
            </NuxtLink>
            <NuxtLink to="https://github.com" target="_blank" aria-label="GitHub" class="hover:text-white">
              <Icon name="tabler:brand-github" size="24" />
            </NuxtLink>
            <NuxtLink to="https://youtube.com" target="_blank" aria-label="YouTube" class="hover:text-white">
              <Icon name="tabler:brand-youtube" size="24" />
            </NuxtLink>
          </div>
        </div>
        <!-- Footer links -->
        <div class="flex-1 grid grid-cols-2 sm:grid-cols-2 gap-8">
          <div>
            <h3 class="text-white font-semibold mb-3">
              Company
            </h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="/about" class="hover:underline">
                  About
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/blog" class="hover:underline">
                  Blog
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="/contact" class="hover:underline">
                  Contact
                </NuxtLink>
              </li>
            </ul>
          </div>
          <div>
            <h3 class="text-white font-semibold mb-3">
              Legal
            </h3>
            <ul class="space-y-2">
              <li>
                <NuxtLink to="#" class="hover:underline">
                  Terms of service
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="hover:underline">
                  Privacy policy
                </NuxtLink>
              </li>
              <li>
                <NuxtLink to="#" class="hover:underline">
                  License
                </NuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-12 border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © {{ new Date().getFullYear() }} TechBlog. All rights reserved.
      </div>
    </div>
  </footer>
</template>
