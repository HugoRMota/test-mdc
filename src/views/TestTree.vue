<template>
  <div>
    <div
      class="flex items-center justify-center min-h-screen from-gray-800 via-greeen-300 to-blue-500 bg-gradient-to-br"
    >
      <div class="w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-lg shadow-xl">
        <div class="max-w-md mx-auto space-y-6">
          <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
            <div class="mx-auto max-w-screen-sm text-center flex justify-center items-end">
              <h1
                class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500"
              >
                {{ info.temperature }}
              </h1>
              <p class="mb-4 text-3xl tracking-tight font-bold text-black md:text-4xl">
                {{ info.type }}
              </p>
            </div>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400 text-center">
              {{ info.city }}
            </p>
          </div>
        </div>
      </div>
    </div>
    {{ info }}
  </div>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { getMeteo, getIP } from '../services/meteo'

const info = ref({
  city: null,
  temperature: null,
  type: null
})

const getLocation = async () => {
  try {
    const { location } = await getIP()
    info.value.city = location.city.name

    showPosition(location.latitude, location.longitude)
  } catch (error) {
    console.log('🚀 ~ file: TestTree.vue:21 ~ getLocation ~ error:', error)
  }
}

const showPosition = async (latitude, longitude) => {
  try {
    const { hourly, hourly_units } = await getMeteo(latitude, longitude)

    info.value.temperature = hourly.temperature_2m[0]
    info.value.type = hourly_units.temperature_2m
  } catch (error) {}
}

onMounted(() => {
  getLocation()
})
</script>
