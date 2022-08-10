<template>
    <div class="detailsContainer">
        <el-card class="detailsForm">
            <!-- 步骤条 -->
            <div class="steps">
                <div class="firstCircle">
                    <span>1</span>
                </div>&nbsp&nbsp
                <span class="detailsStep">测评详情</span>&nbsp&nbsp&nbsp&nbsp
                <hr>&nbsp&nbsp&nbsp&nbsp
                <div class="secondCircle">
                    <span>2</span>
                </div>&nbsp&nbsp
                <span class="taskStep">测评任务</span>
            </div>
            <!-- 表单 -->
            <el-form class="form" :model="form" ref="ruleFormRef" label-width="150px" style="margin-top:40px"
                :rules="rules">
                <div class="start">
                    <el-form-item label="产品名称" prop="productName" style="width:700px">
                        <el-input placeholder="请输入" maxlength="15" v-model="form.productName"
                            onkeyup="this.value=this.value.replace(/[^\w_^\u4E00-\u9FA5]/g,'')" />
                        <span>名称不得超过15个字符，支持中文、英文大小写、数字、特殊字符仅支持_，中文或英文开头</span>
                    </el-form-item>
                    <el-form-item label="产品类型" class="pruductType" prop="productType">
                        <el-select placeholder="请选择" v-model="form.productType">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="测评类型" prop="testType">
                        <el-select placeholder="请选择" v-model="form.testType">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="测评维度" prop="testDimension">
                        <el-select placeholder="请选择" v-model="form.testDimension">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="测评描述" prop="testDescription">
                        <el-input placeholder="请输入招募专家背景等信息，文案不超过200字" maxlength="200" type="textarea" resize="none"
                            :rows="4" v-model="form.testDescription" />
                    </el-form-item>
                </div>
                <div class="need">
                    <el-form-item label="所需人数" required>
                        <el-form-item prop="minPeople">
                            <el-input-number controls-position="right" step-strictly v-model="form.minPeople" :min="1"
                                :max="100" />
                            &nbsp&nbsp&nbsp - &nbsp&nbsp
                        </el-form-item>
                        <el-form-item prop="maxPeople">
                            <el-input-number controls-position="right" v-model="form.maxPeople" :min="1" :max="100" />
                            &nbsp 人
                        </el-form-item>
                        <span class="span1">当招募人数低于填写的最低人数时测评活动不会启动、报名人数到最高值时自动停止招募。为了保证可信度，建议人数在6人左右</span>
                    </el-form-item>
                    <el-form-item label="所需时间" prop="time">
                        <el-input-number controls-position="right" v-model="form.time" :min="1" :max="100" />
                        &nbsp 小时
                    </el-form-item>
                </div>
                <div class="date">
                    <el-form-item label="招募起始时间" prop="collectDate">
                        <el-date-picker v-model="form.collectDate" type="daterange" unlink-panels range-separator="~"
                            start-placeholder="开始日期" end-placeholder="结束日期" />
                    </el-form-item>

                    <el-form-item label="测评起始时间" prop="testDate">
                        <el-date-picker v-model="form.testDate" type="daterange" unlink-panels range-separator="~"
                            start-placeholder="开始日期" end-placeholder="结束日期" />
                    </el-form-item>
                    <el-form-item label="数据汇总起始时间" prop="dataDate">
                        <el-date-picker v-model="form.dataDate" type="daterange" unlink-panels range-separator="~"
                            start-placeholder="开始日期" end-placeholder="结束日期" />
                    </el-form-item>
                </div>
                <div class="end">
                    <el-form-item label="测试账号" class="checkBox">
                        <el-checkbox label="提供测试账号" name="type" />
                    </el-form-item>
                    <el-form-item label="账号" prop="username">
                        <el-input placeholder="请输入" v-model="form.username" />
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input v-model="form.password" show-password placeholder="请输入" type="password" />
                    </el-form-item>

                    <el-form-item label="账号使用备注">
                        <el-input type="textarea" resize="none" :rows="4" v-model="form.useRemark"
                            placeholder="请输入账号使用过程中的注意事项" />
                    </el-form-item>
                </div>
            </el-form>
            <!-- 按钮 -->
            <div class="button1">
                <el-button class="nextButton" type="primary" @click="$router.push('/task')">下一步</el-button>
            </div>
        </el-card>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
var validateName = (rule: any, value: any, callback: any) => {
    if (/^[a-zA-Z\u4E00-\u9FA5][a-zA-Z0-9_\u4E00-\u9FA5]*$/.test(value)) {
        callback()
    } else {
        callback(new Error('请输入合法的名称'))
    }
}
const form = reactive({
    productName: '',
    productType: '',
    testType: '',
    testDimension: '',
    testDescription: '',
    minPeople: 1,
    maxPeople: 1,
    time: 1,
    collectDate: '',
    testDate: '',
    dataDate: '',
    username: '',
    password: '',
    useRemark: '',
})
const options = [
    {
        value: '云数据库MySQL',
        label: '云数据库MySQL',
    },
    {
        value: '中移舆情',
        label: '中移舆情',
    },
    {
        value: '云信',
        label: '云信',
    },
    {
        value: '神眼智能解析',
        label: '神眼智能解析',
    },
    {
        value: '离线语音合成',
        label: '离线语音合成',
    },
]
const active = ref(0)
const rules = reactive<FormRules>({
    productName: [{ required: true, message: '请输入产品名称', trigger: 'blur' },
    { validator: validateName, trigger: 'blur' },],
    productType: [{ required: true, message: '请输入产品类型', trigger: 'blur' }],
    testType: [{ required: true, message: '请输入测评类型', trigger: 'blur' }],
    testDimension: [{ required: true, message: '请输入测评维度', trigger: 'blur' }],
    testDescription: [{ required: true, message: '请输入测评描述', trigger: 'blur' }],
    minPeople: [{ required: true, message: '请输入所需最小人数', trigger: 'blur' }],
    maxPeople: [{ required: true, message: '请输入所需最大人数', trigger: 'blur' }],
    time: [{ required: true, message: '请输入所需时间', trigger: 'blur' }],
    collectDate: [{ required: true, message: '请输入招募起始时间', trigger: 'blur' }],
    testDate: [{ required: true, message: '请输入测评起始时间', trigger: 'blur' }],
    dataDate: [{ required: true, message: '请输入数据汇总起始时间', trigger: 'blur' }],
    username: [{ required: true, message: '请输入账号', trigger: 'blur' }],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
})
</script>

<style lang="scss" >
.detailsContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    overflow: auto;

    .detailsForm {
        display: flex;
        justify-content: center;
        text-align: center;
        width: 1306px;
        background: #FDFDFD;
        border: 1px solid rgba(248, 248, 249, 1);
        box-shadow: inset 1px 1px 1px 0px rgba(255, 255, 255, 1);
        box-shadow: inset -1px -1px 1px 0px rgba(241, 244, 246, 1);
        box-shadow: 0px 5px 30px 1px rgba(231, 235, 241, 1);
        border-radius: 8px;
        margin-top: 31px;
        margin-bottom: 30px;
    }

    .el-card__body {
        padding: 30px;
    }

    .steps {
        text-align: center;

        .firstCircle {
            display: inline-block;
            width: 30px;
            height: 30px;
            border-radius: 30px;
            background: #337DFF;
            text-align: center;
            border: 1.5px solid #337DFF;

            span {
                line-height: 30px;
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #FFFFFF;
                letter-spacing: 0;
                font-weight: 400;
            }
        }

        .detailsStep {
            color: #333333;
            letter-spacing: 0;
            font-weight: 400;
            font-size: 14px;
        }

        hr {
            display: inline-block;
            width: 175px;
            background-color: rgba(217, 217, 217, 1);
            height: 1px;
            border: none;
        }

        .taskStep {
            font-size: 14px;
            color: #999999;
            letter-spacing: 0;
            font-weight: 400;
        }

        .secondCircle {
            display: inline-block;
            width: 30px;
            height: 30px;
            border-radius: 30px;
            text-align: center;
            border: 1.5px solid rgba(217, 217, 217, 1);

            span {
                line-height: 30px;
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: #999999;
                letter-spacing: 0;
                font-weight: 400;
            }
        }
    }

    .form {
        width: 640px;
    }

    .start {
        span {
            display: inline-block;
            margin-top: 2px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #BBBBBB;
            letter-spacing: 0;
            line-height: 18px;
            font-weight: 400;
        }
    }

    .need {
        .el-form-item--small {
            margin-bottom: 0px;
        }

        .el-form-item--small .el-form-item__content {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #BBBBBB;
            letter-spacing: 0;
            text-align: justify;
            line-height: 18px;
            font-weight: 400;
        }

        .span1 {
            display: inline-block;
            margin-bottom: 15px;
            margin-top: 2px;
        }
    }

    .date {
        width: 550px;
        margin-top: 15px;
    }

    .button1 {
        width: 365px;

        .nextButton {
            background-color: #337DFF;
            font-family: PingFangSC-Regular;
            width: 66px;
            height: 32px;
            line-height: 18px;
            margin-top: 15px;
        }
    }

    // elementplus表单设置
    input {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #BBBBBB;
        letter-spacing: 0;
        line-height: 18px;
        font-weight: 400;
    }

    .el-form-item--small {
        margin-bottom: 15px;
    }

    .el-input {
        width: 400px;
        height: 32px;

    }

    .el-input__wrapper {
        padding: 7px 28px 7px 10px;
    }

    .el-textarea {
        width: 400px;
        height: 90px;
        color: #BBBBBB;
        letter-spacing: 0;
        text-align: justify;
        line-height: 18px;

        .el-textarea__inner {
            padding-top: 7px;
            padding-left: 10px;
            padding-bottom: 11px;
        }
    }

    .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before {
        margin-right: 2px;
    }

    .el-input-number--small {
        width: 80px;

        .el-input {
            width: 80px;
        }
    }

    .el-input-number.is-controls-right .el-input-number__decrease {
        height: 15px;
    }

    .el-input-number.is-controls-right .el-input-number__increase {
        height: 15px;
    }

    .el-range-editor--small.el-input__wrapper {
        padding-top: 4px;
    }

    .el-form-item__label {
        height: 32px;
        padding-right: 20px;
        padding-top: 7px;
        padding-bottom: 7px;
        color: #333333;
        text-align: right;
        line-height: 18px;
        font-weight: 400;
        font-size: 12px;
        letter-spacing: 0;
    }
}
</style>