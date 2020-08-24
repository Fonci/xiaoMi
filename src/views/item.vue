<template>
  <div class="container">
    <div class="inner">
      <!-- header -->
      <header>
        <div>
          <img class="header_icon" src="../assets/item/back.png" alt />
          <img class="header_icon" src="../assets/item/share.png" alt />
        </div>
      </header>
      <!-- banner -->
      <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false">
        <van-swipe-item v-for="(banner,index) in banners" :key="index">
          <img :src="banner" alt style="width:100%;height:100%;" />
        </van-swipe-item>
      </van-swipe>
      <!-- info -->
      <div class="item_info">
        <div class="price">
          ￥
          <span>4999</span>
        </div>
        <div class="name">小米10 Pro</div>
        <div class="info">
          <div>「分期最高享24期免息，购机享特惠加价购」</div>
          <div>
            <img src="../assets/item/one.png" alt />
            骁龙865旗舰平台，双模5G，用久了也不卡
          </div>
          <div>
            <img src="../assets/item/two.png" alt />
            骁龙865旗舰平台，双模5G，用久了也不卡
          </div>
          <div>
            <img src="../assets/item/three.png" alt />
            骁龙865旗舰平台，双模5G，用久了也不卡
          </div>
        </div>
      </div>
      <div class="more_info">
        <div>
          <div class="item" v-for="(item,index) in 8" :key="index">
            <img
              src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f0c04e138bfed2b1ebb589de615236d1.png"
              alt
            />
            <div class="item_name">CPU</div>
            <div class="item_intro">骁龙865</div>
          </div>
        </div>
      </div>
      <!-- 排行榜 -->
      <div class="rank">
        <img
          style="width:1.25rem;height:.32rem;vertical-align:bottom;"
          src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/049ec9bcc093365914620c46965bf9ab.png"
          alt
        />
        <span style="font-size:.24rem;">入选[小米手机热销榜]</span>
      </div>
      <div class="blank"></div>
      <div style="width:4rem;height:4rem;"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      banners: [
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/3855dec8f7edd5dfe3aa3a4fe77a87dd.jpeg",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/73687a4777c909d7460fda7fdb530dfc.jpg",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9c5b77e7780de29e42faf2ed4d936ac0.jpg",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/799066a0d7b6e5070bf6f46cec9b130b.jpg",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/8d53a1f12cf97f3fcf40b6cdfe311eb9.jpg",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d32265f5e3eb1496adf4eb53af802906.jpg",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/bf0e626216800b6b47a6f0a0ed50e7f2.jpg",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/51701b16df1b5f7638c33f5809f0c5ad.jpg",
        "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/b4ea51ccbdd6bdf3d23b4a8af0ed7edd.jpg",
      ],
    };
  },
};
</script>

<style scoped>
.container {
  width: 7.5rem;
  height: auto;
  font-size: 0.24rem;
}
.inner {
  width: 7.2rem;
  height: auto;
  margin: 0 auto;
  position: relative;
}
header {
  height: 0.9rem;
  position: sticky;
  left: 0;
  top: 0;
  z-index: 1;
}
header > div {
  width: 6.6rem;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
}
.my-swipe {
  width: 7.2rem;
  height: 100%;
  margin-top: -0.5rem;
}
.header_icon {
  width: 0.8rem;
  height: 0.8rem;
}
.item_info {
  text-align: left;
  padding-left: 0.32rem;
  margin-top: 0.32rem;
}
.price {
  color: #ff6700;
}
.price span {
  font-size: 0.48rem;
  font-weight: 700;
}
.name {
  line-height: 1.5em;
  color: #000;
  font-weight: 700;
  font-size: 0.32rem;
  margin-top: 0.16rem;
  margin-bottom: 0.12rem;
  font-family: Avenir;
}
.info > div {
  margin-bottom: 0.16rem;
}
.info img {
  width: 0.24rem;
  height: 0.24rem;
  vertical-align: middle;
  margin-right: 0.1rem;
}
.more_info {
  width: 100%;
  height: 1.69rem;
  margin-top: 0.16rem;
  overflow: hidden;
}
.more_info > div {
  height: 1.69rem;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  overflow-y: scroll;
  display: flex;
}

.item {
  width: 1.68rem;
  height: 1.68rem;
  margin: 0 0.3rem;
}
.item img {
  width: 0.3rem;
  height: 0.3rem;
  margin-top: 0.32rem;
}
.item_name,
.item_intro {
  white-space: nowrap;
}
.rank {
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  text-align: left;
  padding: 0.28rem 0.2rem 0.28rem 0.3rem;
}
.blank {
  height: 0.2rem;
  background: rgb(246, 246, 246);
}
</style>