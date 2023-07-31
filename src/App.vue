<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AppNav from './components/AppNav.vue'
</script>

<template>
  <app-nav></app-nav>
  <div class="w-full">
    <RouterView />
  </div>
</template>

<style scoped></style>
