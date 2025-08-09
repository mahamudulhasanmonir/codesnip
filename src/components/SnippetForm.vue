<template>
    <div class="p-6 bg-white shadow rounded-lg max-w-xl mx-auto mt-8">
      <form @submit.prevent="submitForm" class="space-y-4">
        <input v-model="title" required placeholder="Title" class="input" />
        <textarea v-model="description" required placeholder="Description" class="input" />
        <textarea v-model="code" required placeholder="Code" class="input" />
        <select v-model="topic" required class="input">
          <option value="">Select topic</option>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
        <div class="flex justify-end space-x-2">
          <button type="button" @click="$emit('close')" class="btn-secondary">Cancel</button>
          <button type="submit" class="btn-primary">Add Snippet</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        code: '',
        topic: ''
      }
    },
    methods: {
      submitForm() {
        this.$emit('add-snippet', {
          title: this.title,
          description: this.description,
          code: this.code,
          topic: this.topic,
          views: 0 // optional for future use
        })
        this.title = this.description = this.code = this.topic = ''
      }
    }
  }
  </script>
  
  <style scoped>
  .input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ddd;
    border-radius: 0.5rem;
  }
  .btn-primary {
    background-color: #2563eb;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
  .btn-secondary {
    background-color: #f3f4f6;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
  </style>
  