import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import BaseModal from '@/components/common/BaseModal.vue'

const app = createApp(App);
app.use(router);
app.component('SwiperJs', Swiper);
app.component('SwiperSlide', SwiperSlide);
app.component('BaseModal', BaseModal);
app.mount('#app')
