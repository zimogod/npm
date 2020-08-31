import Vue from 'vue'
import App from './App.vue'

// import zimoBtn from './packages/index';
import zimoBtn from 'god-zimo-ui';
import 'god-zimo-ui/dist/god-zimo-ui.css';

Vue.use(zimoBtn);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
