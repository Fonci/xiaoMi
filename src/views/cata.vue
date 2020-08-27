<template>
  <div class="container cata_container">
    <!-- 导航栏 -->
    <van-nav-bar title="分类" style="background:rgb(242, 242, 242);height:0.5rem;" />
    <div class="content">
      <div class="nav">
        <!-- 侧边栏 -->
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item
            v-for="(item,index) in cataData"
            :key="index"
            :title="item.name"
            :class="index==activeKey?'active':''"
          />
        </van-sidebar>
      </div>
      <!-- 内容区域 -->
      <div class="main_box" ref="mainRef">
        <div class="main">
          <!-- 小米手机 -->
          <div class="list" v-for="(item,index) in cataData" :key="index" ref="listRef">
            <img v-if="item.stripe_pic" class="top_pic" :src="item.stripe_pic" alt />

            <div v-for="(child,index) in item.children" :key="index">
              <div class="cata_title">
                <span>{{child.name}}</span>
              </div>
              <div class="box">
                <div style="clear:both;"></div>
                <div class="product" v-for="(product,index) in child.product" :key="index">
                  <div>
                    <img style="width:1rem;height:1rem;" :src="product.product_img" alt />
                  </div>
                  <span>{{product.product_name}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
export default {
  data() {
    return {
      // active: 0,
      activeKey: 0,
      cataData: [
        {
          name: "小米手机",
          stripe_pic:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c42b4c114af5ac130df10e605e1a9f82.jpg?f=webp&w=750&h=300&bg=FFFFFF",
          children: [
            {
              name: "小米手机",
              product: [
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120",
                  product_name: "小米10 至尊版",
                },
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2a47c566e14b2da1a6cc0780060a59d0.png?thumb=1&w=120&h=120",
                  product_name: "小米10 至尊版",
                },
              ],
            },

            {
              name: "小米手机",
              product: [
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/266ad6dd5146deaf3ae3602a89e7a217.png?thumb=1&w=120&h=120",
                  product_name: "小米MIX Alpha",
                },
              ],
            },

            {
              name: "小米手机",
              product: [
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce7aaeec82e51a44790959295183f669.png?thumb=1&w=120&h=120",
                  product_name: "充电器",
                },
              ],
            },
          ],
        },
        {
          name: "Redmi手机",
          stripe_pic:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/9da143d6e1bbce78cda92d4be76bf4e5.jpg?f=webp&w=750&h=300&bg=FFFFFF",
          children: [
            {
              name: "Redmi红米 K系列",
              product: [
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce7aaeec82e51a44790959295183f669.png?thumb=1&w=120&h=120",
                  product_name: "充电器",
                },
              ],
            },

            {
              name: "Redmi手机",
              product: [
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce7aaeec82e51a44790959295183f669.png?thumb=1&w=120&h=120",
                  product_name: "充电器",
                },
              ],
            },

            {
              name: "Redmi手机",
              product: [
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce7aaeec82e51a44790959295183f669.png?thumb=1&w=120&h=120",
                  product_name: "充电器",
                },
              ],
            },
          ],
        },
        {
          name: "黑鲨手机",
          stripe_pic:
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/2d1fb3b7db6722bb4cb638d8c6ebefa6.jpg?f=webp&w=750&h=300&bg=FFFFFF",
          children: [
            {
              name: "黑鲨游戏手机",
              product: [
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/a76df38086f438f5513c470d843da783.png?thumb=1&w=120&h=120",
                  product_name: "黑鲨手机3S",
                },
              ],
            },

            {
              name: "黑鲨手机",
              product: [
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce7aaeec82e51a44790959295183f669.png?thumb=1&w=120&h=120",
                  product_name: "充电器",
                },
              ],
            },

            {
              name: "黑鲨手机",
              product: [
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ce7aaeec82e51a44790959295183f669.png?thumb=1&w=120&h=120",
                  product_name: "充电器",
                },
              ],
            },
          ],
        },
        {
          name: "电视",
          stripe_pic: "",
          children: [
            {
              name: "电视",
              product: [
                {
                  product_img:
                    "//i8.mifile.cn/b2c-mimall-media/033cfa4ab48b9d776dcb69e730022561!120x120.png",
                  product_name: "32-40英寸",
                },
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/866dc2dc582f090c42e9e3204b98710b.png?thumb=1&w=120&h=120",
                  product_name: "43英寸",
                },
              ],
            },
          ],
        },
        {
          name: "大家电",
          stripe_pic: "",
          children: [
            {
              name: "大家电",
              product: [
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a420b76232100bd466f1a0060ed97.png?thumb=1&w=120&h=120",
                  product_name: "冰箱",
                },
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/c15a420b76232100bd466f1a0060ed97.png?thumb=1&w=120&h=120",
                  product_name: "冰箱",
                },
              ],
            },
          ],
        },
        {
          name: "电脑办公",
          stripe_pic: "",
          children: [
            {
              name: "电脑办公",
              product: [
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dd7d4c781fb22a973179a86b9f3cd8b8.png?thumb=1&w=120&h=120",
                  product_name: "Redmi G 游戏本",
                },
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dd7d4c781fb22a973179a86b9f3cd8b8.png?thumb=1&w=120&h=120",
                  product_name: "Redmi G 游戏本",
                },
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/dd7d4c781fb22a973179a86b9f3cd8b8.png?thumb=1&w=120&h=120",
                  product_name: "Redmi G 游戏本",
                },
              ],
            },
          ],
        },
        {
          name: "小爱智能",
          stripe_pic: "",
          children: [
            {
              name: "小爱智能",
              product: [
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/284988b6415cac78fd80dfaeef4a115f.png?thumb=1&w=120&h=120",
                  product_name: "小米 8英寸",
                },
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/284988b6415cac78fd80dfaeef4a115f.png?thumb=1&w=120&h=120",
                  product_name: "小米 8英寸",
                },
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/284988b6415cac78fd80dfaeef4a115f.png?thumb=1&w=120&h=120",
                  product_name: "小米 8英寸",
                },
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/284988b6415cac78fd80dfaeef4a115f.png?thumb=1&w=120&h=120",
                  product_name: "小米 8英寸",
                },
              ],
            },
          ],
        },
        {
          name: "路由器",
          stripe_pic: "",
          children: [
            {
              name: "路由器",
              product: [
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f786dbfd80f1ab070491f2302257b94.png?thumb=1&w=120&h=120",
                  product_name: "Redmi AX6",
                },
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/5f786dbfd80f1ab070491f2302257b94.png?thumb=1&w=120&h=120",
                  product_name: "Redmi AX6",
                },
              ],
            },
          ],
        },
        {
          name: "生活电器",
          stripe_pic: "",
          children: [
            {
              name: "生活电器",
              product: [
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8dfb1af5a437b65bcc9108b82411265.png?thumb=1&w=120&h=120",
                  product_name: "扫地机",
                },
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8dfb1af5a437b65bcc9108b82411265.png?thumb=1&w=120&h=120",
                  product_name: "扫地机",
                },
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8dfb1af5a437b65bcc9108b82411265.png?thumb=1&w=120&h=120",
                  product_name: "扫地机",
                },
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8dfb1af5a437b65bcc9108b82411265.png?thumb=1&w=120&h=120",
                  product_name: "扫地机",
                },
                {
                  product_img:
                    "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f8dfb1af5a437b65bcc9108b82411265.png?thumb=1&w=120&h=120",
                  product_name: "扫地机",
                },
              ],
            },
          ],
        },
      ],
      offset: [0],//存放scroll的高度
    };
  },
  mounted() {
    setTimeout(() => {
      var arr = [];
      _.forEach(this.$refs.listRef, (value, key) => {
        arr.push(value.offsetHeight);
      });
      //1262  1262  1262  332   332   332   536   332   536
      let sum = 0;
      for (var i in arr) {
        sum = sum + arr[i];
        this.offset.push(sum);
      }
      // var mySort = this.offset;
      // this.$refs.mainRef.addEventListener("scroll", () => {
      //   var eScrollTop = this.$refs.mainRef.scrollTop;
      //   console.log(eScrollTop);
      //   for (var indexer = 1; indexer < mySort.length; indexer++) {
      //     if (eScrollTop > mySort[indexer]) {
      //       // this.activeKey = indexer;
      //     }
      //   }
      // });
    }, 100);
  },
  created() {},
  methods: {
    // 切换左侧菜单栏
    onChange(index) {
      console.log(index, this.offset[index]);
      var scrollTop = this.offset[index];
      this.$refs.mainRef.scrollTop = scrollTop + 10;
    },
  },
};
</script>

<style scoped>
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
  width: 1.8rem;
  height: auto;
  border-right: 1px solid #efefef;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
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
  /* overflow-y: scroll;
  overflow-x: hidden; */
}
/* .list {
  position: relative;
  left: 0;
  top: 0;
} */
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