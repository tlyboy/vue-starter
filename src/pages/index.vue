<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
</script>

<template>
  <div>
    <p>
      Vue Starter
    </p>
  </div>

  <nav mt-6 inline-flex gap-2 text-xl>
    <button id="toggle-dark" icon-btn>
      <div i-carbon-sun dark:i-carbon-moon />
    </button>

    <a
      i-carbon-logo-github icon-btn
      rel="noreferrer"
      href="https://github.com/tlyboy/vanilla-starter"
      target="_blank"
      title="GitHub"
    />
  </nav>
</template>
