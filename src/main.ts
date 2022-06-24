import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";
import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far, fab)

const firebaseConfig = {
  apiKey: "AIzaSyD3C8T_xtA0kR1CSnbjEOPFlCaTB7ylxxk",
  authDomain: "vue-book-app-dad9f.firebaseapp.com",
  projectId: "vue-book-app-dad9f",
  storageBucket: "vue-book-app-dad9f.appspot.com",
  messagingSenderId: "646866539633",
  appId: "1:646866539633:web:b269c31f15d30c855737d0"
};

const firebase = initializeApp(firebaseConfig);

export const firebaseApp = () => { return firebase };

export default firebase;

createApp(App).use(store).use(router).mount("#app");

