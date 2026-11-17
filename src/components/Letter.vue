<script setup>
const stanzas = [
  ['I know some days are not so kind,', 'And you have a lot on your mind.', 'But I hope you know, through it all,', 'You are strong enough to stand tall.'],
  ['When life gets hard and skies turn gray,', 'I hope you find a brighter day.', 'Don’t be too hard on yourself, it’s true,', 'You deserve the same love you give to others, too.'],
  ['So take your time, and don’t lose hope,', 'Even on days when it’s hard to cope.', 'And if the world feels heavy to you,', 'Just remember, I’m here for you.'],
  ['You don’t have to smile every day,', 'It’s okay to feel lost along the way.', 'Just never forget, no matter what you go through,', 'There is someone who cares deeply for you.']
]
const total = stanzas.reduce((n, s) => n + s.length, 0)
const delay = (si, li) =>
  (stanzas.slice(0, si).reduce((n, s) => n + s.length, 0) + li) * 0.55 + 0.8 + si * 0.3
</script>

<template>
  <div class="letter">
    <h1 class="dear">My Jam,</h1>
    <div class="stanza" v-for="(s, si) in stanzas" :key="si">
      <span class="line" v-for="(l, li) in s" :key="li" :style="{ animationDelay: delay(si, li) + 's' }">{{ l }}</span>
    </div>
    <p class="sign" :style="{ animationDelay: total * 0.55 + 1 + 's' }">— Winterskaii</p>
    <div class="snowman">❄ ☃ ❄</div>
  </div>
</template>

<style scoped>
.letter {
  width: min(560px, 100%); background: var(--paper); border-radius: 10px;
  padding: clamp(28px, 6vw, 56px) clamp(22px, 6vw, 56px);
  box-shadow: 0 25px 70px rgba(0, 0, 0, .45); border: 1px solid rgba(255, 255, 255, .6);
  animation: rise 1.2s ease both; position: relative;
}
.letter::after {
  content: ""; position: absolute; inset: 10px; border: 1px solid rgba(111, 159, 208, .35);
  border-radius: 6px; pointer-events: none;
}
.dear { font-family: var(--script); font-size: clamp(2.2rem, 8vw, 3rem); color: var(--accent); margin: 0 0 18px; font-weight: 400; }
.stanza { margin: 0 0 22px; }
.line {
  display: block; font-size: clamp(1.15rem, 4.2vw, 1.4rem); line-height: 1.7; font-style: italic;
  opacity: 0; transform: translateY(8px); animation: fadeLine .9s ease forwards;
}
.sign {
  font-family: var(--script); font-size: clamp(2rem, 7vw, 2.6rem); text-align: right;
  color: var(--accent); margin: 10px 0 0; opacity: 0; animation: fadeLine 1.2s ease forwards;
}
.snowman { text-align: center; font-size: 1.6rem; margin-top: 8px; opacity: .8; }
@keyframes rise { from { opacity: 0; transform: translateY(40px) scale(.96); } to { opacity: 1; transform: none; } }
@keyframes fadeLine { to { opacity: 1; transform: none; } }
</style>
