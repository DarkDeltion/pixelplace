<template>
  <div class="search-bar">
    <input type="search" placeholder="Search..." />
    <a href="#">Create Canvas</a>
  </div>
</template>

<script setup></script>

<style scoped>
/* search bar */
.search-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 2rem 1rem 2rem;
}

.search-bar input[type='search'] {
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 2px solid #222;
  background: #888;
  color: #fff;
  outline: none;
  width: 300px;
}

.search-bar a {
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 1.5rem;
  padding: 0.5rem 1rem;
  border-radius: 10px;
  border: 2px solid #222;
  background: #888;
  color: #fff;
  text-decoration: none;
  text-align: center;
  transition: background 0.2s;
}

.search-bar a:hover {
  background: #aaa;
}
</style>
