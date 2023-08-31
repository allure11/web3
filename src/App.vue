<template>
  <div>
    <router-link to="/login">Login</router-link>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import {author} from "@/commen/web3/metaMask_utils";

author()
</script>

<style scoped>

</style>
