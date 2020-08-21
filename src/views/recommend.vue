<template>
  <div class="container">
    <!-- banner -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banner" :key="item.id">
        <a href>
          <img :src="item.url" alt />
        </a>
      </van-swipe-item>
    </van-swipe>
    <!-- 分类 -->
    <div class="cata_top">
      <img v-for="(item,index) in cataImg1" :key="index" :src="item" alt />
    </div>
    <div class="cata_bottom">
      <img v-for="(item,index) in cataImg2" :key="index" :src="item" alt />
    </div>
    <!-- 产品层  -->
    <div class="product_cell">
      <div class="left_box">
        <img src="../assets/recommend/redMi.png" alt />
      </div>
      <div class="right_box">
        <div class="right_top">
          <img src="../assets/recommend/handRound.png" alt />
        </div>
        <div class="right_bottom">
          <img src="../assets/recommend/tv.png" alt />
        </div>
      </div>
    </div>
    <!-- divider -->
    <div class="divider"></div>
    <!-- stripe pic -->
    <div class="stripe_pic">
      <img
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/189acdf7e9b807cfc22d394df87c1958.jpg?f=webp&w=1080&h=420&bg=FEFEFE"
        alt
      />
    </div>
    <!-- divider -->
    <div class="divider"></div>
    <!-- 每日精选 -->
    <div style="height:4.4rem;">
      <img
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/0c08e3519b4c98ae53734a405143ffee.jpg?f=webp&w=1080&h=660&bg=FFFFFF"
        alt
      />
    </div>
    <!-- divider -->
    <div class="divider" style="background:#fff;"></div>
    <!-- phone lists -->
    <div class="lists">
      <div class="one_list" v-for="(item,index) in 6" :key="index">
        <div style="width:100%;height:2.8rem;">
          <img src="../assets/recommend/phone.jpg" alt />
        </div>
        <div class="info_box">
          <div class="name">小米10 Pro</div>
          <div class="brief">骁龙865 / 50倍变焦</div>
          <div class="price">
            ￥4999
            <span>起</span>
          </div>
          <div class="buybtn">立即购买</div>
        </div>
      </div>
      <div style="clear:both;"></div>
      <div class="more_product">更多小米手机产品 ></div>
    </div>
    <div class="divider"></div>
    <!-- tv lists -->
    <div style="height:4.4rem;">
      <img
        src="//i8.mifile.cn/v1/a1/34cc562e-8dd3-61e9-0209-395edb9237a1.webp?w=1080&h=660&bg=B2C5D1"
        alt
      />
    </div>
    <div class="divider" style="background:#fff;"></div>
    <div class="lists">
      <div class="one_list" v-for="(item,index) in 6" :key="index">
        <div style="width:100%;height:2.8rem;">
          <img src="../assets/recommend/tv.jpg" alt />
        </div>
        <div class="info_box">
          <div class="name">小米电视4X 43英寸</div>
          <div class="brief">FHD全高清屏，人工智能语音</div>
          <div class="price">
            ￥999
            <span style="color:rgba(0,0,0,.54);font-size:.22rem;">
              ￥
              <s>1399</s>
            </span>
          </div>
          <div class="buybtn">立即购买</div>
        </div>
      </div>
      <div style="clear:both;"></div>
      <div class="more_product">更多小米电视产品 ></div>
    </div>
    <div class="divider"></div>
    <!-- pc lists -->
    <div style="height:4.4rem;">
      <img
        src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c226d76d6036e165523338e63f6d2da4.jpg?f=webp&w=1080&h=660&bg=F9FDFE"
        alt
      />
    </div>
    <div class="divider" style="background:#fff;"></div>
    <div class="lists">
      <div class="one_list" v-for="(item,index) in 6" :key="index">
        <div style="width:100%;height:2.8rem;">
          <img src="../assets/recommend/pc.jpg" alt />
        </div>
        <div class="info_box">
          <div class="name">Air 13.3" 2019款</div>
          <div class="brief">新一代独立显卡</div>
          <div class="price">
            ￥5699
            <span>起</span>
            <span style="color:rgba(0,0,0,.54);font-size:.22rem;">
              ￥
              <s>5999</s>
            </span>
          </div>
          <div class="buybtn">立即购买</div>
        </div>
      </div>
      <div style="clear:both;"></div>
      <div class="more_product">更多小米笔记本产品 ></div>
    </div>
    <div class="divider"></div>
    <!-- air lists -->
    <div style="height:4.4rem;">
      <img
        src="//i8.mifile.cn/v1/a1/3466df89-e534-a68c-6504-2b6e0a704307.webp?w=1080&h=660&bg=E9EDF1"
        alt
      />
    </div>
    <div class="divider" style="background:#fff;"></div>

    
    <!-- about MI -->
    <div class="about">
      <img
        src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/bbb5bac8089d890338b5bf8ff742cbbc.png"
        alt
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banner: [
        {
          id: 1,
          url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cb5d0ad9f1371d5619b2aaa0d55adde.jpg?thumb=1&w=720&h=360",
        },
        {
          id: 2,
          url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e225635995c0d35fa858fc3c3afb4f91.jpg?thumb=1&w=720&h=360",
        },
        {
          id: 3,
          url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3cb5d0ad9f1371d5619b2aaa0d55adde.jpg?thumb=1&w=720&h=360",
        },
        {
          id: 4,
          url:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/e225635995c0d35fa858fc3c3afb4f91.jpg?thumb=1&w=720&h=360",
        },
      ],
      cataImg1: [
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/cb65daec7ef7b52cc785f88f78efba37.png?w=216&h=228&bg=FDF1E6",
        "//i8.mifile.cn/v1/a1/eb5024fe-dfe3-6e53-3e18-675bef5fa06e.webp?w=216&h=228&bg=EAF6FD",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d436f30612651fffe1d6c5aaa3fdb816.png?f=webp&w=216&h=228&bg=FFFFFF",
        "//i8.mifile.cn/v1/a1/e8bc849a-0a3b-21a0-6810-7da3a3903dee.webp?w=216&h=228&bg=FDEFDE",
        "//i8.mifile.cn/v1/a1/7dbcbf87-6a58-adb6-2f3f-bb3dae3e9c80.webp?w=216&h=228&bg=E5F4FC",
      ],
      cataImg2: [
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/64f3988b6216e4c1ab62a7f50df3e816.png?f=webp&w=216&h=228&bg=FFFFFF",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9ea68dee2bfa0e55a82236b0d968e975.png?w=216&h=228&bg=FCEAEA",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/96c780016ea196743905dc93f9249c39.png?w=216&h=228&bg=FDF5E5",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9425031cdd7af22d9a23a5ae16d1f57c.jpg?f=webp&w=216&h=228&bg=FFFFFF",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f11f9df6b0b0b428f8c8fc3267131830.png?w=216&h=228&bg=FDEDE8",
      ],
    };
  },
};
</script>

<style scoped>
.container {
  width: 7.2rem;
  height: auto;
  margin: 0 auto;
  /* padding-bottom: 1.04rem; */
  padding-bottom: 1.04rem;
}
img {
  width: 100%;
  height: 100%;
}
.my-swipe {
  width: 100%;
  height: 3.6rem;
}
.cata_top,
.cata_bottom {
  width: 100%;
  height: 1.52rem;
}
.cata_top img,
.cata_bottom img {
  width: 1.44rem;
  height: 1.52rem;
}
.product_cell {
  width: 100%;
  height: 5.08rem;
  display: flex;
  justify-content: space-between;
}
.left_box,
.right_box {
  width: 3.58rem;
  height: 100%;
}
.right_box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.right_box > div {
  height: 2.52rem;
}
.divider {
  height: 0.16rem;
  background-color: rgb(245, 245, 245);
}
.stripe_pic {
  height: 2.8rem;
}
.lists {
  width: 100%;
  height: auto;
  padding: 0 0.12rem;
}
.one_list {
  width: 3.42rem;
  height: 4.89rem;
  float: left;
  margin-right: 0.1rem;
  margin-bottom: 0.1rem;
}
.info_box {
  height: 2.09rem;
}
.info_box .name {
  margin-top: 0.2rem;
  font-size: 0.28rem;
  color: rgba(0, 0, 0, 0.87);
}
.info_box .brief {
  margin-top: 0.06rem;
  font-size: 0.22rem;
  line-height: 0.3rem;
  color: rgba(0, 0, 0, 0.54);
}
.price {
  font-size: 0.28rem;
  color: #ea625b;
  height: 1.5em;
  line-height: 1.5em;
}
.price span {
  font-size: 0.2rem;
}
.buybtn {
  width: 2rem;
  background: #ea625b;
  border-radius: 0.05rem;
  text-align: center;
  color: #fff;
  font-size: 0.24rem;
  padding: 0.16rem 0;
  font-weight: 700;
  margin: 0 auto;
}
.more_product {
  color: rgba(0, 0, 0, 0.6);
  font-size: 0.28rem;
  height: 1rem;
  line-height: 1rem;
}

.about {
  height: 1.06rem;
}
</style>