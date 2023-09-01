<template>
  <div>
    <el-menu
        :default-active="active"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
    >
      <el-menu-item index="0">LOGO</el-menu-item>
      <div class="flex-grow"/>
      <el-menu-item index="1">
        <router-link to="/home">Home</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="/login">Login</router-link>
      </el-menu-item>
    </el-menu>
    <div class="window-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import {author} from "@/commen/web3/metaMask_utils";
import {onMounted, ref} from "vue";

onMounted(() => {
  author()
})
// 首页活动路由
const active = ref('1')
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}

</style>
