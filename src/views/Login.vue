<template>
    <div class="loginContainer">
        <svg-icon icon-class="background" style=" width:1536px; height:720px"></svg-icon>
        <el-form class="loginBox" :model="loginform" label-width="75px" :label-position="labelPosition">
            <div class="title">
                <span>登录</span>
            </div>
            <el-form-item class="department" label="部门">
                <el-select v-model="loginform.department" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item class="name" label="专家姓名">
                <el-input v-model="loginform.name" placeholder="请输入..." />
            </el-form-item>
            <div class="nameDescription">
                <span>请输入您的姓名，以OA账号为准，如lidan1</span>
            </div>
            <el-form-item>
                <el-button type="primary" class="button">立即登录</el-button>
            </el-form-item>
            <div class="loginDescription">
                <span>为了方便后续统计专家积分，请确保填写信息的准确性</span>
            </div>
        </el-form>
    </div>
</template>


<script setup lang="ts">
import { reactive, ref } from 'vue'
const labelPosition = ref('top')
const loginform = reactive({
    department: '',
    name: '',
})
const value = ref('')
const options = [
    {
        value: 'LaaS',
        label: 'LaaS',
    },
    {
        value: 'PaaS',
        label: 'PaaS',
    },
    {
        value: 'SaaS',
        label: 'SaaS',
    },
    {
        value: '云网管理',
        label: '云网管理',
    },
    {
        value: '安全',
        label: '安全',
    },
    {
        value: '测试',
        label: '测试',
    },
    {
        value: 'SRE',
        label: 'SRE',
    },
    {
        value: '信息系统支撑',
        label: '信息系统支撑',
    },
]
</script>


<style lang="less" >
.loginContainer {
    height: 100%;
    overflow: hidden;
}

.loginBox {
    position: absolute;
    top: 212px;
    left: 882px;
    width: 372px;
    height: 370px;
    border: 2px solid rgba(255, 255, 255, 1);
    box-shadow: 0px 8px 16px 0px rgba(200, 209, 222, 1);
    border-radius: 8px;
    background-image: linear-gradient(0deg, #FFFFFF 0%, #F3F5F8 100%);
}

.title {
    width: 50px;
    height: 33px;
    font-family: PingFangSC-Medium;
    font-size: 24px;
    color: #333333;
    letter-spacing: 1px;
    text-align: justify;
    font-weight: 500;
    margin-top: 32px;
    margin-left: 162px;
}

.department {
    margin-top: 21px;
    margin-left: 46px;
    margin-bottom: 20px;
}

.name {
    margin-top: 0px;
    margin-left: 46px;
}

.nameDescription {
    // width: 240px;
    height: 17px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #BBBBBB;
    letter-spacing: 0.5px;
    text-align: justify;
    font-weight: 400;
    margin-top: -18px;
    margin-left: 46px;
}

.button {
    margin-left: 46px;
    margin-top: 34px;
}

.loginDescription {
    width: 280px;
    height: 17px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #337DFF;
    letter-spacing: -0.4px;
    text-align: justify;
    font-weight: 400;
    margin-left: 46px;
    margin-top: -15px;
}


/* 以下为elementplus组件设置 */
.el-select--small {
    height: 36px;
}

.el-input {
    --el-input-bg-color: #EBEFF4;
}

.el-form--small.el-form--label-top .el-form-item .el-form-item__label {
    height: 22px;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #555555;
    letter-spacing: 0;
    text-align: justify;
    font-weight: 500;
}

.el-input--small {
    width: 280px;
    height: 36px;
    border-radius: 2px;
}

.el-input__inner {
    width: 50px;
    height: 17px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #BBBBBB;
    letter-spacing: 0.5px;
    text-align: justify;
    font-weight: 400;
    margin-left: 10px;
}

.el-button--small {
    width: 280px;
    height: 36px;
    background: #337DFF;
    border-radius: 2px;
}

.el-button>span {
    width: 64px;
    height: 22px;
    font-family: PingFangSC-Medium;
    font-size: 16px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: justify;
    font-weight: 500;
}
</style>