<script setup>
defineEmits(['open'])
</script>

<template>
  <div class="seal-wrap" role="button" tabindex="0" @click="$emit('open')" @keyup.enter="$emit('open')">
    <div class="envelope"><div class="flake">❄</div></div>
    <div class="hint">
      A winter letter for you…<br />
      <small>tap to open</small>
    </div>
  </div>
</template>

<style scoped>
.seal-wrap { text-align: center; cursor: pointer; animation: float 4s ease-in-out infinite; }
.envelope {
  width: min(320px, 80vw); aspect-ratio: 3 / 2; margin: 0 auto 20px; position: relative;
  background: linear-gradient(135deg, #dcebf9, #bcd6ee); border-radius: 6px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, .4);
}
.envelope::before {
  content: ""; position: absolute; inset: 0; border-radius: 6px;
  background: #cfe3f5; clip-path: polygon(0 0, 100% 0, 50% 62%);
}
.flake {
  position: absolute; left: 50%; top: 42%; transform: translate(-50%, -50%);
  width: 62px; height: 62px; border-radius: 50%; background: var(--seal);
  display: flex; align-items: center; justify-content: center; color: #fff; font-size: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .3);
}
.hint { color: #dbe9f7; font-family: var(--script); font-size: 2rem; }
.hint small { font-size: 1.2rem; }
@keyframes float { 50% { transform: translateY(-8px); } }
@media (prefers-reduced-motion: reduce) { .seal-wrap { animation: none; } }
</style>
