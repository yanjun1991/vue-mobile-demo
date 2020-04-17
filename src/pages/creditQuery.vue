<template>
  <div class="creditQuery">
    <div class="header">
       <van-nav-bar class="nav"
                   title="人员放款业绩查询"
                   left-arrow
                   @click-left="onClickLeft"
                   />
    </div>
    <van-dropdown-menu>
      <van-dropdown-item v-model="value" :options="option" />
    </van-dropdown-menu>
    <div style="width: 100%;margin-top: 10px;">
       <p style="font-size: 16px;font-weight: bolder;text-align: left;"><span style="color: red;">*</span>分期种类</p>
      <van-row gutter="20" style="font-size: 16px;">
        <van-col span="8">消费信贷业务</van-col>
        <van-col span="8">汽车分期</van-col>
        <van-col span="8">车位分期</van-col>
      </van-row>
      <van-row gutter="20" style="font-size: 16px;margin-top: 20px;">
        <van-col span="8">装修分期</van-col>
        <van-col span="8">随心分分期</van-col>
        <van-col span="8">契税分期</van-col>
      </van-row>
      <van-row gutter="20" style="font-size: 16px;margin-top: 20px;">
        <van-col span="8">车牌分期</van-col>
        <van-col span="8">其他分期</van-col>
      </van-row>
      <p style="font-size: 16px;font-weight: bolder;text-align: left;"><span style="color: red;">*</span>时间区间</p>
      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="startDate"
        label="开始日期"
        placeholder="点击选择时间"
       @click="showpopup"
      />
      <van-field
        readonly
        clickable
        name="datetimePicker"
        :value="endDate"
        label="结束日期"
        placeholder="点击选择时间"
        @click="showpopup1"
      />

      <van-popup v-model="show" position="bottom">
        <van-datetime-picker
           type="date"
           v-model="currentDate"
          @confirm="onConfirm"
          @cancel="show = false"
        />
      </van-popup>
      <van-popup v-model="show1" position="bottom">
        <van-datetime-picker
           type="date"
           v-model="currentDate1"
          @confirm="onConfirm1"
          @cancel="show1 = false"
        />
      </van-popup>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from '../components/Footer'
  import Vue from 'vue';
  import { DropdownMenu, DropdownItem, Col, Row, DatetimePicker,Field, Popup } from 'vant';

  Vue.use(DropdownMenu);
  Vue.use(DropdownItem);
  Vue.use(Col);
  Vue.use(Row);
  Vue.use(DatetimePicker);
  Vue.use(Field);
  Vue.use(Popup);
  export default {
    data() {
      return {
        footerActive:2,
        value: 'a',
        option: [
            { text: '查询条件', value: 'a' },
            { text: '好评排序', value: 'b' },
            { text: '销量排序', value: 'c' },
        ],
        startDate:'',
        endDate:'',
        show:false,
        show1:false,
        currentDate:new Date(),
        currentDate1:new Date()
      };
    },
    components:{Footer},
    methods:{
      onClickLeft:function(){
           this.$router.go(-1);//返回上一页
       },
        showpopup:function(){
             if(!this.show){
                 this.show = true;
             }else{
                 this.show = false;
             }
         },
         showpopup1:function(){
              if(!this.show1){
                  this.show1 = true;
              }else{
                  this.show1 = false;
              }
          },
       onConfirm(date) {
           const timeString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
           this.startDate = timeString;
           this.show = false;
         },
         onConfirm1(date) {
             const timeString = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
             this.endDate = timeString;
             this.show1 = false;
           }
    }
  };
</script>

<style>
</style>
