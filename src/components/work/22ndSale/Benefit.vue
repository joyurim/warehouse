<template>
  <section>
    <article class="hbd" @click="moveToEvent()">
      <h2 class="hbd__title">
        텐바이텐이 벌써<br/>
        <span class="hbd__title--color">22주년!?</span>
      </h2>
      <button type="button" class="hbd__more"	>
        축하메세지 남기고 선물 받기
      </button>
    </article>
    <article class="benefit22">
      <h2 class="benefit22__title-wrap">
        <img src="//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/benefit__icon-colver.png/10x10/optimize" alt="텐텐절 이벤트 혜택">
        <p><span class="benefit__title--point">{{userName}}님</span>을 슈퍼 럭키하게 만들어 줄</p>
        <div class="benefit22__title">4가지 혜택</div>
      </h2>
      <ul class="benefit22__container">
        <li
            v-for="benefit in benefitDataList"
            :key="`benefit-${benefit.code}`"
            class="benefit22__list"
            @click="clickedBenefit(benefit.moveTarget)"
        >
          <img :src="benefit.imgSrc" :alt="benefit.imgAlt">
          <div class="benefit22__list--title">{{benefit.benefitText}}</div>
        </li>
      </ul>
    </article>
  </section>
</template>
<script>
import {defineComponent} from 'vue'
export default defineComponent({
  name: "BenefitComponent",
  data() {
    return {
      userName: '고객',
      benefitDataList: [
        {
          code: 1,
          imgSrc: '//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/benefit__img01.png/10x10/optimize',
          imgAlt: '텐텐 단독',
          benefitText: '텐텐 단독',
          moveTarget: 'Koongya'
        },
        {
          code: 2,
          imgSrc: '//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/benefit__img02.png?v=1.0/10x10/optimize',
          imgAlt: '최대 ~79%',
          benefitText: '최대 ~79%',
          moveTarget: 'Luckydraw'
        },
        {
          code: 3,
          imgSrc: '//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/benefit__img03.png/10x10/optimize',
          imgAlt: '행운의 래플',
          benefitText: '행운의 래플',
          moveTarget: 'Raffle'
        },
        {
          code: 4,
          imgSrc: '//webimage.10x10.co.kr/fixevent/event/2023/tentensale/22nd/m/benefit__img04.png/10x10/optimize',
          imgAlt: '22주년 굿즈',
          benefitText: '22주년 굿즈',
          moveTarget: 'Goods'
        },
      ]
    }
  },
  methods: {
    moveToEvent() {
      parent.location.href = 'https://m.10x10.co.kr/linker/forum.asp?idx=9'
    },
    clickedBenefit(target) {
      this.$emit("moveToSection", target);
    }
  }
})
</script>

<style scoped lang="scss">

</style>
