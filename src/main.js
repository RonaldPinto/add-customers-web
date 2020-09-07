import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { rutas } from './router.js'
import BootstrapVue from "bootstrap-vue"
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import cors from 'cors'

Vue.use(cors);
Vue.use(VueRouter);
Vue.use(BootstrapVue);

const enrutador = new VueRouter({
    routes: rutas,
    mode: 'history'
})

new Vue({
    el: '#app',
    router: enrutador,
    render: h => h(App)
})