<template>
  <div class="wrapper">
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
    <main>
      메인
      <footer>푸터</footer>
    </main>
    <ul class="tabBar">
      <li v-for="(tab, index) in tabList" :key="index" class="tabBar__item">
        <router-link :to="tab.link" :aria-label="tab.name">
          <img :src="tab.icon" :alt="tab.name">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script >
import {defineComponent} from 'vue'
export default defineComponent({
  name: "TenByTen",
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
      tabList: [
        { link: '', name: '카테고리', icon: require('@/assets/tenbyten/common/tabbar-menu.svg')},
        { link: '', name: '마이페이지', icon: require('@/assets/tenbyten/common/tabbar-mypage.svg')},
        { link: '', name: '홈', icon: require('@/assets/tenbyten/common/tabbar-home.svg')},
        { link: '', name: '위시', icon: require('@/assets/tenbyten/common/tabbar-wish.svg')},
        { link: '', name: '히스토리', icon: require('@/assets/tenbyten/common/tabbar-history.svg')},
      ]
    }
  },
});
</script>

<style scoped lang="scss">
@import "@/styles/tenbyten/tenbytenMain.scss";
</style>
