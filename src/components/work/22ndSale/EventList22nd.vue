<template>
  <section>
    <article class="lottery">
      <p class="banner__deco">놓치지 말고 긁어 보세요!</p>
      <h2 class="banner__title--xl">행운의 스크래치 복권</h2>
      <div class="lottery__img">
        <img src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/lottery__img.png/10x10/optimize" alt="복권 이미지">
      </div>
      <button
          type="button"
          class="btn__more"
          @click="moveToEvent(125088)"
      >
        복권 긁으러 가기
      </button>
    </article>
    <article id="Raffle" class="raffle">
      <p class="banner__deco">행운의 주인공에게는 단 220원</p>
      <h2 class="banner__title--xl">행운의 래플</h2>
      <div class="raffle__container">
        <div class="raffle__inner original">
          <img src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/raffle__img01.png/10x10/optimize" alt="행운의 래플">
          <img src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/raffle__img02.png/10x10/optimize" alt="행운의 래플">
          <img src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/raffle__img03.png/10x10/optimize" alt="행운의 래플">
          <img src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/raffle__img04.png/10x10/optimize" alt="행운의 래플">
        </div>
        <div class="raffle__inner clone">
          <img src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/raffle__img01.png/10x10/optimize" alt="행운의 래플">
          <img src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/raffle__img02.png/10x10/optimize" alt="행운의 래플">
          <img src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/raffle__img03.png/10x10/optimize" alt="행운의 래플">
          <img src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/raffle__img04.png/10x10/optimize" alt="행운의 래플">
        </div>
      </div>
      <button
          type="button"
          class="btn__more"
          @click="moveToEvent(125089)"
      >
        잊기 전에 도전하기
      </button>
    </article>
    <article id="Goods" class="goods">
      <div class="goods__inner">
        <p class="banner__deco">행운 가득한 하루를 함께 할 텀블러!</p>
        <h2 class="banner__title--xl">22주년 기념 굿즈</h2>
        <button
            type="button"
            class="btn__more"
            @click="moveToEvent(125224)"
        >
          구경이나 해볼까?
        </button>
      </div>
    </article>
    <article class="hbd22nd">
      <p class="banner__deco">텐바이텐이 벌써 22주년이래!</p>
      <h2 class="banner__title--xl">HBD to tenbyten</h2>
      <p class="hbd22nd__text">축하메시지를 남겨주신 고객님들께<br/>추첨을 통해 기프트카드를 보내드려요!</p>

      <button
          type="button"
          class="btn__more"
          @click="moveToEvent('forum', 'FORUM2')"
      >
        축하해주기
      </button>
    </article>
    <article class="banner newbenefit" @click="moveToEvent('newbenefit', 'NEWBENEFIT')">
      <p class="banner__sub">텐바이텐이 처음이라면?</p>
      <p class="banner__title">귀여운 아이템이 1,000원!</p>
      <img
          src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/newbenefit__item.png/10x10/optimize"
          alt="신규회원 혜택"
          class="newbenefit__item"
      >
    </article>
    <article class="sale22nd">
      <p class="banner__deco">SALE ITEM</p>
      <h2 class="banner__title--xl">세일 아이템 모아보기</h2>

      <ul class="sale22nd__product">
        <li
            v-for="item in itemList"
            :key="item.itemid"
            class="product__list"
            @click="moveToProductPage(item.itemid)"
        >
          <div class="thumbnail">
            <img :src="decodeBase64(item.itemimage)" alt="item.itemname"/>
          </div>
          <div class="product-info">
            <div
                v-if="getDiscountPricePercentage(item) > 0"
                class="product-info__org-price"
            >
              {{ item.orgprice.toLocaleString() }}
            </div>
            <div class="product-info__price">
								<span class="product-info__price--sale">
									{{ item.sellcash.toLocaleString() }}
								</span>
              <span
                  v-if="getDiscountPricePercentage(item) > 0"
                  class="product-info__price--discount"
              >
									{{ getDiscountPricePercentage(item) }}%
								</span>
            </div>
            <div class="product__name">{{ item.itemname }}</div>
          </div>
        </li>
      </ul>
      <button
          type="button"
          v-if="currentPage * maxPerPage < 80"
          class="sale22nd__more"
          @click="lodeMoreProduct"
      >
        more
      </button>
    </article>
    <!--베스트아티템-->
    <article class="best22nd" @click="moveToEvent('best', 'BEST')">
      <p class="banner__sub">호감 상승하는</p>
      <p class="banner__title">베스트 아이템을 만나보세요!</p>
    </article>
    <article class="alarm" @click="goSettingPage">
      <div class="alarm__img">
        <img src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/alarm__img.png/10x10/optimize" alt="">
      </div>
      <p class="alarm__text">
        <span class="alarm__text--point">텐바이텐의 앱 설치</span>하고<br/>
        편리하게 상품을 구경해 보세요!
      </p>
      <button type="button" class="btn__more"	>APP 설치하러 가기</button>
    </article>
  </section>
</template>

<script>
import {defineComponent} from 'vue'

export default defineComponent({
  name: "EventList22nd",
  data() {
    return {
      itemList: [
        {
          itemid: 5783745,
          itemname: "(장바구니 쿠폰) 다마고치 유니 핑크",
          makerid: "bandainamco",
          brandname: "BANDAINAMCO",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzgvQjAwNTc4Mzc0NS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 85000,
          orgprice: 85000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 6,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 4346164,
          itemname: "[다용도정리함] 아이카사 폴딩박스 S (색상선택)",
          makerid: "smilage",
          brandname: "smilage",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy80MzQvQjAwNDM0NjE2NC0xMi5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 5700,
          orgprice: 6000,
          salePer: "5.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 389,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5783601,
          itemname: "포코리 프렌즈 틴 케이스 & 캘린더 세트",
          makerid: "daelim10",
          brandname: "daelimenter",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzgvQjAwNTc4MzYwMS0yLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 10800,
          orgprice: 12000,
          salePer: "10.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 8,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5783883,
          itemname: "잔망루피 칫솔 살균기",
          makerid: "royche10",
          brandname: "ROYCHE",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzgvQjAwNTc4Mzg4My5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 29000,
          orgprice: 34900,
          salePer: "17.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 7,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5791182,
          itemname: "[공식] 에버랜드 굿즈 푸바오 50일 보들 애착 봉제인형",
          makerid: "EVERLANDSTORE",
          brandname: "EVERLAND STORE",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzkvQjAwNTc5MTE4Mi5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 17900,
          orgprice: 19000,
          salePer: "6.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 32,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 2482886,
          itemname: "O,LD! fabric pencil case _ VER.3",
          makerid: "ohlollyday",
          brandname: "oh,lolly day!",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy8yNDgvQjAwMjQ4Mjg4Ni5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 9000,
          orgprice: 9000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 2263,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5740071,
          itemname: "디알고 블루투스5.0 휴대용 청력보호 무선 헤드폰 BH07C",
          makerid: "dareum74",
          brandname: "DRGO",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzQvQjAwNTc0MDA3MS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 22300,
          orgprice: 22300,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 7,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 3313868,
          itemname: "[Peanuts] 스누피 터치 무드등",
          makerid: "peanuts10x10",
          brandname: "PEANUTS",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy8zMzEvQjAwMzMxMzg2OC0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 35900,
          orgprice: 48000,
          salePer: "25.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 630,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5508529,
          itemname: "마시마로 동고베이비 엉덩이향 디퓨저 & 가방고리 인형 선물 세트",
          makerid: "logind",
          brandname: "mashimaro",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NTAvQjAwNTUwODUyOS0yLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 37600,
          orgprice: 47000,
          salePer: "20.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 4,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5750033,
          itemname: "[2차오픈] 2024 쿵야 시즌그리팅 세트",
          makerid: "nmbstore",
          brandname: "netmarble store",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzUvQjAwNTc1MDAzMy0zLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 22500,
          orgprice: 22500,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 28,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5771717,
          itemname: "도라에몽 라면 가습기",
          makerid: "royche10",
          brandname: "ROYCHE",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzcvQjAwNTc3MTcxNy5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 39900,
          orgprice: 39900,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 4,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5735115,
          itemname: "산리오 무선 헤어고데기",
          makerid: "royche10",
          brandname: "ROYCHE",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzMvQjAwNTczNTExNS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 49900,
          orgprice: 49900,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 66,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5773089,
          itemname: "[텐텐단독] PE100% 웅장한 프리미엄 로얄 크리스마스 트리 180cm",
          makerid: "giftday",
          brandname: "Gift Day",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzcvQjAwNTc3MzA4OS0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 199000,
          orgprice: 299000,
          salePer: "33.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 25,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 4194475,
          itemname: "[스위치] 닌텐도 스위치 (OLED모델) 화이트",
          makerid: "nintendo10",
          brandname: "nintendo",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy80MTkvQjAwNDE5NDQ3NS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 395000,
          orgprice: 415000,
          salePer: "5.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 73,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5037630,
          itemname: "[굽선택 3/5/7/9cm] 올리 스퀘어 스판 삭스 앵클 부츠",
          makerid: "ollie10",
          brandname: "OLLIE",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81MDMvQjAwNTAzNzYzMC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 36000,
          orgprice: 36000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 28,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 2497605,
          itemname: "[무료배송/한정수량] 반다이 공식 다마고치 썸",
          makerid: "bandainamco",
          brandname: "BANDAINAMCO",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy8yNDkvQjAwMjQ5NzYwNS0yLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 56900,
          orgprice: 71200,
          salePer: "20.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 1274,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 4816476,
          itemname: "16PF MBTI향수 INFP향수 인프피 엠비티아이향수",
          makerid: "pinkof",
          brandname: "Pinkof",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy80ODEvQjAwNDgxNjQ3Ni0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 42900,
          orgprice: 42900,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 0,
          totalpoint: 0,
          detailcode: 0
        },
        {
          itemid: 5107728,
          itemname: "[파우치증정] hug love 핸들 스텐텀블러 [보온/보냉]",
          makerid: "mademoment",
          brandname: "Mademoment",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81MTAvQjAwNTEwNzcyOC0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 25000,
          orgprice: 25000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 2,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5311272,
          itemname: "[Rug] MNNS 3brothers rug",
          makerid: "ohlollyday",
          brandname: "oh,lolly day!",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81MzEvQjAwNTMxMTI3Mi5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 43000,
          orgprice: 43000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 1,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5763263,
          itemname: "5년 앨리스 다이어리",
          makerid: "designonew",
          brandname: "Mellow",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzYvQjAwNTc2MzI2My5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 17010,
          orgprice: 18900,
          salePer: "10.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 8,
          totalpoint: 80,
          detailcode: 0
        },
      ],
      currentPage: 1,
      maxPerPage: 20
    }
  },
  methods: {
    decodeBase64(str) {
      if (str === null) return null;
      return atob(str.replace(/_/g, "/").replace(/-/g, "+"));
    },
    getDiscountPricePercentage(item) {
      return Math.round(((item.orgprice - item.sellcash) / item.orgprice) * 100);
    },
    moveToProductPage(targetId) {
        location.href = "https://m.10x10.co.kr/category/category_itemPrd.asp?itemid=" + targetId;
    },
    lodeMoreProduct() {
      this.currentPage += 1;
    },
    goSettingPage() {
        parent.location.href = "https://tenten.app.link/Edx4cwoVUwb";
    },
    moveToEvent(event, type) {
      if (type === 'FORUM2') {
        parent.location.href = `https://m.10x10.co.kr/linker/forum.asp?idx=9`
      }  else if (event === 'NEWBENEFIT') {
        parent.location.href = 'https://m.10x10.co.kr/newuserbenefit/index.asp#benefit02'
      } else if (event === 'BEST') {
        parent.location.href = 'https://m.10x10.co.kr/list/best/renewal/index2020.asp'
      } else {
        parent.location.href = `https://m.10x10.co.kr/event/eventmain.asp?eventid=${event}`
      }
    }
  }
})
</script>

<style scoped lang="scss">

</style>
