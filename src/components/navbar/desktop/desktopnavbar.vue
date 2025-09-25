<template>
  <div class="navbar">
    <NavButtons label="Home" href="#" />

    <div class="site-title">
      <div class="title-animation">
        <h1
          ref="rainbowTitle"
          :class="{ rainbow: isRainbow }"
          @mouseenter="startRainbow"
          @mouseleave="stopRainbow"
        >
          PixelPlace
        </h1>
      </div>
    </div>

    <NavButtons label="Login" href="#" />
  </div>
</template>

<script setup>
import NavButtons from './navbuttons.vue'

import { ref } from 'vue'

const isRainbow = ref(false)

const rainbowTitle = ref(null)

function startRainbow() {
  isRainbow.value = true
}

function stopRainbow() {
  if (rainbowTitle.value) {
    // Get computed color at the end of animation
    const computedColor = getComputedStyle(rainbowTitle.value).color
    // Remove animation class
    isRainbow.value = false
    // Set inline color to current animated color
    rainbowTitle.value.style.color = computedColor
    // Force transition to white
    setTimeout(() => {
      rainbowTitle.value.style.color = '#ffffff'
    }, 10)
    // Remove inline color after transition
    setTimeout(() => {
      rainbowTitle.value.style.color = ''
    }, 1100)
  }
}
</script>

<style>
.navbar {
  width: 100vw;
  height: 125px;
  background-color: #282828;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17.5vw;
  position: fixed;
  left: 0;
  top: 0;
}
</style>

<style scoped>
.site-title h1 {
  margin: 0;
  font-size: 4rem;
  color: #ffffff;
  transition: color 500ms ease;
}

/* rainbow text animation */
@keyframes rainbowtext {
  0% {
    color: #ffffff;
  }
  10% {
    color: #ff0000;
  }
  20% {
    color: #ff7f00;
  }
  30% {
    color: #ffff00;
  }
  40% {
    color: #00ff00;
  }
  50% {
    color: #00ffff;
  }
  60% {
    color: #0000ff;
  }
  70% {
    color: #7f00ff;
  }
  80% {
    color: #ff00ff;
  }
  90% {
    color: #ffffff;
  }
  100% {
    color: #ffffff;
  }
}

@keyframes breathing {
  0%,
  100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.7;
    transform: scale(1.1);
  }
}

.site-title h1.rainbow {
  animation:
    rainbowtext 2.5s linear infinite,
    breathing 2s ease-in-out infinite;
}
</style>
