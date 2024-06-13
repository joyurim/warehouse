
<template>
  <section class="fubao">

    <article class="fubao__badge">
      <p class="fubao__badge--title"><span>펀딩</span> 푸바오 시즌 그리팅 단독판매</p>
      <p class="fubao__badge--data">08.21 ~ 08.31</p>
    </article>

    <article class="intro">
      <div class="intro__img">
        <img src="//webimage.10x10.co.kr/fixevent/event/2023/124554/m/intro_main.jpg?v=1.1/10x10/optimize" alt="푸바오 2024 시즌 그리팅">
      </div>
      <h1 class="intro__title">
        행복을 주는 보물, 푸바오<br/><span>첫 2024</span> 시즌 그리팅
      </h1>
      <div class="intro__sub-text">
        푸바오, 너는 내 마음속에 항상 영원할거야.<br/>
        사랑둥이 푸바오를 평생 소장 할 수 있는 기회!<br/>
        환상의 나라 에버랜드와 함께하는 <strong>푸바오 공식</strong><br/>
        <strong>시즌 그리팅</strong>을 오직 텐바이텐에서 만나보세요!
      </div>
      <div class="count">
          <p class="count__sale"><strong>1,555</strong>개 판매중</p>
          <p class="count__number">
              <strong>10,000</strong>원 달성
              <span class="count__participate">255명 참여</span>
          </p>
          <p class="count__day">남은시간 5일</p>
      </div>
      <div class="schedule">
        <p class="schedule--data">8월 21일 ~ 8월 31일(11일)</p>
        <p class="schedule--delivery">10월 30일 부터 순차 배송</p>
      </div>
      <div class="project-team">
          <h2>프로젝트 팀 소개</h2>
          안녕하세요! 이번 푸바오 시즌 그리팅 기획 및 운영을 맡은 텐
          바이텐의 MD들 입니다. 에버랜드 굿즈와 레시앤프렌즈를 많은 분들이 사랑해 주셔서 에버랜드와 함께 푸바오 시즌 그리팅을 선보이게 되었습니다. 푸바오의 일상 모습을 잘 담아서 많은 분들께 응원의 메시지를 전하고자 이번 펀딩을 열심히 준비했습니다! 푸바오를 보며 일상의 작은 행복과 힘을 받아 가셨으면 좋겠습니다.
      </div>

    </article>

    <article class="special-goods">
      <h2>스페셜 굿즈 증정 안내</h2>
      <img src="//webimage.10x10.co.kr/fixevent/event/2023/124554/m/goods.jpg/10x10/optimize" alt="포토리뷰 이벤ㅌ으">
    </article>

    <article class="photo-event">
      <h2>포토리뷰 이벤트</h2>
      <div class="photo-event__review">
        <img src="//webimage.10x10.co.kr/fixevent/event/2023/124554/m/photo-review.jpg/10x10/optimize" alt="포토리뷰 이벤ㅌ으">
      </div>
    </article>

    <article class="introduce" :class="{'is-introduce': projectIntroduction}">
      <h2>프로젝트 소개</h2>
      <div class="introduce__container">
        <img src="//webimage.10x10.co.kr/fixevent/event/2023/124554/m/introduce01.jpg?v=1.2/10x10/optimize" alt="출구없는 매력부자 푸바오">
        <div class="introduce__flower">
          <img src="//webimage.10x10.co.kr/fixevent/event/2023/124554/m/introduce02.jpg?v=1.2/10x10/optimize" alt="지금은 국민 아이돌 슈퍼스타 푸바오">
        </div>
        <img src="//webimage.10x10.co.kr/fixevent/event/2023/124554/m/introduce03.jpg?v=1.2/10x10/optimize" alt="아이바오, 러바오">
        <img src="//webimage.10x10.co.kr/fixevent/event/2023/124554/m/introduce04.jpg?v=1.2/10x10/optimize" alt="푸언니">
        <img src="//webimage.10x10.co.kr/fixevent/event/2023/124554/m/introduce05.jpg?v=1.2/10x10/optimize" alt="푸바오 시즌 그리팅 드디어 오픈">

        <swiper class="fubao__swiper" :options="swiperOptions">
          <swiper-slide v-for="(fubao, index) in swiperList" :key="index">
            <img :src="fubao" alt="푸바오 시즌그리팅 구성품">
          </swiper-slide>
        </swiper>

        <img src="//webimage.10x10.co.kr/fixevent/event/2023/124554/m/introduce07.jpg?v=1.2/10x10/optimize" alt="must have fubao">
        <img src="//webimage.10x10.co.kr/fixevent/event/2023/124554/m/introduce08.jpg?v=1.3/10x10/optimize" alt="푸바오 사인, 행복하세요">
      </div>
      <div class="introduce__button">
        <button
            type="button"
            class="introduce__button--more"
            @click="projectIntroduction = !projectIntroduction"
        >
          스토리 {{ !projectIntroduction ? '보기' : '닫기' }}
          <img src="//webimage.10x10.co.kr/fixevent/event/2023/124554/m/btn-arrow.png/10x10/optimize" alt="">
        </button>
      </div>
    </article>

  </section>
</template>

<script>
import {defineComponent} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
SwiperCore.use([Autoplay, Pagination, Navigation]);
export default defineComponent({
  name: "FubaoSeasonGreetings",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      projectIntroduction: false,
      swiperList: [
          '//webimage.10x10.co.kr/fixevent/event/2023/124554/m/slide01.jpg?v=1.2/10x10/optimize',
          '//webimage.10x10.co.kr/fixevent/event/2023/124554/m/slide02.jpg?v=1.2/10x10/optimize',
          '//webimage.10x10.co.kr/fixevent/event/2023/124554/m/slide03.jpg?v=1.2/10x10/optimize>',
          '//webimage.10x10.co.kr/fixevent/event/2023/124554/m/slide04.jpg?v=1.2/10x10/optimize'
      ],
      swiperOptions: {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 1,
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 500,
      }
    }
  }
})
</script>


<style scoped lang="scss">
@import "@/styles/work/fubaoSeasonGreetings.scss";
</style>
