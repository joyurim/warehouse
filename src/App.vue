<template>
    <router-view />
  <AlertPopup v-if="showAlertPopup" @close="closeAlertPopup" />
</template>

<script>
import {defineComponent} from 'vue'
import { useLayoutStore } from './store/layoutStore';
import AlertPopup from "@/components/common/AlertPopup.vue";
export default defineComponent({
  name: 'App',
  components: {
    AlertPopup
  },
  data() {
    return {
      layoutStore: useLayoutStore(),
      showAlertPopup: false,
    };
  },
  created() {
    this.checkFirstVisit();
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
    },
    checkFirstVisit() {
      const isFirstVisit = localStorage.getItem('isFirstVisit');
      if (!isFirstVisit) {
        this.showAlertPopup = true;
        localStorage.setItem('isFirstVisit', 'true');
      }
    },
    closeAlertPopup() {
      this.showAlertPopup = false;
    },
  }
});
</script>

<style lang="scss">
@import 'normalize.css';
@import '@/styles/common.scss';
</style>
