<script setup lang="ts">
defineProps(['quickview', 'handleClick'])
import BackArrowIcon from '@/assets/icons/back-arrow-icon.svg?component'
import Button from '@/components/Button/button-element.vue'
</script>

<template>
  <div class="quickview">
    <h2>{{ quickview.title }}</h2>
    <div class="details">
      <div class="details">
        <p>{{ quickview.minutes }} minutes</p>
        <p>Serves {{ quickview.serves }}</p>
        <p>{{ quickview.ingredients.length }} key ingredients</p>
      </div>
    </div>
    <div class="actions">
      <Button v-on:click="$emit('to-image')"><BackArrowIcon /> Back</Button>
    </div>
  </div>
</template>

<style scoped>
/* RECIPE CARD QUICKVIEW STYLES */
.quickview {
  aspect-ratio: 1/1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
.quickview h1 {
  font-size: 1.3rem;
}
.quickview .actions {
  display: flex;
  align-items: center;
  gap: 5px;
  flex-grow: 1;
}
.quickview .actions svg {
  cursor: pointer;
  transition: transform 0.2s;
}
.quickview .actions svg:hover {
  transform: scale(1.1);
}
/* ----------------- */
</style>
