<script setup>
  import { ref } from 'vue';
  const showModal = ref(false);
</script>

<template>
  <ul>
    <li @click="showModal = true">
      <p>이벤트명 : 여름문구, 여름의 시작</p>
      <p>작업기간 : 2024.2</p>
      <p>참여도 : 퍼블리싱 100%, 개발 100%</p>
    </li>
  </ul>
  <BaseModal v-model:modelValue="showModal">
    <h2>This is a modal!</h2>
    <p>Some content for the modal.</p>
  </BaseModal>
</template>

