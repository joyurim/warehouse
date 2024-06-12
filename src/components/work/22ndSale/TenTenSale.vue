<template>
  <main class="year22">
    <IntroTwentySecond />
    <BenefitComponent @moveToSection="moveToSection" />
    <ul ref="tabs" class="tabs" :class="{'sticky': isSticky}">
      <li
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{'is-active': currentTab === tab.nameEng}"
          @click="moveToSection(tab.nameEng)"
      >
        {{tab.nameKo}}
      </li>
    </ul>
    <SpecialPrice id="special" />
    <EventList22nd ref="eventList22nd" id="event" />
  </main>
</template>

<script>
import {defineComponent} from 'vue'
import IntroTwentySecond from '@/components/work/22ndSale/IntroTwentySecond.vue';
import BenefitComponent from '@/components/work/22ndSale/Benefit.vue';
import SpecialPrice from '@/components/work/22ndSale/SpecialPrice.vue';
import EventList22nd from '@/components/work/22ndSale/EventList22nd.vue';
export default defineComponent({
  name: "TenTenSale",
  components: {
    IntroTwentySecond,
    BenefitComponent,
    SpecialPrice,
    EventList22nd
  },
  data() {
    return {
      tabs: [
        { nameKo: '특가', nameEng: 'special' },
        { nameKo: '혜택 이벤트', nameEng: 'event' },
      ],
      currentTab: 'special',
      scrollTimer: null,
      isSticky: false,
      tabsOffsetTop: 0
    };
  },
  mounted() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    this.observer = new IntersectionObserver(this.handleScroll, options);
    this.tabs.forEach(tab => {
      const element = document.getElementById(tab.nameEng);
      if (element) {
        this.observer.observe(element);
      }
    });

    this.$nextTick(() => {
      this.tabsOffsetTop = this.$refs.tabs.offsetTop;

      // 스크롤 이벤트 리스너 설정
      window.addEventListener('scroll', this.checkSticky);
    });
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
    window.removeEventListener('scroll', this.checkSticky);
  },
  methods: {
    checkSticky() {
      console.log('?!')
      const tabsElement = this.$refs.tabs;
      this.tabsOffsetTop = tabsElement.getBoundingClientRect().top + window.scrollY;
      this.isSticky = window.scrollY >= this.tabsOffsetTop;
    },
    moveToSection(targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    handleScroll(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.currentTab = entry.target.id;
        }
      });
    }
  },
})
</script>


<style lang="scss">
@import "@/styles/work/tentensSale.scss";
</style>
