<template>
  <div>
    <el-button type="primary" @click="login">你好</el-button>
  </div>
</template>

<script setup lang="ts">
import {author} from "@/commen/web3/metaMask_utils";

const login = ()=>{
  author()
}

</script>

<style scoped lang="less">

</style>
