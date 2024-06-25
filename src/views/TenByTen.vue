<template>
  <div class="wrapper">
    <TenByTenHeader />
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <TabBar />
  </div>
</template>

<script >
import {defineComponent} from 'vue'
import { Transition } from 'vue';
import TabBar from "@/components/10x10/common/TabBar.vue";
import TenByTenHeader from "@/components/10x10/common/TenByTenHeader.vue";
export default defineComponent({
  name: "TenByTen",
  components: {
    Transition,
    TenByTenHeader, TabBar
  },
  data() {
    return {
      transitionName: 'slide-left',
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left';
    }
  }
});
</script>

<style scoped lang="scss">
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
