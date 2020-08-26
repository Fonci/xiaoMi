<template>
  <div class="cart_container">
    <van-nav-bar
      title="购物车"
      left-arrow
      style="background:rgb(242, 242, 242);height:0.5rem;"
      @click-left="onClickLeft"
    />
    <div class="container cart_container">
      <div class="empty_pic" v-if="false">
        <img src="../assets/cart/empty_pic.png" alt @click="golook" />
      </div>
      <!-- 购物车商品栏 -->
      <div class="cart_box" v-if="true">
        <div class="box" v-for="(item,index) in cartLists" :key="index">
          <van-checkbox v-model="checkedItem" checked-color="#07c160" style="margin-right:.2rem;"></van-checkbox>
          <img style="width:1.78rem;height:1.78rem;border:1px solid #eee;" :src="item.url" alt />
          <div style="margin-left:1rem;width:55%">
            <div class="item_name">{{item.name}}</div>
            <div class="item_price">售价：{{item.price}}</div>
            <div style="display:flex;justify-content:space-between;">
              <van-stepper
                class="item_price"
                input-width=".5rem"
                button-size=".42rem"
                v-model="itemValue"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="guess_like">
        <img src="../assets/cart/guess_like.jpg" alt />
        <div class="like_lists">
          <div class="like" v-for="(item,index) in likeLists" :key="index">
            <div class="like_pic">
              <img :src="item.url" alt />
            </div>
            <div class="like_name">{{item.name}}</div>
            <div class="like_price">￥{{item.price}}</div>
          </div>
        </div>
      </div>
      <van-submit-bar
        style="height:1.04rem;"
        :price="totalPrice"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <van-checkbox v-model="checkAll" checked-color="#07c160">全选</van-checkbox>
      </van-submit-bar>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkedItem: true,
      checkAll: true,
      cartLists: [
        {
          id: 1001,
          name: "米家驱蚊器 智能版",
          price: 59,
          url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ce0f98a0d5462e6fd4e1d2d111ba2a9.jpg?thumb=1&w=360&h=360",
          value: 1,
        },
        {
          id: 1002,
          name: "小米巨能写 黑色 10支装",
          price: 9.99,
          url:
            "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1559616366.16874615.jpg",
          value: 1,
        },
      ],
      likeLists: [
        {
          name: "米家驱蚊器 智能版",
          price: "59",
          url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ce0f98a0d5462e6fd4e1d2d111ba2a9.jpg?thumb=1&w=360&h=360",
        },
        {
          name: "米家驱蚊器 智能版",
          price: "59",
          url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ce0f98a0d5462e6fd4e1d2d111ba2a9.jpg?thumb=1&w=360&h=360",
        },
        {
          name: "米家驱蚊器 智能版",
          price: "59",
          url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ce0f98a0d5462e6fd4e1d2d111ba2a9.jpg?thumb=1&w=360&h=360",
        },
        {
          name: "米家驱蚊器 智能版",
          price: "59",
          url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5ce0f98a0d5462e6fd4e1d2d111ba2a9.jpg?thumb=1&w=360&h=360",
        },
      ],
      itemValue: 1,
      totalPrice: 0,
    };
  },
  mounted() {},
  created() {},
  methods: {
    // 到处逛逛 回首页
    golook() {
      // 因为都在index页面所以只能重新刷新页面 从而回到首页
      this.$router.go(0);
    },
    onSubmit() {
      console.log("提交订单");
    },
    // 返回上一步
    onClickLeft() {
      // 因为都在index页面所以只能重新刷新页面 从而回到首页
      this.$router.go(0);
    },
    toggleAll() {
      this.$refs.checkboxGroup.toggleAll();
    },
  },
};
</script>

<style scoped>
.container {
  width: 7.2rem;
  height: auto;
  margin: 0 auto;
  margin-bottom: 1.04rem;
}
.empty_pic {
  margin: 0.5rem 0;
}
.guess_like {
  width: 100%;
}
img {
  width: 100%;
  height: 100%;
}
.like_lists {
  margin-top: 0.15rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.like {
  width: 3.56rem;
  height: 4.7rem;
  text-align: left;
}
.like_pic {
  width: 3.56rem;
  height: 3.56rem;
}
.like_name {
  font-size: 0.28rem;

  text-overflow: ellipsis;
}
.like_price {
  color: #ff6700;
  font-size: 0.32rem;
  margin-top: 0.1rem;
}
.cart_box {
  padding: 0.24rem 0;
}

.box {
  display: flex;
  justify-content: flex-start;
  text-align: left;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.2rem;
  margin-bottom: 0.2rem;
}
.item_name {
  font-size: 0.28rem;
}
.item_price {
  font-size: 0.24rem;
  color: #999;
  margin: 0.15rem 0;
}
.divider {
  flex: none;
  width: 100%;
  height: 0.16rem;
  background-color: rgb(245, 245, 245);
}
</style>