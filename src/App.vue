<template>
  <div>
    <AppNavbar @open-form="showForm = true" />
    <SnippetForm
      v-if="showForm"
      @add-snippet="addSnippet"
      @close="showForm = false"
    />
    <router-view :snippets="snippets" />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue'
import SnippetForm from './components/SnippetForm.vue'

export default {
  components: { AppNavbar, SnippetForm },
  data() {
    return {
      showForm: false,
      snippets: [] // central data
    }
  },
  methods: {
    addSnippet(snippet) {
      this.snippets.push(snippet)
      this.showForm = false
    }
  }
}
</script>
