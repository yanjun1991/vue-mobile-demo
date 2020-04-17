<template>
    <div class="credit">
      <div class="header">
         <van-nav-bar class="nav"
                     title="人员放款业绩查询"
                     left-arrow
                     @click-left="onClickLeft"
                     />
      </div>
      <div class="content">
        <van-dropdown-menu>
          <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>

        <el-table
          :data="tableData0"
          style="width: 100%;font-size: 18px;text-align: left;margin-left: 45px;">
          <el-table-column
            align="left"
            prop="fkje"
            style="color: #0000FF;"
            label="放款金额">
          </el-table-column>

        </el-table>

        <el-table
          :data="tableData1"
          style="width: 100%;font-size: 16px;margin-top: 10px;">
          <el-table-column
            align="left"
            prop="mpType"
            label="分期种类"
            width="150">
          </el-table-column>
          <el-table-column
            align="left"
            prop="count"
            label="笔数"
            width="150">
          </el-table-column>
        </el-table>

        <el-table
          :data="tableData2"
          style="width: 100%;font-size: 16px;margin-top: 10px;">
          <el-table-column
            align="center"
            prop="saleName"
            label="姓名"
            width="150">
          </el-table-column>
          <el-table-column
            align="center"
            prop="saleCode"
            label="资格代码"
            width="150">
          </el-table-column>
        </el-table>

         <van-row class="col-title">
            <van-col span="8">商户名称</van-col>
            <van-col span="8">客户姓名</van-col>
            <van-col span="8">分期金额/分期日期</van-col>
          </van-row>
          <div v-for="(item,index) in list" :key="index">
           <van-row class="col">
             <van-col class="col" span="8">{{item.merName}}</van-col>
             <van-col class="col" span="8">{{item.custName}}</van-col>
             <van-col class="col" span="8">{{item.mount}}</van-col>
           </van-row>
          </div>
          <!-- <van-cell title="分期种类" value="消费信贷业务" />
          <van-cell title="笔数" value="50笔" />
          <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          >
          <van-cell v-for="item in list" :key="item" :title="item" />
          </van-list> -->
      </div>
      <!-- footer-->
       <!-- <div class="footer"></div> -->
    </div>
</template>

<script>
  import Vue from 'vue'
  import { Table,TableColumn } from 'element-ui'
  Vue.use(Table);
  Vue.use(TableColumn);
 export default {
   data() {
     return {
       value1: 0,
       option1: [
         { text: '全部商品', value: 0 },
         { text: '新款商品', value: 1 },
         { text: '活动商品', value: 2 }
       ],
       tableData0: [{
          fkje: '5000000'
        }],
       tableData1: [{
          mpType: '恒生电子',
          count: '50笔'
        }],
        tableData2: [{
           saleName: '李华',
           saleCode: '2213020101'
         }],
        list: [{
           merName: '恒生电子',
           custName: '恒生电子',
           mount: '500000'
         }, {
           merName: '好分期',
           custName: '好分期',
           mount: '10000'
         }, {
           merName: '恒生电子',
           custName: '梨花',
           mount: '10000'
         }, {
           merName: 'xx电子',
           custName: 'xx电子',
           mount: '500000'
         }, {
           merName: 'xx电子',
           custName: 'xx电子',
           mount: '500000'
         }]
     }
   },
   methods:{
     onClickLeft:function(){
          this.$router.go(-1);//返回上一页
      }
   }
 };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .col-title {
    font-size: 18px;
    font-weight: bolder;
    margin-top: 15px;
  }
  .col {
    font-size: 16px;
    margin-bottom: 15px;
  }

</style>
