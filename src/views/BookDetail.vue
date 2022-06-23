<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import Modal from '@/components/molecules/modal.vue'

const router = useRouter()
const route = useRoute()

// const showContent = ref(false)
const bookInfo = ref({})
// const bookInfo = reactive({
//   bookInfo: {},
//   id: '',
// })

bookInfo.value = JSON.parse(route.params.bookInfo)
console.log(bookInfo)

// created() {
//   console.log('ページが開きました')
//   if (this.$route.params.id) {
//     let bookInfo = this.$route.params
//     let books = bookModule.params
//     this.bookInfo = books.bookInfo
//     this.setParams()
//   } else {
//     console.log('パラムスが空です')
//   }
// }

// setParams = () => {
//   sessionStorage.setItem('catch-params', JSON.stringify(this.bookInfo))
// }

// openModal = () => {
//   showContent.value = true
// }
// closeModal = () => {
//   showContent.value = false
// }
const toHome = () => {
  router.replace('/')
}
</script>
<template>
  <div class="BookDetail">
    <div class="BookDetail_Area">
      <div class="BookDetail_Left">
        <div class="BookInfo BookDetail_Info">
          <div class="BookInfo_Image">
            <img :src="bookInfo.largeImageUrl" alt="" />
          </div>
          <p class="BookInfo_Title">{{ bookInfo.title }}</p>
          <p class="BookInfo_Author">{{ bookInfo.author }}</p>
        </div>
        <!-- <button v-if="getUid" @click="openModal" class="btn__contents">
          <i class="fas fa-book-open"></i>本棚に追加する
        </button> -->
      </div>
      <div class="BookDetail_Right">
        <table class="table">
          <caption>
            本の詳細
          </caption>
          <tr class="table__row">
            <th class="table__head">タイトル</th>
            <td class="table__body">{{ bookInfo.title }}</td>
          </tr>
          <tr class="table__row">
            <th class="table__head">著者名</th>
            <td class="table__body">{{ bookInfo.author }}</td>
          </tr>
          <tr class="table__row">
            <th class="table__head">出版社</th>
            <td class="table__body">
              {{ bookInfo.publisherName }}
            </td>
          </tr>
          <tr class="table__row">
            <th class="table__head">発売日</th>
            <td class="table__body">{{ bookInfo.salesDate }}</td>
          </tr>
          <tr class="table__row">
            <th class="table__head">価格</th>
            <td class="table__body">{{ bookInfo.itemPrice }}円(税込)</td>
          </tr>
          <tr class="table__row last">
            <th class="table__head">あらすじ</th>
            <td class="table__body">{{ bookInfo.itemCaption }}</td>
          </tr>
        </table>
      </div>
    </div>
    <button class="moreView-btn" @click="toHome">トップ画面に戻る</button>
    <!-- <Modal
      v-show="showContent"
      @from-child="closeModal"
      :book_title="this.bookInfo.title"
      :book_author="this.bookInfo.author"
      :book_image="this.bookInfo.mediumImageUrl"
      :book_image2="this.bookInfo.largeImageUrl"
    /> -->
  </div>
</template>

<style lang="scss" scoped>
.BookDetail {
  margin: 10px auto;
  min-height: 100vh;
  max-width: 1117px;
  width: 100%;
  &_Area {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
  }
  &_Left {
    margin-right: 10px;
  }
  &_Right {
    max-width: 500px;
  }
  &_Info {
    background: #fff;
    border-radius: 5px;
    cursor: default;
  }
}
.details__image {
  background-color: #fff;
  width: 220px;
  margin: 0 auto 10px auto;
  padding-top: 10px;
  border-radius: 5px;
}

#overlay {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

// 本詳細のtable
.table {
  border-collapse: collapse;
  margin: 0 auto;
  padding: 0;
  table-layout: auto;
  color: #000;
  &__row {
    background-color: #fff;
    padding: 0.35em;
    border-bottom: 1px solid #bbb;
    &:last-child {
      border-bottom: none;
    }
  }
  &__head {
    padding: 1em 10px 1em 1em;
    border-right: 1px dashed #bbb;
    white-space: nowrap;
    &:last-child {
      border: none;
    }
  }
  &__body {
    padding: 1em 10px 1em 1em;
    border-right: 1px solid #bbb;
    &:last-child {
      border: none;
    }
  }
}

caption {
  background-color: #e5e5e5;
  height: 30px;
  line-height: 30px;
  padding: 10px;
  vertical-align: middle;
  text-align: left;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.btn__contents {
  background-color: #fcbd4c;
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  margin-bottom: 8px;
  font-weight: 700;
  font-size: 15px;
  width: 220px;
  text-align: left;
  transition: all 0.3s;
  > i {
    padding-right: 10px;
    color: #fff;
  }
  &:hover {
    background-color: #e5e5e5;
    color: #fcbd4c;

    > i {
      color: #fcbd4c;
    }
  }
}
</style>
