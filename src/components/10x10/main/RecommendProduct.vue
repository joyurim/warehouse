<template>
  <section class="recommend">
    <h2 class="recommend__title">
      고객님, 이 상품은 어떠세요?
      <span class="recommend__title--sponsored">
          Sponsored
        </span>
    </h2>
    <ul class="recommend__container">
      <ProductItem />
    </ul>
  </section>
</template>

<script>
import ProductItem from "@/components/10x10/common/ProductItem.vue";

export default {
  components: {ProductItem},
  data() {
    return {
    };
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
@import "@/styles/tenbyten/tenbytenMain";
</style>
