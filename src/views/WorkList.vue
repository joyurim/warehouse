<template>
  <div class="layout">
    <h1 class="layout__header">주요 작업물</h1>
    <p class="layout__discretion">최근 근무한 10x10에서 작업한 모바일 작업물입니다.</p>
    <div class="layout__content">
      <ul class="event">
        <li v-for="event in workList" :key="event.code" class="event__list" @click="openModal(event)">
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
      <BaseModal :popupTitle="modalTitle" v-model:modelValue="showModal">
        <component :is="selectedComponent" />
      </BaseModal>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SummerPhrases from '@/components/work/SummerPhrases.vue';
import RecommendProduct from '@/components/work/RecommendProduct.vue';
import PreOrderList from "@/components/work/PreOrderList.vue";

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
    component: '',
  },
  {
    type: '이벤트',
    code: '124554',
    popupTitle: '텐텐단독, 푸바오 시즌 그리팅',
    data: '2023.08.03 ~ 2023.08.18',
    participation: '퍼블 100%, 개발 30%',
    component: '',
  },
  {
    type: '운영',
    code: 'gift_sincerity',
    popupTitle: '선물의 진심',
    data: '2022.11.21 ~ 2023.12.05',
    participation: '퍼블 100%, 개발 100%',
    component: '',
  },
]);

const modalTitle = ref('');
const selectedComponent = ref(null);

const openModal = (event) => {
  showModal.value = true;
  modalTitle.value = event.popupTitle;
  selectedComponent.value = event.component;
};

</script>

<style scoped lang="scss">
.event {
  display: flex;
  flex-direction: column;
  gap: pxToVw(16) 0;
  padding: 0 pxToVw(16) pxToVw(20);
  background: $grey10;
  &__list {
    position: relative;
    padding: pxToVw(20);
    border: pxToVw(1) solid $grey20;
    border-radius: pxToVw(8);
    background: white;
    box-shadow: 0 pxToVw(2) pxToVw(6) $grey20;
    &--type {
      position: absolute;
      top: pxToVw(20);
      right: pxToVw(20);
      display: inline-block;
      padding: pxToVw(3) pxToVw(5) pxToVw(1);
      font: pxToVw(12) / 1.5 $weight-500;
      border-radius: pxToVw(8);
    }
    .badge-event {
      color: #0802cd;
      background: #edf5ff;
    }
    .badge-page {
      color: #008883;
      background: #dcfffd;
    }
    &--title {
      margin-bottom: pxToVw(4);
      font: pxToVw(16) / 1.5 $weight-600;
      letter-spacing: -0.2vw;
    }
    &--description {
      color: $grey60;
      font: pxToVw(13) / 1.5 $weight-500;
      letter-spacing: -0.15vw;
    }
  }
}
</style>
