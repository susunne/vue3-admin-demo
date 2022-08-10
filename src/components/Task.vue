<template>
    <div class="taskContainer">
        <el-card class="taskBox">
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
            <!-- 导入与下载 -->
            <el-row class="uploadFile" :gutter="20">
                <el-col :span="4">
                    <el-upload ref="upload" action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                        :limit="1" :on-exceed="handleExceed" :auto-upload="false">
                        <el-button class="button" type="primary">一键导入</el-button>
                    </el-upload>
                </el-col>
                <el-col :span="16">
                    <a href="./task.excel" download>下载模板.excel</a>&nbsp
                    <span>按照模板填写测评任务流可一键导入所有任务。</span>
                </el-col>
            </el-row>
            <!-- 任务1 -->
            <div class="taskOne">
                <span>任务1</span>
                <el-form ref="ruleFormRef" :model="taskForm" :rules="taskRules" label-width="120px" status-icon
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
            <!-- 任务n -->
            <div class="taskNth" v-for="(dynamicTaskForm, index) in taskList" :key="index">
                <div class="formContentBox">
                    <!-- 标题部分 -->
                    <div class="title">
                        <span>任务{{ index + 2 }}</span>
                        <Delete class="iconDelete" @click="taskList.splice(index, 1)" />
                    </div>
                    <!-- 表单内容 -->
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
            </div>
            <!-- 添加任务 -->
            <div class="addTask">
                <span>添加任务</span>
                <span class="spanDescription">此处为测评任务流程，有多少个任务流就添加多少个任务流</span>
                <div class="addSquare" @click='addNewTask'>
                    <span class="addText">+ 添加</span>
                </div>
            </div>
            <!-- 按钮 -->
            <div class="buttons">
                <el-button class="lastStep" @click="$router.push('/details')">上一步</el-button>
                <el-button class="createStep" type="primary" @click='taskCheck'>创建</el-button>
            </div>
        </el-card>
    </div>
</template>


<script setup lang="ts">
import { reactive, ref } from 'vue'
import { genFileId, UploadInstance, UploadProps, UploadRawFile, FormInstance, FormRules } from 'element-plus'
const upload = ref<UploadInstance>()
const handleExceed: UploadProps['onExceed'] = (files) => {
    upload.value!.clearFiles()
    const file = files[0] as UploadRawFile
    file.uid = genFileId()
    upload.value!.handleStart(file)
}
const ruleFormRef = ref<FormInstance>()
const ruleFormRef2 = ref<FormInstance>()
const taskForm = reactive({
    name: '',
    description: '',
    remark: '',
})
const taskRules = reactive({
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
const taskList = reactive([
    {
        name: '',
        description: '',
        remark: '',
    },
])
const addNewTask = function () {
    let statusType = true;
    if (
        taskForm.name == "" ||
        taskForm.description == "" ||
        taskForm.remark == ""
    ) {
        alert('请在完善信息后添加')
        statusType = false;
    }
    else {
        taskList.forEach((item) => {
            if (
                item.name == "" ||
                item.description == "" ||
                item.remark == ""
            ) {
                alert('请在完善信息后添加')
                statusType = false;
            }
        });
    }
    if (statusType) {
        taskList.push({
            name: dynamicTaskForm.name,
            description: dynamicTaskForm.description,
            remark: dynamicTaskForm.remark,
        })
    }
}
const taskCheck = function () {
    let status = true;
    if (
        taskForm.name == "" ||
        taskForm.description == "" ||
        taskForm.remark == ""
    ) {
        alert('请在完善信息后创建')
        status = false;
    }
    else {
        taskList.forEach((item) => {
            if (
                item.name == "" ||
                item.description == "" ||
                item.remark == ""
            ) {
                alert('请在完善信息后创建')
                status = false;
            }
        });
    }
    if (status) {
        alert('创建成功')
    }
}
</script>


<style  lang="scss">
.taskContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    overflow: auto;

    .taskBox {
        display: flex;
        justify-content: center;
        text-align: center;
        width: 1306px;
        background-color: #FDFDFD;
        border: 1px solid rgba(248, 248, 249, 1);
        box-shadow: inset 1px 1px 1px 0px rgba(255, 255, 255, 1);
        box-shadow: inset -1px -1px 1px 0px rgba(241, 244, 246, 1);
        box-shadow: 0px 5px 30px 1px rgba(231, 235, 241, 1);
        border-radius: 8px;
        margin-top: 21px;
        margin-bottom: 30px;
    }

    .steps {
        margin-top: 10px;

        .secondCircle {
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

        .firstCircle {
            display: inline-block;
            width: 30px;
            height: 30px;
            border-radius: 30px;
            text-align: center;
            border: 1.5px solid rgba(51, 125, 255, 1);

            span {
                line-height: 30px;
                font-family: PingFangSC-Regular;
                font-size: 14px;
                color: rgba(51, 125, 255, 1);
                letter-spacing: 0;
                font-weight: 400;
            }
        }
    }

    .uploadFile {
        display: flex;
        margin-top: 40px;
        justify-content: center;

        .el-button--primary {
            background: #337DFF;
            border: none;
        }

        .el-button>span {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #FFFFFF;
            letter-spacing: 0;
            line-height: 18px;
            font-weight: 400;
        }

        a {
            text-decoration: none;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #337DFF;
            line-height: 32px;
        }

        a+span {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #BBBBBB;
            line-height: 32px;
        }
    }

    .taskForm {
        margin-top: 20px;
    }

    .taskOne {
        width: 556px;
        height: 326px;
        background: #F9FAFC;
        border-radius: 8px;
        margin-top: 10px;
        overflow: hidden;

        >span {
            display: block;
            text-align: left;
            margin-top: 20px;
            margin-left: 20px;
            font-family: PingFangSC-Medium;
            font-size: 18px;
            color: #031129;
            letter-spacing: 0;
            line-height: 24px;
            font-weight: 500;
        }
    }

    .taskNth {
        width: 556px;
        height: 326px;
        background: #F9FAFC;
        border-radius: 8px;
        margin-top: 15px;
        overflow: hidden;

        .title {
            display: flex;
            margin-top: 20px;
            margin-left: 20px;

            >span {
                justify-content: flex-start;
                font-family: PingFangSC-Medium;
                font-size: 18px;
                color: #031129;
                letter-spacing: 0;
                line-height: 24px;
                font-weight: 500;
            }

            .iconDelete {
                color: #337DFF;
                font-size: 20px;
                width: 17px;
                height: 24px;
                margin-left: 450px;
                cursor: pointer;
            }
        }
    }

    .addTask {
        width: 556px;
        margin-top: 15px;
        padding-top: 20px;
        text-align: left;

        :first-child {
            margin-left: 20px;
            font-family: PingFangSC-Medium;
            font-size: 18px;
            color: #031129;
            letter-spacing: 0;
            line-height: 24px;
            font-weight: 500;
        }

        .spanDescription {
            display: inline-block;
            margin-left: 24px;
        }

        .addSquare {
            width: 400px;
            height: 60px;
            background: #FFFFFF;
            border: 1px dashed rgba(217, 217, 217, 1);
            border-radius: 2px;
            margin-left: 116px;
            margin-top: 10px;
            cursor: pointer;
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
    }

    .buttons {
        width: 400px;
        border-radius: 2px;
        text-align: left;
        margin-top: 30px;
        margin-left: 115px;

        .lastStep {
            background: #FFFFFF;
            border: 1px solid rgba(217, 217, 217, 1);

        }

        .createStep {
            background: #337DFF;
        }
    }

    /* 表单通用设置 */
    .el-form-item--small {
        margin-bottom: 15px;
    }

    .el-input--small {
        width: 400px;
        height: 32px;
        --el-input-border-radius: 2px;
    }

    .el-input--small .el-input__wrapper {
        padding: 7px 28px 7px 10px;
    }

    .el-input__inner {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #333333;
        letter-spacing: 0;
        line-height: 18px;
        font-weight: 400;
    }

    .el-form-item__label {
        padding-right: 20px;
    }

    .el-form-item--small .el-form-item__label {
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #333333;
        text-align: right;
        line-height: 18px;
        font-weight: 400;
        margin-top: 7px;
    }

    .el-form-item.is-required:not(.is-no-asterisk)>.el-form-item__label:before {
        margin-right: 2px;
    }

    .el-textarea {
        height: 90px;
    }

    .el-textarea__inner {
        height: 90px;
        padding: 7px 12px 7px 10px;
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
}
</style>