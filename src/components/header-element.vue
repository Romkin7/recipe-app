<script setup lang="ts">
const altText = 'App Logo'
</script>

<template>
  <header>
    <div id="brand">
      <img src="@/assets/logo.png" :alt="altText" :title="altText" />
    </div>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  height: 60px;
  background-color: #d17862;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

header #brand {
  width: 60px;
  display: flex;
  align-items: center;
  padding-left: 20px;
}

header #brand img {
  max-width: 100%;
  height: auto;
}
</style>
