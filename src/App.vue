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
  width: 7.5rem;
  margin: 0 auto;
}

/* footer */
.van-tabbar-item__icon {
  font-size: 0.4rem;
}
.van-tabbar-item__text {
  font-size: 0.22rem;
}
.van-tab {
  font-size: 0.26rem;
}
.van-tabs--line .van-tabs__wrap {
  height: 0.57rem;
  margin: 0 0.25rem 0 0;
}
.van-tab__text--ellipsis {
  overflow: unset;
}
.van-search__content {
  border: 1px solid #e5e5e5;
  background-color: #fff;
}
/* cata */
.van-sidebar-item--select::before {
  background-color: transparent;
}
.van-sidebar {
  width: 1.9rem;
  white-space: nowrap;
}
.van-sidebar-item__text {
  font-size: 0.24rem;
  height: 0.4rem;
}
.van-sidebar-item {
  background-color: #fff;
}
.van-nav-bar__title {
  font-size: 0.3rem;
  color: rgb(102, 102, 102);
}
/* ::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  border-radius: 5px;
  background-color: transparent;
} */
/*定义滚动条轨道 内阴影+圆角*/
/* ::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
} */

/*定义滑块 内阴影+圆角*/
/* ::-webkit-scrollbar-thumb { */
/* border-radius: 10px; */
/* -webkit-box-shadow: inset 0 0 6px rgba(122, 118, 118, 0.3); */
/* background-color: rgba(0, 0, 0, 0.1); */
/* } */

/* 购物车面板 */
.item_container .van-icon {
  font-size: 0.4rem;
  color: rgba(0, 0, 0, 0.54);
}
.item_container .van-goods-action-icon {
  color: rgba(0, 0, 0, 0.54);
  font-size: 0.2rem;
  margin-left: 0.2rem;
}
.van-sku-container {
  min-height: 80%;
}
.van-sku-row {
  text-align: left;
}
.van-sku__goods-price {
  text-align: left;
  margin-top: -0.32rem;
  color: #ff6700;
}
.van-sku-header__img-wrap {
  width: 2rem;
  height: 2rem;
  border: 1px solid rgba(0, 0, 0, 0.05);
}
.van-sku__price-symbol,
.van-sku__price-num {
  font-size: 0.48rem !important;
}
.van-sku-header-item {
  font-size: 0.28rem;
  color: rgba(0, 0, 0, 0.87);
  line-height: 0.4rem;
  margin-top: 0.5em;
}
.van-sku-header__goods-info {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
}
/* toast */
.van-toast .van-icon {
  color: white;
}
.van-toast__text {
  white-space: nowrap;
}
/* 购物车 */
.cart_container .van-nav-bar .van-icon {
  color: #939393;
  font-size: 0.26rem;
}
.van-stepper__input {
  font-size: 0.24rem;
}

</style>
