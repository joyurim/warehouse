<template>
  <li class="item">
    <figure class="item__thumbnail">
      <img src="" alt="">
    </figure>
    <p class="item__brand">brand</p>
    <p class="item__name">Puffy pattern 11인치 아이패드 태블릿 파우치 - 라일락</p>
    <p class="item__orgPrice">11,000</p>
    <p class="item__priceBox">
      <span class="percent">10%</span>
      <span class="price">10,000</span>
    </p>
    <div class="review">
      <div class="review__eval">
        <span class="review__eval--rating" style="width: 20%;" />
      </div>
      <span class="review__count">
        (204)
      </span>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
    };
  }
}
</script>
<style scoped lang="scss">
.item {
  width: pxToVw(150);
  &__thumbnail {
    @include thumbnail(150, 150);
    margin-bottom: pxToVw(8);
  }
  &__brand {
    @include font(14,20,$weight-700);
  }
  &__name {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-bottom: pxToVw(8);
    @include font(14,20,$weight-500);
    letter-spacing: - pxToVw(0.5);
  }
  &__orgPrice {
    color: $grey50;
    @include font(12,18,$weight-500);
    letter-spacing: - pxToVw(0.09);
    text-decoration-line: line-through;
  }
  &__priceBox {
    .percent {
      margin-right: pxToVw(4);
      color: $ten;
      @include font(15,20,$weight-700);
      letter-spacing: - pxToVw(0.09);
    }
    .price {
      @include font(15,20,$weight-700);
      letter-spacing: - pxToVw(0.09);
    }
  }
  .review {
    display: flex;
    align-items: center;
    margin-top: pxToVw(8);
    &__eval {
      display: inline-block;
      width: pxToVw(60);
      height: pxToVw(12);
      background-image: url("@/assets/tenbyten/common/star-line.svg");
      background-repeat: repeat-x;
      background-size: pxToVw(12) pxToVw(12);
      overflow: hidden;
      &--rating {
        display: inline-block;
        height: pxToVw(12);
        background-image: url("@/assets/tenbyten/common/star-full.svg");
        background-repeat: repeat-x;
        background-size: pxToVw(12) pxToVw(12);
      }
    }
    &__count {
      margin-left: pxToVw(4);
      color: $grey60;
      @include font(11,16,$weight-400);
    }
  }
}
</style>
