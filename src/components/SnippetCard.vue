<template>
    <div class="bg-white border rounded-xl p-4 shadow hover:shadow-md transition">
      <h3 class="text-lg font-semibold mb-1">{{ snippet.title }}</h3>
      <p class="text-gray-600 mb-2">{{ snippet.description }}</p>
      <pre class="bg-gray-900 text-gray-100 rounded-md p-3 text-sm overflow-auto relative">
        <code>{{ snippet.code }}</code>
        <button 
          @click="copyCode(snippet.code)"
          class="absolute top-2 right-2 text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
        >
          Copy
        </button>
      </pre>
    </div>
  </template>
  
  <script>
  export default {
    props: ['snippet'],
    methods: {
      copyCode(code) {
        navigator.clipboard.writeText(code)
      }
    }
  }
  </script>
  