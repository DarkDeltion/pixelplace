<template>
  <div class="lobby-list">
    <div class="lobby-item">
      <span>Lobby #1</span>
      <button class="lobby-join-btn">Join</button>
    </div>
    <div class="lobby-item">
      <span>Lobby #2</span>
      <button class="lobby-join-btn">Join</button>
    </div>
    <div class="lobby-item">
      <span>Lobby #3 <span class="lobby-lock">🔒</span></span>
      <button class="lobby-join-btn">Join</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* lobby list */
.lobby-list {
  background: #b3b3b3;
  border: 3px solid #222;
  border-radius: 16px;
  padding: 1rem;
  margin: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.lobby-item {
  background: #cfcfcf;
  border: 2px solid #222;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1rem;
  font-size: 1.5rem;
}

.lobby-join-btn {
  font-family: 'Pixelify Sans', sans-serif;
  font-size: 1.2rem;
  padding: 0.3rem 1rem;
  border-radius: 8px;
  border: 2px solid #222;
  background: #b3b3b3;
  color: #222;
  cursor: pointer;
  transition: background 0.2s;
}

.lobby-join-btn:hover {
  background: #d3d3d3;
}

.lobby-lock {
  font-size: 1.2rem;
  margin-left: 0.5rem;
  margin-right: auto;
}
</style>
