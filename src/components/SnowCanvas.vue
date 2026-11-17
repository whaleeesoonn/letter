<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const canvas = ref(null)
let raf, flakes = [], w, h, ctx

function resize() {
  w = canvas.value.width = window.innerWidth
  h = canvas.value.height = window.innerHeight
  const n = Math.min(160, Math.floor((w * h) / 9000))
  flakes = Array.from({ length: n }, () => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 2.8 + 0.8,
    s: Math.random() * 0.9 + 0.4,
    d: Math.random() * Math.PI * 2
  }))
}

function tick() {
  ctx.clearRect(0, 0, w, h)
  ctx.fillStyle = 'rgba(255,255,255,.85)'
  for (const f of flakes) {
    f.y += f.s
    f.d += 0.01
    f.x += Math.sin(f.d) * 0.5
    if (f.y > h) { f.y = -5; f.x = Math.random() * w }
    ctx.beginPath()
    ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
    ctx.fill()
  }
  raf = requestAnimationFrame(tick)
}

onMounted(() => {
  ctx = canvas.value.getContext('2d')
  resize()
  window.addEventListener('resize', resize)
  tick()
})
onBeforeUnmount(() => {
  cancelAnimationFrame(raf)
  window.removeEventListener('resize', resize)
})
</script>

<template>
  <canvas ref="canvas" class="snow"></canvas>
</template>

<style scoped>
.snow { position: fixed; inset: 0; width: 100%; height: 100%; pointer-events: none; z-index: 1; }
</style>
