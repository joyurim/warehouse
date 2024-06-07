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

<script setup>
import { ref } from 'vue';

const menuList = ref([
  { name: '텐바이텐 작업물', link: '/work' },
  { name: '텐바이텐 리뉴얼', link: '/10x10' },
  { name: 'UI 화면설계서', link: '/screen-book' },
  { name: '디자인 작업물', link: '/web-design' },
  { name: '주요 참여 프로젝트', link: '/project' },
  { name: 'gitHub 바로가기', link: 'https://github.com/joyurim/warehouse' },
]);
</script>
