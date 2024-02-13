<script setup>
import sidebar from './components/sidebar.vue'
import navbar from './components/navbar.vue'
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'
import Footer from './components/footer.vue';
const layoutClass = ref('layoutBody');
const handleClick = () => {
  if (layoutClass.value == 'layoutBodySmall') {
    layoutClass.value = "layoutBody"
  } else {
    layoutClass.value = 'layoutBodySmall'
  }
}
</script>
<template >
  <div class="direction">
    <Transition name="translateX">
      <div :class="layoutClass">
        <div class="sidebar">
          <sidebar :layoutClass="layoutClass" @click="handleClick" />
        </div>
        <div class="navbarBody">
          <navbar />
          <section class="main">
            <RouterView />
          </section>
          <!-- <div class="footerBody">
            <Footer />
          </div> -->
        </div>

      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
* {
  direction: rtl;
}

.layoutBody {
  display: grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 95% 5%;
  height: 100vh;
  transition: 0.5s ease-in;


  .sidebarBody {
    height: 100%;
  }

  .navbarBody {
    height: 100%;

    .main {
      width: 100%;
      height: calc(100% - 50px);
      background: #eef5f9;
    }

    .footerBody {
      width: 100%;
      color: #67757c;
      padding: 14px 15px;
      border-top: 1px solid rgba(120, 130, 140, 0.13);
      background: #ffffff;
      font-size: 13px;
      line-height: 1.471;
      font-weight: 300;


    }

  }

}

.layoutBodySmall {
  display: grid;
  grid-template-columns: 5% 95%;
  grid-template-rows: 95% 5%;
  height: 100vh;
  transition: 0.5s ease-out;

  .translateX-enter {
    transform: translateX(200px);
    opacity: 0;
  }

  .sidebarBody {
    height: 100%;
  }

  .navbarBody {
    height: 100%;

    .main {
      width: 100%;
      height: calc(100% - 50px);
      background: #eef5f9;
    }

    .footerBody {
      width: 100%;
      color: #67757c;
      padding: 14px 15px;
      border-top: 1px solid rgba(120, 130, 140, 0.13);
      background: #ffffff;
      font-size: 13px;
      line-height: 1.471;
      font-weight: 300;


    }
  }
}
</style>
