<template>
  <section class="justOneDay">
    <div class="justOneDay__title">
      <h2>Just One Day</h2>
      <div class="countDown">
        <span class="countDown__icon">
          <img src="@/assets/tenbyten/main/countDown.svg" alt="카운트다운 아이콘">
        </span>
        <span id="countdown" class="countDown__time">{{ countdownTime }}</span>
      </div>
    </div>
    <swiper
        :modules="modules"
        :pagination="{ type: 'progressbar' }"
        :slidesPerView="'auto'"
        :spaceBetween="10"
        class="justOneDay__swiper"
    >
      <swiper-slide v-for="(just, index) in justOneDayList" :key="`justOneDayIdx-`+index">
        <figure class="thumbnail">
          <img :src="just.image" :alt="just.name">
        </figure>
        <p class="name">{{just.name}}</p>
        <div class="priceBox">
          <p class="percent">{{ just.discountText }}</p>
          <p class="price">{{ numberFormat(just.price) }}<span>원</span></p>
          <p class="orgPrice">{{ numberFormat(just.originPrice) }}<span>원</span></p>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import { Pagination} from "swiper/modules";

export default {
  components: {SwiperSlide, Swiper},
  data() {
    return {
      modules: [Pagination],
      countdownTime: '',
      justOneDayList: [
        {
          code: 127907,
          name: '발뮤다, 특별한 경험을 나누다',
          image: require('@/assets/tenbyten/main/justOneDay01.png'),
          discountText: '~32%',
          price: 305970,
          originPrice: 449000
        },
        {
          code: 127924,
          name: '여름을 준비해 Ah Oh Ay~ 산책을 나가자 Ah Oh Ay~',
          image: require('@/assets/tenbyten/main/justOneDay02.png'),
          discountText: '~15%',
          price: 4680,
          originPrice: 5500
        },
        {
          code: 3127873,
          name: '여행의 설렘이 충전되었습니다.',
          image: require('@/assets/tenbyten/main/justOneDay03.png'),
          discountText: '~62%',
          price: 18900,
          originPrice: 49900
        },
        {
          code: 127821,
          name: '매일을 함께 할 데일리펜! < 유니 특가전 >',
          image: require('@/assets/tenbyten/main/justOneDay04.png'),
          discountText: '~40%',
          price: 1200,
          originPrice: 2000
        },
      ]
    };
  },
  created() {
    this.updateCountdown();
    this.countdownInterval = setInterval(this.updateCountdown, 1000);
  },
  beforeUnmount() {
    clearInterval(this.countdownInterval);
  },
  methods: {
    numberFormat(price) {
      const floorPrice = Math.floor(price);
      return floorPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    updateCountdown() {
      const now = new Date();
      const nextMidnight = new Date();
      nextMidnight.setHours(23, 59, 59, 0);

      const timeDifference = nextMidnight - now;
      const hours = String(Math.floor((timeDifference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((timeDifference / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((timeDifference / 1000) % 60)).padStart(2, '0');

      this.countdownTime = `${hours}:${minutes}:${seconds}`;
    },
  }
}
</script>
<style scoped lang="scss">
@import "@/styles/tenbyten/tenbytenMain";
</style>
