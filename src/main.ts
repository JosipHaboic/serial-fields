import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import VueApollo from 'vue-apollo';
import { apolloClient } from './graphql/apollo';
import './styles/app.css';
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
// import '../node_modules/bootstrap/dist/css/bootstrap.css';
// import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';


Vue.config.productionTip = false;
Vue.use(VueApollo);
// Vue.use(BootstrapVue);
// Vue.use(IconsPlugin);


const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});


new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount('#app');
