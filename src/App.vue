<template>
    <router-view />
</template>

<script>
import {defineComponent} from 'vue'
import { useLayoutStore } from './store/layoutStore';
export default defineComponent({
  name: 'App',
  data() {
    return {
      layoutStore: useLayoutStore(),
    };
  },
  mounted() {
    window.addEventListener('resize', this.checkIfWeb);
    this.checkIfWeb();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIfWeb);
  },
  methods: {
    checkIfWeb() {
      this.layoutStore.checkIfWeb();
    }
  }
});
</script>

<style lang="scss">
@import 'normalize.css';
@import '@/styles/common.scss';
</style>
