<template>
  <nav class="nav">
    <div class="nav-container">
      <div class="nav-containter-content">
        <div class="nav-containter-content-menu">
          <div class="nav-containter-content-menu-space space-x-4">
            <RouterLink
              v-for="(item, index) in menu"
              :key="index"
              :to="item.url"
              v-slot="{ isActive }"
              :class="isActive ? 'bg-gray-900' : 'bg-gray-600'"
              >{{ item.title }}
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const menu = ref([
  { title: 'Test One', url: 'test-one' },
  { title: 'Test Two', url: 'test-two' },
  { title: 'Test Tree', url: 'test-tree' },
  { title: 'Test For', url: 'test-for' }
])
</script>
<style scoped lang="scss">
.nav {
  @apply bg-gray-800;
}
.nav-container {
  @apply mx-auto max-w-7xl py-3 px-2 sm:px-6 lg:px-8;
}

.nav-container-content {
  @apply relative flex h-16 items-center justify-between;
}
.nav-container-content-menu {
  @apply flex flex-1 items-center justify-center sm:items-stretch sm:justify-start;
}

.nav-container-content-menu-space {
  @apply flex space-x-4;
}

.nav-container-content-menu-space,
a {
  @apply text-white rounded-md px-3 py-2 text-sm font-medium;
}
</style>
