<template>
    <div
      class="p-6 rounded-xl text-white shadow-xl"
      :class="weatherClass"
    >
      <h2 class="text-2xl font-bold mb-2">Tallinna ilm</h2>
      <div v-if="weather">
        <p class="capitalize text-lg">{{ weather.weather[0].description }}</p>
        <p class="text-4xl">{{ weather.main.temp.toFixed(1) }}°C</p>
      </div>
      <div v-else>
        <p>Laen ilmaandmeid...</p>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, computed } from 'vue'
  
  const config = useRuntimeConfig()
  const API_KEY = config.public.openWeatherApiKey

  const weather = ref(null)
  
  onMounted(async () => {
    const res = await fetch('/api/weather')
    weather.value = await res.json()
  })
  
  const weatherClass = computed(() => {
    if (!weather.value) return ''
    const main = weather.value.weather[0].main.toLowerCase()
    if (main.includes('rain')) return 'bg-blue-600'
    if (main.includes('clear')) return 'bg-yellow-400 text-black'
    if (main.includes('cloud')) return 'bg-gray-500'
    return 'bg-indigo-600'
  })
  </script>
  