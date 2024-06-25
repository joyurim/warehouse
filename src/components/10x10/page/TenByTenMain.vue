
<template>
  <main class="today">
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
    <ul class="gnb">
      <li v-for="(gnb, index) in gnbList" :key="`gnblistIdx-`+index">
        <a :href="gnb.href" target="_blank">
          <div class="gnb__img">
            <img :src="gnb.img" :alt="gnb.name">
          </div>
          <p class="gnb__name">{{gnb.name}}</p>
        </a>
      </li>
    </ul>
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
    <JustOneDay />
  </main>
</template>

<script>
import {defineComponent} from 'vue'
import {Swiper, SwiperSlide} from "swiper/vue";
import {Autoplay, Pagination} from "swiper/modules";
import ProductItem from "@/components/10x10/common/ProductItem.vue";
import JustOneDay from "@/components/10x10/main/JustOneDay.vue";
export default defineComponent({
  name: "TenByTenMain",
  components: {JustOneDay, ProductItem, Swiper, SwiperSlide},
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
      gnbList: [
        {
          href: 'https://m.10x10.co.kr/event/eventmain.asp?eventid=128019',
          img: require('@/assets/tenbyten/main/gnb01.png'),
          name: '선착순 특가'
        },
        {
          href: 'https://m.10x10.co.kr/event/eventmain.asp?eventid=127725',
          img: require('@/assets/tenbyten/main/gnb02.png'),
          name: '문구를 말하다'
        },
        {
          href: 'https://m.10x10.co.kr/event/eventmain.asp?eventid=127962',
          img: require('@/assets/tenbyten/main/gnb03.png'),
          name: '그녀들의 식탁'
        },
        {
          href: 'https://m.10x10.co.kr/event/eventmain.asp?eventid=127937',
          img: require('@/assets/tenbyten/main/gnb04.png'),
          name: '한번만 써봐요'
        },
        {
          href: 'https://m.10x10.co.kr/event/eventmain.asp?eventid=127803',
          img: require('@/assets/tenbyten/main/gnb05.png'),
          name: '텀꾸 추천템'
        },
        {
          href: '',
          img: require('@/assets/tenbyten/main/gnb06.png'),
          name: '선물의 참견'
        },
        {
          href: '',
          img: require('@/assets/tenbyten/main/gnb07.png'),
          name: '선물의 진심'
        },
        {
          href: '',
          img: require('@/assets/tenbyten/main/gnb08.png'),
          name: '이벤트'
        },
        {
          href: '',
          img: require('@/assets/tenbyten/main/gnb09.png'),
          name: '텐텐배송'
        },
        {
          href: '',
          img: require('@/assets/tenbyten/main/gnb10.png'),
          name: '베스트'
        },
      ]
    }
  }
})
</script>

<style scoped lang="scss">
@import "@/styles/tenbyten/tenbytenMain";
</style>
