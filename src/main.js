import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
// import SwiperCore, { Autoplay, Pagination, Navigation } from 'swiper';
import BaseModal from '@/components/common/BaseModal.vue'

// SwiperCore.use([Autoplay, Pagination, Navigation]);

const app = createApp(App);
app.use(router);
app.component('SwiperJs', Swiper);
app.component('SwiperSlide', SwiperSlide);
app.component('BaseModal', BaseModal);
app.mount('#app')
