
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
          <p class="count__sale"><strong>{{ totalQuantity.toLocaleString() }}</strong>개 판매중</p>
          <p class="count__number">
              <strong>{{ updateCounting.toLocaleString() }}</strong>원 달성
              <span class="count__participate">{{ totalOrderUser.toLocaleString() }}명 참여</span>
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

        <swiper
            :modules="modules"
            :loop="true"
            :autoplay="{
              delay: 2500,
              disableOnInteraction: false,
            }"
            :speed="500"
            class="fubao__swiper"
        >
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

    <article v-for="(set, setIndex) in setList" :key="setIndex" class="product" >
      <div class="thumbnail">
        <template v-if="setIndex === 0">
          <img src="//webimage.10x10.co.kr/fixevent/event/2023/124554/m/product_setA.jpg?v=1.3/10x10/optimize" alt="">
        </template>
        <template v-if="setIndex === 1">
          <img src="//webimage.10x10.co.kr/fixevent/event/2023/124554/m/product_setB.jpg?v=1.3/10x10/optimize" alt="">
        </template>
        <template v-if="setIndex === 2">
          <img src="//webimage.10x10.co.kr/fixevent/event/2023/124554/m/product_setC.jpg?v=1.3/10x10/optimize" alt="">
        </template>
      </div>
      <p class="product__label">SET 0{{setIndex+1}}</p>
      <p class="product__set-name">푸덕 {{ setIndex === 0 ? '입문템 푸린세스' : setIndex === 1 ? '심화템 푸린이' : '만렙템 뚠빵이'}} 세트</p>
      <div class="product__configuration">
        <template v-if="setIndex === 0">
          다이어리 + 탁상달력(+AR카드) + 포토카드 세트(4종) + 스티커 3종 세트 +
          <span class="product__configuration--point">문진 + 네컷사진 2장 + 아크릴 키링</span>  + 특전 (랜덤 포토카드 부적)
        </template>
        <template v-if="setIndex === 1">
          다이어리 + 탁상달력(+AR 카드) + 포토카드 세트(4종) + 스티커 3종 세트 +
          <span class="product__configuration--point">스윙 아크릴 오브제 + 증명사진(+ID 카드) + 핸드폰 스트랩 키링 + 푸각 김밥 그립톡</span>  + 특전 (랜덤 포토카드 부적)
        </template>
        <template v-if="setIndex === 2">
          다이어리 + 탁상달력(+AR 카드) + 포토카드 세트(4종) + 스티커 3종 세트 +
          <span class="product__configuration--point">발바닥 키링 + 빅스티커 5종 세트 + 플립북 메모지 + 유리컵 + 쉬폰 포스터 + 벽걸이 포스터 달력</span>  + 특전 (랜덤 포토카드 부적)
        </template>
      </div>
      <div
          v-for="item in set"
          :key="item.id"
          :id="item.id"
          class="product__list"
      >
        <div class="product__price">
          {{item.price}}
        </div>
        <div class="product__name" :class="{'product__name__spacing': item.discountRate === 0}">
          푸덕 {{ setIndex === 0 ? '입문템 푸린세스' : setIndex === 1 ? '심화템 푸린이' : '만렙템 뚠빵이'}} 세트
        </div>
        <div class="btn-group">
          <button type="button" class="btn-basket">
            <img src="//webimage.10x10.co.kr/fixevent/event/2023/124554/m/icon-basket.png/10x10/optimize" alt="장바구니">
          </button>
          <button type="button" class="btn-buy" >바로구매</button>
        </div>
      </div>
    </article>

  </section>
</template>

<script>
import {defineComponent} from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';

export default defineComponent({
  name: "FubaoSeasonGreetings",
  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      totalQuantity: 1640,
      totalOrderUser: 1540,
      startValue: 0,
      endValue: 85260000,
      duration: 2000,
      updateCounting: 0,
      totalAmount: 0,
      modules: [Autoplay],
      projectIntroduction: false,
      swiperList: [
          '//webimage.10x10.co.kr/fixevent/event/2023/124554/m/slide01.jpg?v=1.2/10x10/optimize',
          '//webimage.10x10.co.kr/fixevent/event/2023/124554/m/slide02.jpg?v=1.2/10x10/optimize',
          '//webimage.10x10.co.kr/fixevent/event/2023/124554/m/slide03.jpg?v=1.2/10x10/optimize>',
          '//webimage.10x10.co.kr/fixevent/event/2023/124554/m/slide04.jpg?v=1.2/10x10/optimize'
      ],
      setList: [
        [
          {
            id: 5657681,
            price: "49,000",
          },
        ],
        [
          {
            id: 5657684,
            price: "72,000",
          },
        ],
        [
          {
            id: 5657687,
            price: "98,000",
          },
        ],
      ],
      itemList: [],
    }
  },
  async mounted() {
    this.animateCount();
    await this.getItemList();
  },
  methods: {
    animateCount() {
      const startTime = performance.now();
      const animate = (currentTime) => {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / this.duration, 1);
        this.updateCounting = Math.floor(this.startValue + (this.endValue - this.startValue) * progress);
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    },
    async getItemList() {
      try {
        const itemList = [
          5657681, 5657680, 5657679, 5657684, 5657683, 5657682, 5657687,
          5657686, 5657685,
        ];
        const response = await fetch(
            "https://gateway.10x10.co.kr/v1/event/apis/event/items/list/recorded",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(itemList),
            }
        );
        if (response.ok) {
          const json = await response.json();

          if (json.status === 200 && json.message === "success") {
            this.itemList = json.result.itemsList;
          }
        }
      } catch (e) {
        console.error(e, 'error')
      }
    },
  }
})
</script>


<style scoped lang="scss">
@import "@/styles/work/fubaoSeasonGreetings.scss";
</style>
