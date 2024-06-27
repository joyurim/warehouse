<template>
  <div :class="{todayPc: isWebLayout}">
    <div v-if="isWebLayout" class="todayPc__header">
      <PortfolioHeader />
    </div>
    <main class="wrapper">
      <TenByTenHeader />
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
      <TabBar />
    </main>
  </div>
</template>

<script >
import { defineComponent } from 'vue';
import { mapState } from 'pinia';
import { useLayoutStore } from '@/store/layoutStore';
import TenByTenHeader from '@/components/10x10/common/TenByTenHeader.vue';
import TabBar from '@/components/10x10/common/TabBar.vue';
import PortfolioHeader from "@/components/common/PortfolioHeader.vue";

export default defineComponent({
  name: "TenByTen",
  components: {
    PortfolioHeader,
    TenByTenHeader, TabBar
  },
  computed: {
    ...mapState(useLayoutStore, ['isWebLayout']),
    transitionName() {
      return this.isWebLayout ? 'slide-left' : 'slide-fade';
    },
  },
  watch: {
    '$route'(to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    },
  },
  mounted() {
    this.checkIfWeb();
    window.addEventListener('resize', this.checkIfWeb);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkIfWeb);
  },
  methods: {
    checkIfWeb() {
      const layoutStore = useLayoutStore();
      layoutStore.checkIfWeb();
    },
  },
});
</script>
<style scoped lang="scss">
.todayPc {
  display: flex;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  &__header {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .header {
      display: initial;
      padding: pxToVw(20, 1200);
      border: 1px solid $grey80;
      :deep(.logo) {
        margin-bottom: pxToVw(60, 1200);
      }
      :deep(.menu__container) {
        display: initial;
      }
    }
  }
  .wrapper {
    max-width: 475px;
    margin: 0 100px 0 auto;
    background: white;
  }
}
.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 0.5s ease;
}
.slide-left-enter, .slide-left-leave-to {
  transform: translateX(100%);
}

.slide-right-enter-active, .slide-right-leave-active {
  transition: transform 0.5s ease;
}
.slide-right-enter, .slide-right-leave-to {
  transform: translateX(-100%);
}
</style>
