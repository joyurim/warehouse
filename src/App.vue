<template>
  <main :class="{'web': isWebLayout}" class="mainContainer">
    <router-view />
<!--    <aside class="quickMenu">GO<br/>HOME</aside>-->
  </main>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
const isWebLayout = ref(false);
const checkIfWeb = () => {
  isWebLayout.value = window.innerWidth >= 750;
};
onMounted(() => {
  checkIfWeb();
  window.addEventListener('resize', checkIfWeb);
});
onBeforeUnmount(() => {
  window.removeEventListener('resize', checkIfWeb);
});
</script>

<style lang="scss">
@import 'normalize.css';
@import '@/styles/common.scss';
</style>
