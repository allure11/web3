<template>
  <div>
    <h1>用户操作</h1>
    <el-button type="primary" @click="getStore">获取账户余额</el-button>
  </div>
</template>

<script setup lang="ts">
import store from "@/commen/vuex/store";
import {getBalance, web3} from "@/commen/web3/metaMask_utils";
import {ElMessage} from "element-plus";

const getStore = () => {
  getBalance(store.state.address[0]).then(res => {
    ElMessage.success(`账户余额：${res} ETH`)
  })


}
</script>

<style scoped lang="less">

</style>
