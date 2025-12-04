<script setup lang="ts"></script>

<template>
  <button><slot /></button>
</template>

<style scoped>
/* BUTTON STYLES */
button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  border: none;
  cursor: pointer;
  background: #d17862;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 1rem;
  transition: transform 0.2s;
}
button:hover {
  transform: scale(1.05);
}
/* ----------------- */
</style>
