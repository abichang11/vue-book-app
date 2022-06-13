<script setup lang="ts">
import 'normalize.css'
// import { getAuth, signInWithPopup, GoogleAuthProvider } from '@firebase/auth'
import TheHeader from '@/components/TheHeader.vue'

// const signIn = (): void => {
//   const auth = getAuth()
//   const provider = new GoogleAuthProvider()
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       console.log(result)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }
</script>

<template>
  <TheHeader />
  <!-- <button @click="signIn">Google</button> -->
  <router-view />
</template>

<style lang="scss">
@import 'https://use.fontawesome.com/releases/v5.13.0/css/all.css';
@import url('https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap');

// 汎用スタイル
#app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  font-family: 'Kosugi Maru', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(235, 248, 243);
}

a {
  text-decoration: none;
}

input,
button,
select,
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: transparent;
  border: none;
  border-radius: 0;
  font: inherit;
  outline: none;
}

.wrapper {
  width: 80%;
  height: calc(100vh - 60px);
  max-width: 1170px;
  margin: 0 auto;
}
</style>
