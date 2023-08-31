<template>
  <div>
    <h1>这里是首页</h1>
    <button @click="getStore">点击</button>
  </div>
</template>

<script setup lang="ts">
import store from "@/commen/vuex/store"; // 引入useStore 方法
const getStore = ()=>{

  console.log(store.state.address)
}
</script>

<style scoped lang="less">

</style>
