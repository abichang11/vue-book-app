import { createApp } from "vue";
// import firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
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

// firebase.initializeApp(firebaseConfig);
// export const firebaseApp = () => { return firebase };

// export default firebase;
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db; //追加

createApp(App).use(store).use(router).mount("#app");

