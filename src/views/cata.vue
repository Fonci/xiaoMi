<template>
  <div class="container">
    <!-- 导航栏 -->
    <van-nav-bar title="分类" style="background:rgb(242, 242, 242);height:0.5rem;" />
    <div class="content">
      <div class="nav">
        <!-- 侧边栏 -->
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            :class="index==activeKey?'active':''"
            v-for="(item,index) in navData"
            :title="item"
            :key="index"
          />
        </van-sidebar>
      </div>

      <!-- 内容区域 -->
      <div class="main_box">
        <div class="main">
          <!-- 小米手机 -->
          <div class="list">
            <img
              class="top_pic"
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c42b4c114af5ac130df10e605e1a9f82.jpg?f=webp&w=750&h=300&bg=FFFFFF"
              alt
            />
            <div class="cata_title">
              <span>小米数字系列</span>
            </div>
            <div class="box">
              <div style="clear:both;"></div>
              <div class="product" v-for="(item,index) in 5" :key="index">
                <div>
                  <img
                    style="width:1rem;height:1rem;"
                    src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
                    alt
                  />
                </div>
                <span>小米10 至尊版</span>
              </div>
            </div>
            <div class="cata_title">
              <span>小米MIX系列</span>
            </div>
            <div class="box">
              <div class="product" v-for="(item,index) in 2" :key="index">
                <div>
                  <img
                    style="width:1rem;height:1rem;"
                    src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/266ad6dd5146deaf3ae3602a89e7a217.png?thumb=1&w=120&h=120"
                    alt
                  />
                </div>
                <span>小米MIX Alpha</span>
              </div>
            </div>
            <div class="cata_title">
              <span>小米手机配件</span>
            </div>
            <div class="box">
              <div class="product" v-for="(item,index) in 5" :key="index">
                <div>
                  <img
                    style="width:1rem;height:1rem;"
                    src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce7aaeec82e51a44790959295183f669.png?thumb=1&w=120&h=120"
                    alt
                  />
                </div>
                <span>充电器</span>
              </div>
            </div>
          </div>
          <!-- Redmi手机 -->
          <div class="list">
            <img
              class="top_pic"
              src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9da143d6e1bbce78cda92d4be76bf4e5.jpg?f=webp&w=750&h=300&bg=FFFFFF"
              alt
            />
            <div class="cata_title">
              <span>Redmi红米 K系列</span>
            </div>
            <div class="box">
              <div style="clear:both;"></div>
              <div class="product" v-for="(item,index) in 5" :key="index">
                <div>
                  <img
                    style="width:1rem;height:1rem;"
                    src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120"
                    alt
                  />
                </div>
                <span>小米10 至尊版</span>
              </div>
            </div>
            <div class="cata_title">
              <span>小米MIX系列</span>
            </div>
            <div class="box">
              <div class="product" v-for="(item,index) in 2" :key="index">
                <div>
                  <img
                    style="width:1rem;height:1rem;"
                    src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/266ad6dd5146deaf3ae3602a89e7a217.png?thumb=1&w=120&h=120"
                    alt
                  />
                </div>
                <span>小米MIX Alpha</span>
              </div>
            </div>
            <div class="cata_title">
              <span>小米手机配件</span>
            </div>
            <div class="box">
              <div class="product" v-for="(item,index) in 5" :key="index">
                <div>
                  <img
                    style="width:1rem;height:1rem;"
                    src="//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce7aaeec82e51a44790959295183f669.png?thumb=1&w=120&h=120"
                    alt
                  />
                </div>
                <span>充电器</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeKey: 0,
      navData: [
        "小米手机",

        "Redmi手机",

        "黑鲨手机",

        "5G合约",

        "小米众筹",

        "电视",

        "大家电",

        "电脑办公",

        "小爱智能",

        "路由器",

        "生活电器",
      ],
    };
  },
  created() {},
  methods: {},
};
</script>

<style>
.container {
  width: 7.5rem;
  height: auto;
}
.content {
  width: 7.5rem;
  height: auto;
  position: fixed;
  left: 50%;
  top: 0.5rem;
  bottom: 1.04rem;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: space-between;
}
.nav {
  width: 1.52rem;
  height: auto;
  border-right: 1px solid #efefef;
  overflow-y: auto;
  position: relative;
}

.van-sidebar {
  width: 1.5rem;
  overflow-y: auto;
  /* -webkit-overflow-scrolling: touch; */
}
.active .van-sidebar-item__text {
  font-size: 0.34rem;
  color: #fb7d34;
  height: 0.4rem;
}
.main_box {
  margin-right: 0.1rem;
  width: 5.5rem;
  height: auto;
  overflow-y: auto;
  font-size: 0.23rem;
  color: rgba(0, 0, 0, 0.54);
}
.main {
  width: 100%;
  height: auto;
  overflow-y: scroll;
}
.top_pic {
  width: 5.5rem;
  height: 2rem;
}
.cata_title {
  width: 100%;
  height: 1.28rem;
  margin-top: 0.2rem;
  color: #3c3c3c;
}
.cata_title span {
  position: relative;
  line-height: 1.28rem;
  font-size: 0.28rem;
  font-weight: 400;
}
.cata_title span:before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 0.4rem;
  border-top: 1px solid #e0e0e0;
  transform: translate3d(-150%, -50%, 0);
}
.cata_title span:after {
  content: "";
  position: absolute;
  top: 50%;
  right: 0;
  width: 0.4rem;
  border-top: 1px solid #e0e0e0;
  transform: translate3d(150%, -50%, 0);
}
.box {
  overflow: hidden;
}
.product {
  width: 1.68rem;
  height: 1.54rem;
  float: left;
  margin-top: 0.2rem;
  margin-bottom: 0.3rem;
}
</style>