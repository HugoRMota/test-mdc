<template>
  <div class="page-1">
    <p v-for="paragraph in text">
      {{ paragraph }}
    </p>

    <div class="page-1-button">
      <AppButton @click="updateText()">Update Text</AppButton>
    </div>
  </div>
</template>
<script setup>
import AppButton from '../components/AppButton.vue'
import { getText } from '../services/generateText'
import { ref, onMounted } from 'vue'
const text = ref([])

const updateText = async () => {
  try {
    text.value = await getText()
  } catch (error) {
    console.log('🚀 ~ file: TestOne.vue:24 ~ updateText ~ error:', error)
  }
}

onMounted(() => {
  updateText()
})
</script>
<style scoped lang="scss">
.page-1 {
  @apply py-12 px-6 space-y-3;

  &-button {
    @apply py-6 flex justify-center;
  }
}
</style>
