<template>
  <header class="header">
    <div class="header__logo">
      <a href="/10x10">
        <img src="@/assets/tenbyten/common/logo.svg" alt="10x10 Logo" class="logo">
      </a>
    </div>
    <div class="header__actions">
      <button class="header__search-button" aria-label="Search">
        <img src="@/assets/tenbyten/common/search-icon.svg" alt="Search">
      </button>
      <button class="header__cart-button" aria-label="Cart">
        <img src="@/assets/tenbyten/common/cart-icon.svg" alt="Cart">
      </button>
    </div>
  </header>
  <nav class="nav">
    <ul class="nav__menu">
      <li v-for="(nav, index) in navList" :key="index" class="nav__item">
        <template v-if="nav.type === 'inManu'">
          <router-link :to="nav.link">{{ nav.name }}</router-link>
        </template>
        <template v-else>
          <a :href="nav.link" target="_blank">{{ nav.name }}</a>
        </template>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { link: '/10x10', name: '텐텐추천', type: 'inManu' },
        { link: '', name: '재입고', type: 'outManu' },
        { link: '', name: '프리오더', type: 'outManu' },
        { link: '', name: '팡금판매된', type: 'outManu' },
        { link: '', name: '캐릭터월드', type: 'outManu' },
        { link: '', name: '선물의진심', type: 'outManu' },
        { link: '', name: '선물의참견', type: 'outManu' },
      ],
    };
  }
}
</script>
<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: pxToVw(18) pxToVw(16);
  background-color: white;
  border-bottom: pxToVw(1) solid $grey20;
  &__logo {
    a {
      display: flex;
      .logo {
        width: pxToVw(100);
        height: auto;
        vertical-align: middle;
      }
    }
  }
  &__actions {
    display: flex;
    gap: 0 pxToVw(12);
    button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      width: pxToVw(24);
      height: pxToVw(24);
    }
  }
}
.nav {
  background-color: white;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  @include customScrollbar;
  &__menu {
    display: flex;
    flex-wrap: nowrap;
    padding: pxToVw(13) 0 pxToVw(11);
    gap: 0 pxToVw(14);
    &::-webkit-scrollbar {
      display: none;
    }
    .nav__item {
      flex: 0 0 auto;
      &:first-of-type {
        padding-left: pxToVw(16);
      }
      &:last-of-type {
        padding-right: pxToVw(16);
      }
      a {
        display: block;
        color: $grey60;
        @include font(14,20,$weight-500);
        &.router-link-active {
          color: $grey80;
        }
      }
    }
  }
}
.todayPc {
  .header {
    padding: pxToVw(12, 1200) pxToVw(16, 1200);
    border-bottom: pxToVw(1, 1200) solid $grey20;
    &__logo {
      .logo {
        width: pxToVw(100, 1200);
      }
    }
    &__actions {
      gap: 0 pxToVw(12, 1200);
      button {
        width: pxToVw(24, 1200);
        height: pxToVw(24, 1200);
      }
    }
  }
  .nav {
    &__menu {
      padding: pxToVw(13, 1200) 0 pxToVw(11, 1200);
      gap: 0 pxToVw(14, 1200);
      .nav__item {
        &:first-of-type {
          padding-left: pxToVw(16, 1200);
        }
        &:last-of-type {
          padding-right: pxToVw(16, 1200);
        }
        a {
          font: 16px / 24px $weight-500;
        }
      }
    }
  }
}
</style>
