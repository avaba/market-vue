import Vue from 'vue';
import App from './App.vue';
// import Data from './Data';

// import { Message, DataMessage } from './Data2';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// alert(Data.message);
// alert(Message);
// alert(DataMessage.message);
