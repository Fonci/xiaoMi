<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  width: 7.5rem;
  margin: 0 auto;
}
/* index 首页 */
/* footer */
.container_index .van-tabbar-item__icon {
  font-size: 0.4rem;
}
.container_index .van-tabbar-item__text {
  font-size: 0.22rem;
}
.container_index .van-tab {
  font-size: 0.26rem;
}
.container_index .van-tabs--line .van-tabs__wrap {
  height: 0.57rem;
  margin: 0 0.25rem 0 0;
}
.container_index .van-tab__text--ellipsis {
  overflow: unset;
}
.container_index .van-search__content {
  border: 1px solid #e5e5e5;
  background-color: #fff;
}
/* .van-search .van-cell,
.van-cell {
  padding: unset;
} */
</style>
