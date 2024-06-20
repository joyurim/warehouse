<template>
  <div class="main-intro">
    <div class="main-intro__text">
      <h1>Portfolio</h1>
      <p>
        안녕하세요,<br/>
        사용자 편의를 위한 UI 설계와 디자인,<br/>
        퍼블리싱 및 개발경험을 가진 조유림입니다.<br/><br/>
        저는 직관적이고 아름다운 인터페이스를<br/>
        설계하고 구현하는 데 열정을 가지고 있습니다.<br/>
        다양한 프로젝트를 통해 쌓은 경험을 바탕으로<br/>
        사용자와 고객 모두가 만족할 수 있는<br/>
        결과물을 제공하기 위해 노력하고 있습니다.<br/><br/>
        제 포트폴리오에서 저의 작업과 역량을 확인해 보세요.
      </p>
      <p class="main-intro__text--noti">
        제 포트폴리오는 모바일 전용으로 만들어졌습니다.<br/>
        F12 > 모바일 모드로 봐주세요!
      </p>
    </div>
    <nav class="menu">
      <ul class="menu__container">
        <li v-for="nav in menuList" :key="nav.name">
          <template v-if="nav.type === 'inPage'">
            <router-link :to="nav.link">
              <div v-if="nav.date" class="date">{{nav.date}}</div>
              <div class="title">{{nav.name}}</div>
            </router-link>
          </template>
          <template v-if="nav.type === 'outPage'">
            <a :href="nav.link" target="_blank">
              <div class="title">{{nav.name}}</div>
            </a>
          </template>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script >
import {defineComponent} from 'vue'
export default defineComponent({
  name: "MainHome",
  data() {
    return {
      menuList: [
        {
          date: '2024.06 ~ 2024.07',
          name: '리뉴얼 텐바이텐',
          link: '/10x10',
          type: 'inPage'
        },
        {
          date: '2022.11 ~ 2024.06',
          name: '최근 작업물 목록',
          link: '/work',
          type: 'inPage'
        },
        {
          date: '',
          name: '디자인',
          link: '/web-design',
          type: 'inPage'
        },
        {
          date: '',
          name: 'gitHub',
          link: 'https://github.com/joyurim/warehouse',
          type: 'outPage'
        },
      ]
    }
  },
});
</script>

<style scoped lang="scss">
.main-intro {
  background: linear-gradient(179.76deg, rgba(0, 0, 0, 0) 21.59%, rgba(162, 162, 162, 0.2) 99.79%), #FFFFFF;
  &__text {
    padding: pxToVw(45) pxToVw(24);
    > h1 {
      margin-bottom: pxToVw(16);
      color: black;
      font: pxToVw(34) / normal $weight-700;
    }
    > p {
      color: black;
      font: pxToVw(14) / 1.5 $weight-400;
    }
    > p.main-intro__text--noti {
      margin-top: pxToVw(35);
      color: #777;
      font-size: pxToVw(13);
      letter-spacing: -.4px;
    }
  }
  .menu {
    padding-bottom: pxToVw(90);
    box-sizing: border-box;
    &__container {
      width: pxToVw(343);
      margin: 0 auto;
      > li {
        width: 100%;
        height: pxToVw(160);
        margin-bottom: pxToVw(14);
        border: pxToVw(2) solid black;
        box-sizing: border-box;
        border-radius: pxToVw(8);
        background: #F9F9F9;
        > a {
          display: flex;
          flex-direction: column;
          justify-content: center;
          width: 100%;
          height: 100%;
          padding: 0 pxToVw(25);
          box-sizing: border-box;
          .date {
            width: fit-content;
            padding: pxToVw(4) pxToVw(8) pxToVw(2);
            margin-bottom: pxToVw(12);
            background: black;
            border-radius: pxToVw(2);
            color: white;
            font: pxToVw(11) / normal $weight-400;
          }
          .title {
            color: black;
            font: pxToVw(24) / normal $weight-700;
          }
        }
        &:nth-of-type(3),
        &:nth-of-type(4) {
          display: inline-block;
          width: pxToVw(165);
          margin-bottom: 0;
          > a {
            align-items: center;
          }
        }
        &:nth-of-type(3){
          margin-right: pxToVw(13);
        }
      }
    }
  }
}
</style>
