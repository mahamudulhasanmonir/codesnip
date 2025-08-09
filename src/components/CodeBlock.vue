<template>
    <div class="code-container">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
  
      <div class="code-block">
        <pre><code ref="codeRef">{{ code }}</code></pre>
        <button @click="copyCode">{{ copied ? 'Copied!' : 'Copy' }}</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      description: String,
      code: String,
    },
    data() {
      return {
        copied: false,
      };
    },
    methods: {
      copyCode() {
        const text = this.code;
        navigator.clipboard.writeText(text).then(() => {
          this.copied = true;
          setTimeout(() => (this.copied = false), 2000);
        });
      },
    },
  };
  </script>
  
  <style scoped>
  .code-container {
    max-width: 800px;
    margin: auto;
    font-family: 'Fira Code', monospace;
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #666;
  }
  
  .code-block {
    position: relative;
    background: #1e1e1e;
    color: #d4d4d4;
    border-radius: 8px;
    padding: 1rem;
    overflow: auto;
    font-size: 0.9rem;
  }
  
  .code-block pre {
    margin: 0;
  }
  
  .code-block button {
    position: absolute;
    top: 10px;
    right: 10px;
    background: #007acc;
    color: white;
    border: none;
    padding: 5px 10px;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .code-block button:hover {
    background: #005fa3;
  }
  </style>
  