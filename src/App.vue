<template>
  <main :class="{'web': isWebLayout}" class="mainContainer">
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      isWebLayout: false,
    };
  },
  methods: {
    checkIfWeb() {
      this.isWebLayout = window.innerWidth >= 750;
    }
  },
  mounted() {
    this.checkIfWeb();
    window.addEventListener('resize', this.checkIfWeb);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIfWeb);
  },
}
</script>

<style lang="scss">
@import 'normalize.css';
@import '@/styles/common.scss';
</style>
