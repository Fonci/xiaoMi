<template>
  <div class="cart_container">
    <van-nav-bar title="购物车" style="background:rgb(242, 242, 242);height:0.5rem;" />
    <div class="container cart_container">
      <div class="empty_pic" v-if="cartLists.length==0">
        <img src="../assets/cart/empty_pic.png" alt />
      </div>
      <!-- 购物车商品栏 -->
      <div class="cart_box" v-if="goods">
        <div class="box" v-for="(item,index) in cartLists" :key="index">
          <van-checkbox
            v-model="item.checkedItem"
            checked-color="#07c160"
            style="margin-right:.2rem;"
            @change="changeChecked(item.checkedItem,item.id)"
          ></van-checkbox>
          <img style="width:1.78rem;height:1.78rem;border:1px solid #eee;" :src="item.url" alt />
          <div style="margin-left:1rem;width:55%">
            <div class="item_name">{{item.name}}</div>
            <div class="item_price">售价：{{item.price}}元</div>
            <div style="display:flex;justify-content:space-between;">
              <van-stepper
                class="item_price"
                input-width=".5rem"
                button-size=".42rem"
                v-model="item.itemValue"
                @plus="plus(item.itemValue,item.id)"
                @minus="minus(item.itemValue,item.id)"
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
        style="height:.8rem;bottom:1.04rem;border-bottom:1px solid #eee;border-top:1px solid #eee;"
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
      checkAll: true,
      goods: [
        {
          id: 1001,
          name: "小米10 Pro",
          price: 4999,
          url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3855dec8f7edd5dfe3aa3a4fe77a87dd.jpeg",
          num: 10,
        },
        {
          id: 1002,
          name: "小米电视4X 43英寸",
          price: 999,
          url:
            "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/531b65f7cb8e4a7586b2c337ef10b26e.jpg",
          num: 20,
        },
        {
          id: 1002,
          name: '小米笔记本15.6" MX110 独显版',
          price: 3899,
          url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b94af7cb690afa94d4e08cb0b247299.jpg",
          num: 30,
        },
      ],
      cartLists: [
        {
          id: 1001,
          name: "小米10 Pro",
          price: 4999,
          url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3855dec8f7edd5dfe3aa3a4fe77a87dd.jpeg",
          itemValue: 5,
          checkedItem: true,
        },
        {
          id: 1002,
          name: '小米笔记本15.6" MX110 独显版',
          price: 3899,
          url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b94af7cb690afa94d4e08cb0b247299.jpg",
          itemValue: 1,
          checkedItem: true,
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
      // itemValue: 1,
      totalPrice: 0,
      addCartId: [],
      checkedNum: 0, //选中的数量
    };
  },
  mounted() {
    window.sessionStorage.removeItem("goCart");
    if (window.sessionStorage.getItem("addCartId")) {
      this.addCartId = window.sessionStorage.getItem("addCartId");
    }
  },
  created() {
    this.checkedNum = this.cartLists.length;
    // this.totalPrice 是以 分 为单位的 所以要 *100
    if (this.checkedNum == this.cartLists.length) {
      // 全选
      this.checkAll = true;
      for (var i in this.cartLists) {
        this.totalPrice +=
          this.cartLists[i].price * this.cartLists[i].itemValue * 100;
      }
    } else {
      this.checkAll = false;
    }
  },
  methods: {
    changeChecked(val, id) {
      this.totalPrice = 0;
      for (var i in this.cartLists) {
        if (id == this.cartLists[i].id) {
          this.cartLists[i].checkedItem = val;
          console.log(this.cartLists[i].checkedItem);
        }
      }

      let num = 0;
      this.cartLists.forEach((k, v) => {
        if (k.checkedItem == true) {
          num += 1;
        }
        this.checkedNum = num;
      });
      if (this.checkedNum == this.cartLists.length) {
        console.log("全选");
        // 全选
        this.checkAll = true;
        for (var i in this.cartLists) {
          this.totalPrice +=
            this.cartLists[i].price * this.cartLists[i].itemValue * 100;
        }
      } else {
        console.log("未全选");
        this.checkAll = false;
        for (var i in this.cartLists) {
          if (this.cartLists[i].checkedItem == true) {
            this.totalPrice +=
              this.cartLists[i].price * this.cartLists[i].itemValue * 100;
          }
        }
      }
    },
    // // 到处逛逛 回首页
    // golook() {
    //   // 因为都在index页面所以只能重新刷新页面 从而回到首页
    //   this.$router.go(0);
    // },
    // 增加
    plus(val, id) {
      this.totalPrice = 0;
      for (var i in this.cartLists) {
        if (id == this.cartLists[i].id) {
          this.cartLists[i].itemValue = val + 1;
        }
      }
      for (var i in this.cartLists) {
        this.totalPrice +=
          this.cartLists[i].price * this.cartLists[i].itemValue * 100;
      }
    },
    // 减少
    minus(val, id) {
      this.totalPrice = 0;
      for (var i in this.cartLists) {
        if (id == this.cartLists[i].id) {
          this.cartLists[i].itemValue = val - 1;
        }
      }
      for (var i in this.cartLists) {
        this.totalPrice +=
          this.cartLists[i].price * this.cartLists[i].itemValue * 100;
      }
    },
    onSubmit() {
      console.log("提交订单");
    },
    // 返回上一步
    // onClickLeft() {
    //   // 因为都在index页面所以只能重新刷新页面 从而回到首页
    //   this.$router.go(0);
    // },
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
  margin-bottom: 1.84rem;
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