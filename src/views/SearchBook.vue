<script setup>
import axios from 'axios'
import { ref } from 'vue'
// import { getAuth, signInWithPopup, GoogleAuthProvider } from '@firebase/auth'

const keyword = ref('')
const searchFlg = ref(false)
const pageCount = ref(0)
const totalPages = ref(0)
const books = ref([])
const getBooks = () => {
  if (keyword.value === ' ' || keyword.value === '　') {
    keyword.value = ''
    searchFlg.value = true
  }
  axios
    .get('https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404', {
      params: {
        applicationId: '1027306809265886299',
        title: keyword.value,
        hits: 12,
      },
    })
    .then((res) => {
      totalPages.value = res.data.pageCount
      books.value = []
      //検索結果が0の際の処理
      if (res.data.Items.length === 0) {
        searchFlg.value = true
      } else {
        searchFlg.value = false
        books.value = res.data.Items
      }
      //取得情報が30件以上ある際の処理
      if (res.data.pageCount > 1) {
        pageCount.value = true
      } else {
        pageCount.value = false
      }
    })
}
const searchBook = () => {
  getBooks()
}
</script>

<template>
  <div>
    <div class="SearchBook">
      <p v-if="searchFlg">
        本が見つかりませんでした。別のキーワードも検索してみましょう。
      </p>
      <input class="SearchBook_Input" type="text" v-model="keyword" />
      <button class="SearchBook_Button" @click="searchBook()">
        <i class="fas fa-search"></i>
      </button>
    </div>
    <div class="SearchBook_ListArea">
      <div class="SearchBook_List">
        <ul v-for="book in books" :key="book.index">
          <router-link
            :to="{
              name: 'BookDetail',
              params: {
                bookInfo: JSON.stringify(book.Item),
                id: book.Item.isbn,
              },
            }"
          >
            <li class="SearchBook_Result">
              <div class="BookInfo">
                <div class="BookInfo_Image">
                  <img :src="book.Item.largeImageUrl" />
                </div>
                <p class="BookInfo_Title">{{ book.Item.title }}</p>
                <p class="BookInfo_Author">{{ book.Item.author }}</p>
                <p class="BookInfo_Price">
                  {{ book.Item.itemPrice.toLocaleString('ja-JP') }}円
                </p>
              </div>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <button v-if="pageCount" class="moreView-btn" @click="moreView">
      もっと見る
    </button>
  </div>
</template>

<style lang="scss" scoped>
.SearchBook {
  padding-top: 20px;
  &_Input {
    outline: 0;
    padding: 10px;
    height: 15px;
    margin: 0 -10px;
    max-width: 270px;
    border-radius: 10px;
    background: #fff;
    vertical-align: top;
    font-family: Avenir, Helvetica, Arial, sans-serif;
  }
  &_Button {
    width: 40px;
    height: 35px;
    border-radius: 0 10px 10px 0;
    background: #fcbd4c;
    color: #fff;
    font-weight: bold;
    font-size: 16px;
    border: none;
    vertical-align: top;
    cursor: pointer;
    &:hover {
      background: #eee;
      color: #fcbd4c;
    }
  }
  &_ListArea {
    margin: 10px auto;
    max-width: 1117px;
    width: 100%;
  }
  &_List {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    > ul {
      list-style: none;
      padding: 0;
    }
  }
  &_Result {
    margin: 10px 10px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 2.5rem 2rem -2rem hsl(200 50% 20% / 40%);
    transition: 0.3s;
    &:hover {
      opacity: 0.7;
    }
  }
}

.BookInfo {
  width: 230px;
  height: 300px;
  flex-direction: column;
  cursor: pointer;
  &_Image {
    height: 230px;
    width: 230px;
    display: table-cell;
    text-align: center;
    vertical-align: middle;
  }
  &_Title {
    overflow: hidden;
    white-space: nowrap;
    width: 230px;
    text-overflow: ellipsis;
    font-size: 13px;
    margin: 0px 0px 5px 5px;
  }
  &_Author {
    overflow: hidden;
    white-space: nowrap;
    width: 230px;
    text-overflow: ellipsis;
    font-size: 13px;
    margin: 0px 0px 5px 5px;
  }
  &_Price {
    font-size: 13px;
    margin: 0px 0px 5px 5px;
  }
}
img {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  vertical-align: middle;
}

.moreView-btn {
  color: #fff;
  background-color: #fcbd4c;
  border-radius: 10px;
  font-weight: bold;
  padding: 10px 30px;
  margin: 10px 0 20px 0;
  transition: 0.3s;
  &:hover {
    background: #eee;
    color: #fcbd4c;
  }
}
</style>
