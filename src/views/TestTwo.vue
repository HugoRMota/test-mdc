<template>
  <div class="container">
    <div class="group">
      <div class="group-item"></div>
      <div class="group-item"></div>
      <div class="group-item"></div>
    </div>
  </div>
</template>
<style lang="scss">
.container {
  @apply px-6 py-12 w-full;
}
.group {
  @apply grid gap-6 md:grid-cols-3 grid-cols-1;

  &-item {
    @apply border border-gray-600 rounded-md h-80 bg-red-400;
  }
}
</style>
