<template>
  <header class="header">
    <h1>
      <router-link to="/" class="logo">
        <img src="@/assets/common/logo.svg" alt="홈으로 가기">
      </router-link>
    </h1>
    <nav class="menu">
      <ul class="menu__container">
        <li v-for="nav in menuList" :key="nav.name">
          <template v-if="nav.type === 'inPage'">
            <router-link :to="nav.link">
              {{nav.name}}
            </router-link>
          </template>
          <template v-if="nav.type === 'outPage'">
            <a :href="nav.link" target="_blank">
              {{nav.name}}
            </a>
          </template>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        {
          name: '작업물',
          link: '/work',
          type: 'inPage'
        },
        {
          name: '리뉴얼',
          link: '/10x10',
          type: 'inPage'
        },
        {
          name: '기획 및 디자인',
          link: '/web-design',
          type: 'inPage'
        },
        {
          name: 'gitHub',
          link: 'https://github.com/joyurim/warehouse',
          type: 'outPage'
        },
      ],
    };
  }
}
</script>
<style scoped lang="scss">
.header {
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin: pxToVw(18) pxToVw(16) 0;
  border-bottom: 1px solid $grey80;
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: pxToVw(17);
    height: pxToVw(37);
  }
  .menu {
    padding-bottom: pxToVw(5);
    &__container {
      display: flex;
      align-items: center;
      gap: 0 pxToVw(15);
      a {
        @include font(14, 20, $weight-500);
        letter-spacing: -0.1px;
      }
    }
  }
}
.webLayout {
  .header {
    margin: pxToVw(18, 750) 0 0;
    .logo {
      width: pxToVw(17, 750);
      height: pxToVw(37, 750);
      margin-left: pxToVw(8, 750);
    }
    .menu {
      padding-bottom: pxToVw(5, 750);
      margin-right: pxToVw(8, 750);
      &__container {
        gap: 0 pxToVw(15, 750);
        a {
          @include font(14, 20, $weight-500, 750);
        }
      }
    }
  }
}
</style>
