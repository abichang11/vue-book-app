<template>
  <div class="wrapper">
    <div class="LoginPage">
      <div class="LoginPage_Main">
        <img class="LoginPage_Image" src="../assets/book1.png" />
        <div class="LoginPage_Form">
          <div class="position-center panel">
            <h2 class="LoginPage_Title">ログイン</h2>
            <p class="LoginPage_SubTitle">メールアドレス</p>
            <input class="LoginPage_Input" type="email" v-model="email" />
            <p class="LoginPage_SubTitle">パスワード</p>

            <input class="LoginPage_Input" type="password" v-model="password" />
            <button class="main-btn" :disabled="invalid" @click="signIn">
              ログイン
            </button>
            <router-link to="/register">新規登録はこちら</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.LoginPage {
  width: 60%;
  margin: 0 auto;
  display: flex;
  &_Main {
    position: relative;
    margin: 60px auto;
    width: 450px;
  }
  &_Image {
    width: 330px;
    position: absolute;
    bottom: -115px;
    left: -165px;
  }
  &_Form {
    padding: 30px 0 50px 0;
    border-radius: 10px;
    background-color: #ffffff;
    box-shadow: 5px 5px 10px rgba(180, 180, 180, 0.6);
    a {
      font-size: 14px;
      color: #8491a5;
    }
  }
  &_Title {
    margin-bottom: 20px;
    color: #fcbd4c;
    font-size: 40px;
  }
  &_SubTitle {
    font-size: 15px;
  }
  &_Input {
    padding: 10px 20px;
    width: 230px;
    border: 1px solid #fcbd4c;
    border-radius: 10px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
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
