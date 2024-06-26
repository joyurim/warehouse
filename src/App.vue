<template>
    <router-view />
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const isWebLayout = ref(window.innerWidth >= 750);

const checkIfWeb = () => {
  isWebLayout.value = window.innerWidth >= 750;
  const appDiv = document.getElementById('app');

  if (isWebLayout.value) {
    appDiv.classList.add('webLayout');
  } else {
    appDiv.classList.remove('webLayout');
  }
};

onMounted(() => {
  window.addEventListener('resize', checkIfWeb);
  checkIfWeb();
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIfWeb);
});

</script>

<style lang="scss">
@import 'normalize.css';
@import '@/styles/common.scss';
</style>
