<template>
        <div class="breadcrumb-box">
          <span class="go-back-btn"  @click="goBack">
            <el-icon :size="14" color="#555"><ArrowLeft /></el-icon>
          </span>
            <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/end/list' }">测评列表</el-breadcrumb-item>
              <el-breadcrumb-item>{{name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
</template>

<script>
import {onMounted, ref } from 'vue'
import {ArrowLeft } from '@element-plus/icons-vue'
import {useRouter, useRoute } from 'vue-router'

export default {
  name: 'Breadcrumb',
  components:{
    ArrowLeft
  },

  setup(){
    const route = useRoute()
    const router = useRouter()

    let name = ref('')

    const goBack = () => {
       router.push({path:'./list' })
    }

    onMounted(() => {
      name.value = route.query.name
    })

    return {
      onMounted,
      goBack,
      name
    }
  }
}
</script>

<style lang='scss' scoped>
.breadcrumb-box{
  width: 100%;
  height: 60px;
  background: #FFFFFF;
  box-shadow: 0px 1px 4px 0px rgba(34, 48, 62, 0.1);
   display: inline-flex;
   box-sizing: border-box;
   padding: 20px;
   margin-top: 60px;
  .go-back-btn{
    margin-right: 10px;
    align-items: center;
    justify-content: center;
    color: #555555;
    cursor: pointer;
    text-align: center;
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    border-radius: 2px;
    border: 1px solid #D9D9D9;
    margin-top: -5px;
    }
      ::v-deep .el-breadcrumb__inner{
        color: #337dff;
      }
      i {
        vertical-align: middle;
      }
}

</style>
