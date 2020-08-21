<template>
  <div class="container">
    <van-checkbox v-model="checked" ref="checkbox">复选框</van-checkbox>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      checked: true,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  width: 1rem;
  height: 1rem;
  border: 1px solid green;
}
</style>
