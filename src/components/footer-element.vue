<script setup lang="ts">
const year = new Date().getFullYear()
</script>

<template>
  <footer>
    <p>copyright © {{ year }}</p>
  </footer>
</template>

<style scoped>
footer {
  width: 100%;
  background-color: #d17862;
  color: #ffffff;
  text-align: center;
  padding: 10px;
  margin-top: auto;
}
</style>
