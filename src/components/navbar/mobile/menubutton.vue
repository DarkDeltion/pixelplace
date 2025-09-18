<template>
  <a :href="href" class="menu-link" @click="onClick">
    <slot />
  </a>
</template>

<script setup>
const props = defineProps({
  href: {
    type: String,
    default: '#',
  },
})
const emit = defineEmits(['click'])
function onClick(e) {
  emit('click', e)
}
</script>

<style scoped>
.menu-link {
  display: block;
  width: 100%;
  padding: 12px 0;
  color: #fff;
  font-size: 1.1rem;
  text-align: left;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}
.menu-link:hover {
  background: #333;
}
</style>
