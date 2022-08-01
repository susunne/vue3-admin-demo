<template>
  <div class="manageContainer">
    <el-card class="boxCard">
      <el-table :data="manageData" ref="manageTableRef" height="440" stripe border
        :header-row-style="{ height: '40px' }" :row-style="{ height: '40px' }">
        <el-table-column prop="department" label="部门" width="250" />
        <el-table-column prop="name" label="专家姓名" width="250" />
        <el-table-column prop="phone" label="专家手机号" width="250" />
        <el-table-column prop="completion" label="参与完成度" width="250" />
        <el-table-column prop="handle" label="操作">
          <template #default="scope">
            <span @click="handleDelete(scope.$index, scope.row)" style="color:#337DFF">删除</span>
          </template>
        </el-table-column>
      </el-table>
      <div class="pagination">
        <el-pagination v-model:currentPage="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
          :pager-count="5" :small="true" layout="total, sizes, ->,prev, pager, next, jumper" :total="148"
          @size-change="handleSizeChange" @current-change="handleCurrentChange" />
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { userData } from './user'
const currentPage = ref(1)
const pageSize = ref(10)
const manageData = userData();
const handleDelete = (index: number, row: userData) => {
  console.log(index, row)
}
const handleSizeChange = (val: number) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val: number) => {
  console.log(`current page: ${val}`)
}
// interface User {
//   department: string
//   name: string
//   phone: string
//   completion: string
// }
</script>

<style  scoped>
.manageContainer {
  display: flex;
  background-color: #f3f5f8;
  width: 100%;
  height: 100%;
  /* align-items: center; */
  justify-content: center;
  font-family: PingFangSC-Regular;
  font-size: 12px;
  color: #333333;
  letter-spacing: 0;
  font-weight: 400;
}

.boxCard {
  width: 1306px;
  height: 541px;
  background: #FDFDFD;
  border: 1px solid rgba(248, 248, 249, 1);
  box-shadow: inset 1px 1px 1px 0px rgba(255, 255, 255, 1);
  box-shadow: inset -1px -1px 1px 0px rgba(241, 244, 246, 1);
  box-shadow: 0px 5px 30px 1px rgba(231, 235, 241, 1);
  border-radius: 8px;
  margin-top: 31px;
}

:deep().el-card__body {
  padding-top: 30px;
  padding-left: 30px;
  padding-right: 40px;
}

.el-table {
  --el-table-header-bg-color: #f4f5f7;
}

.pagination {
  margin-top: 20px;
}

:deep().el-table--small .el-table__cell {
  padding-left: 10px;
}
</style>