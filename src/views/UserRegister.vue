<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import firebase from 'firebase/app'

const email = ref('')
const password = ref('')
const name = ref('')
const getUid = ref('')

const router = useRouter()

const signIn = () => {
  let email = email
  let password = password
  let name = name
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user
      getUid.value = user.uid
      // authModule.setLoginUser(user)ログインユーザー情報とuidを保持
      // authModule.changeFlgTrue()ヘッダーの表示を変更する
    })
    .then(() => {
      if (getUid.value) {
        firebase
          .firestore()
          .collection(`users/${getUid.value}/userInfo`)
          .add({ name })
          .then(() => {
            router.replace('/')
          })
      }
    })
    .catch((error) => {
      const errorCode = error.code
      if (errorCode === 'auth/email-already-in-use') {
        console.log('エラー！')
      }
    })
}
</script>

<template>
  <div class="wrapper">
    <div class="resister__form">
      <div class="signIn">
        <h2 class="signIn__title">新規登録</h2>
        <p class="signIn__subTitle">お名前</p>
        <input class="signIn__input" type="text" v-model="name" />
        <p class="signIn__subTitle">メールアドレス</p>
        <input class="signIn__input" type="email" v-model="email" />
        <p class="signIn__subTitle">パスワード</p>
        <input class="signIn__input" type="password" v-model="password" />
        <button class="main-btn" @click="signIn()">登録する</button>
        <router-link to="/">トップ画面に戻る</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.resister__form {
  margin: 60px auto;
  width: 600px;
}

.LoginPage {
  width: 60%;
  margin: 0 auto;
  display: flex;
}

.home__img__2 {
  width: 330px;
  position: absolute;
  bottom: -115px;
  left: -165px;
}

//ログインページ
.login__form {
  position: relative;
  margin: 60px auto;
  width: 450px;
}

.signIn {
  padding: 30px 0 50px 0;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 5px 5px 10px rgba(180, 180, 180, 0.6);
  a {
    font-size: 14px;
    color: #8491a5;
  }
  &__title {
    margin-bottom: 20px;
    color: #fcbd4c;
    font-size: 40px;
  }
  &__subTitle {
    font-size: 15px;
  }
  &__input {
    padding: 10px 20px;
    width: 230px;
    border: 1px solid #fcbd4c;
    border-radius: 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  &__error {
    margin-bottom: 20px;
    > p {
      font-size: 15px;
      color: #fcbd4c;
    }
  }
}

//ログイン・新規登録画面で使用
.main-btn {
  display: block;
  margin: 20px auto 5px auto;
  padding: 13px 30px;
  border-radius: 15px;
  font-size: 15pt;
  cursor: pointer;
  background: #fcbd4c;
  color: #ffffff;
  line-height: 1em;
  font-weight: 700;
  transition: 0.3s;
  &:hover {
    background-color: #e5e5e5;
    color: #fcbd4c;
  }
}
</style>
