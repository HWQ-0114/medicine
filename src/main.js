import Vue from 'vue';
import App from './App';
import 'mint-ui/lib/style.css';
import Mint from 'mint-ui';
Vue.use(Mint);
import router from './router'


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
