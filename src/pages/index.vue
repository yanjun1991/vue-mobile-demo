<template>
  <div>
    <!--吸顶 固定上方不滑动-->
    <van-sticky>
      <!-- 首页轮播图-->
       <van-swipe :autoplay="3000" height="150px">
         <van-swipe-item v-for="(image, index) in images" :key="index">
            <img class="swipe-img" v-lazy="image" />
         </van-swipe-item>
       </van-swipe>
       <!-- 按钮列表-->
      <van-grid :border="false" :column-num="4">
        <van-grid-item v-for="(item,index) in btnList" :key="index">
          <router-link :to="item.url">
            <img class="icon-img" :src="item.imageUrl"  href="/creditQuery"/>
            <div class="icon-text">{{item.text}}</div>
          </router-link>


        </van-grid-item>
      </van-grid>
      <!-- tab标签页-->
      <van-tabs v-model="active">
        <van-tab title="个人发卡业绩" name="a">个人发卡业绩</van-tab>
        <van-tab title="个人消贷业绩" name="b">个人消费信贷业绩</van-tab>
      </van-tabs>
    </van-sticky>
   <br />
   <!-- 消息通知区域-->
   <div class="msgDiv">
     <h1>
       <label>考试通知</label>
       <a>更多</a>
     </h1>
     <van-row class="msgRow" type="flex" justify="space-between" v-for="(item,index) in msgList" :key="index">
       <van-col class="msg">{{item.msg}}</van-col>
       <van-col class="mdate">{{item.mdate}}</van-col>
     </van-row>
   </div>
   <!-- 底部-->
   <Footer></Footer>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {Swipe, SwipeItem, Lazyload} from 'vant'
  import Footer from '../components/Footer'
  Vue.use(Swipe);
  Vue.use(SwipeItem);
  Vue.use(Lazyload);
  export default {
    data() {
      return {
        images: [
           'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/39343/4/1551/48272/5cbd71f4E329401dc/579b33f530a1402d.jpg!cr_1125x549_0_72!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34869/14/3703/113972/5cb953c1E4294d8ea/b73c538710f5c462.jpg!cr_1125x549_0_72!q70.jpg.dpg',
          'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34869/14/3703/113972/5cb953c1E4294d8ea/b73c538710f5c462.jpg!cr_1125x549_0_72!q70.jpg.dpg'
        ],
        btnList:[
          {
            url:'',
            imageUrl:require('../assets/images/brand1.png'),
            text:'新户查询'
          },
          {
            url:'/queryCredit',
            imageUrl:require('../assets/images/brand2.png'),
            text:'分期业绩'
          },
          {
            url:'',
            imageUrl:require('../assets/images/brand3.png'),
            text:'发卡业绩'
          },
          {
            url:'',
            imageUrl:require('../assets/images/brand4.png'),
            text:'内部招聘'
          },
          {
            url:'',
            imageUrl:require('../assets/images/brand5.png'),
            text:'我的考试'
          },
          {
            url:'',
            imageUrl:require('../assets/images/brand6.png'),
            text:"我的问卷"
          },
          {
            url:'',
            imageUrl:require('../assets/images/brand7.png'),
            text:'工作日志'
          },
          {
            url:'',
            imageUrl:require('../assets/images/brand8.png'),
            text:'更多'
          }
        ],
        active: 1,
        msgList:[
          {
            msg:"2020年5月30号将进行兴业信用卡客户经理专业知识考试",
            mdate:'2020-04-10'
          },
          {
            msg:"2020新员工入职培训考试",
            mdate:'2020-04-16'
          },
          {
            msg:"2020年5月30号将进行兴业信用卡客户经理专业知识考试",
            mdate:'2020-04-10'
          },
          {
            msg:"2020新员工入职培训考试",
            mdate:'2020-04-16'
          },
          {
            msg:"2020年5月30号将进行兴业信用卡客户经理专业知识考试",
            mdate:'2020-04-10'
          },
          {
            msg:"2020新员工入职培训考试",
            mdate:'2020-04-16'
          }
        ]
      };
    },
    components:{Footer}
  };
</script>

<style>
  .van-swipe {
      text-align: center;
      background-color: white;
      transform: translateZ(0);
  }
  .swipe-img{
    background: no-repeat;
    height: 4.5rem;
    width: 100%;
  }
  .icon-img{
    height: 1.5rem;
    width: 1.5rem;
  }
  .icon-text{
    height: 20px;
    line-height: 20px;
    width: 100%;
    font-size:12px;
    color: #000000;
  }
  .msgDiv{
    margin: 0.2rem 0;
  }
  .msgDiv h1{
    margin: 0 0.2rem;
    display: block;
    height: 0.9375rem;
    line-height: 0.9375rem;
  }
  .msgDiv h1 label{
    float: left;
    font-size: 0.5rem;
   /* font-weight: bolder; */
  }
  .msgDiv h1 a{
    float: right;
    font-size: 0.35rem;
  }
  .msgRow {
    font-size: 0.4rem;
  }
  .msgRow .msg{
    margin: 0.2rem 0  0 0.2rem;
    width: 60%;
    text-align: left;
  }
  .msgRow .mdate{
    margin: 0.2rem 0.1rem 0.2rem 0;
  }
</style>
