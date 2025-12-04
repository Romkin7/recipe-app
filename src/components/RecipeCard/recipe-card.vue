<script setup lang="ts">
import RecipeCardImage from './recipe-card-image.vue'
import RecipeCardQuickView from './recipe-card-quick-view.vue'
import { ref } from 'vue'

defineProps(['recipe'])

const showDetails = ref(false)

const setShowDetails = (shouldShow: boolean) => {
  showDetails.value = shouldShow
}
</script>

<template>
  <article class="recipe-card">
    <component
      :is="showDetails ? RecipeCardQuickView : RecipeCardImage"
      v-bind:image="recipe.image"
      v-bind:quickview="recipe.quickView"
      @to-quickview="() => setShowDetails(true)"
      @to-image="() => setShowDetails(false)"
    />
  </article>
</template>

<style scoped>
/* RECIPE CARD STYLES */
.recipe-card {
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 5px #ddd;
  padding: 15px;
  text-align: center;
}
/* ----------------- */
</style>
