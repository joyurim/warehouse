<script setup>
import { defineProps, defineEmits, toRefs } from 'vue';
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
});
const emit = defineEmits(['update:modelValue']);

const { modelValue } = toRefs(props);
const close = () => {
  emit('update:modelValue', false);
};
</script>

<template>
  <teleport to="body">
    <Transition name="modal">
      <div v-if="modelValue" class="modal-overlay" @click="close">
        <div class="modal-content" @click.stop>
          <slot></slot>
          <button @click="close">Close</button>
        </div>
      </div>
    </Transition>
  </teleport>
</template>

<style scoped lang="scss">
.modal-overlay {
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
}

.modal-content {
  background: white;
  padding: 20px;
  border-radius: 5px;
  position: relative;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.1);
}
</style>
