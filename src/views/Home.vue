<template>
  <div class="p-6 space-y-10 max-w-7xl mx-auto">
    <h1 class="text-4xl md:text-6xl font-extrabold text-center text-gray-900 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent py-2">
  Developer Snippets Library
</h1>
<p class="text-center text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed font-light">
  Browse useful code snippets by language, see what's trending, or explore the newest additions.
</p>

    <!-- Latest Snippets -->
    <SnippetSection 
      title="Latest Snippets" 
      :snippets="latestSnippets" 
      link="/latest"
    />

    <!-- Most Viewed -->
    <SnippetSection 
      title="Most Viewed" 
      :snippets="mostViewedSnippets" 
      link="/most-viewed"
    />

    <!-- Topic-wise Previews -->
    <div class="space-y-12">
      <SnippetSection 
        title="HTML Snippets" 
        :snippets="topics.html" 
        link="/html"
      />
      <SnippetSection 
        title="CSS Snippets" 
        :snippets="topics.css" 
        link="/css"
      />
      <SnippetSection 
        title="JavaScript Snippets" 
        :snippets="topics.javascript" 
        link="/javascript"
      />
      <SnippetSection 
        title="Python Snippets" 
        :snippets="topics.python" 
        link="/python"
      />
    </div>
  </div>
</template>

<script>
import SnippetSection from '../components/SnippetSection.vue'

export default {
  name: "HomePage",
  components: {
    SnippetSection
  },
  data() {
    return {
      latestSnippets: [
        { id: 1, title: "Responsive Nav", description: "A clean responsive navbar", code: "<nav>...</nav>" },
        { id: 2, title: "Dark Mode Toggle", description: "JS toggle for dark mode", code: "document.body..." },
        { id: 3, title: "Python List Comprehension", description: "Shorten your loops", code: "[x for x in range(10)]" }
      ],
      mostViewedSnippets: [
        { id: 4, title: "Sticky Header", description: "Keep header fixed", code: "position: sticky;" },
        { id: 5, title: "JavaScript Debounce", description: "Performance boost", code: "function debounce..." }
      ],
      topics: {
        html: [
          { id: 6, title: "Basic HTML Template", description: "Starter template", code: "<!DOCTYPE html>..." }
        ],
        css: [
          { id: 7, title: "Flex Centering", description: "Center anything", code: "display: flex; ..." }
        ],
        javascript: [
          { id: 8, title: "Event Delegation", description: "Efficient event handling", code: "document.addEventListener..." }
        ],
        python: [
          { id: 9, title: "Lambda Function", description: "Inline functions", code: "lambda x: x+1" }
        ]
      }
    }
  }
}
</script>
