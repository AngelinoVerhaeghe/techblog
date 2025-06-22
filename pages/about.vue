<script setup>
import { ref } from "vue";

const teamMembers = ref([
  {
    name: "John Doe",
    role: "Founder & CEO",
    bio: "Passionate about creating innovative web solutions and sharing knowledge with the community.",
    avatar: "👨‍💼",
  },
  {
    name: "Jane Smith",
    role: "Lead Developer",
    bio: "Expert in Vue.js and modern web technologies with 8+ years of experience.",
    avatar: "👩‍💻",
  },
  {
    name: "Mike Johnson",
    role: "UI/UX Designer",
    bio: "Creating beautiful and intuitive user experiences that users love.",
    avatar: "🎨",
  },
]);

const stats = ref([
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "100+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Team Members", value: "10+" },
]);
</script>

<template>
  <div class="max-w-4xl mx-auto">
    <!-- Hero Section -->
    <div class="text-center mb-16">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">
        About Us
      </h1>
      <p class="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We are a passionate team of developers, designers, and creators dedicated to building amazing web experiences.
        Our mission is to share knowledge, inspire others, and contribute to the ever-evolving world of web development.
      </p>
    </div>

    <!-- Stats Section -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
      <div
        v-for="stat in stats"
        :key="stat.label"
        class="text-center"
      >
        <div class="text-3xl font-bold text-indigo-600 mb-2">
          {{ stat.value }}
        </div>
        <div class="text-gray-600">
          {{ stat.label }}
        </div>
      </div>
    </div>

    <!-- Mission Section -->
    <div class="bg-white rounded-lg shadow-md p-8 mb-16">
      <h2 class="text-2xl font-bold text-gray-900 mb-6">
        Our Mission
      </h2>
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">
            Innovation
          </h3>
          <p class="text-gray-600">
            We constantly explore new technologies and methodologies to deliver cutting-edge solutions
            that meet the evolving needs of our clients and users.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">
            Education
          </h3>
          <p class="text-gray-600">
            We believe in sharing knowledge and empowering others through comprehensive tutorials,
            guides, and open-source contributions.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">
            Quality
          </h3>
          <p class="text-gray-600">
            Every project we undertake is crafted with attention to detail, ensuring high performance,
            accessibility, and user satisfaction.
          </p>
        </div>
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-3">
            Community
          </h3>
          <p class="text-gray-600">
            We actively participate in the developer community, contributing to discussions,
            conferences, and collaborative projects.
          </p>
        </div>
      </div>
    </div>

    <!-- Team Section -->
    <div class="mb-16">
      <h2 class="text-2xl font-bold text-gray-900 mb-8 text-center">
        Meet Our Team
      </h2>
      <div class="grid md:grid-cols-3 gap-8">
        <div
          v-for="member in teamMembers"
          :key="member.name"
          class="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
        >
          <div class="text-4xl mb-4">
            {{ member.avatar }}
          </div>
          <h3 class="text-xl font-bold text-gray-900 mb-2">
            {{ member.name }}
          </h3>
          <p class="text-indigo-600 font-medium mb-4">
            {{ member.role }}
          </p>
          <p class="text-gray-600">
            {{ member.bio }}
          </p>
        </div>
      </div>
    </div>

    <!-- Values Section -->
    <div class="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-8 text-white">
      <h2 class="text-2xl font-bold mb-6 text-center">
        Our Values
      </h2>
      <div class="grid md:grid-cols-3 gap-6">
        <div class="text-center">
          <div class="text-3xl mb-3">
            🚀
          </div>
          <h3 class="font-semibold mb-2">
            Excellence
          </h3>
          <p class="text-indigo-100">
            We strive for excellence in everything we do
          </p>
        </div>
        <div class="text-center">
          <div class="text-3xl mb-3">
            🤝
          </div>
          <h3 class="font-semibold mb-2">
            Collaboration
          </h3>
          <p class="text-indigo-100">
            Working together to achieve great results
          </p>
        </div>
        <div class="text-center">
          <div class="text-3xl mb-3">
            💡
          </div>
          <h3 class="font-semibold mb-2">
            Innovation
          </h3>
          <p class="text-indigo-100">
            Always exploring new ideas and solutions
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
