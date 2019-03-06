<template>
  <div>
    <section class="account_main">
      <div class="myprofit_right">
        <p class="mp_title">我的收益</p>

        <div class="mt_col mt_col_1">
          <p class="col_title">当月平台最高收益（元）</p>
          <p class="col_num">0</p>
        </div>
        <div class="mt_col mt_col_2">
          <p class="col_title">当月投资金额（元）</p>
          <p class="col_num">0</p>
        </div>
        <div class="mt_col mt_col_3">
          <p class="col_title">当月投资收益（元）</p>
          <p class="col_num">0</p>
        </div>
        <div class="mt_col mt_col_4">
          <p class="col_title">当月所得积分</p>
          <p class="col_num">0</p>
        </div>
        <div class="mt_col mt_col_5">
          <p class="col_title">当月兑换礼品</p>
          <p class="col_num">0</p>
        </div>

        <div class="mt_div_date">
          <p class="col col_1 active" data-id="1">投资金额</p>
          <div class="mp_line"></div>
          <p class="col col_2" data-id="2">投资收益</p>
          <div class="mp_line"></div>
          <p class="col col_3" data-id="3">债权转让金额</p>

          <select class="select_year" style="display:none;">
          </select>
        </div>

        <div id="chart" style="height:400px"></div>

        <div class="h_line left"></div>
        <div class="lend_soon">近期投资项目丰富，查看更多项目 <a href="/Invest/list">立即出借</a></div>
        <div class="h_line"></div>

      </div>
    </section>
  </div>
</template>

<script>
  export default {
    name: "MyProfit"
  }
</script>

<style scoped>
  body {
    font-family: "Microsoft YaHei";
  }

  .myprofit_right {
    width: 940px;
    min-height: 1020px;
    background: #ffffff;
    float: left;
  }

  .mp_title {
    width: 72px;
    height: 18px;
    font-size: 18px;
    font-family: "SourceHanSerifCN-Regular";
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin: 60px 0 0 50px;
  }

  .mp_pass {
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    display: inline-block;
    margin: 0 0 0 480px;
  }

  .mp_pass b {
    color: #FB4251;
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
    margin: 20px 0 0 0;
    text-align: center;
  }

  .col_num {
    font-size: 18px;
    font-family: Tahoma-Bold;
    font-weight: bold;
    color: rgba(51, 51, 51, 1);
    margin: 20px 0 0 0;
    text-align: center;
  }

  .mt_div_date {
    clear: both;
    margin: 200px 0 0 50px;
    font-size: 16px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(204, 204, 204, 1);
  }

  .mt_div_date .col {
    height: 26px;
    font-size: 16px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(204, 204, 204, 1);
    display: inline-block;
    margin: 0 20px 0 0;
    text-align: center;
    line-height: 26px;
    padding: 0 4px;
  }

  .mt_div_date p:hover {
    cursor: pointer;
  }

  .col_1, col_2 {
    width: 64px;
    margin: 0 40px 0 0;
  }

  .col_3 {
    width: 96px;
  }

  .active {
    color: rgba(251, 66, 81, 1) !important;
  }

  .mp_line {
    display: inline-block;
    width: 2px;
    height: 12px;
    background: rgba(238, 238, 238, 1);
    margin: 0 40px 0 0;
  }

  .select_year {
    margin: 0 0 0 308px;
  }

  .h_line {
    width: 268px;
    height: 1px;
    background: rgba(238, 238, 238, 1);
    float: left;
    margin: 50px 0 0 0;
  }

  .lend_soon {
    float: left;
    font-size: 12px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin: 42px 32px;
  }

  .left {
    margin: 50px 0 0 50px;
  }

  .lend_soon a {
    color: #4AA1FA;
  }

  .lend_soon a:hover {
    color: #ff9600;
  }

  #chart {
    height: 400px;
    margin: 40px 0 0 0;
  }
</style>
