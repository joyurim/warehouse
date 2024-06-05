<template>
  <ul class="event">
    <li v-for="event in eventList" :key="event.code" class="event__list" @click="openModal(event)">
      <p>이벤트명 : {{ event.popupTitle }}</p>
      <p>작업기간 : {{ event.data }}</p>
      <p>참여도 : {{ event.participation }}</p>
    </li>
  </ul>
  <BaseModal :popupTitle="modalTitle" v-model:modelValue="showModal">
    <component :is="selectedComponent" />
  </BaseModal>
</template>

<script setup>
import { ref } from 'vue';
import SummerPhrases from '@/components/event/SummerPhrases.vue';
import PreOrderList from "@/components/event/PreOrderList.vue";

const showModal = ref(false);
const eventList = ref([
  {
    code: '127725',
    popupTitle: '여름문구, 여름의 시작',
    data: '2024.05.31 ~ 2024.06.04',
    participation: '퍼블 100%, 개발 100%',
    component: SummerPhrases,
  },
  {
    code: 'preOrder',
    popupTitle: '프리오더',
    data: '2023.11.29 ~ 2023.11.30',
    participation: '퍼블 100%, 개발 100%',
    component: PreOrderList,
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
  padding: 0 pxToVw(16);
  background: $grey10;
  &__list {
    padding: pxToVw(20);
    border: pxToVw(1) solid $grey20;
    border-radius: pxToVw(8);
    background: white;
    box-shadow: 0 pxToVw(2) pxToVw(6) $grey20;
  }
}
</style>
