<template>
    <div class="detailsContainer">
        <div class="detailsBox">
            <div class="detailsForm">
                <el-steps :active="active" align-center :space="175" finish-status="success" style="margin-left: 115px">
                    <el-step title="测评详情" />
                    <el-step title="测评任务" />
                </el-steps>

                <el-form :model="form" ref="ruleFormRef" label-width="124px" style="margin-top:15px" :rules="rules">
                    <el-form-item label="产品名称" required prop="productName">
                        <el-input placeholder="请输入" maxlength="15" v-model="form.productName"
                            onkeyup="this.value=this.value.replace(/[^\w_^\u4E00-\u9FA5]/g,'')" />
                        <span>名称不得超过15个字符，支持中文、英文大小写、数字、特殊字符仅支持_，中文或英文开头</span>
                    </el-form-item>
                    <el-form-item label="产品类型" required class="pruductType" prop="productType">
                        <el-select placeholder="请选择" v-model="form.productType">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="测评类型" required prop="testType">
                        <el-select placeholder="请选择" v-model="form.testType">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="测评维度" required prop="testDimension">
                        <el-select placeholder="请选择" v-model="form.testDimension">
                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </el-form-item>
                    <el-form-item label="测评描述" required prop="testDescription">
                        <el-input placeholder="请输入招募专家背景等信息，文案不超过200字" maxlength="200" type="textarea" resize="none"
                            :rows="4" v-model="form.testDescription" />
                    </el-form-item>
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
                        <span>当招募人数低于填写的最低人数时测评活动不会启动、报名人数到最高值时自动停止招募。为了保证可信度，建议人数在6人左右</span>
                    </el-form-item>
                    <div class="time">
                        <el-form-item label="所需时间" required prop="time">
                            <el-input-number controls-position="right" v-model="form.time" :min="1" :max="100" />
                            &nbsp 小时
                        </el-form-item>
                    </div>
                    <el-row>
                        <el-col :span="16">
                            <el-form-item label="招募起始时间" required prop="collectDate">
                                <el-date-picker v-model="form.collectDate" type="daterange" unlink-panels
                                    range-separator="~" start-placeholder="开始日期" end-placeholder="结束日期" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="16">
                            <el-form-item label="测评起始时间" required prop="testDate">
                                <el-date-picker v-model="form.testDate" type="daterange" unlink-panels
                                    range-separator="~" start-placeholder="开始日期" end-placeholder="结束日期" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="16">
                            <el-form-item label="数据汇总起始时间" required prop="dataDate">
                                <el-date-picker v-model="form.dataDate" type="daterange" unlink-panels
                                    range-separator="~" start-placeholder="开始日期" end-placeholder="结束日期" />
                            </el-form-item>
                        </el-col>
                    </el-row>
                    <el-form-item label="测试账号" class="checkBox">
                        <el-checkbox label="提供测试账号" name="type" />
                    </el-form-item>
                    <el-form-item label="账号" required prop="username">
                        <el-input placeholder="请输入" v-model="form.username" />
                    </el-form-item>
                    <el-form-item label="密码" required prop="password">
                        <el-input v-model="form.password" show-password placeholder="请输入" type="password" />
                    </el-form-item>
                    <el-form-item label="账号使用备注">
                        <el-input type="textarea" resize="none" :rows="4" v-model="form.useRemark"
                            placeholder="请输入账号使用过程中的注意事项" />
                    </el-form-item>
                </el-form>
            </div>
            <div>
                <el-button class="nextButton" type="primary"  @click="$router.push('/task')">下一步</el-button>
            </div>
        </div>
    </div>

</template>



<script setup lang="ts">
import { ref } from 'vue'
import { reactive } from 'vue'
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
    minPeople: '',
    maxPeople: '',
    time: '',
    collectDate: '',
    testDate: '',
    dataDate: '',
    username: '',
    password: '',
    useRemark: '',
})


const rules = reactive<FormRules>({
    productName: [
        { validator: validateName, trigger: 'blur' },
    ],

})


const productName = ref('')
const productType = ref('')
const testType = ref('')
const testDimension = ref('')
const collectDate = ref('')
const testDate = ref('')
const dataDate = ref('')
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
const minPeople = ref(1)
const maxPeople = ref(1)
const time = ref(1)
const active = ref(0)
const useRemark = ref('')
const password = ref('')
const username = ref('')
const testDescription = ref('')
const nextStep = () => {
    active.value++;
}

</script>



<style  scoped>
.detailsContainer {
    height: 1060px;
    background-color: #f3f5f8;
}

.detailsBox {
    width: 1306px;
    height: 1000px;
    position: absolute;
    left: 50%;
    margin-left: -653px;
    top: 30px;
    background-color: #FDFDFD;
    border: 1px solid rgba(248, 248, 249, 1);
    box-shadow: inset 1px 1px 1px 0px rgba(255, 255, 255, 1);
    box-shadow: inset -1px -1px 1px 0px rgba(241, 244, 246, 1);
    box-shadow: 0px 5px 30px 1px rgba(231, 235, 241, 1);
    border-radius: 8px;
    font-family: PingFangSC-Regular;
}

.detailsForm {
    background-color: #FDFDFD;
    height: 935px;
    width: 615px;
    margin-top: 15px;
    position: absolute;
    left: 50%;
    margin-left: -306px;
    border-radius: 2px;
}

.el-form-item--small {
    margin-bottom: 15px;
}


.el-select--small {
    width: 400px;
    height: 32px;
}

:deep().el-select .el-input__inner {
    height: 18px;
}

.el-input {
    height: 32px;

}

.el-input[data-v-db64aed6] {
    width: 400px;
}


:deep().el-input__wrapper {
    padding: 7px 28px 7px 10px;
}


:deep().el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before {
    margin-right: 2px;
}


.el-range-editor--small.el-input__wrapper {
    padding-top: 4px;
}


.el-input-number--small {
    width: 80px;
}

:deep().el-input--small .el-input__inner {
    height: 18px;
}

:deep().el-input-number.is-controls-right .el-input-number__decrease {
    height: 15px;
}

:deep().el-input-number.is-controls-right .el-input-number__increase {
    height: 15px;
}

.time {
    margin-top: 32px;
}


:deep().el-range-editor--small.el-input__wrapper {
    height: 18px;
}


:deep() .el-checkbox.el-checkbox--small .el-checkbox__inner {
    width: 14px;
    height: 14px;
}

.el-checkbox.el-checkbox--small {
    height: 18px;
}

:deep().el-checkbox__label {
    padding-left: 10px;
    height: 18px;
    color: #333333;
    letter-spacing: 0;
    line-height: 18px;
    font-weight: 400;
}

:deep().el-textarea__inner {
    padding-top: 7px;
    padding-left: 10px;
    padding-bottom: 11px;
}


:deep().el-form-item__label {
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

span {
    width: 488px;
    height: 18px;
    font-size: 12px;
    color: #BBBBBB;
    letter-spacing: 0;
    line-height: 18px;
    font-weight: 400;
}

.el-form-item--small .el-form-item__label {
    height: 18px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
    text-align: right;
    line-height: 18px;
    font-weight: 400;
}

.el-textarea {
    width: 400px;
    height: 90px;
    color: #BBBBBB;
    letter-spacing: 0;
    text-align: justify;
    line-height: 18px;
}

.nextButton {
    width: 66px;
    height: 32px;
    line-height: 18px;
    position: absolute;
    margin-left: 471px;
    margin-top: 933px;
}
</style>