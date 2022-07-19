<template>
    <div class="common-layout">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <Main></Main>
        </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
    import Header from "./layout/Header.vue";
    import Main from './layout/Main.vue';
</script>

<style lang="">
    
</style>