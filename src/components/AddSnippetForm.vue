<template>
    <!-- Overlay background (click to close) -->
    <div 
      v-if="showForm"
      @click="closeForm"
      class="fixed inset-0 bg-black/50 z-50 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <!-- Form container with close button -->
      <div 
        @click.stop
        class="relative bg-white rounded-xl shadow-2xl w-full max-w-2xl p-6 space-y-6 animate-fade-in"
      >
        <!-- Close button -->
        <button 
          @click="closeForm"
          class="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
          aria-label="Close form"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
  
        <h2 class="text-2xl font-bold text-gray-800">Add New Snippet</h2>
        
        <form @submit.prevent="submitSnippet" class="space-y-4">
          <div>
            <label for="title" class="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input 
              v-model="title" 
              id="title"
              placeholder="What's this snippet about?" 
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              required
            />
          </div>
          
          <div>
            <label for="description" class="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <textarea 
              v-model="description" 
              id="description"
              placeholder="Explain what this does" 
              rows="3"
              class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            ></textarea>
          </div>
          
          <div>
            <label for="code" class="block text-sm font-medium text-gray-700 mb-1">Code</label>
            <textarea 
              v-model="code" 
              id="code"
              placeholder="Paste your code here" 
              rows="6"
              class="w-full font-mono text-sm border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50"
            ></textarea>
          </div>
          
          <div class="flex justify-end space-x-3 pt-2">
            <button 
              type="button" 
              @click="closeForm"
              class="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              class="px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-md transition-all"
            >
              Add Snippet
            </button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      showForm: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        title: '',
        description: '',
        code: ''
      }
    },
    methods: {
      submitSnippet() {
        const newSnippet = {
          id: Date.now(),
          title: this.title,
          description: this.description,
          code: this.code
        }
        this.$emit('add-snippet', newSnippet)
        this.resetForm()
        this.closeForm()
      },
      resetForm() {
        this.title = ''
        this.description = ''
        this.code = ''
      },
      closeForm() {
        this.$emit('close-form')
      }
    }
  }
  </script>
  
  <style>
  /* Animation for modal appearance */
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fade-in {
    animation: fadeIn 0.2s ease-out forwards;
  }
  </style>