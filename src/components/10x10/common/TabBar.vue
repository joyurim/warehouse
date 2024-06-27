<template>
  <ul class="tabBar">
    <li v-for="(tab, index) in tabList" :key="index" class="tabBar__item">
      <router-link :to="tab.link" :aria-label="tab.name">
        <img :src="tab.icon" :alt="tab.name">
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      tabList: [
        { link: '/10x10/category', name: '카테고리', icon: require('@/assets/tenbyten/common/tabbar-menu.svg')},
        { link: '/10x10/mypage', name: '마이페이지', icon: require('@/assets/tenbyten/common/tabbar-mypage.svg')},
        { link: '/10x10', name: '홈', icon: require('@/assets/tenbyten/common/tabbar-home.svg')},
        { link: '/10x10/wish', name: '위시', icon: require('@/assets/tenbyten/common/tabbar-wish.svg')},
        { link: '/10x10/history', name: '히스토리', icon: require('@/assets/tenbyten/common/tabbar-history.svg')}
      ]
    };
  }
}
</script>
<style scoped lang="scss">
.tabBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: pxToVw(6) pxToVw(8);
  background: white;
  border-top: pxToVw(1) solid $grey20;
  box-sizing: border-box;
  &__item {
    img {
      vertical-align: bottom;
    }
  }
}
.todayPc {
  .tabBar {
    padding: pxToVw(6, 1200) pxToVw(8, 1200);
    border-top: pxToVw(1, 1200) solid $grey20;
    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
