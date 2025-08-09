<template>
  <div>
    <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
    <div v-if="snippets.length === 0" class="text-gray-500">No snippets yet.</div>
    <div class="grid gap-4 md:grid-cols-2">
      <div v-for="snippet in snippets" :key="snippet.id" class="p-4 bg-gray-100 rounded shadow">
        <h3 class="font-semibold text-lg">{{ snippet.title }}</h3>
        <p class="text-sm text-gray-700">{{ snippet.description }}</p>
        <pre class="bg-gray-900 text-green-300 text-sm mt-2 p-2 rounded overflow-auto">
{{ snippet.code }}
        </pre>
      </div>
    </div>
    <div class="mt-4">
      <router-link :to="link" class="text-blue-600 hover:underline">More</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SnippetSection',
  props: {
    title: String,
    snippets: Array,
    link: String
  }
}
</script>
