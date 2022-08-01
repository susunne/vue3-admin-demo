<template>
  <div class="nav-box">
    <div class="left">
      <!-- <img src="../assets/icons/svg/combine-logo.svg"> -->
      <svg-icon icon-class="combine-logo"></svg-icon>
      <span class="name">易用性在线测试平台</span>
    </div>
    <div class="center">
      <div v-if="isFrontOrEnd == 1">
        <el-menu :default-active="activeIndex" mode="horizontal" router>
          <el-menu-item index="/front/list">任务广场</el-menu-item>
          <el-menu-item index="/front/mine">我的任务</el-menu-item>
        </el-menu>
      </div>

      <div v-else>
        <el-menu :default-active="activeIndex" mode="horizontal" router>
          <el-menu-item index="/end/list">测评列表</el-menu-item>
          <el-menu-item index="/end/exportManage">专家列表</el-menu-item>
        </el-menu>
      </div>
    </div>
    <div class="right">
      <el-dropdown trigger="hover">
        <span class="el-dropdown-link">
          专家姓名
          <el-icon class="el-icon--right">
            <!-- <ArrowDown /> -->
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item divided>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
// import { ArrowDown } from '@element-plus/icons-vue'
import { ref, watch, } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name: "Header",
  // components: {
  //   ArrowDown
  // },
  setup() {
    const router = useRouter()
    const activeIndex = ref()
    const isFrontOrEnd = ref(router.currentRoute.value.path.indexOf('front'))
    // 监控路由变化，高亮菜单
    watch(() => router.currentRoute.value.path, (toPath) => {
      if (toPath.indexOf('front') == 1) {
        if (toPath.indexOf('evaluation') !== -1 || toPath.indexOf('result') !== -1 || toPath.indexOf('detail') !== -1) {
          activeIndex.value = '/front/list'
        } else {
          activeIndex.value = toPath
        }

      } else if (toPath.indexOf('end') == 1) {
        if (toPath.indexOf('createTask') !== -1 || toPath.indexOf('details') !== -1 || toPath.indexOf('result') !== -1) {
          activeIndex.value = '/end/list'
        } else {
          activeIndex.value = toPath
        }
      }
    }, { immediate: true, deep: true })

    return {
      activeIndex,
      isFrontOrEnd,
    }
  }

}
</script>

<style lang="scss" scoped>
.nav-box {
  min-width: 1366px;
  width: inherit;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 60px;
  line-height: 60px;
  background: #337DFF;
  padding-left: 30px;
  padding-right: 20px;
  display: flex;

  .left {
    width: 400px;

    .name {
      display: inline-block;
      font-size: 24px;
      color: #EFEFEF;
      font-family: 'YouSheBiaoTiHei';
      margin-left: 30px;
    }
  }

  .center {
    flex: 1;

    .el-menu--horizontal {
      box-sizing: border-box;
      border: none;
      height: 60px;
      line-height: 60px;
      background: #337DFF;
    }

    .el-menu--horizontal>.el-menu-item {
      color: #FFFFFF;
      padding: 0;
      margin: 0 20px;

      &:hover {
        color: #FFFFFF;
        background: #337DFF;
        border-bottom: 2px solid #FFFFFF;
      }
    }

    .el-menu--horizontal>.el-menu-item.is-active {
      background: #337DFF;
      border-bottom: 2px solid #FFFFFF;
      color: #FFFFFF !important;
    }
  }

  .right {
    width: 120px;

    .el-dropdown {
      line-height: 60px;
      vertical-align: middle;
      color: #FFFFFF;

      .el-dropdown-link {
        color: #ffff;

        &:focus {
          outline: 0;
        }
      }
    }
  }
}
</style>
