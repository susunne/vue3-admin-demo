<template>
    <div class="taskContainer">
        <div class="taskBox">
            <div class="steps">
                <el-steps :active="active" align-center finish-status="success" :space="175">
                    <el-step title="测评详情" />
                    <el-step title="测评任务" />
                </el-steps>
            </div>
            <div class="files">
            </div>
            <div>
                <el-form ref="ruleFormRef" :model="ruleForm" :rules="rules" label-width="120px" class="demo-ruleForm"
                    :size="formSize" status-icon>
                    <el-form-item label="任务名称" prop="name">
                        <el-input v-model="ruleForm.name" />
                    </el-form-item>
                    <el-form-item label="任务描述" prop="description">
                        <el-input v-model="ruleForm.description" />
                    </el-form-item>
                    <el-form-item label="任务备注" prop="desc">
                        <el-input v-model="ruleForm.desc" type="textarea" />
                    </el-form-item>

                </el-form>
            </div>
            <div>

            </div>
        </div>

    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const active = ref(1)

import type { FormInstance, FormRules } from 'element-plus'

const formSize = ref('default')
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive({
    name: 'Hello',
    region: '',
    count: '',
    date1: '',
    date2: '',
    delivery: false,
    type: [],
    resource: '',
    desc: '',
})

const rules = reactive<FormRules>({
    name: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
    ],
    region: [
        {
            required: true,
            message: 'Please select Activity zone',
            trigger: 'change',
        },
    ],
    count: [
        {
            required: true,
            message: 'Please select Activity count',
            trigger: 'change',
        },
    ],
    date1: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change',
        },
    ],
    date2: [
        {
            type: 'date',
            required: true,
            message: 'Please pick a time',
            trigger: 'change',
        },
    ],
    type: [
        {
            type: 'array',
            required: true,
            message: 'Please select at least one activity type',
            trigger: 'change',
        },
    ],
    resource: [
        {
            required: true,
            message: 'Please select activity resource',
            trigger: 'change',
        },
    ],
    desc: [
        { required: true, message: 'Please input activity form', trigger: 'blur' },
    ],
})

const submitForm = async (formEl: FormInstance | undefined) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            console.log('submit!')
        } else {
            console.log('error submit!', fields)
        }
    })
}

const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
}

const options = Array.from({ length: 10000 }).map((_, idx) => ({
    value: `${idx + 1}`,
    label: `${idx + 1}`,
}))




</script>

<style  scoped>
.taskContainer {
    height: 1081px;
    background-color: #f3f5f8;
}

.taskBox {
    width: 1306px;
    height: 1031px;
    position: absolute;
    left: 50%;
    margin-left: -653px;
    top: 21px;
    background-color: #FDFDFD;
    border: 1px solid rgba(248, 248, 249, 1);
    box-shadow: inset 1px 1px 1px 0px rgba(255, 255, 255, 1);
    box-shadow: inset -1px -1px 1px 0px rgba(241, 244, 246, 1);
    box-shadow: 0px 5px 30px 1px rgba(231, 235, 241, 1);
    border-radius: 8px;
    font-family: PingFangSC-Regular;
}

.steps {
    margin-left: 462px;
    margin-top: 39px;
}
</style>