<template>
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
</template>

<script>

export default {
  data() {
    return {
      gnbList: [
        {
          href: 'https://m.10x10.co.kr/event/eventmain.asp?eventid=128019',
          img: require('@/assets/tenbyten/main/gnb01.png'),
          name: '선착순 특가 기획전 이동'
        },
        {
          href: 'https://m.10x10.co.kr/event/eventmain.asp?eventid=127725',
          img: require('@/assets/tenbyten/main/gnb02.png'),
          name: '문구를 말하다 기획전 이동'
        },
        {
          href: 'https://m.10x10.co.kr/event/eventmain.asp?eventid=127962',
          img: require('@/assets/tenbyten/main/gnb03.png'),
          name: '그녀들의 식탁 기획전 이동'
        },
        {
          href: 'https://m.10x10.co.kr/event/eventmain.asp?eventid=127937',
          img: require('@/assets/tenbyten/main/gnb04.png'),
          name: '한번만 써봐요 기획전 이동'
        },
        {
          href: 'https://m.10x10.co.kr/event/eventmain.asp?eventid=127803',
          img: require('@/assets/tenbyten/main/gnb05.png'),
          name: '텀꾸 추천템 기획전 이동'
        },
        {
          href: '',
          img: require('@/assets/tenbyten/main/gnb06.png'),
          name: '선물의 참견 페이지 이동'
        },
        {
          href: '',
          img: require('@/assets/tenbyten/main/gnb07.png'),
          name: '텐바이텐 선물 추천 페이지'
        },
        {
          href: '',
          img: require('@/assets/tenbyten/main/gnb08.png'),
          name: '이벤트 리스트 페이지 이동'
        },
        {
          href: '',
          img: require('@/assets/tenbyten/main/gnb09.png'),
          name: '텐텐배송 상품 리스트 페이지 이동'
        },
        {
          href: '',
          img: require('@/assets/tenbyten/main/gnb10.png'),
          name: '베스트 상품 페이지 이동'
        },
      ]
    };
  },
  methods: {
  }
}
</script>
<style scoped lang="scss">
@import "@/styles/tenbyten/tenbytenMain";
</style>
