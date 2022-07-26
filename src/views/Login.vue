<template>
    <div class="loginContainer"> 
        <div class="loginBox">
            <el-form>
                <el-form-item label="username">
                    <el-input autocomplete="off" />
                </el-form-item>
                <el-form-item label="password">
                    <el-input  type="password" autocomplete="off" />
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">Submit</el-button>
                    <el-button>Reset</el-button>
                </el-form-item>
        </el-form>
    </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="less" scoped>
    .loginContainer {
        height: 100%;
        background-color: #5dbe8a;
    }
    .loginBox {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 372px;
        height: 472px;
        background-color: #f3f5f8;
        border-radius: 8px;
    }
</style>