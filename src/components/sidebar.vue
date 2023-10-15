<template>
  <div>
    <section class="sidebarBody">
      <div class="logoBody">
        <img src="../assets/img/ifda-logo.png" />
        <div @click="handleClick" class="buttonBody mb-4">
          <b-icon-caret-right-fill v-if="layoutClass == 'layoutBody'"></b-icon-caret-right-fill>
          <b-icon-caret-left-fill v-else></b-icon-caret-left-fill>
        </div>
        <div v-if="layoutClass == 'layoutBody'" class="d-flex justify-content-cente align-items-center mb-4">
          <span>فایل های اشتراکی</span>
        </div>
        <!-- <i class="bi bi-caret-left"></i> -->
      </div>

      <div class="vueTree">
        <TreeContainer :layoutClass="layoutClass" />
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
.sidebarBody {
  width: 100%;
  height: 100vh;
  border: 1px solid black;
  overflow: hidden;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // flex-direction: column;
  background: #34495e;

  .logoBody {
    width: 100%;
    border-bottom: 1px solid rgba(120, 130, 140, 0.13);
    // height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;

    span {
      font-size: 18px;
      font-weight: 500;
      color: white;
      text-align: center;
    }

    img {
      max-height: 55px;
    }

    .buttonBody {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 10px;
      background: #f2f2f2;
      border-radius: 8px;

      // .b-icon.bi {}

      // &:hover {
      //   .b-icon.bi {
      //     color: #34495e;
      //     transform: translateX(0.3rem);
      //   }
      // }
    }
  }

  .vueTree {
    width: 100%;
    // display: flex;
    // justify-content: space-around;
    // align-items: center;
    // flex-direction: column;
    // height: 200px;
    // border: 1px solid black;
  }
}
</style>
<script setup>
import TreeContainer from './TreeContainer.vue';

// import { defineEmits } from 'vue'
// import { BIcon, BIconCaretDownFill } from "bootstrap-icons-vue";
const props = defineProps({
  layoutClass: String,
});
const emit = defineEmits(["click"]);

const handleClick = () => {
  emit("click");
};


</script>