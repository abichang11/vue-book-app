<template>
  <header class="Header">
    <div class="Header_wrapper">
      <router-link to="/"
        ><span class="brand">書籍管理アプリ</span></router-link
      >
      <nav class="Header_nav">
        <div class="Header_nav_wrapper">
          <span>ログアウト</span>
        </div>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
.brand {
  font-weight: bold;
  font-size: 35px;
  color: #fcbd4c;
}

.Header {
  height: 40px;
  position: relative;
  background-color: #daf2e9;
  padding: 10px 0;

  &_wrapper {
    max-width: 1170px;
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 0;
    padding-bottom: 0;
  }

  &_nav_wrapper {
    display: flex;
    span {
      padding-left: 15px;
      cursor: pointer;
    }
  }
}
</style>
