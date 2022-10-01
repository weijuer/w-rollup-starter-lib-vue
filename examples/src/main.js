import { createApp } from 'vue';
import App from './App.vue';
import myLib from 'w-rollup-starter-lib-vue';
import 'w-rollup-starter-lib-vue/dist/index.css';

const app = createApp(App);

app.use(myLib);
app.mount('#app');