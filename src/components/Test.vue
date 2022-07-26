<template>
    <div class="taskContainer">
        <div class="taskBox">
            <li v-for="(dynamicTaskForm, index) in taskList" v-bind:key="index">
                <div class="taskTwo">
                    <div class="title">
                        <span>任务二</span>
                        <Delete id="iconDelete" @click="taskList.splice(index, 1)" />
                    </div>
                    <el-form ref="ruleFormRef" :model="dynamicTaskForm" :rules="dynamicTaskRules" label-width="120px"
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
            </li>
            <el-button type="primary" @click="addNewList">添加</el-button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'
const ruleFormRef = ref<FormInstance>()

taskList: [
   
]
nextTodoId: 4

addNewList() {
    this.taskList.unshift({
        name: this.name,
        description: this.description,
        remark: this.remark,
    })
}




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