<script setup>
import { defineProps, defineEmits } from 'vue'
import { reactive } from 'vue'

window.scrollTo({
  top: 0,
  behavior: 'smooth',
})

const props = defineProps({
  book_title: String,
  book_author: String,
  book_image: String,
  book_image2: String,
})

const emit = defineEmits(['from-child'])

const status_list = reactive([
  { name: '未設定', flg: true },
  { name: '読みたい', flg: false },
  { name: '読んでいる', flg: false },
  { name: '読み終わった', flg: false },
])

const score_list = reactive([
  { score: 1, flg: false },
  { score: 2, flg: false },
  { score: 3, flg: false },
  { score: 4, flg: false },
  { score: 5, flg: false },
])

const clickEvent = () => {
  emit('from-child')
}

const selectStatus = (status) => {
  status.flg = !status.flg
  status_list.forEach((item) => {
    if (status.name !== item.name) {
      item.flg = false
    }
  })
}

const changeScore = (score, index) => {
  score.flg = true
  //trueの場合はそれ以降のscoreもtrueに
  score_list.forEach((item, i) => {
    if (i <= index) {
      item.flg = score.flg
    } else {
      item.flg = false
    }
  })
}

const stopEvent = (event) => {
  event.stopPropagation()
}
</script>

<template>
  <div id="overlay" @click="clickEvent">
    <div class="modal" @click="stopEvent">
      <div class="modal__header">
        <p class="modal__title">本棚に追加</p>
      </div>
      <p class="modal__bookTitle">{{ props.book_title }}</p>
      <div class="Modal_Main">
        <div class="modal__review">
          <div class="modal__left">
            <div class="Modal_Image">
              <img :src="book_image" />
            </div>
            <p class="Modal_Author">{{ props.book_author }}</p>
          </div>
          <div class="modal__right">
            <table class="Modal_Table">
              <tr>
                <th>読書状況</th>
                <td>
                  <div class="status_toggle">
                    <span
                      class="book_status"
                      v-for="(status, index) in status_list"
                      :key="index"
                      @click="selectStatus(status)"
                      :class="{ isSelected: status.flg }"
                    >
                      {{ status.name }}
                    </span>
                  </div>
                </td>
              </tr>
              <tr>
                <th>評価</th>
                <td class="Td_Left">
                  <span v-for="(score, index) in score_list" :key="index">
                    <i
                      @click="changeScore(score, index)"
                      :class="[score.flg ? 'fas' : 'far', 'fa-star']"
                    />
                  </span>
                </td>
              </tr>
              <tr>
                <th>レビュー・感想</th>
                <td><textarea class="Modal_TextArea"></textarea></td>
              </tr>
              <tr>
                <th>登録日</th>
                <td class="Td_Left">
                  <input type="date" class="Modal_Input" />
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div class="editBtn">
          <button class="editBtn__add" @click="clickEvent">
            <i class="fas fa-bookmark"></i>追加する
          </button>
          <button class="editBtn__back" @click="clickEvent">
            <i class="fas fa-times"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.modal {
  z-index: 2;
  width: 680px;
  background: #fff;
  border-radius: 10px;
  &__header {
    position: relative;
    height: 50px;
    line-height: 50px;
    background: #fcbd4c;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &__title {
    font-size: 20px;
    text-align: left;
    color: #fff;
    margin: 0;
    margin-left: 10px;
  }
  &__bookTitle {
    display: block;
    padding: 0 10px;
    font-size: 20px;
    text-align: left;
    font-weight: 700;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &__input {
    border: 1px solid #bbb;
    border-radius: 5px;
    margin-bottom: 30px;
    padding: 10px;
    width: 300px;
  }
}

.Modal {
  &_Author {
    margin: 5px 0;
    font-size: 14px;
    width: 120px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  &_TextArea {
    resize: none;
    border: 1px solid #ddd;
    border-radius: 5px;
    width: 100%;
    height: 100px;
  }
  &_Input {
    font-size: 14px;
    cursor: text;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 3px;
  }
  &_Main {
    margin-bottom: 15px;
  }
}
.modal__form {
  display: flex;
  justify-content: center;
  padding-top: 10px;
  border-bottom: 1px solid #bbb;
  > p {
    padding-right: 20px;
  }
}

.modal__review {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  .modal__left {
    margin: 0 10px;
  }
  .modal__right {
    .must {
      font-size: 10px;
      font-weight: 900;
      padding: 3px 5px;
      margin-left: 5px;
      border-radius: 5px;
      color: #fff;
      background-color: red;
      display: inline-block;
      vertical-align: top;
    }
  }
}
.Td_Left {
  text-align: left;
}
.Modal_Image {
  height: 145px;
  width: 120px;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.Modal_Table {
  table-layout: fixed;
  margin-right: 10px;
  > tr {
    height: 50px;
    min-height: 50px;
    > th {
      text-align: left;
      background: #fef5e7;
      font-size: 14px;
      padding: 0 9px;
    }
    > td {
      padding: 10px 20px;
      border-bottom: 1px solid #ddd;
    }
  }
}
.status_toggle {
  // border: 1px solid #ddd;
  // border-radius: 5px;
  width: 325px;
}

.book_status {
  cursor: pointer;
  display: inline-block;
  text-align: center;
  padding: 5px;
  border: 1px solid #ddd;
  border-right: 0;
  font-size: 15px;
  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-right: 1px solid #ddd;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
.editBtn {
  &__add {
    cursor: pointer;
    background-color: #fcbd4c;
    color: #fff;
    border-radius: 10px;
    padding: 10px 20px;
    margin-right: 10px;
    font-size: 15px;
    font-weight: 700;
    transition: all 0.3s;
    > i {
      transition: all 0.3s;
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
  &__back {
    color: #bbb;
    font-size: 15px;
    padding: 5px 10px;
    cursor: pointer;
  }
}
.isSelected {
  background: #fcbd4c;
  color: #fff;
}
</style>
