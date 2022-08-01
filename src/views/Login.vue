<template>
    <div class="loginContainer">
        <svg-icon icon-class="background" style=" width:100%; height:100%; filter: brightness(1.26);"></svg-icon>
        <img src="../assets/icons/编组2x.png">
        <span class="span1">移动云易用性测试在线平台</span>
        <span class="span2">洞悉产品体验问题，离简单更近一步</span>
        <el-form class="loginBox" :model="loginform" label-width="75px" :label-position="labelPosition">
            <span class="title">登录</span>
            <el-form-item class="department" label="部门">
                <el-select :popper-append-to-body="false" v-model="loginform.department" placeholder="请选择">
                    <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                </el-select>
            </el-form-item>
            <el-form-item class="name" label="专家姓名">
                <el-input v-model="loginform.name" placeholder="请输入..." />
            </el-form-item>
            <span class="nameDescription">请输入您的姓名，以OA账号为准，如lidan1</span>
            <el-form-item>
                <el-button type="primary" class="button">立即登录</el-button>
            </el-form-item>
            <span class="loginDescription">为了方便后续统计专家积分，请确保填写信息的准确性</span>
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


<style lang="scss" >
.loginContainer {
    display: flex;
    height: 100%;
    overflow: hidden;
    text-align: justify;

    img {
        width: 193.65px;
        height: 29px;
        position: absolute;
        top: 92px;
        left: 302px;
    }

    .span1 {
        font-family: PingFangSC-Medium;
        font-size: 36px;
        color: #337DFF;
        font-weight: 600;
        position: absolute;
        top: 129px;
        left: 183px;
    }

    .span2 {
        font-family: PingFangSC-Regular;
        font-size: 18px;
        color: #8E8E8E;
        position: absolute;
        top: 187px;
        left: 240px;
        font-weight: 400;
    }

    .loginBox {
        position: absolute;
        top: 50%;
        left: 75%;
        transform: translate(-50%, -50%);
        width: 372px;
        height: 370px;
        border: 2px solid rgba(255, 255, 255, 1);
        box-shadow: 0px 8px 16px 0px rgba(200, 209, 222, 1);
        border-radius: 8px;
        background-image: linear-gradient(0deg, #FFFFFF 0%, #F3F5F8 100%);
        padding-top: 32px;

        .title {
            font-family: PingFangSC-Medium;
            font-size: 24px;
            color: #333333;
            letter-spacing: 1px;
            font-weight: 500;
            margin-left: 162px;
        }

        .department {
            margin-top: 21px;
            margin-left: 46px;
        }

        .name {
            margin-left: 46px;
            margin-top: 20px;
        }

        .button {
            margin-left: 46px;
            margin-top: 34px;
        }

        .nameDescription {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #BBBBBB;
            letter-spacing: 0.5px;
            font-weight: 400;
            margin-left: 46px;
        }

        .loginDescription {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #337DFF;
            letter-spacing: -0.4px;
            font-weight: 400;
            margin-left: 46px;
        }
    }

    /* 以下为elementplus组件设置 */
    .el-form-item--small {
        margin-bottom: 0px;
    }

    .el-input--small {
        width: 280px;
        height: 36px;
        --el-input-bg-color: #EBEFF4;
        border-radius: 2px;

    }

    .el-select-dropdown__item {
        font-family: PingFangSC-Regular;
    }

    .el-input__wrapper {
        padding-left: 10px;
    }

    .el-button--small {
        width: 280px;
        height: 36px;
        background: #337DFF;
        border-radius: 2px;
        font-family: PingFangSC-Medium;
        font-size: 16px;
        color: #FFFFFF;
        letter-spacing: 0;
        font-weight: 500;
    }
}
</style>