<template>
  <!-- navbar -->
  <nav>
    <div class="nv-underglow">
      <div class="nav-container">
        <div class="nav-button">
          <a href="#">Home</a>
        </div>

        <div class="title">
          <h1>PixelPlace</h1>
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
  width: 100%;
  height: 100px;
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 20px;
  color: white;
}

.nav-container {
  width: 100%;
  height: 80%;
  background-color: #282828;
  display: flex;
  align-items: center; /* Vertically center items */
  justify-content: center; /* Horizontally center the whole group */
  gap: 20rem; /* Space between items */
}

.nav-button a {
  text-decoration: none;
  color: inherit;
  padding: 0.5rem 1rem;
}

.title h1 {
  margin: 0;
  font-size: 1.5rem;
}
</style>
