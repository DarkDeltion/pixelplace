<template>
  <!-- navbar -->
  <nav>
    <div class="nav-underglow">
      <div class="nav-container">
        <div class="nav-button">
          <a href="#">Home</a>
        </div>

        <div class="title">
          <div class="wiggle">
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

        <div class="nav-button">
          <a href="#">Login</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- main content -->
</template>

<style scoped>
nav {
  width: 100vw;
  height: 100px;
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 20px;
  color: white;
}

.nav-container {
  width: 100vw;
  height: 125px;
  background-color: #282828;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25rem;
  position: fixed;
  left: 0;
  top: 0;
}

.title h1 {
  margin: 0;
  font-size: 4rem;
  color: #ffffff;
  transition: color 500ms ease;
}
/* rainbow text animation. */
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

@keyframes Breathing {
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

.title h1.rainbow {
  animation:
    rainbowtext 2.5s linear infinite,
    Breathing 2s ease-in-out infinite;
}

.nav-button a {
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 1rem;
  font-size: 1.5rem;

  background-color: rgb(90, 90, 90);
  width: 6vw;
  height: 4vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  transition: 300ms;
}

.nav-button a:hover {
  background-color: rgb(110, 110, 110);
  transform: scale(110%);
  transition: 300ms;
}
</style>

<script setup>
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
