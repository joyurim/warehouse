import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import BaseModal from '@/components/common/BaseModal.vue'

const app = createApp(App);

app.component('BaseModal', BaseModal);
app.use(router);
app.mount('#app')
