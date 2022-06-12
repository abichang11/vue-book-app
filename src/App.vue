<script setup lang="ts">
import 'normalize.css'
import { getAuth, signInWithPopup, GoogleAuthProvider } from '@firebase/auth'
import TheHeader from '@/components/TheHeader.vue'

const signIn = (): void => {
  const auth = getAuth()
  const provider = new GoogleAuthProvider()
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
}
</script>

<template>
  <TheHeader />
  <button @click="signIn">Google</button>
</template>

<style lang="scss">
// 汎用スタイル
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a {
  text-decoration: none;
}
</style>
