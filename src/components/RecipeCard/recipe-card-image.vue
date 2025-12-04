<script setup lang="ts">
defineProps(['image'])
</script>

<template>
  <button v-on:click="$emit('to-quickview')">
    <img :src="`./photos/${image}`" />
  </button>
</template>

<style scoped>
/* RECIPE CARD IMAGE STYLES */
img {
  aspect-ratio: 1/1;
  width: 100%;
  border-radius: 5px;
  cursor: pointer;
  opacity: 0.9;
  transition: opacity 0.2s;
}
img:hover {
  opacity: 1;
}

button {
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
}
/* ----------------- */
</style>
