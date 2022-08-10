<template>
    <div class="nav-box">
        <div class="left">
            <!-- <img src="../assets/icons/svg/组合logo.svg"> -->
            <svg-icon icon-class="combine-logo" style="width:138px"></svg-icon>
            <span class="name">易用性在线测试平台</span>
        </div>
        <div class="center">
            <el-menu :default-active="$route.path" mode="horizontal" router>
                <el-menu-item index="/list">测评列表</el-menu-item>
                <el-menu-item index="/manage">专家管理</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.nav-box {
    display: flex;
    /* min-width: 1366px; */
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    height: 60px;
    line-height: 60px;
    background: #337DFF;
    padding-left: 30px;
    padding-right: 20px;

    .left {
        width: 400px;

        .name {
            display: inline-block;
            font-size: 24px;
            color: #FFFFFF;
            font-family: 'YouSheBiaoTiHei';
            margin-left: 30px;
            text-align: justify;
            font-weight: 400;
        }
    }
}

.center {
    flex: 1;
    margin-left: 248px;
    font-family: PingFangSC-Regular;
    font-size: 16px;

    .el-menu--horizontal {
        box-sizing: border-box;
        border: none;
        height: 60px;
        line-height: 60px;
        background: #337DFF;
    }

    .el-menu--horizontal>.el-menu-item {
        color: rgba(255, 255, 255, 0.80);
        padding: 0;
        margin: 0 20px;

        &:hover {
            color: #FFFFFF;
            background: #337DFF;
            border-bottom: 2.5px solid #FFFFFF;
        }
    }

    .el-menu--horizontal>.el-menu-item.is-active {
        background: #337DFF;
        border-bottom: 2px solid #FFFFFF;
        color: #FFFFFF !important;
    }
}
</style>