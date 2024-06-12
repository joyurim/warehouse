<template>
  <section class="special">
    <article class="banner pinpay" @click="moveToEvent(125134)">
				<p class="banner__sub">
					<img
						src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/pinpay__logo.png/10x10/optimize"
						alt="pinpay"
						class="pinpay__logo"
					>로 구매 시
				</p>
				<p class="banner__title">2,000원 즉시 할인!</p>
				<img
					src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/pinpay__item.png/10x10/optimize"
					alt="pinpay"
					class="pinpay__item"
				>
			</article>
    <article id="Koongya" class="koongya" @click="moveToEvent(125045)">
      <div class="banner">
        <p class="banner__sub">2024 Y2K 양파쿵야의</p>
        <p class="banner__title">첫 시즌 그리팅</p>
        <img
            src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/koongya__item.png/10x10/optimize"
            alt="양파쿵야"
            class="koongya__item"
        >
      </div>
    </article>
    <article class="sanrio" @click="moveToEvent(125105)">
      <p class="banner__deco">NEW&BEST</p>
      <h2 class="banner__title--xl">산리오캐릭터즈</h2>
      <div class="sanrio__product">
        <img src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/sanrio__product.png?v=1.1/10x10/optimize" alt="산리오 베스트 상픔">
      </div>
    </article>
    <article id="Luckydraw" class="luckydraw" @click="moveToEvent(125082)">
      <div class="banner">
        <p class="banner__sub">LUCKY DRAW</p>
        <p class="banner__title">럭키드로우 텐텐템</p>
        <img
            src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/luckydraw__item.png/10x10/optimize"
            alt="럭키드로우 텐텐템"
            class="luckydraw__item"
        >
      </div>
    </article>
    <article class="banner special__brand" @click="moveToEvent(125083)">
      <p class="banner__sub">MUST BRAND</p>
      <p class="banner__title">필수 브랜드 라인업</p>
      <img
          src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/brand__item.png"
          alt="필수 브랜드"
          class="brand__item"
      >
    </article>
    <article class="dakku" @click="moveToEvent('diary', 'DIARY')">
      <div class="dakku__inner">
        <p class="banner__deco">2024 준비는 다양한 혜택 가득</p>
        <h2 class="banner__title--xl">텐텐다꾸와 함께!</h2>
        <div class="dakku__prouuct">
          <img src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/dakku__img.png?v=1.1/10x10/optimize" alt="친구와 함꼐 다이어리/사은품/무료배송">
        </div>
        <button type="button" class="btn__more">자세히 보러 가기</button>
      </div>
    </article>
    <article class="banner goodnote" @click="moveToEvent(121032)">
      <p class="banner__sub">토끼 삼총사 누누씨</p>
      <p class="banner__title">굿노트 스티거 무료배포</p>
      <img
          src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/goodnote__item.png/10x10/optimize"
          alt="누누씨 스티커"
          class="goodnote__item"
      >
    </article>
  </section>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "SpecialPrice",
  methods: {
    moveToEvent(event, type) {
      if (type === 'DIARY') {
        parent.location.href = `https://m.10x10.co.kr/diarystory2024`
      } else {
        parent.location.href = `https://m.10x10.co.kr/event/eventmain.asp?eventid=${event}`
      }
    }
  }
})
</script>

<style scoped lang="scss">

</style>
