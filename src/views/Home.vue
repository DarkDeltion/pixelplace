<template>
  <!-- navbar -->
  <nav class="navbar-wrapper">
    <FullNavbar />
  </nav>
  <!-- main content -->
  <main>
    <LobbyInputs />
    <LobbiesList />
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
import LobbyInputs from '../components/lobby/lobbyinputs.vue'
import LobbiesList from '../components/lobby/lobbieslist.vue'
import FullNavbar from '../components/navbar/fullnavbar.vue'
</script>
