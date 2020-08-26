<template>
  <div class="container item_container">
    <div
      class="inner"
      v-for="(item,index) in itemId=='1001'?phone:itemId=='1002'?tv:pc"
      :key="index"
    >
      <!-- header -->
      <header>
        <div>
          <img class="header_icon" src="../assets/item/back.png" alt @click="goback" />
          <img class="header_icon" src="../assets/item/share.png" alt />
        </div>
      </header>
      <!-- banner -->
      <van-swipe class="my-swipe" :autoplay="3000" :show-indicators="false" @change="onChange">
        <van-swipe-item v-for="(banner,index) in item.banners" :key="index">
          <img :src="banner" alt style="width:100%;height:100%;" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">{{currentIndex+ 1 }} / {{item.banners.length}}</div>
        </template>
      </van-swipe>
      <!-- info -->
      <div class="item_info">
        <div class="price">
          ￥
          <span>{{item.price}}</span>
        </div>
        <div class="name">{{item.name}}</div>
        <div class="info">
          <div v-if="item.info_title">{{item.info_title}}</div>
          <div v-for="(info,index) in item.info_lists" :key="index">
            <img :src="require(`../assets/item/`+info.iconPath+`.png`)" alt />
            {{info.text}}
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
            <div class="item_name">CPU{{index+1}}</div>
            <div class="item_intro">骁龙865</div>
          </div>
        </div>
      </div>
      <!-- 排行榜 -->
      <div class="rank flex_box" v-if="false">
        <div>
          <img
            style="width:1.25rem;height:.32rem;vertical-align:bottom;margin-right:.24rem;"
            src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/049ec9bcc093365914620c46965bf9ab.png"
            alt
          />
          <span style="font-size:.24rem;">入选【小米手机热销榜】</span>
        </div>
        <img class="right_icon" src="../assets/item/right_icon.png" alt />
      </div>
      <div class="blank"></div>
      <!-- 用户所选产品信息 -->
      <div class="product_info">
        <div class="chose_box">
          <div style="margin-right:.3rem;padding-bottom:.28rem;">已选</div>
          <div
            class="flex_box"
            style="width:88%;border-bottom:1px solid rgba(0,0,0,.05);padding-bottom:.28rem;"
          >
            <span>
              小米10 Pro 8GB+256GB 星空蓝
              <span>×1</span>
            </span>
            <img class="right_icon" src="../assets/item/right_icon.png" alt />
          </div>
        </div>

        <div class="flex_box chose_box">
          <div style="margin-right:.3rem;padding-bottom:.28rem;">送至</div>
          <div style="width:88%;padding-bottom:.28rem;">
            <div class="flex_box">
              <span>
                北京市 东城区
                <span style="color:#ff5934;">有现货</span>
              </span>
              <img class="right_icon" src="../assets/item/right_icon.png" alt />
            </div>
            <div style="text-align:left;color:rgba(0,0,0,.54);">明天0点前付款，预计8月25日送达</div>
          </div>
        </div>
        <div class="about_product">
          <span>
            <img class="yes_icon" src="../assets/item/yes_icon.png" alt /> 小米自营
          </span>
          <span>
            <img class="yes_icon" src="../assets/item/yes_icon.png" alt />小米发货
          </span>
          <span>
            <img class="yes_icon" src="../assets/item/yes_icon.png" alt />七天无理由退货
          </span>
        </div>
      </div>

      <!-- 底部 -->
      <van-goods-action style="height:.96rem;">
        <van-goods-action-icon icon="wap-home-o" text="首页" @click="onClickIcon('home')" />
        <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon('chat')" />
        <van-goods-action-icon
          icon="cart-o"
          text="购物车"
          :badge="cartBadge"
          @click="onClickIcon('cart')"
        />
        <van-goods-action-button
          type="warning"
          size="mini"
          text="加入购物车"
          style="height:.72rem;font-size:.28rem;"
          @click="showCartCard"
        />
      </van-goods-action>
      <!-- <van-sku
        v-model="showCartBox"
        :sku="sku"
        :goods="goods_info"
        :goods-id="goods_id"
        :hide-stock="sku.hide_stock"
        :quota="quota"
        :quota-used="quota_used"
        :initial-sku="initialSku"
        reset-stepper-on-hide
        reset-selected-sku-on-hide
        disable-stepper-input
        :close-on-click-overlay="closeOnClickOverlay"
        :custom-sku-validator="customSkuValidator"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />-->
      <div style="width:100%;height:1.04rem;"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      itemId: "", //商品id
      currentIndex: 0,

      phone: [
        {
          id: 1001,
          name: "小米10 Pro",
          price: 4999,
          info_title: "「分期最高享24期免息，购机享特惠加价购」",
          info_lists: [
            {
              iconPath: "one",
              text: "骁龙865旗舰平台，双模5G，用久了也不卡",
            },
            {
              iconPath: "two",
              text: "向往的生活同款手机，1亿像素8K电影相机",
            },
            {
              iconPath: "three",
              text: "对称式立体声，有声、有势，一听即知",
            },
          ],
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
        },
      ],
      tv: [
        {
          id: 1002,
          name: "小米电视4X 43英寸",
          price: "999",
          info_title:
            "「AI就趁现在！七夕特惠直降300元，8月28日恢复1199元！下单抽米家投影仪青春版！」",
          info_lists: [
            {
              iconPath: "one",
              text: "FHD全高清屏  画质更清晰震撼",
            },
            {
              iconPath: "two",
              text: "人工智能语音  语音搜片、控制智能设备",
            },
            {
              iconPath: "three",
              text: "高性能  64位四核处理器",
            },
          ],
          banners: [
            "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/531b65f7cb8e4a7586b2c337ef10b26e.jpg",
            "//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/759ade8991284b9fad5eda125cd7a53e.jpg",
          ],
        },
      ],
      pc: [
        {
          id: 1003,
          name: '小米笔记本15.6" MX110 独显版',
          price: "3899",
          info_title: "",
          info_lists: [
            {
              iconPath: "one",
              text: "四核i5处理器",
            },
            {
              iconPath: "two",
              text: "全新升级512G高速固态硬盘",
            },
            {
              iconPath: "three",
              text: "独立数字键盘",
            },
          ],
          banners: [
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/6b94af7cb690afa94d4e08cb0b247299.jpg",
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/f9164f61d2c1b80632d2af354ad449ea.jpg",
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/7d14f261fe630e212f3550c854b88043.jpg",
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/ecf5fe54c834945fa45073b4099dd00c.jpg",
            "//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d6242798df13e1c21aef797f4b3dc74f.jpg",
          ],
        },
      ],
      showCartBox: false,
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [
          {
            k: "版本",
            k_id: "1",
            v: [
              {
                id: "11",
                name: "8GB+256GB",
              },
              {
                id: "22",
                name: "12GB+256GB",
              },
              {
                id: "33",
                name: "12GB+512GB",
              },
            ],
            k_s: "s2",
            count: 3,
          },
          {
            k: "颜色",
            k_id: "2",
            v: [
              {
                id: "1",
                name: "星空蓝",
                imgUrl:
                  "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493329.10251213.jpg",
              },
              {
                id: "2",
                name: "珍珠白",
                imgUrl:
                  "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493274.50817754.jpg",
              },
            ],
            k_s: "s1",
            count: 2,
          },
        ],
        // 所有 sku 的组合列表，每一个规格所对应的数量，如下是：白1，白2 ，白3，蓝1，蓝2，蓝3
        list: [
          {
            id: 2259,
            price: 499900, //价格
            discount: 0,
            s1: "1",
            s2: "11",
            s3: "0",
            s4: "0",
            s5: "0",
            stock_num: 2, //库存
            goods_id: 946755,
          },
          {
            id: 2259,
            price: 549900, //价格
            discount: 0,
            s1: "1",
            s2: "22",
            s3: "0",
            s4: "0",
            s5: "0",
            stock_num: 1, //库存
            goods_id: 946756,
          },
          {
            id: 2259,
            price: 599900, //价格
            discount: 0,
            s1: "1",
            s2: "33",
            s3: "0",
            s4: "0",
            s5: "0",
            stock_num: 1, //库存
            goods_id: 946757,
          },
          {
            id: 2259,
            price: 499900, //价格
            discount: 0,
            s1: "2",
            s2: "11",
            s3: "0",
            s4: "0",
            s5: "0",
            stock_num: 1, //库存
            goods_id: 946758,
          },
          {
            id: 2259,
            price: 549900, //价格
            discount: 0,
            s1: "2",
            s2: "22",
            s3: "0",
            s4: "0",
            s5: "0",
            stock_num: 2, //库存
            goods_id: 946759,
          },
          {
            id: 2259,
            price: 599900, //价格
            discount: 0,
            s1: "2",
            s2: "33",
            s3: "0",
            s4: "0",
            s5: "0",
            stock_num: 3, //库存
            goods_id: 946760,
          },
        ],
        price: "4999.00", //？？
        stock_num: 10, // 商品总库存？？
        none_sku: false, // 是否无规格商品 false正常显示那些可供选择的标准，此处是颜色和尺寸
        hide_stock: true, // 是否隐藏剩余库存 false正常显示剩余多少件的那个库存
      },
      goods_id: "946755",
      quota: 0, //限购数量 库存旁边显示限购数
      quota_used: 0, //已经购买过的数量 和下方的数字选择框显示不一样 与限购数量是相对应的 0数字选择框显示3   1 -- 2   2 -- 1  3 -- 0
      goods_info: {
        title: "测试商品A",
        picture:
          "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1581493274.50817754.jpg", //图片这个我有点混乱
      },
      initialSku: {
        //   默认选中的选项
        s1: "1",
        s2: "11",
        selectedNum: 1,
      },
      //   showBase: true, //sku的框的显示
      //   showCustom: false,
      //   showStepper: false,
      //   showSoldout: false,
      closeOnClickOverlay: true, //点击空白处关闭购物框
      //   initialSku: {
      //     s1: "30349",
      //     s2: "1193",
      //     selectedNum: 3, //下面的数字选择框的数字即买了多少件
      //   },
      customSkuValidator: () => "请选择xxx!", //？？
      cartBadge: "", //购物车badge
    };
  },
  created() {
    // 1001 phone 1002 tv   1003 pc
    this.itemId = window.sessionStorage.getItem("itemId");
  },
  methods: {
    onChange(index) {
      this.currentIndex = index;
    },
    onClickIcon(type) {
      if (type == "home") {
        this.$router.push("/index");
        console.log("去首页");
      } else if (type == "cart") {
        console.log("去购物车页面");
        window.sessionStorage.setItem("goCart", "goCart");
        this.$router.push("/index");
      } else {
        console.log("去客服页面");
      }
    },
    // 加入购物车
    showCartCard() {
      this.$toast({
        type: "success",
        message: "加入购物车成功",
      });
      this.cartBadge = parseInt(this.cartBadge + 1);
      let arr = [];
      arr.push(this.itemId);
      window.sessionStorage.setItem("addCartId", arr);
      // this.showCartBox = true;
    },
    onBuyClicked() {
      console.log("buy");
    },
    onAddCartClicked() {
      this.$toast({
        type: "success",
        message: "加入购物车成功",
      });
      this.showCartBox = false;
      this.cartBadge = parseInt(this.cartBadge + 1);
    },
    onPointClicked() {
      console.log("onPointClicked");
    },
    // 返回
    goback() {
      this.$router.go(-1);
    },
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
.custom-indicator {
  position: absolute;
  right: 0.32rem;
  bottom: 0.32rem;
  padding: 0.1rem 0.15rem;
  font-size: 0.2rem;
  border-radius: 0.12rem;
  color: white;
  background: rgba(0, 0, 0, 0.5);
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
  overflow-y: hidden;
  overflow-x: scroll;
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
.flex_box {
  display: flex;
  justify-content: space-between;
}
.blank {
  height: 0.2rem;
  background: rgb(246, 246, 246);
}
.right_icon {
  width: 0.36rem;
  height: 0.36rem;
  vertical-align: bottom;
}
.chose_box {
  padding: 0.28rem 0.2rem 0 0.3rem;
  display: flex;
}
.about_product {
  background-color: #fcfcfc;
  font-size: 0.2rem;
  color: rgba(0, 0, 0, 0.54);
  text-align: left;
  padding: 0.16rem 0.32rem;
}
.about_product span {
  margin-right: 0.32rem;
}
.yes_icon {
  width: 0.24rem;
  height: 0.24rem;
  vertical-align: bottom;
  margin-right: 0.08rem;
}

/* 底部 */
.van-goods-action {
  font-size: 0.2rem;
}
</style>