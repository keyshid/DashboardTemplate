<template>
  <div>
    <section>
      <div class="navbarBody">
        <div class="navbarRight">
          <div class="title">
          </div>
        </div>
        <div class="navbarLeft">

          <div class="icon">
            <img src="https://newcdn.ttac.ir/api/file/public/ZD0W78" />
          </div>
          <div class="title">
            <span>کیشید صالحی (مدیر سامانه)</span>
          </div>
          <div>
            <b-icon-caret-down-fill></b-icon-caret-down-fill>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped lang="scss">
.navbarBody {
  width: 100%;
  min-height: 50px;
  display: flex;
  justify-content: space-between;
  background: #ededed;
  // align-items: center;

  .navbarRight {
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .title {
      h5 {
        font-family: "BR Cobane";
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 31px;
        color: #333333;
      }
    }
  }

  .navbarLeft {
    width: 25%;
    max-width: 300px;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .icon {
      img {
        width: 30px;
        border-radius: 100%;
      }

    }
  }
}
</style>
<script >
</script>