import { createApp } from 'vue'
import { createPinia } from 'pinia';
import App from './App.vue'
import router from './router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import BaseModal from '@/components/common/BaseModal.vue'

const app = createApp(App);
const pinia = createPinia();

app.component('SwiperJs', Swiper);
app.component('SwiperSlide', SwiperSlide);
app.component('BaseModal', BaseModal);
app.use(router);
app.use(pinia);
app.mount('#app')
