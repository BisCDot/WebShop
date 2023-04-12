import "../src/styles/colors.css";
import "../src/styles/variables.css";
import "../src/styles/reset.css";
import "../src/styles/utilities.css";
import { createApp } from 'vue'

import App from './App.vue'
import vueCountryRegionSelect from 'vue-country-region-select'
import Notifications from '@kyvg/vue3-notification'

/* import the fontawesome core */

/* import specific icons */
// import { 
//     faUserSecret,
//     faX,
//     faMagnifyingGlass,
//     faUser,
//     faCircleUser,
//     faBookmark
// } from '@fortawesome/free-solid-svg-icons'
import router from './router'
// import { 
//     faHeart,
    

// } from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
import { BoxIconElement } from 'boxicons'

createApp(App).use(router,vueCountryRegionSelect,Notifications).component('boxicons',BoxIconElement).mount('#app')
