/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// const { default: VueRouter } = require('vue-router');

require('./bootstrap');

window.Vue = require('vue');


window.Fire = new Vue();


import swal from 'sweetalert2'
window.swal = swal;


const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  });

  window.toast = toast;
  Vue.prototype.$toast = toast;





import VueProgressBar from 'vue-progressbar'
import moment from 'moment';
import VueRouter from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {routes} from './routes'

Vue.use(VueProgressBar, options)
const options = {
    color: 'purple',
    failedColor: '#874b4b',
    thickness: '5px',
    height: '3px',
    transition: {
      speed: '0.2s',
      opacity: '0.6s',
      termination: 300
    },
    autoRevert: true,
    location: 'left',
    inverse: false
  }

// import { 
//     HasError,
//     AlertError,
//     AlertErrors, 
//     AlertSuccess
//   } from 'vform'

//   window.Form = Form;
//   Vue.component(HasError.name, HasError)
//   Vue.component(AlertError.name, AlertError)
//   Vue.component(AlertErrors.name, AlertErrors)
//   Vue.component(AlertSuccess.name, AlertSuccess)


Vue.use(VueRouter);
Vue.use(VueAxios, axios);


Vue.filter('upText', function(text){
    return text.charAt(0).toUpperCase() + text.slice(1);
    // return text.toUpperCase();
});

Vue.filter('myDate', function(created){
    return moment(created).format('MMMM Do YYYY, h:mm:ss a');
});

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

const router = new VueRouter({
    mode: 'history',
    routes: routes
});

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('dashboard', require('./components/Dashboard.vue').default);
// Vue.component('profile', require('./components/Profile.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router: router
});
