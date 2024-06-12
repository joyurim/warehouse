<template>
  <div class="container">
    <div class="container__banner">
      <img src="https://fiximage.10x10.co.kr/web2023/preOrder/m_banner.jpg" alt="프리오더 배너" />
    </div>
    <ul v-if="preorderList.length >= 1" class="preorder">
      <li
          v-for="(preorder) in preorderList"
          :key="preorder.eventCode"
          class="preorder__list"
          @click="preorderClickHandler(preorder.eventCode)"
      >
        <div :class="['preorder__img', {'close': preorder.close}]">
          <img :src="preorder.bannerImage" alt="프리오더 배너 이미지">
        </div>
        <p class="preorder__title">{{preorder.name}}</p>
        <div class="preorder__benefit">
          <span v-if="preorder.saleAndCoupon" class="preorder__benefit--discount">{{preorder.saleAndCoupon}}</span>
          <span v-if="preorder.badge1" class="preorder__benefit--badge">{{preorder.badge1}}</span>
          <span v-if="preorder.badge2" class="preorder__benefit--badge">{{preorder.badge2}}</span>
        </div>
      </li>
    </ul>
    <div v-else class="no-data">
      <img src="https://fiximage.10x10.co.kr/m/2021/common/bg_nodata.png" alt="빈 페이지">
      <p class="no-data__text">진행중인 프리오더가 없어요</p>
      <button type="button" class="no-data__btn-home" @click="moveToHomeClickHandler">홈으로</button>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
name: "RecommendProduct",
  data() {
    return {
      preorderList: [],
    }
  },
  async mounted() {
    await this.getPreorderList()
  },
  methods: {
    async getPreorderList() {
      try {
        const response = await fetch(`https://gateway.10x10.co.kr/v1/event/apis/event/search/MOBILE?keyword=프리오더`);
        if (response.ok) {
          const json = await response.json();
          if (json.status === 200 && json.message === 'success') {
            this.preorderList = json.result;
          }
        } else {
          new Error('Network response was not ok.');
        }
      } catch (e) {
        console.error('Error fetching preorder list:', e);
      }
    },
    moveToHomeClickHandler() {},
    preorderClickHandler(eventCode) {
      const url = `https://m.10x10.co.kr/event/eventmain.asp?eventid=${eventCode}`
      location.href = url;
    }
  }
})
</script>

<style scoped lang="scss">
@import "@/styles/work/preOrder.scss";
</style>
