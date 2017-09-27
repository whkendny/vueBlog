// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';
import App from './App';
import './assets/css/commen.css';//这里的样式可以覆盖index.css

Vue.use(ElementUI);
// 路由
import router from './routes/index'
// vuex 状态管理
import store from './store/index'
// import NProgress from 'NProgress'
// import Mock from './mock'
// Mock.bootstrap();

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>', //<App />他就是App.vue，template就是选择vue实例要加载哪个模板。
  components: { App } //此处的components用在了上面的template里面用来编译
})
