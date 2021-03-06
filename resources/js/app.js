require('./bootstrap');

window.Vue = require('vue');
import VueRouter from "vue-router";
Vue.use(VueRouter);

import routes from './routes';

const app = new Vue({
    el: '#app',
    router: new VueRouter(routes)
});

