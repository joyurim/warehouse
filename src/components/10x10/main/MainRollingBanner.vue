<template>
  <swiper
      :modules="modules"
      :pagination="{ type: 'fraction' }"
      :loop="false"
      :loopedSlides=1
      :autoplay="{ delay: 2500, disableOnInteraction: false }"
      :speed="500"
      class="todaySwiper"
  >
    <swiper-slide v-for="(main, index) in mainRollingList" :key="`mainRollingIdx-`+index">
      <div class="todaySwiper__text">
        <p :style="{ backgroundColor: main.subTextBgColor }">{{main.subText}}</p>
        <h2 v-html="main.title" />
      </div>
      <img :src="main.img" alt="main.title">
    </swiper-slide>
  </swiper>
</template>

<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, Pagination} from "swiper/modules";
export default {
  components: {SwiperSlide, Swiper},
  data() {
    return {
      modules: [Autoplay, Pagination],
      mainRollingList: [
        {
          img: require('@/assets/tenbyten/main/main01.jpg'),
          title: '텐바이텐X위니더푸<br/>브랜드위크',
          subText:'선착순 사은품 증정',
          subTextBgColor: '#F1B70D'
        },
        {
          img: require('@/assets/tenbyten/main/main02.jpg'),
          title: '여름 휴가와 함꼐<br/>캐리어 페스타',
          subText:'단독특가 ~71% 할인',
          subTextBgColor: '#F1440D'
        },
        {
          img: require('@/assets/tenbyten/main/main03.jpg'),
          title: '오늘부터 식집사<br/>반려식물을 입양하세요.',
          subText:'~58% 할인',
          subTextBgColor: '#0DBA14'
        },
      ],
    };
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
@import "@/styles/tenbyten/tenbytenMain";
</style>
