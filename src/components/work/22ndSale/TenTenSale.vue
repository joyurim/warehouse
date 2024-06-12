<template>
  <main class="year22">
    <IntroTwentySecond />
    <BenefitComponent @moveToSection="moveToSection" />
    <ul class="tabs">
      <li v-for="(tab, index) in tabs" :key="index"
          :class="{'is-active': currentTab === tab.nameEng}"
          @click="moveToSection(tab.nameEng)">
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
      eventOffsetTop: 0,
      scrollTimer: null,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
      handleScroll() {
      clearTimeout(this.scrollTimer);
      this.scrollTimer = setTimeout(this.changeTabs, 100);
    },
    changeTabs() {
      const { scrollY } = window;
      const isEventTabActive = scrollY >= this.eventOffsetTop - 50;
      if (isEventTabActive && this.currentTab !== 'event') {
        this.currentTab = 'event';
      } else if (!isEventTabActive && this.currentTab !== 'special') {
        this.currentTab = 'special';
      }
    },
    moveToSection(target) {
      window.removeEventListener('scroll', this.handleScroll);
      window.addEventListener('scroll', this.restoreScrollListener);

      const location = document.querySelector('#' + target).offsetTop;
      window.scrollTo({
        top: location,
        behavior: 'smooth'
      });

      if (target === 'event' || target === 'special') {
        this.currentTab = target;
      }
    },
    restoreScrollListener() {
      clearTimeout(this.scrollTimer);
      window.removeEventListener('scroll', this.restoreScrollListener);
      window.addEventListener('scroll', this.handleScroll);
      this.changeTabs();
    },
  },
})
</script>


<style lang="scss">
@import "@/styles/work/tentensSale.scss";
</style>
