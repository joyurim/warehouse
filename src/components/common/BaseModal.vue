<template>
  <teleport to="#app">
    <Transition name="modal">
      <div v-if="modelValue" class="modal" @click="close">
        <div class="modal__container" @click.stop>
          <div class="modal__header">
            <h1>{{ popupTitle }}</h1>
            <button class="modal__header--close" @click="close">
              <img src="@/assets/common/icon-close.svg" alt="팝업 닫기">
            </button>
          </div>
          <div class="modal__body">
            <slot></slot>
          </div>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<script setup>
import { defineProps, defineEmits, toRefs } from 'vue';
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  popupTitle: {
    type: String,
    default: ''
  }
});
const emit = defineEmits(['update:modelValue']);

const { modelValue } = toRefs(props);
const close = () => {
  emit('update:modelValue', false);
};
</script>

<style scoped lang="scss">
.modal {
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
  &__container {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100vw;
    height: 100svh;
    background: white;
  }
  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: pxToVw(6) pxToVw(16) pxToVw(8);
    border: pxToVw(1) solid $grey30;
    h1 {
      font-weight: 700;
      font-size: pxToVw(18);
      line-height: pxToVw(26);
    }
    &--close {
      width: pxToVw(20);
      height: pxToVw(20);
    }
  }
  &__body {
    flex: 1;
    overflow-y: auto;
  }
}
.webLayout {
  .modal {
    &__container {
      position: relative;
      width: 750px;
      height: 900px;
      background: white;
    }
    &__header {
      padding: 9px 16px 5px;
      border: 1px solid $grey30;
      h1 {
        font-size: 18px;
        line-height: 26px;
      }
      &--close {
        display: flex;
        width: 20px;
        height: 20px;
        margin-bottom: 3px;
      }
    }
  }
}
.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.1);
}
</style>
