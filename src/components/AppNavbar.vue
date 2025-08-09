<template>
  <nav class="bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-3 flex justify-between items-center sticky top-0 z-50">
    <!-- Logo with gradient and hover effect -->
    <router-link 
      to="/" 
      class="text-2xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
    >
      CodeSnip
    </router-link>

    <!-- Navigation links with animated underline -->
    <div class="hidden md:flex items-center space-x-8">
      <router-link 
        v-for="link in links" 
        :key="link.to" 
        :to="link.to"
        class="relative text-gray-600 hover:text-gray-900 font-medium group transition-colors"
      >
        {{ link.text }}
        <span class="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
      </router-link>
    </div>

    <!-- Add Snippet button with glow effect -->
    <button 
      @click="$emit('open-form')" 
      class="relative overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-lg hover:shadow-lg hover:shadow-indigo-200 transition-all duration-300 group"
    >
      <span class="relative z-10 flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
        </svg>
        Add Snippet
      </span>
      <span class="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
    </button>

    <!-- Mobile menu button (optional) -->
    <button class="md:hidden p-2 rounded-lg hover:bg-gray-100">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    </button>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { to: '/html', text: 'HTML' },
        { to: '/css', text: 'CSS' },
        { to: '/javascript', text: 'JavaScript' },
        { to: '/python', text: 'Python' }
      ]
    }
  }
}
</script>