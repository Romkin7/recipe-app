<script setup lang="ts">
import Banner from './components/banner-element.vue'
import Header from './components/header-element.vue'
import Footer from './components/footer-element.vue'
import RecipeCard from './components/RecipeCard/recipe-card.vue'
import recipes from './assets/data.ts'
</script>

<template>
  <Header />
  <main>
    <Banner>
      <p>🚨 <strong>NEW RECIPE:</strong> Triple Chocolate Chip Cookies! 🚨</p>
    </Banner>
    <RecipeCard
      v-for="recipe in recipes"
      v-bind:key="recipe.quickView.title"
      v-bind:recipe="recipe"
    />
  </main>
  <Footer />
</template>

<style scoped>
* {
  box-sizing: border-box;
}

html,
body,
#app {
  padding: 0;
  height: 100%;
  margin: 0;
}

main {
  min-height: calc(100vh - 120px);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
  justify-content: center;
  background-color: #f9f9f9;
  padding-bottom: 4rem;
}

* {
  padding: 0;
  margin: 0;
  font-family: sans-serif;
  box-sizing: border-box;
}

body {
  background: #eee;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  font-weight: normal;
  min-height: 100vh;
  align-items: center;
}
</style>
