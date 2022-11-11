import "../src/styles/colors.css";
import "../src/styles/variables.css";
import "../src/styles/reset.css";
import "../src/styles/utilities.css";
import { createApp } from 'vue'
import App from './App.vue'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { 
    faUserSecret,
    faX,
    faMagnifyingGlass,
    faUser,
    faCircleUser,
    faBookmark
} from '@fortawesome/free-solid-svg-icons'
import router from './router'
import { 
    faHeart,
    

} from '@fortawesome/free-regular-svg-icons'
/* add icons to the library */
import { BoxIconElement } from 'boxicons'
library.add(faUserSecret,faX,faMagnifyingGlass,faUser,faCircleUser,faBookmark,faHeart)
createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon,'boxicons',BoxIconElement).mount('#app')
