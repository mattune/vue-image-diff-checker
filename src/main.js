import Vue from 'vue';
import App from './App.vue';

// 共通のリセットCSSを読み込む
require('../node_modules/formula-css/develop/formula.scss');

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
