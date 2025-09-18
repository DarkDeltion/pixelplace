<template>
  <div class="hamburger-menu" @click="toggleMenu">
    <div :class="{ open: isOpen }">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div v-if="isOpen" class="menu-dropdown">
      <MenuButton @click="handleMenu('Home')">Home</MenuButton>
      <MenuButton @click="handleMenu('About')">About</MenuButton>
      <MenuButton @click="handleMenu('Contact')">Contact</MenuButton>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MenuButton from './menubutton.vue'

const isOpen = ref(false)
function toggleMenu() {
  isOpen.value = !isOpen.value
}
function handleMenu(name) {
  isOpen.value = false
  // You can emit or route here
  // e.g. emit('navigate', name) or use vue-router
}
</script>

<style scoped>
.hamburger-menu {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
}

.hamburger-menu > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
}

.bar {
  width: 100%;
  height: 6px;
  background-color: #ffffff;
  margin: 4px 0;
  transition: all 0.3s ease;
}

.menu-dropdown {
  position: absolute;
  top: 48px;
  right: 0;
  background: #222;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  min-width: 120px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  padding: 8px 0;
}
</style>
