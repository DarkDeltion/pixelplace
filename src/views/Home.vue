<template>
  <!-- navbar -->
  <nav>
    <component :is="width > 750 ? DesktopNavbar : MobileNavbar" />
  </nav>

  <!-- main content -->
  <main>
    <component :is="width > 750 ? desktoplobbieslist : mobilelobbieslist" />
  </main>
</template>

<style scoped>
/* navbar */
nav {
  width: 100vw;
  height: 10vh;
  font-family: 'Pixelify Sans', sans-serif;
  color: white;
}

main {
  margin-top: 5vw;
  margin-right: 7vw;
  margin-bottom: 5vw;
  margin-left: 7vw;
}
</style>

<script setup>
// components
import desktoplobbieslist from '../components/lobby/desktop/desktoplobbies.vue'
import mobilelobbieslist from '../components/lobby/mobile/mobilelobbies.vue'
import DesktopNavbar from '../components/navbar/desktop/desktopnavbar.vue'
import MobileNavbar from '../components/navbar/mobile/mobilenavbar.vue'

import { ref, onMounted, onUnmounted } from 'vue'

// track screen width
const width = ref(window.innerWidth)

const handleResize = () => {
  width.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>
