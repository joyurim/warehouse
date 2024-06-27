<template>
  <main class="wrapper">
    <PortfolioHeader />
    <section class="content">
      <h2 class="title">주요 작업물</h2>
      <p class="discretion">최근 근무한 10x10에서 작업한 모바일 작업물입니다.</p>
      <ul class="event">
        <li v-for="event in workList" :key="event.code" class="event__list"
            @click="openModal(event)">
          <span
              class="event__list--type"
              :class="{'badge-event': event.type === '이벤트', 'badge-page': event.type === '운영'}"
          >
            {{event.type}}
          </span>
          <p class="event__list--title">{{ event.popupTitle }}</p>
          <p class="event__list--description">{{ event.data }}</p>
          <p class="event__list--description">{{ event.participation }} 참여</p>
        </li>
      </ul>
    </section>
    <BaseModal :popupTitle="modalTitle" v-model:modelValue="showModal">
      <component :is="selectedComponent" />
    </BaseModal>
  </main>
</template>

<script setup>
import { ref } from 'vue';
import SummerPhrases from '@/components/work/SummerPhrases.vue';
import RecommendProduct from '@/components/work/RecommendProduct.vue';
import PreOrderList from "@/components/work/PreOrderList.vue";
import TenTenSale from "@/components/work/22ndSale/TenTenSale.vue";
import FubaoSeasonGreetings from "@/components/work/FubaoSeasonGreetings.vue";
import PortfolioHeader from "@/components/common/PortfolioHeader.vue";

const showModal = ref(false);
const workList = ref([
  {
    type: '이벤트',
    code: '127725',
    popupTitle: '여름문구, 여름의 시작',
    data: '2024.05.31 ~ 2024.06.04',
    participation: '퍼블 100%, 개발 100%',
    component: SummerPhrases,
  },
  {
    type: '운영',
    code: 'recommendItem',
    popupTitle: '고객 추천상품 리스트',
    data: '2024.05.31 ~ 2024.06.04',
    participation: '디자인 100%, 퍼블 100%, 개발 100%',
    component: RecommendProduct,
  },
  {
    type: '운영',
    code: 'preOrder',
    popupTitle: '프리오더 리스트',
    data: '2023.11.29 ~ 2023.11.30',
    participation: '퍼블 100%, 개발 100%',
    component: PreOrderList,
  },
  {
    type: '이벤트',
    code: '22nd',
    popupTitle: '10x10 22주년 텐텐세일',
    data: '2023.09.16 ~ 2023.10.10',
    participation: '퍼블 100%, 개발 50%',
    component: TenTenSale,
  },
  {
    type: '이벤트',
    code: '124554',
    popupTitle: '텐텐단독, 푸바오 시즌 그리팅',
    data: '2023.08.03 ~ 2023.08.18',
    participation: '퍼블 100%, 개발 30%',
    component: FubaoSeasonGreetings,
  },
]);

const modalTitle = ref('');
const selectedComponent = ref(null);

const openModal = (event) => {
  window.addEventListener('popstate', function() {
      showModal.value = false;
  });
  showModal.value = true;
  history.pushState({popupOpen: true}, '');
  modalTitle.value = event.popupTitle;
  selectedComponent.value = event.component;
};

</script>

<style scoped lang="scss">
@import "@/styles/work/workList.scss";
</style>
