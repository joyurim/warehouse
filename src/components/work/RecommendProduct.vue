<template>
  <div v-if="shouldRender">
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
              <span class="review__count">
               4.5
              </span>
            </div>
            <p v-if="recentItem.reviewCount" class="review__comment">
              {{recentItem.reviewComment}}
            </p>
          </div>
        </div>
        <button type="button" class="btnRecentMore" @click="moveToLink(recentItem.itemId)">자세히 보기</button>
      </section>
      <section
        v-if="this.togetherItems.length > 0"
        id="recommendTitleContainer"
        class="together__container"
      >
        <h1 class="recommend__title">다른 고객님들이<br/>함께 본 상품이에요!
          <span class="recommend__title--sponsored">Sponsored</span>
        </h1>
        <div class="together__product-container">
          <div
              v-for="(item, index) in togetherItems"
              :key="index"
              :data-item-id="item.itemid"
              class="together__product"
              @click="moveToLink(item)"
          >
            <figure class="thumbnail">
              <img :src="item.image" :alt="item.name">
            </figure>
            <div>
              <p class="brand">{{item.brandName}}</p>
              <p class="name">{{item.name}}</p>
              <p v-if="item.discountText" class="originPrice">{{numberFormat(item.originPrice)}}</p>
              <p class="priceBox">
                <span v-if="item.discountText" class="percent">{{item.discountText}}</span>
                <span class="price">{{numberFormat(item.price)}}</span>
              </p>
            </div>
          </div>
        </div>
        <div v-if="isLoading" class="togetherLoading">
          <div class="loader"></div>
        </div>
      </section>
    </div>
  </div>
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
          couponName: "할인의 참견 시크릿 쿠폰",
          discountAmount: 23750
        },
      },
      currentCursor: -1,
      isLoading: true,
      isLastPage: false,
      size: 20,
      togetherItems: [],
      isFirstLoading: true,
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  watch: {
    isLoading(newLoading) {
      if (newLoading) {
        this.fetchItems(this.itemId);
      }
    },
  },
  mounted() {
    const itemId = this.recentItem.itemId
    this.shouldRender = true
    this.fetchItems(itemId);
  },
  methods: {
    async fetchItems(itemId) {
      try {
        const response = await fetch(`https://gateway.10x10.co.kr/v1/product/apis/product/from-ad/${itemId}/recommendations/${this.currentCursor}/${this.size}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          }
        });
        if (response.ok) {
          const json = await response.json();
          if(json.status === 200 && json.message === 'success') {
            this.isLastPage = json.result.results.length <= 0;
            this.togetherItems = [...this.togetherItems, ...json.result.results];
            this.currentCursor = json.result.cursor;
          }
        } else {
          this.isLoading = false;
        }
        this.isLoading = false;
      } catch (e) {
        console.error(e)
      }
    },
    handleScroll() {
      const maxPivot = Math.max(window.scrollY, Math.ceil(window.scrollY));
      const isAtTheBottom = maxPivot >= document.body.scrollHeight - document.body.offsetHeight;
      if(isAtTheBottom && !this.isLastPage) {
        this.isLoading = true;
      }
    },
    numberFormat(price) {
      const floorPrice = Math.floor(price);
      return floorPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    moveToLink(code) {
      let url = '';
      url = `https://m.10x10.co.kr/category/category_itemPrd.asp?itemid=${code}`;
      return location.href = url;
    },
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
})
</script>

<style scoped lang="scss">
@import "@/styles/work/recommendProduct.scss";
</style>
