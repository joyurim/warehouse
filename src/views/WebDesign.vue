<template>
  <div class="wrapper">
    <PortfolioHeader />
    <section class="design content">
      <h1 class="title">디자인 및 기획 작업</h1>
      <p class="discretion">디자이너로 근무 시 작업한 디자인 및 기획 포트폴리오입니다.</p>
      <div class="design">
        <a
            href="https://www.figma.com/design/H8va5dvoW9quJpwEEuzboc/UI%2FUX-%EC%9E%91%EC%97%85%EB%AC%BC?node-id=1-781&m=dev&t=JMFGcn4spCytdUnR-1"
            target="_blank"
            class="design__list"
        >
          <img src="@/assets/web/cover_uiux.jpg" alt="UI/UX 작업물">
          <p class="design__list--title">디자인 시스템 및 UI/UX 작업물</p>
          <p class="design__list--description">
            텐바이텐 근무시 작업한 디자인 시스템과 기획자 및 디자이너로 근무시 작업한 UI/UX 디자인 작업물 모음입니다.
          </p>
        </a>
        <a
            href="https://drive.google.com/file/d/1CRU6TnCVuLoRcqpTK6QMdyZpWF6LVWBP/view?usp=sharing"
            target="_blank"
            class="design__list"
        >
          <img src="@/assets/web/nase.png" alt="디자인나스 포트폴리오">
          <p class="design__list--title">웹디자인 포트폴리오 작업물</p>
          <p class="design__list--description">
            웹 디자이너로 재직할 때 작업했던 디자인과
            디자인나스 ND클래스 과정에서 직접 기획한 사이트의 기획 및 디자인입니다.
            재직 중에는 사용자 경험을 최적화하기 위해 다양한 웹 디자인 작업을 수행하였고,
            이를 통해 직관적이고 매력적인 인터페이스를 구현했습니다.
            디자인나스와 ND클래스 과정에서는 사이트 기획부터 디자인까지 전 과정을 직접 담당하여,
            창의적이고 사용자가 만족할 수 있는 결과물을 완성했습니다.
          </p>
        </a>        
      </div>
    </section>
  </div>
</template>

<script>
import {defineComponent} from 'vue'
import PortfolioHeader from "@/components/common/PortfolioHeader.vue";
export default defineComponent({
  name: 'WebDesign',
  components: {PortfolioHeader}
})
</script>

<style scoped lang="scss">
@import '@/styles/extend.scss';
.content {
  .title {
    @extend .pageTitle;
  }
  .discretion {
    @extend .pageDiscretion;
  }
  .design {
    @extend .layoutPadding;
    padding-bottom: 60px;
    &__list {
      margin-bottom: pxToVw(32);
      &:last-of-type {
        margin-bottom: 0;
      }
      > img {
        width: pxToVw(343);
        height: pxToVw(175);
        object-fit: fill;
        margin-bottom: pxToVw(8);
        border-radius: pxToVw(8);
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
}
.webLayout {
  .content {
    padding: 60px 20px 94px;
    .title {
      @extend .pageTitle;
      padding: 0;
    }
    .discretion {
      @extend .pageDiscretion;
      padding: 0;;
    }
    .design {
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(2, 1fr);
      padding: 0;
      &__list {
        width: 100%;
        margin-bottom: 0;
        > img {
          width: inherit;
          height: 300px;
          margin-bottom: 8px;
          border-radius: 0;
        }
        &--title {
          padding: 0 4px;
          margin-bottom: 8px;
          font: 18px / 1.5 $weight-600;
          letter-spacing: -0.2px;
        }
        &--description {
          padding: 0 4px;
          font: 14px / 1.5 $weight-500;
          letter-spacing: -0.15px;
        }
      }
    }
  }
}
</style>
