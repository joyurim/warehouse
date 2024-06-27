<template>
  <div class="alert-popup">
    <div class="alert-popup__content">
      <h2>Welcome!</h2>
      <p>
        제 포트폴리오는 모바일 디자인을 우선으로 제작했습니다.
        <strong>F12 > 개발자 모드 > 모바일</strong> 선택 후 확인해 주시면 감사하겠습니다.
      </p>
      <button @click="close">포트폴리오 둘러보기</button>
    </div>
  </div>
</template>

<script setup>
import { defineEmits } from 'vue';
const emit = defineEmits(['close']);
const close = () => {
  emit('close');
};
</script>

<style scoped lang="scss">
.alert-popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  &__content {
    width: pxToVw(343);
    padding: pxToVw(20);
    background: white;
    text-align: center;
    h2 {
      margin-bottom: pxToVw(12);
      @include font(24, 30, $weight-700);
    }
    p {
      margin-bottom: pxToVw(16);
      @include font(16, 24, $weight-500);
      > strong {
        color: #007bff;
      }
    }
    button {
      margin-top: pxToVw(10);
      padding: pxToVw(8) pxToVw(16);
      background-color: #007bff;
      color: white;
      cursor: pointer;
    }
  }
}
.webLayout {
  .alert-popup {
    &__content {
      width: pxToVw(343, 1200);
      padding: pxToVw(20, 1200);
      h2 {
        margin-bottom: pxToVw(12, 1200);
        @include font(24, 30, $weight-700, 1200);
      }
      p {
        margin-bottom: pxToVw(16, 1200);
        @include font(16, 24, $weight-500, 1200);
      }
      button {
        margin-top: pxToVw(10, 1200);
        padding: pxToVw(8, 1200) pxToVw(16, 1200);
      }
    }
  }
}
</style>
