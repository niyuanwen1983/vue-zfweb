<template>
  <div>
    <Header></Header>
    <FixedHeader></FixedHeader>
    <section class="account_main">
      <div class="myaccount_left">
        <div class="myaccount_summary">
          <img class="headimg"
               src="https://fileserver.zhifudai.com/ErpAttachedPic/Upload/avatar/thumb/20181227/3a40320f-287d-4ae2-9551-2a34f75d3248">
          <p class="customer_name">倪先生</p>
          <img class="rank" src="../../../assets/img/Invest/icn_pt.png">
          <div class="icons">
            <img id="ac_email" src="../../../assets/img/Account/mail_bind.png" title="您已通过邮箱认证。点击查看详情">
            <img id="ac_realname" src="../../../assets/img/Account/idcard_bind.png" title="您已通过实名认证。点击查看详情">
            <img src="../../../assets/img/Account/mobile_bind.png" title="您已绑定手机。点击查看详情">
            <img id="ac_card" src="../../../assets/img/Account/bankcard_bind.png" title="您已绑定银行卡。点击查看详情">
          </div>
        </div>
        <div class="myaccount_list">
          <ul>
            <li class="li_selected"><a href="myaccount">账户总览</a></li>
            <li><a href="enterpriseAuth">认证中心</a></li>
            <li><a href="borrow">存管户授权</a></li>
            <li><a class="ac_0001_nav_message red_dot" href="messageCenter">消息中心</a></li>
            <li class="user_attr_hidden"><a href="myTrade">我的交易</a></li>
            <li class="user_attr_hidden"><a href="myProfit">我的收益</a></li>
            <li><a href="fundDetails">资金明细</a></li>
            <li class="user_attr_hidden"><a href="autoSign">自动投标</a></li>
            <li class="user_attr_hidden"><a href="debtTransfer">债权转让</a></li>
            <li class="user_attr_hidden"><a href="myRedpacket">我的红包</a></li>
            <li class="user_attr_hidden"><a href="cardCenter">卡券中心</a></li>
            <li><a href="myInvitation">邀请专区</a></li>
            <li class="user_attr_hidden"><a href="myTask">我的任务</a></li>
            <li class="user_attr_hidden"><a href="integralMall">积分商城</a></li>
            <li class="user_attr_hidden"><a href="welfareCenter">福利中心</a></li>
          </ul>
        </div>
      </div>
      <div id="div_iframe_container" class="change_headimg">
        <p class="headimg_title">设置头像</p>
        <div class="select_img">
          <div class="btn_select">选择照片</div>
          <form action="/Account/uploadImage" method="post" enctype="multipart/form-data" target="test-ifr"><input
            type="file" id="logo" name="image" onchange="Account_common.logoShow(this.value)" style="display:none;">
            <p>部分IE9浏览器不支持头像预览</p><input type="submit" id="ie9submit" style="display:none;">上传图片
          </form>
          <input type="file" class="file_select" name="image" accept="image/jpeg, image/png" style="display:none;">
          <p>1、只支持JPG、PNG类型的图片上传。</p>
          <p>2、图片不能大于2MB。</p>
          <p id="p_check" style="display:none;color:rgba(251, 66, 81, 1);"></p>
        </div>
        <div class="preview_img">
          <p>头像预览</p>
          <img id="showLogo" class="preview_headimg" src="../../../assets/img/Account/head.png">
        </div>
        <div id="uploadOk" class="btn_ok">确定</div>
        <p class="p_upload_loading">正在上传中，请稍候......</p>
        <span class="img_close">×</span>
      </div>
      <div class="myaccount_right">
        <router-view>

        </router-view>
      </div>
    </section>
    <!--<Footer></Footer>-->
  </div>
</template>

<script>
  //import {getIndex} from "../../api";
  import * as getApi from "../../../api";
  import loading from "../../common/loading/Loading"
  import Header from "../../common/Header"
  import FixedHeader from "../../common/FixedHeader"
  import Footer from "../../common/Footer"

  export default {
    name: "MyAccount",
    components: {
      FixedHeader,
      Header,
      Footer,
      loading
    }
  }
</script>

<style scoped>
  body {
    background: #f5f5f5;
    color: #333333;
    font-family: "Microsoft YaHei";
  }

  a {
    color: #4AA1FA;
  }

  div {
    color: #333333;
  }

  .clearfix:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
  }

  .clearfix {
    zoom: 1;
  }

  .clear {
    clear: both;
  }

  .account_main {
    width: 1200px;
    margin: 110px auto 100px auto;
    /*min-height: 1088px;
    overflow: hidden;
    padding-bottom: 64px;*/
    -ms-flex: 1 0 auto;
    -webkit-flex: 1 0 auto;
    flex: 1 0 auto;
  }

  .myaccount_left {
    width: 250px;
    min-height: 1020px;
    margin: 0 10px 100px 0;
    background: #ffffff;
    float: left;
  }

  .myaccount_summary {
    width: 250px;
    height: 250px;
  }

  .headimg {
    width: 72px;
    height: 72px;
    margin: 50px 0 0 90px;
    border-radius: 50%;
  }

  .headimg:hover {
    cursor: pointer;
  }

  .customer_name {
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin: 18px 0 0 0;
    display: inline-block;
    width: 144px;
    text-align: right;
  }

  .rank {
    position: relative;
    top: 4px;
    left: 12px;
  }

  .icons {
    width: 164px;
    margin: 16px auto 0 auto;
  }

  .icons img {
    margin: 0 6px 0 0;
  }

  .icons > img:hover {
    cursor: pointer;
  }

  .myaccount_list ul li {
    width: 250px;
    height: 56px;
    text-align: left;
  }

  .myaccount_list ul li:hover a {
    color: rgba(251, 66, 81, 1);
  }

  .myaccount_list ul li a {
    font-size: 16px;
    font-family: "SourceHanSerifCN-Regular";
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    position: relative;
    top: 16px;
    left: 60px;
    text-decoration: none;
  }

  .myaccount_list ul li a:hover {
    cursor: pointer;
  }

  .li_selected {
    border: 1px solid rgba(238, 238, 238, 1);
  }

  .li_selected:before {
    content: url("../../../assets/img/Account/selected.png");
    width: 6px;
    height: 56px;
  }

  .li_selected a {
    width: 250px;
    color: rgba(251, 66, 81, 1) !important;
    top: -22px !important;
    left: 54px !important;
  }

  /*更换头像*/
  .change_headimg {
    width: 600px;
    height: 400px;
    position: absolute;
    background: #ffffff;
    border-radius: 4px;
    margin: 0 auto;
    z-index: 100;
    display: none;
  }

  .headimg_title {
    font-size: 16px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    line-height: 24px;
    text-align: center;
    margin: 30px 0 0 0;
  }

  .select_img {
    width: 350px;
    height: 240px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(238, 238, 238, 1);
    border-radius: 4px;
    margin: 18px 0 0 20px;
    float: left;
    display: inline-block;
  }

  .select_img p {
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(204, 204, 204, 1);
    line-height: 24px;
    margin: 0 0 0 72px;
  }

  .btn_select {
    width: 120px;
    height: 40px;
    background: rgba(251, 66, 81, 1);
    border-radius: 4px;
    margin: 80px 0 28px 116px;
    clear: both;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
    text-align: center;
  }

  .btn_select:hover {
    cursor: pointer;
  }

  .btn_select:before {
    content: url("../../../assets/img/Account/select_img.png");
    position: relative;
    top: 4px;
    right: 12px;
  }

  .preview_img {
    width: 200px;
    height: 240px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(238, 238, 238, 1);
    border-radius: 4px;
    float: left;
    margin: 18px 0 0 10px;
  }

  .preview_img p {
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    line-height: 24px;
    margin: 20px 0 0 20px;
  }

  .preview_headimg {
    width: 90px !important;
    height: 90px !important;
    margin: 60px 0 0 56px;
    border-radius: 50%;
  }

  .btn_ok {
    width: 160px;
    height: 40px;
    background: rgba(251, 66, 81, 1);
    border-radius: 4px;
    position: relative;
    top: 26px;
    left: 220px;
    clear: both;
    font-size: 16px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
    text-align: center;
  }

  .btn_ok:hover {
    cursor: pointer;
  }

  .change_headimg .img_close {
    position: absolute;
    top: 4px;
    right: 8px;
    color: #333333;
  }

  .change_headimg .img_close:hover {
    cursor: pointer;
  }

  .p_upload_loading {
    clear: both;
    color: black;
    text-align: center;
    position: relative;
    top: 26px;
    display: none;
  }

  #logo {
    margin: 100px 0 0 60px;
  }
</style>
