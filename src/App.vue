<template>
  <main :class="{'lg': isMobile}">
    <nav></nav>
  </main>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      isMobile: false
    };
  },
  methods: {
    checkIfMobile() {
      this.isMobile = window.innerWidth >= 750;
    }
  },
  mounted() {
    this.checkIfMobile();
    window.addEventListener('resize', this.checkIfMobile);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIfMobile);
  },
}
</script>

<style lang="scss">
@import 'normalize.css';
@import '@/styles/common.scss';
</style>
