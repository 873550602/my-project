// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import store from '@/store';//使用vuex仓库
import App from './App';
import router from './router';//使用路由器
import iView from 'iview';//使用iview样式框架
import '@/directive';//使用全局指令
import '@/filters';//使用全局过滤器
import 'iview/dist/styles/iview.css';//使用iview样式
import '!style-loader!css-loader!less-loader!@/assets/css/com.less';//使用全局样式
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
  store,
  components: { App },
  render: h => h(App),
})
