<template>
  <section v-if="shouldRender">
    <div v-if="hasError" class="error">
      <div class="image-container">
        <img src="@/assets/common/img__error.svg" alt="error" />
      </div>
      <p class="error__message">요청하신 페이지를 찾을 수 없습니다.</p>
      <button type="button" class="btnHome">
        <router-link to="/">홈으로가기</router-link>
      </button>
    </div>
    <div v-else ref="recommend" class="recommend">
      <section class="recent__container">
        <h1 class="recommend__title">고객님이<br/>방금 본 상품이에요!</h1>
        <div class="recent">
          <figure class="thumbnail">
            <img :src="recentItem.image" :alt="recentItem.name">
          </figure>
          <div class="recent-info">
            <p class="brand">{{recentItem.brandName}}</p>
            <p class="name">{{recentItem.name}}</p>
            <p v-if="recentItem.discountText" class="originPrice">{{numberFormat(recentItem.originPrice)}}</p>
            <p class="priceBox">
              <span v-if="recentItem.discountText" class="percent">{{recentItem.discountText}}</span>
              <span class="price">{{numberFormat(recentItem.price)}}</span>
            </p>
            <div v-if="recentItem.reviewCount" class="review">
              <div class="review__eval">
                <span class="review__eval--sprite-rating" :style="'width:' + (recentItem.reviewScore*20) + '%;'" />
              </div>
              <span class="review__count">
                ({{numberFormat(recentItem.reviewCount)}})
              </span>
            </div>
            <p v-if="recentItem.reviewCount" class="review__comment">
              {{recentItem.reviewComment}}
            </p>
          </div>
        </div>
        <button type="button" class="btnRecentMore" @click="moveToLink(recentItem.itemId)">자세히 보기</button>
      </section>
    </div>
  </section>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "RecommendProduct",
  data() {
    return {
      shouldRender: false,
      hasError: false,
      itemId: '',
      recentItem: {
        name: "마이 디어 워셔블 13mm 무지 포인트 사계절 원형 러그",
        brandName: "thefrigg",
        brandId: "thefrigg",
        discountText: '10%',
        image: "https://webimage.10x10.co.kr/image/basic600/454/B004549611.jpg",
        isCoupon: "Y",
        isDiscount: "N",
        itemId: 4549611,
        originPrice: 47500,
        price: 42750,
        reviewCount: 1245,
        reviewScore: "5.00",
        reviewComment: `조카 선물로 샌드위치 메이커랑 구매했어요!`,
        secretCoupon: {
          estimatedAmount: 23750,
          couponId: 4090,
          couponName: "test 할인의 참견 시크릿 쿠폰 2",
          discountAmount: 23750
        },
      },
    }
  },
  mounted() {
    this.shouldRender = true
  },
  methods: {
    numberFormat(price) {
      const floorPrice = Math.floor(price);
      return floorPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    moveToLink(code) {
      let url = '';
      url = `https://m.10x10.co.kr/category/category_itemPrd.asp?itemid=${code}`;
      return location.href = url;
    },
  }
})
</script>

<style scoped lang="scss">
@import "@/styles/work/recommendProduct.scss";
</style>
