<template>
    <div class="listContainer">
        <el-button class="createTask" type="primary" @click="$router.push('/details')">创建测评任务</el-button>
        <div class="listCard">
            <div class="firstCard">
                <!-- 产品名称 -->
                <div class="condition" id="product">
                    <span>产品名称</span>
                    <el-select v-model="value" class="m-2" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
                    </el-select>
                </div>
                <!-- 测评类型 -->
                <div class="conditions">
                    <span>测评类型</span>
                    <el-radio-group v-model="radio1">
                        <el-radio-button label="产品自测" />
                        <!-- <el-radio label="产品自测">产品自测</el-radio> -->
                    </el-radio-group>
                </div>
                <!-- 测试状态 -->
                <div class="conditions">
                    <span>测试状态</span>
                    <el-checkbox-group v-model="checkboxGroup1">
                        <el-checkbox-button v-for="state in states" :key="state" :label="state">{{
                                state
                        }}</el-checkbox-button>
                    </el-checkbox-group>
                </div>
                <!-- 测试维度 -->
                <div class="conditions">
                    <span>测试维度</span>
                    <el-checkbox-group v-model="checkboxGroup2">
                        <el-checkbox-button v-for="dimension in dimensions" :key="dimension" :label="dimension">{{
                                dimension
                        }}</el-checkbox-button>
                    </el-checkbox-group>
                </div>
                <div class="buttons">
                    <el-button class="inquire" type="primary">查询</el-button>
                    <el-button class="reset">重置</el-button>
                </div>
            </div>
            <div class="secondCard">
                <!-- 表格 -->
                <el-table class="listTable" :data="listData.slice((currentPage - 1) * pageSize, currentPage * pageSize)"
                    ref="listTableRef" height="440" stripe border :header-row-style="{ height: '40px' }"
                    :row-style="{ height: '40px' }" style="width:auto">
                    <el-table-column prop="productName" label="产品名称" width="150" />
                    <el-table-column prop="testType" label="测评类型" width="125" />
                    <el-table-column prop="testDimension" label="测评维度" width="100" />
                    <el-table-column prop="time" label="测评所需时间" width="125" />
                    <el-table-column prop="people" label="招募专家人数" width="125" />
                    <el-table-column prop="collectDate" label="招募起始时间" width="190" />
                    <el-table-column prop="testDate" label="测评起始时间" width="190" />
                    <el-table-column prop="status" label="测评状态" width="100" />
                    <el-table-column prop="handle" label="操作">
                        <template #default="scope">
                            <span @click="handle(scope.$index, scope.row)"
                                style="color:#337DFF">任务详情</span>&nbsp&nbsp&nbsp
                            <span @click="handle(scope.$index, scope.row)" style="color:#337DFF">编辑</span>
                        </template>
                    </el-table-column>
                </el-table>
                <!-- 分页 -->
                <div class="pagination">
                    <el-pagination v-model:currentPage.sync="currentPage" v-model:page-size="pageSize"
                        :page-sizes="[10, 20, 30, 40]" :pager-count="5" :small="true"
                        layout="total, sizes, ->,prev, pager, next, jumper" :total="listData.length"
                        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
                </div>
            </div>
        </div>
    </div>
</template>


<script setup lang="ts">
import { ref } from 'vue'
import { taskListData } from './list'
import { ElTable } from 'element-plus'
const currentPage = ref(1)
const pageSize = ref(10)
const listData = taskListData();
// const data = reactive({
//     listData: [],
//     currentPage: 1,
//     pageSize: 10
// })
const handle = (index: number, row: listData) => {
    console.log(index, row)
}
const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
    currentPage.value = val;
    console.log(currentPage.value);
    console.log(`current page: ${val}`)
}
const value = ref('');
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
]
const radio1 = ref('产品自测')
const states = ['全部', '招募中', '测评中', '已结束']
const checkboxGroup1 = ref(['招募中', '测评中'])
const dimensions = ['全部', '集团级', '部门级', '公司级']
const checkboxGroup2 = ref(['集团级', '部门级'])
const listTableRef = ref<InstanceType<typeof ElTable>>()
</script>


<style lang="scss" >
.listContainer {
    width: 100%;
    height: 100%;
    overflow: auto;
    display: flex;
    font-size: 12px;
    flex-direction: column;

    .createTask {
        width: 102px;
        height: 32px;
        margin-top: 21px;
        margin-left: 30px;
        background: #337DFF;
        border-radius: 2px;
        font-family: PingFangSC-Regular;
        font-size: 12px;
        color: #FFFFFF;
        letter-spacing: 0;
        line-height: 18px;
        font-weight: 400;
    }

    .listCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .firstCard {
            width: 1306px;
            height: 140px;
            background: #FDFDFD;
            border: 1px solid rgba(248, 248, 249, 1);
            box-shadow: inset 1px 1px 1px 0px rgba(255, 255, 255, 1);
            box-shadow: inset -1px -1px 1px 0px rgba(241, 244, 246, 1);
            box-shadow: 0px 5px 30px 1px rgba(231, 235, 241, 1);
            border-radius: 8px;
            margin-top: 20px;
        }

        .secondCard {
            width: 1306px;
            height: 538px;
            margin-top: 30px;
            background: #FDFDFD;
            border: 1px solid rgba(248, 248, 249, 1);
            box-shadow: inset 1px 1px 1px 0px rgba(255, 255, 255, 1);
            box-shadow: inset -1px -1px 1px 0px rgba(241, 244, 246, 1);
            box-shadow: 0px 5px 30px 1px rgba(231, 235, 241, 1);
            border-radius: 8px;
            margin-bottom: 30px;

            .listTable {
                margin-top: 30px;
                margin-left: 30px;
                margin-right: 30px;
                color: #333333;
                letter-spacing: 0;
                font-weight: 400;
            }

            .pagination {
                margin-top: 10px;
                margin-left: 30px;
                margin-right: 30px;
            }

            .el-table {
                --el-table-header-bg-color: #f4f5f7;
            }

            .el-table--small .el-table__cell {
                padding-left: 10px;
            }
        }
    }

    .condition {
        display: inline-block;
        margin-left: 30px;
        margin-top: 30px;
        margin-bottom: 16px;

        >span {

            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #2A3039;
            letter-spacing: 0;
            font-weight: 400;
        }

        .el-input--small {
            width: 200px;
            height: 32px;
            background: #FFFFFF;
            border-radius: 2px;
            padding-left: 20px;
        }

        .el-input__wrapper {
            padding-left: 10px;
        }

        .el-input--small .el-input__inner {
            font-family: PingFangSC-Regular;
        }
    }

    .conditions {
        display: inline-block;
        margin-left: 66px;
        vertical-align: middle;

        >span {
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #2A3039;
            letter-spacing: 0;
            font-weight: 400;
            vertical-align: middle;
        }

        >div {
            display: inline;
            padding-left: 20px;
        }

        .el-radio-button__inner {
            width: 78px;
            height: 32px;
            padding-top: 7px;
        }

        .el-checkbox-button__inner {
            width: 63.5px;
            height: 32px;
            padding-top: 7px;
        }
    }

    .buttons {
        display: inline;
        width: 54px;
        border-radius: 2px;
        font-family: MicrosoftYaHei;
        margin-left: 1158px;

        .inquire {
            background: #337DFF;
            color: #FFFFFF;
            height: 32px;
        }

        .reset {
            background: #FFFFFF;
            color: #555555;
            height: 32px;
        }
    }
}
</style>