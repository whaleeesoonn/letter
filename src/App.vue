<script setup>
import { ref } from 'vue'
import SnowCanvas from './components/SnowCanvas.vue'
import Envelope from './components/Envelope.vue'
import Letter from './components/Letter.vue'

const open = ref(false)
</script>

<template>
  <SnowCanvas />
  <main class="stage">
    <Envelope v-if="!open" @open="open = true" />
    <Letter v-else />
  </main>
</template>

<style scoped>
.stage {
  position: relative; z-index: 2; min-height: 100vh;
  display: flex; align-items: center; justify-content: center; padding: 24px 16px;
}
</style>
