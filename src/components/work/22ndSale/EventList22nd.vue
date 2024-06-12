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
    <article class="system">
      <div
        v-for="event in eventList"
        :key="event.eventCode"
        class="system__banner"
        @click="moveToEvent(event.eventCode)"
      >
        <img :src="event.bannerImage" :alt="event.eventCode" />
      </div>
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
      <template v-if="isCheckedApp">
        <p class="alarm__text">
          <span class="alarm__text--point">텐바이텐의 알림을 켜두면 </span>새로운 혜택이<br/>
          오픈될 때 가장 빠르게 알 수 있어요.<br/>
          지금 내 알람이 켜져 있는지 확인해보세요!
        </p>
        <button type="button" class="btn__more"	>확인하기</button>
      </template>
      <template v-else>
        <p class="alarm__text">
          <span class="alarm__text--point">텐바이텐의 앱 설치</span>하고<br/>
          편리하게 상품을 구경해 보세요!
        </p>
        <button type="button" class="btn__more"	>APP 설치하러 가기</button>
      </template>
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
        {
          itemid: 4563011,
          itemname: "[디즈니 정품] 디즈니 앨리스 도자기 스태커블 티 팟 세트 (티포원)",
          makerid: "hnfriends",
          brandname: "Keshop",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy80NTYvQjAwNDU2MzAxMS0xMC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 48000,
          orgprice: 48000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 100,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5742659,
          itemname: "[멜로 레드체크] 차렵이불 세트 (S,Q,K)",
          makerid: "monbijou0",
          brandname: "monbijou",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzQvQjAwNTc0MjY1OS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 79900,
          orgprice: 115000,
          salePer: "31.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 0,
          totalpoint: 0,
          detailcode: 0
        },
        {
          itemid: 5781436,
          itemname: "월레스와 그로밋 오리지널 머그컵",
          makerid: "colleykr10",
          brandname: "Colley",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzgvQjAwNTc4MTQzNi0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 31000,
          orgprice: 45000,
          salePer: "31.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 6,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5773484,
          itemname: "낼나 포커스 온 타이머",
          makerid: "nelna",
          brandname: "nelna",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzcvQjAwNTc3MzQ4NC00LmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 31500,
          orgprice: 35000,
          salePer: "10.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 36,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5764925,
          itemname: "[대시앤도트] 인스토어 다이어리 (만년형)",
          makerid: "dashanddot",
          brandname: "대시앤도트",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzYvQjAwNTc2NDkyNS0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 13680,
          orgprice: 15200,
          salePer: "10.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 28,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5703196,
          itemname: "Hapoom pencil cosmetic pouch _ 글리터리 블랙",
          makerid: "masmarulez",
          brandname: "Masmarulez",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzAvQjAwNTcwMzE5Ni5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 19500,
          orgprice: 30500,
          salePer: "36.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 13,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5771380,
          itemname: "[텐텐단독] 행운가득모조지팩",
          makerid: "moii_ttoi",
          brandname: "moii ttoi",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzcvQjAwNTc3MTM4MC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 8000,
          orgprice: 10000,
          salePer: "20.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 122,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5710813,
          itemname: "[1+1] 아카이브 알러지케어 M2 베개커버 5종",
          makerid: "maatila",
          brandname: "maatila ",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzEvQjAwNTcxMDgxMy5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 31800,
          orgprice: 53000,
          salePer: "40.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 3,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5743725,
          itemname: "O,LD! Good rest room shoes",
          makerid: "ohlollyday",
          brandname: "oh,lolly day!",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzQvQjAwNTc0MzcyNS0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 29000,
          orgprice: 29000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 4,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5746104,
          itemname: "[버터샵] 밀크캣 가습기 USB형 750ML",
          makerid: "modernhouse",
          brandname: "BUTTER SHOP",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzQvQjAwNTc0NjEwNC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 29900,
          orgprice: 29900,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 3,
          totalpoint: 40,
          detailcode: 0
        },
        {
          itemid: 5737237,
          itemname: "바나코 이지 클램프 데스크 파티션 (본품)",
          makerid: "bananabd",
          brandname: "bananabd",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzMvQjAwNTczNzIzNy5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 42500,
          orgprice: 52000,
          salePer: "18.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 8,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5723460,
          itemname: "[Peanuts] 스누피&우드스탁 페이스 머그 세트",
          makerid: "peanuts10x10",
          brandname: "PEANUTS",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzIvQjAwNTcyMzQ2MC0zLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 21000,
          orgprice: 30000,
          salePer: "30.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 44,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5746271,
          itemname: "[코렐] 세카 올 라운더 온도유지 전기 티포트",
          makerid: "bizline2020",
          brandname: "BIZLINE",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzQvQjAwNTc0NjI3MS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 39900,
          orgprice: 159000,
          salePer: "75.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 30,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5765258,
          itemname: "털찐 양 극세사 털실내화 2colors",
          makerid: "luxiai",
          brandname: "루시아이",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzYvQjAwNTc2NTI1OC0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 12500,
          orgprice: 14900,
          salePer: "16.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 48,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5772755,
          itemname: "(날짜형) 2024 클래시젠틀다이어리 - A5 6공",
          makerid: "playobje",
          brandname: "PLEPIC",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzcvQjAwNTc3Mjc1NS0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 39500,
          orgprice: 39500,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 44,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5170345,
          itemname: "LIFE X YASHICA 라이프X야시카 MF-1 다회용 토이 카메라",
          makerid: "lifearchive",
          brandname: "LIFE ARCHIVE",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81MTcvQjAwNTE3MDM0NS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 49000,
          orgprice: 79000,
          salePer: "38.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 26,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5704282,
          itemname: "[Sanrio] 마이 레터 6공 다이어리 A6 (4종)",
          makerid: "sanrio10x10",
          brandname: "SANRIO",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzAvQjAwNTcwNDI4Mi0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 16800,
          orgprice: 21000,
          salePer: "20.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 209,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5749167,
          itemname: "포근 밍크 퍼 파스텔 인테리어 티슈커버 2size 6color",
          makerid: "maisontex",
          brandname: "maisontextile",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzQvQjAwNTc0OTE2Ny5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 17000,
          orgprice: 17000,
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
          itemid: 5749370,
          itemname: "내츄럴 스트라이프 고밀도 차렵이불",
          makerid: "decoview",
          brandname: "Decoview",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzQvQjAwNTc0OTM3MC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 95140,
          orgprice: 142000,
          salePer: "33.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 0,
          totalpoint: 0,
          detailcode: 0
        },
        {
          itemid: 5752170,
          itemname: "[텐텐단독/한정수량] 행운이 가득 아무개씨 행운 박스",
          makerid: "ahmugaec",
          brandname: "ahmugae_c",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzUvQjAwNTc1MjE3MC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 43650,
          orgprice: 48500,
          salePer: "10.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 0,
          totalpoint: 0,
          detailcode: 0
        },
        {
          itemid: 5712934,
          itemname: "펜갈피 패브릭필통",
          makerid: "ssun_doll",
          brandname: "rwn.t",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzEvQjAwNTcxMjkzNC0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 13500,
          orgprice: 15000,
          salePer: "10.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 46,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5680388,
          itemname: "삼성전자 갤럭시 워치6 클래식 블루투스 43mm",
          makerid: "shoma",
          brandname: "Shomagency",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NjgvQjAwNTY4MDM4OC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 429000,
          orgprice: 429000,
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
          itemid: 5763989,
          itemname: "트위티 미니 일체형 도킹형 보조배터리(파우치 증정)",
          makerid: "10DAYNEEDS",
          brandname: "DAYNEEDS",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzYvQjAwNTc2Mzk4OS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 22000,
          orgprice: 22000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 56,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5634574,
          itemname: "판도라 198867C09 10월 신신탄생석 페탈 핑크 실버 반지",
          makerid: "trendmecca",
          brandname: "TRENDMECCA",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NjMvQjAwNTYzNDU3NC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 37900,
          orgprice: 78000,
          salePer: "51.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 0,
          totalpoint: 0,
          detailcode: 0
        },
        {
          itemid: 5562051,
          itemname: "CBB Trip S 03",
          makerid: "circusboyband",
          brandname: "Circusboyband",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NTYvQjAwNTU2MjA1MS0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 48000,
          orgprice: 48000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 14,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5498614,
          itemname: "기계식 키보드 주차번호판",
          makerid: "villette1",
          brandname: "빌레뜨",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NDkvQjAwNTQ5ODYxNC0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 21250,
          orgprice: 25000,
          salePer: "15.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 12,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5542192,
          itemname: "코닥 필름카메라 ULTRA F9 (토이카메라) KODAK Ultra F9",
          makerid: "film09",
          brandname: "FILM09",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NTQvQjAwNTU0MjE5Mi0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 52250,
          orgprice: 55000,
          salePer: "5.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 19,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5703415,
          itemname: "Bodrab 3Color 투톤 핑거홀 롱 장갑",
          makerid: "macmoc",
          brandname: "macmoc",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzAvQjAwNTcwMzQxNS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 25000,
          orgprice: 25000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 5,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5680951,
          itemname: "사이드테이블 트롤리 수납선반",
          makerid: "thehome01",
          brandname: "The home",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NjgvQjAwNTY4MDk1MS0yLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 18900,
          orgprice: 27500,
          salePer: "31.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 23,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5543569,
          itemname: "지니요니_피로회복 초록팩",
          makerid: "genieyoni",
          brandname: "genieyoni",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NTQvQjAwNTU0MzU2OS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 10000,
          orgprice: 12500,
          salePer: "20.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 29,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5681264,
          itemname: "네잎클로버 체커보드 거울 스마트톡 맥세이프가능 투명케이스",
          makerid: "luveu10",
          brandname: "Luveu",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NjgvQjAwNTY4MTI2NC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 25500,
          orgprice: 25500,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 11,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5731923,
          itemname: "틱톡 감성 북유럽 꼬두라미 우드포인트 무소음 벽시계3종",
          makerid: "ticktock_10",
          brandname: "Ticktock",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzMvQjAwNTczMTkyMy0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 16900,
          orgprice: 29900,
          salePer: "43.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 20,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5735291,
          itemname: "oab now diary ver3",
          makerid: "oabstudio10",
          brandname: "organize a bit",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzMvQjAwNTczNTI5MS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 14000,
          orgprice: 14000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 37,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5735317,
          itemname: "[세트] 핑거탭+숄더스트랩 (미드나잇6종) 폰스트랩",
          makerid: "MCRN",
          brandname: "MCRN",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzMvQjAwNTczNTMxNy5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 33250,
          orgprice: 35000,
          salePer: "5.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 1,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5735753,
          itemname: "화이트 큐브 피규어 정리함 쇼케이스 장식장 진열장 케이스 보관함",
          makerid: "luxiai",
          brandname: "루시아이",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzMvQjAwNTczNTc1My5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 15704,
          orgprice: 18900,
          salePer: "13.0000",
          sailyn: "Y",
          itemcouponyn: "Y",
          itemcoupontype: "1",
          itemcouponvalue: 5,
          evalcnt: 27,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5736808,
          itemname: "[무아스] 덕무룩 LED 충전식 실리콘 무드등 조명 수유등",
          makerid: "mooas",
          brandname: "mooas",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzMvQjAwNTczNjgwOC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 17800,
          orgprice: 19900,
          salePer: "11.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 13,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5746250,
          itemname: "테일러스튜디오 바시티 오버핏 맨투맨 (블랙)",
          makerid: "tailorstudio",
          brandname: "TailorStudio",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzQvQjAwNTc0NjI1MC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 48950,
          orgprice: 89000,
          salePer: "45.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 0,
          totalpoint: 0,
          detailcode: 0
        },
        {
          itemid: 5764132,
          itemname: "2024 시그니쳐 더블 캘린더 (가족 캘린더)",
          makerid: "somemood",
          brandname: "SOME MOOD DESIGN ",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzYvQjAwNTc2NDEzMi0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 17800,
          orgprice: 17800,
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
          itemid: 5764383,
          itemname: "2024 매트북 데일리 다이어리 (날짜형)",
          makerid: "artholic1",
          brandname: "Be on D",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzYvQjAwNTc2NDM4My0zLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 17820,
          orgprice: 19800,
          salePer: "10.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 103,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5764818,
          itemname: "[크리미마을] 씰스티커 만원 랜덤팩",
          makerid: "creamy_village",
          brandname: "Creamy Village",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzYvQjAwNTc2NDgxOC0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 10000,
          orgprice: 14000,
          salePer: "29.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 59,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5758347,
          itemname: "내츄럴 강아지 쿠션커버",
          makerid: "decoview",
          brandname: "Decoview",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzUvQjAwNTc1ODM0Ny5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 21700,
          orgprice: 31000,
          salePer: "30.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 4,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5765259,
          itemname: "투명 플리츠 화장품 정리함 2size",
          makerid: "luxiai",
          brandname: "루시아이",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzYvQjAwNTc2NTI1OS0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 19855,
          orgprice: 22990,
          salePer: "9.0000",
          sailyn: "Y",
          itemcouponyn: "Y",
          itemcoupontype: "1",
          itemcouponvalue: 5,
          evalcnt: 37,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5766137,
          itemname: "노르딕 암막+무지 속지 거실커튼 4장+커튼봉15자",
          makerid: "bugangit10",
          brandname: "Carredeco",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzYvQjAwNTc2NjEzNy5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 74900,
          orgprice: 117400,
          salePer: "36.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 0,
          totalpoint: 0,
          detailcode: 0
        },
        {
          itemid: 5766616,
          itemname: "(실버925) 스위트 캔디 볼 젬스톤 팔찌 BR1792",
          makerid: "TATIANA10",
          brandname: "TATIANA",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzYvQjAwNTc2NjYxNi5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 28000,
          orgprice: 35000,
          salePer: "20.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 0,
          totalpoint: 0,
          detailcode: 0
        },
        {
          itemid: 5682882,
          itemname: "빌드 책상 선반형 1200 컴퓨터 철제 1인용 사무실 테이블",
          makerid: "gagufeeling",
          brandname: "GAGUFEELING",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NjgvQjAwNTY4Mjg4Mi0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 74730,
          orgprice: 85900,
          salePer: "13.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 1,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5703205,
          itemname: "[벤소닉] 모닥불 불멍 가습기 200ml 화이트 (리모컨 포함) BSFH-01",
          makerid: "sinyoungsm10",
          brandname: "Bensonic",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzAvQjAwNTcwMzIwNS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 71100,
          orgprice: 79000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "Y",
          itemcoupontype: "1",
          itemcouponvalue: 10,
          evalcnt: 0,
          totalpoint: 0,
          detailcode: 0
        },
        {
          itemid: 5703586,
          itemname: "밍밍씨 볼통이 볼냥이 볼토깽",
          makerid: "mingmingmoru",
          brandname: "mingmingmoru",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzAvQjAwNTcwMzU4Ni0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 27000,
          orgprice: 27000,
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
          itemid: 5706035,
          itemname: "오우드 패브릭 원목 수납 침대 프레임 SS Q K LK",
          makerid: "ramiesbed",
          brandname: "RAMIES",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzAvQjAwNTcwNjAzNS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 339000,
          orgprice: 359000,
          salePer: "6.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 1,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5712821,
          itemname: "★텐텐특가★멜로우 스툴 화장대의자 간이의자",
          makerid: "maisondec",
          brandname: "MAISON de COMME MA",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzEvQjAwNTcxMjgyMS03LmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 46900,
          orgprice: 99000,
          salePer: "53.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 5,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5713334,
          itemname: "Love letter 에코백",
          makerid: "mindobitto",
          brandname: "mindobitto",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzEvQjAwNTcxMzMzNC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 20000,
          orgprice: 20000,
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
          itemid: 5716417,
          itemname: "모던라인 반투명블랙 투명서랍 적층형 양말 속옷 정리함 보관함",
          makerid: "redcat01",
          brandname: "REDCAT",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzEvQjAwNTcxNjQxNy5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 17600,
          orgprice: 22000,
          salePer: "20.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 1,
          totalpoint: 20,
          detailcode: 0
        },
        {
          itemid: 5718046,
          itemname: "HAPPY ISLAND RiCO TOY - RANDOM (9EA)",
          makerid: "Jeonghya",
          brandname: "RECORDER FACTORY",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzEvQjAwNTcxODA0Ni0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 171000,
          orgprice: 171000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 25,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5720665,
          itemname: "NNC PINTUCK LINE LS TOP_BEIGE",
          makerid: "NICKNICOLE",
          brandname: "NICK&NICOLE",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzIvQjAwNTcyMDY2NS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 68000,
          orgprice: 68000,
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
          itemid: 5720668,
          itemname: "GLOSSY LEATHER BANDING SHORTS_CREAM",
          makerid: "NICKNICOLE",
          brandname: "NICK&NICOLE",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzIvQjAwNTcyMDY2OC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 88000,
          orgprice: 88000,
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
          itemid: 5720669,
          itemname: "NICOLE CLOSET LS TOP_BLACK",
          makerid: "NICKNICOLE",
          brandname: "NICK&NICOLE",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzIvQjAwNTcyMDY2OS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 48000,
          orgprice: 48000,
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
          itemid: 5726545,
          itemname: "[울랄라파자마] 우디곰 긴팔 여성페어 브라운 30수",
          makerid: "pis935310",
          brandname: "ULLALA",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NzIvQjAwNTcyNjU0NS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 65800,
          orgprice: 94000,
          salePer: "30.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 34,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5560709,
          itemname: "가방 든 슈야 토야 45cm 봉제인형",
          makerid: "dreamtop",
          brandname: "dreamtop",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NTYvQjAwNTU2MDcwOS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 42500,
          orgprice: 42500,
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
          itemid: 2967247,
          itemname: "[에스파 윈터 착용] SKETCH LOVE NEC_1",
          makerid: "nonenon",
          brandname: "NONENON",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy8yOTYvQjAwMjk2NzI0Ny0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 20000,
          orgprice: 25000,
          salePer: "20.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 123,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 3250232,
          itemname: "로지텍코리아 MX ANYWHERE3 무선 블루투스 마우스",
          makerid: "pine2020",
          brandname: "logitech",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy8zMjUvQjAwMzI1MDIzMi0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 99000,
          orgprice: 99000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 34,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 3608737,
          itemname: "[쿨린] 무선 미니 고데기 CL-601",
          makerid: "coolean24",
          brandname: "coolean",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy8zNjAvQjAwMzYwODczNy0zLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 39900,
          orgprice: 59900,
          salePer: "33.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 460,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 3916679,
          itemname: "빈티지 러브 디퓨저 110ml +무료 선물포장 (8scent)",
          makerid: "bivid",
          brandname: "bivid",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy8zOTEvQjAwMzkxNjY3OS00LmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 22900,
          orgprice: 22900,
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
          itemid: 4319845,
          itemname: "[젤시스슬라임] 딸기치즈케이크 / 점토섞기 슬라임 270ml",
          makerid: "jellsisslime1",
          brandname: "Jellysisters",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy80MzEvQjAwNDMxOTg0NS5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 14000,
          orgprice: 14000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 5,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 4812708,
          itemname: "[에스트라] 아토베리어 365 크림 80ml + [사은품증정]",
          makerid: "AMOREPACIFIC",
          brandname: "AMOREPACIFIC",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy80ODEvQjAwNDgxMjcwOC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 27900,
          orgprice: 31000,
          salePer: "10.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 25,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5585662,
          itemname: "잼몬스터 메모리폼 구름 마우스 손목 받침대 키보드 팜레스트 세트",
          makerid: "jammonster",
          brandname: "jammonster",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NTgvQjAwNTU4NTY2Mi5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 19900,
          orgprice: 19900,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 70,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5606732,
          itemname: "넘버 온 더 페이퍼",
          makerid: "afrocatshop",
          brandname: "afrocat",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NjAvQjAwNTYwNjczMi5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 42000,
          orgprice: 42000,
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
          itemid: 5615738,
          itemname: "카시오 CA-506-1DF (CA-506-1) 데이터뱅크 빈티지 공용 메탈시계",
          makerid: "trendmecca",
          brandname: "TRENDMECCA",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NjEvQjAwNTYxNTczOC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 39900,
          orgprice: 57000,
          salePer: "30.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 0,
          totalpoint: 0,
          detailcode: 0
        },
        {
          itemid: 5617395,
          itemname: "FLUFFY 2POCKET BRIEF SHOULDER 플러피 투포켓 브리프 숄더",
          makerid: "ithinkso",
          brandname: "ithinkso",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NjEvQjAwNTYxNzM5NS0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 105000,
          orgprice: 105000,
          salePer: "0.0000",
          sailyn: "N",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 3,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5634067,
          itemname: "[아무로키]네잎클로멍 인형키링",
          makerid: "amuroki",
          brandname: "amuroki",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NjMvQjAwNTYzNDA2Ny5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 33000,
          orgprice: 33000,
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
          itemid: 5662696,
          itemname: "블랙 아이즈 패브릭 티슈케이스",
          makerid: "villette1",
          brandname: "빌레뜨",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NjYvQjAwNTY2MjY5Ni5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 27200,
          orgprice: 32000,
          salePer: "15.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 9,
          totalpoint: 100,
          detailcode: 0
        },
        {
          itemid: 5667429,
          itemname: "투명 이동식 선반 무빙 트롤리 이동식정리함 6types",
          makerid: "luxiai",
          brandname: "루시아이",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NjYvQjAwNTY2NzQyOS0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 15295,
          orgprice: 17710,
          salePer: "9.0000",
          sailyn: "Y",
          itemcouponyn: "Y",
          itemcoupontype: "1",
          itemcouponvalue: 5,
          evalcnt: 44,
          totalpoint: 80,
          detailcode: 0
        },
        {
          itemid: 5670794,
          itemname: "[텐텐단독구성]납작이 차니베어(2type) + 인형용 우비",
          makerid: "chanibeardelivery",
          brandname: "chanibear",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NjcvQjAwNTY3MDc5NC5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 30900,
          orgprice: 30900,
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
          itemid: 5675720,
          itemname: "[커먼유니크] 데니지 포켓 데님 셔츠",
          makerid: "commonunique",
          brandname: "common unique",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy81NjcvQjAwNTY3NTcyMC0xLmpwZz9jbWQ9dGh1bWImZml0PXRydWUmd3M9ZmFsc2Umdz0zMDAmaD0zMDA",
         sellcash: 25000,
          orgprice: 35000,
          salePer: "29.0000",
          sailyn: "Y",
          itemcouponyn: "N",
          itemcoupontype: "1",
          itemcouponvalue: 0,
          evalcnt: 0,
          totalpoint: 0,
          detailcode: 0
        },
        {
          itemid: 2667766,
          itemname: "단순생활 휴대용 무선 가습기 무드등 780M",
          makerid: "printec",
          brandname: "DANSOON",
          itemimage: "aHR0cDovL3RodW1ibmFpbC4xMHgxMC5jby5rci93ZWJpbWFnZS9pbWFnZS9iYXNpYy8yNjYvQjAwMjY2Nzc2Ni5qcGc_Y21kPXRodW1iJmZpdD10cnVlJndzPWZhbHNlJnc9MzAwJmg9MzAw",
         sellcash: 21243,
          orgprice: 30000,
          salePer: "27.0000",
          sailyn: "Y",
          itemcouponyn: "Y",
          itemcoupontype: "1",
          itemcouponvalue: 3,
          evalcnt: 244,
          totalpoint: 80,
          detailcode: 0
        }
      ],
      eventList: [],
      currentPage: 1,
      maxPerPage: 20
    }
  },
  async mounted() {
    await this.getEventList();
  },
  methods: {

    async getEventList() {
      try {
        const targetUrl = `https://gateway.10x10.co.kr/v1/event/apis/exhibition-event-group/31`;
        const response = await fetch(targetUrl);
        if (response.ok) {
          const json = await response.json();
          if (json.status === 200) {
            this.eventList = json.result
          }
        }else {
          new Error('Network response was not ok.');
        }
      } catch (e) {
        console.error('Error fetching event list:', e);
      }
    },
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
