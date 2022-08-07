<template>
    <div class="listContainer">
        <!-- <el-button class="createTask" type="primary">创建测评任务</el-button> -->
        <div class="firstCard">

        </div>
        <div class="secondCard">

        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.listContainer {
    display: flex;
    background-color: #f3f5f8;
    font-family: PingFangSC-Regular;
    font-size: 12px;
    justify-content: center;
    height:100%;

    // .createTask {
    //     width: 102px;
    //     height: 32px;
    //     margin-top: 21px;
    //     margin-left: 30px;
    //     background: #337DFF;
    //     border-radius: 2px;
    //     font-family: PingFangSC-Regular;
    //     font-size: 12px;
    //     color: #FFFFFF;
    //     letter-spacing: 0;
    //     line-height: 18px;
    //     font-weight: 400;
    // }

    .firstCard {
        width: 1306px;
        height:140px;
        background: #FDFDFD;
        border: 1px solid rgba(248, 248, 249, 1);
        box-shadow: inset 1px 1px 1px 0px rgba(255, 255, 255, 1);
        box-shadow: inset -1px -1px 1px 0px rgba(241, 244, 246, 1);
        box-shadow: 0px 5px 30px 1px rgba(231, 235, 241, 1);
        border-radius: 8px;
        margin-top: 73px;
    }

    .secondCard {
        width: 1306px;
        margin-top: 30px;
        background: #FDFDFD;
        border: 1px solid rgba(248, 248, 249, 1);
        box-shadow: inset 1px 1px 1px 0px rgba(255, 255, 255, 1);
        box-shadow: inset -1px -1px 1px 0px rgba(241, 244, 246, 1);
        box-shadow: 0px 5px 30px 1px rgba(231, 235, 241, 1);
        border-radius: 8px;
    }
}
</style>