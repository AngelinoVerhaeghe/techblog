<script setup>
import { ref } from "vue";
import { z } from "zod";

// Zod schema for form validation
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters").max(100, "Subject must be less than 100 characters"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

const formData = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const errors = ref({});
const isSubmitting = ref(false);
const isSubmitted = ref(false);

const contactInfo = ref([
  {
    icon: "📍",
    title: "Address",
    content: "123 Tech Street, Pocoloco, Techworld",
  },
  {
    icon: "📧",
    title: "Email",
    content: "hello@techblog.com",
  },
  {
    icon: "📱",
    title: "Phone",
    content: "+31 (0) 00 123 4567",
  },
]);

function validateField(field, value) {
  try {
    contactSchema.shape[field].parse(value);
    errors.value[field] = "";
  }
  catch (error) {
    if (error instanceof z.ZodError) {
      errors.value[field] = error.errors[0].message;
    }
  }
}

function validateForm() {
  try {
    contactSchema.parse(formData.value);
    errors.value = {};
    return true;
  }
  catch (error) {
    if (error instanceof z.ZodError) {
      errors.value = {};
      error.errors.forEach((err) => {
        const field = err.path[0];
        errors.value[field] = err.message;
      });
    }
    return false;
  }
}

async function handleSubmit() {
  if (!validateForm()) {
    return;
  }

  isSubmitting.value = true;

  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Reset form
  formData.value = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  errors.value = {};

  isSubmitting.value = false;
  isSubmitted.value = true;
}
</script>

<template>
  <div class="max-w-6xl mx-auto">
    <!-- Page Header -->
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">
        Contact Us
      </h1>
      <p class="text-xl text-gray-600">
        Get in touch with us. We'd love to hear from you!
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12">
      <!-- Contact Form or Success Message -->
      <div class="bg-white rounded-lg shadow-md p-8">
        <div v-if="!isSubmitted">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Send us a message
          </h2>

          <form class="space-y-6" @submit.prevent="handleSubmit">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
                  Name *
                </label>
                <input
                  id="name"
                  v-model="formData.name"
                  type="text"
                  required
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300" :class="[
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300',
                  ]"
                  placeholder="Your name"
                  @blur="validateField('name', formData.name)"
                >
                <p v-if="errors.name" class="mt-1 text-sm text-red-600">
                  {{ errors.name }}
                </p>
              </div>

              <div>
                <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  id="email"
                  v-model="formData.email"
                  type="email"
                  required
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300" :class="[
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300',
                  ]"
                  placeholder="your@email.com"
                  @blur="validateField('email', formData.email)"
                >
                <p v-if="errors.email" class="mt-1 text-sm text-red-600">
                  {{ errors.email }}
                </p>
              </div>
            </div>

            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                id="subject"
                v-model="formData.subject"
                type="text"
                required
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-300" :class="[
                  errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300',
                ]"
                placeholder="What's this about?"
                @blur="validateField('subject', formData.subject)"
              >
              <p v-if="errors.subject" class="mt-1 text-sm text-red-600">
                {{ errors.subject }}
              </p>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                rows="6"
                required
                class="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none transition-colors duration-300" :class="[
                  errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300',
                ]"
                placeholder="Tell us more about your inquiry..."
                @blur="validateField('message', formData.message)"
              />
              <p v-if="errors.message" class="mt-1 text-sm text-red-600">
                {{ errors.message }}
              </p>
            </div>

            <button
              type="submit"
              :disabled="isSubmitting"
              class="w-full bg-indigo-600 text-white py-3 px-6 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isSubmitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>
          </form>
        </div>

        <!-- Success Message -->
        <div v-else class="text-center py-8">
          <div class="text-6xl mb-4">
            ✅
          </div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4">
            Thank you for your message!
          </h2>
          <p class="text-gray-600 mb-6">
            We've received your message and will get back to you as soon as possible.
          </p>
          <button
            class="bg-indigo-600 text-white px-6 py-2 rounded-md font-medium hover:bg-indigo-700 transition-colors duration-300"
            @click="isSubmitted = false"
          >
            Send another message
          </button>
        </div>
      </div>

      <!-- Contact Information -->
      <div class="space-y-8">
        <!-- Contact Details -->
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Get in touch
          </h2>

          <div class="space-y-6">
            <div
              v-for="info in contactInfo"
              :key="info.title"
              class="flex items-start space-x-4"
            >
              <div class="text-2xl">
                {{ info.icon }}
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-1">
                  {{ info.title }}
                </h3>
                <p class="text-gray-600">
                  {{ info.content }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Office Hours -->
        <div class="bg-white rounded-lg shadow-md p-8">
          <h2 class="text-2xl font-bold text-gray-900 mb-6">
            Office Hours
          </h2>

          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-gray-600">Monday - Friday</span>
              <span class="font-medium">9:00 AM - 6:00 PM</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Saturday</span>
              <span class="font-medium">10:00 AM - 4:00 PM</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-600">Sunday</span>
              <span class="font-medium">Closed</span>
            </div>
          </div>
        </div>

        <!-- Social Media -->
        <div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white">
          <h2 class="text-2xl font-bold mb-6">
            Follow Us
          </h2>

          <div class="flex space-x-4">
            <a href="#" class="text-white hover:text-indigo-200 transition-colors duration-300">
              <span class="text-2xl">📘</span>
            </a>
            <a href="#" class="text-white hover:text-indigo-200 transition-colors duration-300">
              <span class="text-2xl">🐦</span>
            </a>
            <a href="#" class="text-white hover:text-indigo-200 transition-colors duration-300">
              <span class="text-2xl">💼</span>
            </a>
            <a href="#" class="text-white hover:text-indigo-200 transition-colors duration-300">
              <span class="text-2xl">📷</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
