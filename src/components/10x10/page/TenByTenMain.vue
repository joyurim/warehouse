
<template>
  <section class="content today">
    <MainRollingBanner />
    <GnbList />
    <RecommendProduct />
    <JustOneDay />
  </section>
</template>

<script>
import {defineComponent} from 'vue'
import MainRollingBanner from "@/components/10x10/main/MainRollingBanner.vue";
import GnbList from "@/components/10x10/main/GnbList.vue";
import RecommendProduct from "@/components/10x10/main/RecommendProduct.vue";
import JustOneDay from "@/components/10x10/main/JustOneDay.vue";
export default defineComponent({
  name: "TenByTenMain",
  components: {
    MainRollingBanner,
    GnbList,
    RecommendProduct,
    JustOneDay,
  },
  data() {
    return {
    }
  }
})
</script>

<style scoped lang="scss">
@import "@/styles/tenbyten/tenbytenMain";
</style>
