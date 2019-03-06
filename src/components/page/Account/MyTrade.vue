<template>
  <div>
    <section class="account_main">
      <div class="mytrade_right">
        <p class="mt_title">我的交易</p>
        <p class="mt_pass"></p>
        <div class="mt_belt">我的收益报告</div>
        <div class="mt_col mt_col_1">
          <p class="col_title">借款招标中（笔）</p>
          <p id="tbz" class="col_num"></p>
        </div>
        <div class="mt_col mt_col_2">
          <p class="col_title">满标收益中（笔）</p>
          <p id="hkz" class="col_num"></p>
        </div>
        <div class="mt_col mt_col_3">
          <p class="col_title">还款已结清（笔）</p>
          <p id="yjq" class="col_num"></p>
        </div>
        <div class="mt_col mt_col_4">
          <p class="col_title">即将还款（元）</p>
          <p id="forthcoming" class="col_num"></p>
        </div>
        <div class="mt_col mt_col_5">
          <p class="col_title">累计还款（元）</p>
          <p id="total_money" class="col_num"></p>
        </div>
        <div class="nav nav_1 selected" data-type="3">
          招标中
        </div>
        <div class="nav nav_2" data-type="1">
          收益中
        </div>
        <div class="nav nav_2" data-type="2">
          已结清
        </div>
        <div class="bjui-pageContent clear clearfix">
          <div class="form-group d_t_dater">
            <label class="col-sm-3 control-label"></label>
            <div class="input-group">
              <button type="button" class="btn btn-default" id="daterange-btn">
                            <span>
                                <i class="icon iconfont icon-calendar1"></i> 日期选择
                            </span>
                <i class="icon iconfont icon-danxian-youjiantou-copy"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="trade_list clear clearfix">
        </div>
        <div class="no_data" style="display: none;">
          <img src="../../../assets/img/Common/zwt.png">
        </div>
      </div>
      <!-- 查看弹框 -->
      <div id="tk_detail" class="tk" style="display:none;">
        <div class="tk_box">
          <div id="div_repay" class="tk_con">
            <div class="div_fixed_top" style="display:none;position:fixed;top:0;width:430px;">
              <p style="display:inline-block;width:35px;margin-left:4px;">期数</p>
              <p style="display:inline-block;width:120px;">协议约定还款日</p>
              <p style="display:inline-block;width:104px;">实际还款日</p>
              <p style="display:inline-block;width:68px;">金额（元）</p>
              <p style="display:inline-block;width:76px;">还款状态</p>
            </div>
            <span class="close"></span>
            <h2>协议约定还款列表</h2>
            <table id="table_repay" border="0" cellpadding="0" cellspacing="0">
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "MyTrade"
  }
</script>

<style scoped>
  body {
    font-family: "Microsoft YaHei";
  }

  .mytrade_right {
    width: 940px;
    min-height: 1020px;
    background: #ffffff;
    float: left;
  }

  .mt_title {
    width: 72px;
    height: 18px;
    font-size: 18px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin: 60px 0 0 50px;
    display: inline-block;
  }

  .mt_pass {
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    display: inline-block;
    margin: 0 0 0 600px;
  }

  .mt_pass b {
    color: #FB4251;
  }

  .mt_belt {
    width: 109px;
    height: 34px;
    background: url("../../../assets/img/Account/myprofit_belt.png") no-repeat;
    display: inline-block;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 24px;
    text-align: center;
    position: relative;
    left: 56px;
  }

  .mt_belt:hover {
    cursor: pointer;
  }

  .mt_col {
    width: 160px;
    height: 90px;
    background: rgba(246, 251, 253, 1);
    float: left;
    display: inline-block;
    margin: 40px 10px 0 0;
  }

  .mt_col_1 {
    margin: 40px 10px 0 50px;
  }

  .col_title {
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    margin: 20px 0 0 36px;
  }

  .col_num {
    font-size: 18px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin: 20px 0 0 0;
    text-align: center;
  }

  .nav {
    width: 120px;
    height: 50px;
    background: rgba(255, 255, 255, 1);
    float: left;
    margin: 40px 0 0 0;
    border-bottom: 1px solid rgba(238, 238, 238, 1);
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    text-align: center;
    line-height: 50px;
    z-index: 99;
  }

  .nav:hover {
    cursor: pointer;
  }

  .nav_1 {
    margin: 40px 0 0 50px;
  }

  .selected {
    border-top: 3px solid rgba(251, 66, 81, 1);
    border-right: 1px solid rgba(238, 238, 238, 1);
    border-bottom: 0;
    border-left: 1px solid rgba(238, 238, 238, 1);
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(251, 66, 81, 1);
    height: 48px;
  }

  .nav_3 {
    width: 600px;
    border-bottom: 1px solid rgba(238, 238, 238, 1);
  }

  .nav_3:hover {
    cursor: default;
  }

  .mt_div_date {
    clear: both;
    margin: 240px 0 0 50px;
  }

  .mt_div_date .datetime {
    width: 50px;
    height: 26px;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    display: inline-block;
    margin: 0 20px 0 0;
    text-align: center;
    line-height: 26px;
    padding: 0 4px;
  }

  .mt_div_date p:hover {
    cursor: pointer;
  }

  /*.active {
      background: rgba(251, 66, 81, 1);
      border-radius: 4px;
      color: #ffffff !important;
  }*/

  .select_date {
    width: 156px;
    height: 32px;
    background: rgba(255, 255, 255, 1);
    border: 1px solid rgba(238, 238, 238, 1);
    border-radius: 4px;
    padding: 0 0 0 4px;
  }

  #datefrom {
    margin: 0 0 0 168px;
  }

  .calendar_img {
    position: relative;
    top: 0;
    left: -24px;
  }

  .calendar_img:hover {
    cursor: pointer;
  }

  .table_head {
    width: 810px;
    height: 40px;
    background: linear-gradient(0deg, rgba(248, 248, 248, 1) 0%, rgba(255, 255, 255, 1) 100%);
    margin: 40px 0 0 50px;
    padding: 0 0 0 28px;
    border-top: 1px solid #cccccc;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
  }

  .table_head div {
    display: inline-block;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 500;
    color: #666666;
    line-height: 40px;
  }

  .table_head div:nth-child(1) {
    width: 80px;
  }

  .table_head div:nth-child(2) {
    width: 288px;
  }

  .table_head div:nth-child(3) {
    width: 44px;
  }

  .table_head div:nth-child(4) {
    width: 60px;
  }

  .table_head div:nth-child(5) {
    width: 100px;
  }

  .table_head div:nth-child(6) {
    width: 80px;
  }

  .table_head div:nth-child(7) {
    width: 72px;
    text-align: center;
  }

  .table_head div:nth-child(8) {
    width: 60px;
    text-align: center;
  }

  .table_head div:nth-child(9) {
    width: 84px;
    text-align: center;
  }

  .table_row_odd {
    width: 810px;
    height: 40px;
    background: #ffffff;
    margin: 0px 0 0 50px;
    padding: 0 0 0 28px;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
  }

  .table_row_odd div {
    display: inline-block;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 500;
    color: #999999;
    line-height: 40px;
    height: 40px;
    overflow: hidden;
  }

  .table_row_odd div:nth-child(1) {
    width: 80px;
  }

  .table_row_odd div:nth-child(2) {
    width: 288px;
  }

  .table_row_odd div:nth-child(3) {
    width: 44px;
  }

  .table_row_odd div:nth-child(4) {
    width: 60px;
  }

  .table_row_odd div:nth-child(5) {
    width: 100px;
  }

  .table_row_odd div:nth-child(6) {
    width: 80px;
  }

  .table_row_odd div:nth-child(7) {
    width: 72px;
    text-align: center;
  }

  .table_row_odd div:nth-child(8) {
    width: 60px;
    text-align: center;
  }

  .table_row_odd div:nth-child(9) {
    width: 84px;
    text-align: center;
  }

  .table_row_even {
    width: 810px;
    height: 40px;
    background: rgba(246, 251, 253, 1);
    margin: 0px 0 0 50px;
    padding: 0 0 0 28px;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
  }

  .table_row_even div {
    display: inline-block;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 500;
    color: #999999;
    line-height: 40px;
    height: 40px;
    overflow: hidden;
  }

  .table_row_even div:nth-child(1) {
    width: 80px;
  }

  .table_row_even div:nth-child(2) {
    width: 288px;
  }

  .table_row_even div:nth-child(3) {
    width: 44px;
  }

  .table_row_even div:nth-child(4) {
    width: 60px;
  }

  .table_row_even div:nth-child(5) {
    width: 100px;
  }

  .table_row_even div:nth-child(6) {
    width: 80px;
  }

  .table_row_even div:nth-child(7) {
    width: 72px;
    text-align: center;
  }

  .table_row_even div:nth-child(8) {
    width: 60px;
    text-align: center;
  }

  .table_row_even div:nth-child(9) {
    width: 84px;
    text-align: center;
  }

  .last_row {
    border-bottom: 1px solid #cccccc;
  }

  div a {
    color: #4AA1FA;
  }

  .no_data {
    text-align: center;
  }

  .no_data {
    margin: 100px 0 0 0;
  }

  .input-group {
    position: relative;
    top: 20px;
    left: 48px;
  }

  /*弹框*/
  .tk {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 150;
  }

  .tk .tk_box {
    width: 500px;
    /*height:300px;*/
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -250px;
    transform: translateY(-50%);
    z-index: 110;
  }

  .tk .tk_box .tk_con {
    width: 440px;
    padding: 30px;
    background-color: #ffffff;
  }

  .tk .tk_box .tk_con h2 {
    font-size: 16px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    text-align: center;
    margin-bottom: 30px;
    clear: both;
  }

  .tk .tk_box .tk_con table {
    width: 100%;
  }

  .tk .tk_box .tk_con table tr th {
    height: 30px;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    background-color: #F8F8F8;
  }

  .div_fixed_top {
    height: 25px;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    background-color: #F8F8F8;
    padding-top: 5px;
  }

  .div_fixed_top > p {
    text-align: center;
  }

  .tk .tk_box .tk_con table tr td {
    height: 30px;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    text-align: center;
  }

  .tk .tk_box .tk_con table tr td.orange {
    color: #FF9600;
  }

  .tk .tk_box .tk_con .close {
    color: #666666;
    line-height: 20px;
    text-align: center;
    height: 20px;
    width: 20px;
    font-size: 18px;
    padding: 1px;
    cursor: pointer;
    float: right;
  }

  .tk .tk_box .tk_con .close::before {
    content: "\2716";
  }

  /*转让*/
  .tk .debtBox {
    width: 800px;
    margin-left: -400px;
  }

  .tk .debtBox .tk_con {
    width: 740px;
  }

  .tk_con {
    height: 400px;
    overflow-y: scroll;
  }

  .tk_con::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /*chrome的滚动条样式*/
  .tk_con::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 4px;
  }

  #table_repay th {
    text-align: center;
  }

  /*特殊处理*/
  .rank {
    top: 0;
  }

  /*招标中*/
  .table_head_lending {
    width: 810px;
    height: 40px;
    background: linear-gradient(0deg, rgba(248, 248, 248, 1) 0%, rgba(255, 255, 255, 1) 100%);
    margin: 40px 0 0 50px;
    padding: 0 0 0 28px;
    border-top: 1px solid #cccccc;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
  }

  .table_head_lending div {
    display: inline-block;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 500;
    color: #666666;
    line-height: 40px;
  }

  .table_head_lending div:nth-child(1) {
    width: 280px;
  }

  .table_head_lending div:nth-child(2) {
    width: 80px;
  }

  .table_head_lending div:nth-child(3) {
    width: 60px;
  }

  .table_head_lending div:nth-child(4) {
    width: 100px;
  }

  .table_head_lending div:nth-child(5) {
    width: 100px;
  }

  .table_head_lending div:nth-child(6) {
    width: 80px;
  }

  .table_head_lending div:nth-child(7) {
    width: 72px;
    text-align: center;
  }

  .table_lending_odd {
    width: 810px;
    height: 40px;
    background: #ffffff;
    margin: 0px 0 0 50px;
    padding: 0 0 0 28px;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
  }

  .table_lending_odd div {
    display: inline-block;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 500;
    color: #999999;
    line-height: 40px;
    height: 40px;
    overflow: hidden;
  }

  .table_lending_odd div:nth-child(1) {
    width: 280px;
  }

  .table_lending_odd div:nth-child(2) {
    width: 80px;
  }

  .table_lending_odd div:nth-child(3) {
    width: 60px;
  }

  .table_lending_odd div:nth-child(4) {
    width: 100px;
  }

  .table_lending_odd div:nth-child(5) {
    width: 100px;
  }

  .table_lending_odd div:nth-child(6) {
    width: 80px;
  }

  .table_lending_odd div:nth-child(7) {
    width: 72px;
    text-align: center;
  }

  .table_lending_even {
    width: 810px;
    height: 40px;
    background: rgba(246, 251, 253, 1);
    margin: 0px 0 0 50px;
    padding: 0 0 0 28px;
    border-left: 1px solid #cccccc;
    border-right: 1px solid #cccccc;
  }

  .table_lending_even div {
    display: inline-block;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 500;
    color: #999999;
    line-height: 40px;
    height: 40px;
    overflow: hidden;
  }

  .table_lending_even div:nth-child(1) {
    width: 280px;
  }

  .table_lending_even div:nth-child(2) {
    width: 80px;
  }

  .table_lending_even div:nth-child(3) {
    width: 60px;
  }

  .table_lending_even div:nth-child(4) {
    width: 100px;
  }

  .table_lending_even div:nth-child(5) {
    width: 100px;
  }

  .table_lending_even div:nth-child(6) {
    width: 80px;
  }

  .table_lending_even div:nth-child(7) {
    width: 72px;
    text-align: center;
  }

  .hover_red:hover {
    color: #fb4251;
  }

  .trans {
    background: #fed3cf;
    color: #fb4251;
    padding: 2px 4px;
    margin-right: 4px;
    border-radius: 4px;
  }

  #div_repay > #no_data {
    margin-top: 72px;
  }
</style>
