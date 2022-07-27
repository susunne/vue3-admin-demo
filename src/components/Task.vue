<template>
    <div class="taskContainer">
        <div class="taskBox">
            <div class="steps">
                <el-steps :active="active" align-center finish-status="success" :space="175">
                    <el-step title="测评详情" />
                    <el-step title="测评任务" />
                </el-steps>
            </div>
            <div>
                <el-upload ref="upload" class="uploadFile"
                    action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15" :limit="1"
                    :on-exceed="handleExceed" :auto-upload="false">
                    <el-button class="button" type="primary">一键导入</el-button>
                </el-upload>
            </div>
            <div class="taskOne">
                <div class="title">
                    <span>任务一</span>
                </div>
                <el-form ref="ruleFormRef" :model="taskForm" :rules="taskrules" label-width="120px" status-icon
                    class="taskForm">
                    <el-form-item label="任务名称" prop="name">
                        <el-input v-model="taskForm.name" placeholder="请填写任务名称..." />
                    </el-form-item>
                    <el-form-item label="任务描述" prop="description">
                        <el-input v-model="taskForm.description" type="textarea" resize="none"
                            placeholder="请填写任务描述..." />
                    </el-form-item>
                    <el-form-item label="任务备注" prop="remark">
                        <el-input v-model="taskForm.remark" type="textarea" resize="none" placeholder="请填写任务备注..." />
                    </el-form-item>
                </el-form>
            </div>

            <div class="taskTwo">
                <div class="title">
                    <span>任务二</span>
                    <Delete id="iconDelete" @click="taskList.splice(index, 1)" />
                </div>
                <el-form ref="ruleFormRef2" :model="dynamicTaskForm" :rules="dynamicTaskRules" label-width="120px"
                    status-icon class="taskForm">
                    <el-form-item label="任务名称" prop="name" required>
                        <el-input v-model="dynamicTaskForm.name" placeholder="请填写任务名称..." />
                    </el-form-item>
                    <el-form-item label="任务描述" prop="description" required>
                        <el-input v-model="dynamicTaskForm.description" type="textarea" resize="none"
                            placeholder="请填写任务描述..." />
                    </el-form-item>
                    <el-form-item label="任务备注" prop="remark" required>
                        <el-input v-model="dynamicTaskForm.remark" type="textarea" resize="none"
                            placeholder="请填写任务备注..." />
                    </el-form-item>
                </el-form>
            </div>

            <div class="addTask">
                <div class="title">
                    <span>添加任务</span>
                    <span id="spanDescription">此处为测评任务流程，有多少个任务流就添加多少个任务流</span>
                </div>
                <div class="addSquare" @click='addNewTask()'>
                    <span class="addText">+ 添加</span>
                </div>
            </div>
            <el-row class="buttons">
                <el-button id="lastStep" @click="$router.push('/details')">上一步</el-button>
                <el-button id="createStep" type="primary">创建</el-button>
            </el-row>
        </div>

    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { genFileId } from 'element-plus'
import type { UploadInstance, UploadProps, UploadRawFile } from 'element-plus'
import type { FormInstance, FormRules } from 'element-plus'
const active = ref(1)
const upload = ref<UploadInstance>()
const handleExceed: UploadProps['onExceed'] = (files) => {
    upload.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    upload.value!.handleStart(file)
}

const submitUpload = () => {
    upload.value!.submit()
}

const ruleFormRef = ref<FormInstance>()
const ruleFormRef2 = ref<FormInstance>()
const taskForm = reactive({
    name: '',
    description: '',
    remark: '',
})

const taskrules = reactive({
    name: [{ required: true, message: '请输入任务名称', trigger: 'blur' }],
    description: [{ required: true, message: '请输入任务描述', trigger: 'blur' }],
    remark: [{ required: true, message: '请输入任务备注', trigger: 'blur' }],
})

const dynamicTaskForm = reactive({
    name: '',
    description: '',
    remark: '',
})

const dynamicTaskRules = reactive({
    name: [{ required: true, message: '请输入任务名称', trigger: 'blur' }],
    description: [{ required: true, message: '请输入任务描述', trigger: 'blur' }],
    remark: [{ required: true, message: '请输入任务备注', trigger: 'blur' }],
})

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

.uploadFile {
    margin-left: 491px;
    margin-top: 40px;
}
.el-button > span{
    width: 48px;
height: 18px;
font-family: PingFangSC-Regular;
font-size: 12px;
color: #FFFFFF;
letter-spacing: 0;
line-height: 18px;
font-weight: 400;
}



.taskOne {
    width: 556px;
    height: 326px;
    background: #F9FAFC;
    ;
    border-radius: 8px;
    margin-top: 10px;
    position: absolute;
    left: 50%;
    margin-left: -278px;
}

.taskTwo {
    width: 556px;
    height: 326px;
    background: #F9FAFC;
    border-radius: 8px;
    margin-top: 351px;
    position: absolute;
    left: 50%;
    margin-left: -278px;
}

.addTask {
    width: 556px;
    background: rgba(165, 42, 42, 0.0);
    margin-top: 670px;
    position: absolute;
    left: 50%;
    margin-left: -278px;
}

.buttons {
    width: 200px;
    height: 32px;
    background: #FDFDFD;
    margin-top: 810px;
    margin-left: 491px;
}

#spanDescription {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
    line-height: 20px;
    font-weight: 400;
    display: inline-block;
    margin-left: 24px;
}



.title {
    width: 530px;
    height: 24px;
    font-family: PingFangSC-Medium;
    font-size: 18px;
    color: #031129;
    letter-spacing: 0;
    line-height: 24px;
    font-weight: 500;
    margin-top: 20px;
    margin-left: 20px;
}

#iconDelete {
    font-size: 20px;
    width: 20px;
    height: 20px;
    margin-left: 445px;
}

.taskForm {
    /* background-color: #fff; */
    margin-top: 20px;
}



.addSquare {
    width: 400px;
    height: 60px;
    background: #FFFFFF;
    border: 1px dashed rgba(217, 217, 217, 1);
    border-radius: 2px;
    margin-left: 116px;
    margin-top: 10px;
}

.addText {
    height: 60px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #337DFF;
    letter-spacing: 0;
    line-height: 18px;
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
}

#lastStep {
    width: 66px;
    background: #FFFFFF;
    border: 1px solid rgba(217, 217, 217, 1);
    border-radius: 2px;
}

#createStep {
    width: 54px;
    background: #337DFF;
    border-radius: 2px;
}

/* 通用设置 */
.el-form-item--small {
    margin-bottom: 15px;
}

:deep().el-upload {
    width: 78px;
    height: 32px;
    background: #337DFF;
    border-radius: 2px;
}

.el-button--primary {
    background: #337DFF;
    border: none;
}


.el-input--small {
    width: 400px;
    height: 32px;
    border-radius: 2px;
}

:deep().el-input--small .el-input__wrapper {
    padding: 7px 28px 7px 10px;
}

:deep().el-form-item__label {
    padding-right: 20px;
}

:deep().el-form-item--small .el-form-item__label {
    width: 48px;
    height: 18px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
    text-align: right;
    line-height: 18px;
    font-weight: 400;
    margin-top: 7px;
}

:deep().el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before {
    margin-right: 2px;
}

.el-textarea {
    height: 90px;
}

:deep().el-textarea__inner {
    height: 90px;
    padding: 7px 12px 7px 10px;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
    letter-spacing: 0;
    line-height: 18px;
    font-weight: 400;
}

:deep().el-input__inner {
    font-family: PingFangSC-Regular;
    font-size: 12px;
    color: #333333;
    letter-spacing: 0;
    line-height: 18px;
    font-weight: 400;
}

.el-button--small {
    height: 32px;
}

.el-button+.el-button {
    margin-left: 10px;
}
</style>