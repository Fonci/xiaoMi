<template>
  <div class="container_index">
    <!-- header -->
    <header v-if="activeFooter==0">
      <div class="top">
        <div>
          <img class="logo" src="../assets/index/logo.png" alt />
        </div>
        <div>
          <van-search
            v-model="searchValue"
            placeholder="搜索商品名称"
            style="width:5.5rem;height:0.62rem;"
          />
        </div>
        <div>
          <van-icon class="login_logo" name="contact" size="0.4rem" />
        </div>
      </div>
      <!-- header tabs -->
      <van-tabs
        color="#ff691b"
        v-model="activeHeader"
        animated
        swipe-threshold="4"
        :swipeable="true"
        title-inactive-color="#5f5f5f"
        title-active-color="#ff691b"
      >
        <van-tab v-for="item in topTabs" :title="item.tab" :key="item.id">
          <!-- 显示内容 tab content -->
          <recommend></recommend>
        </van-tab>
      </van-tabs>
    </header>
    <cata v-if="activeFooter==1"></cata>
    <cart v-if="activeFooter==2"></cart>
    <my v-if="activeFooter==3"></my>
    <!-- footer -->
    <div class="footer">
      <van-tabbar
        v-model="activeFooter"
        active-color="#ff691b"
        inactive-color="#5f5f5f"
        @change="changeFooter"
        style="width:7.5rem;height:1.04rem;box-shadow: 0 3px 14px 2px rgba(0, 0, 0, 0.12);"
      >
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
        <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item icon="contact">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import recommend from "./recommend";
import cata from "./cata";
import cart from "./cart";
import my from "./my";
export default {
  components: {
    recommend,
    cata,
    cart,
    my,
  },
  data() {
    return {
      activeHeader: 0,
      searchValue: "", //搜索关键字
      activeFooter: 0,
      topTabs: [
        {
          tab: "推荐",
          id: 1,
        },
        {
          tab: "手机",
          id: 2,
        },
        {
          tab: "智能",
          id: 3,
        },
        {
          tab: "电视",
          id: 4,
        },
        {
          tab: "笔记本",
          id: 5,
        },
        {
          tab: "家电",
          id: 6,
        },
        {
          tab: "生活周边",
          id: 7,
        },
      ],
    };
  },
  created() {},
  methods: {
    changeFooter() {
      console.log(this.activeFooter);
    },
  },
};
</script>

<style scoped>
.container_index {
  width: 7.5rem;
  height: auto;
  position: relative;
}
header {
  width: 100%;
  height: 1.41rem;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2);
}
.top {
  width: 100%;
  height: 0.84rem;
  display: flex;
  justify-content: space-around;
}
.top > div {
  display: flex;
  align-items: center;
}
.logo {
  width: 0.48rem;
  height: 0.32rem;
}
.footer {
  width: 7.5rem;
  height: 1.04rem;
  margin: 0 auto;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  bottom: 0;
}
</style>