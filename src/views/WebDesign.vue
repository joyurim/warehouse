<template>
  <div class="layout">
    <h1 class="layout__header">웹 디자인 작업</h1>
    <p class="layout__discretion">웹 디자이너로 근무 시 작업한 디자인 포트폴리오입니다.</p>
    <div class="design layout__content">
      <a
          href="https://www.figma.com/design/756YAflEL7tiK3zEoBPWLQ/Style-Guide?node-id=0-1&t=UbCwXkCoKWRWiXkZ-0"
          target="_blank"
          class="design__list"
      >
        <img src="@/assets/web/cover.jpg" alt="텐바이텐 디자인 시스템">
        <p class="title">디자인 시스템 및 UI 고도화</p>
        <p class="description">
          텐바이텐에서 재직하며 디자인 시스템을 정리하고 페이지별 UI를 고도화한 디자인 파일입니다.
          해당 작업을 통해 일관된 사용자 경험을 제공하고, 효율적인 디자인 프로세스를 구축했습니다. 각 페이지의 UI를 세부적으로 개선하여 사용자 친화적인 인터페이스를 구현했습니다.
          제 디자인 파일을 통해 텐바이텐의 디자인 시스템과 UI 고도화 작업을 확인해 보세요.
        </p>
      </a>
      <a
          href="https://drive.google.com/file/d/1CRU6TnCVuLoRcqpTK6QMdyZpWF6LVWBP/view?usp=sharing"
          target="_blank"
          class="design__list"
      >
        <img src="@/assets/web/nase.png" alt="디자인나스 포트폴리오">
        <p class="title">웹디자인 포트폴리오 작업물</p>
        <p class="description">
          웹 디자이너로 재직할 때 작업했던 디자인과
          디자인나스 ND클래스 과정에서 직접 기획한 사이트의 기획 및 디자인입니다.
          재직 중에는 사용자 경험을 최적화하기 위해 다양한 웹 디자인 작업을 수행하였고,
          이를 통해 직관적이고 매력적인 인터페이스를 구현했습니다.
          디자인나스와 ND클래스 과정에서는 사이트 기획부터 디자인까지 전 과정을 직접 담당하여,
          창의적이고 사용자가 만족할 수 있는 결과물을 완성했습니다.
        </p>
      </a>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
export default defineComponent({
  name: 'WebDesign'
})
</script>

<style scoped lang="scss">
.design {
  padding: pxToVw(4) pxToVw(16);
  &__list {
    &:first-child {
      margin-bottom: pxToVw(32);
    }
    > img {
      width: pxToVw(343);
      height: pxToVw(175);
      object-fit: fill;
      margin-bottom: pxToVw(8);
      border-radius: pxToVw(8);
    }
    .title {
      margin-bottom: pxToVw(4);
      font: pxToVw(16) / 1.5 $weight-600;
      letter-spacing: -0.2vw;
    }
    .description {
      color: $grey60;
      font: pxToVw(13) / 1.5 $weight-500;
      letter-spacing: -0.15vw;
    }
  }
}
</style>
