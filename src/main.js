// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import '!style-loader!css-loader!less-loader!@/assets/css/com.less';
Vue.use(iView)

Vue.config.productionTip = false;
Vue.config.keyCodes.f1 = 112;
Vue.config.keyCodes.f1 = 113;
Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button v-on:click="count++">You clicked me {{ count }} times.</button>'
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
