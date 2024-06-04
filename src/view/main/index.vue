<template>
  <nav class="commonNav">
    <ul class="commonNav__container">
      <li v-for="nav in menuList" :key="nav.name">
        <router-link :to="nav.link">
          {{nav.name}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainHome',
  data() {
    return {
      isWebLayout: false,
      menuList: [
        { name: '이벤트 모아보기', link: '/' },
        { name: '텐바이텐 리뉴얼', link: '' },
        { name: 'UI 화면설계서', link: '' },
        { name: '디자인 작업물', link: '' },
        { name: '주요 참여 프로젝트', link: '' },
        { name: 'gitHub 바로가기', link: '' },
      ]
    };
  },
};
</script>
