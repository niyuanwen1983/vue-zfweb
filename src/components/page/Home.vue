<template>
  <div>
    <section class="main">
      <div class="container">
        <div class="flexslider">
          <ul class="slides"></ul>
        </div>
        <img src="../../assets/img/Index/advantage.png" alt="">
      </div>
      <div>
        <div class="news">
          <div class="notice">
            <span class="news_title">新闻中心</span>
            <p class="news_content news_left">网站公告 | <a href="">运维公告</a></p>
            <p class="news_content news_right">行业资讯 | <a href="">P2P备案统一验收标准年内或难出台</a></p>
            <a href="/Media/Information"><span class="news_content news_more">更多</span></a>
          </div>
        </div>
        <div class="icon_content">
          <ul>
            <li>
              <img src="../../assets/img/Index/bank.png" alt="">
              <p class="color_3 font-16">银行存管</p>
              <p class="color_9 font-14 sub_title">银行管理资金 平台管理交易</p>
            </li>
            <li>
              <img src="../../assets/img/Index/risk.png" alt="">
              <p class="color_3 font-16">严格风控</p>
              <p class="color_9 font-14 sub_title">严格的风险控制管理制度</p>
            </li>
            <li>
              <img src="../../assets/img/Index/three.png" alt="">
              <p class="color_3 font-16">三级认证</p>
              <p class="color_9 font-14 sub_title">国家信息等级安全保护</p>
            </li>
            <li>
              <img src="../../assets/img/Index/law.png" alt="">
              <p class="color_3 font-16">合规运营</p>
              <p class="color_9 font-14 sub_title">诚信守约 守法经营</p>
            </li>
          </ul>
        </div>
        <div class="first_invest" style="position:relative;">
          <div class="first_invest_left">
            <p>全国合作</p>
            <!--<p id="store_count"></p>-->
            <p>服务网点</p>
            <a href="/Disclosure/Store" target="_blank">
              <div class="branches">查看网点</div>
            </a>
          </div>
          <div class="first_invest_center">
            <img src="../../assets/img/Index/first_invest_label.png" alt=""
                 style="position:absolute;top:6px;left:300px;z-index:90;">
            <a href="/Invest/list"><span class="label_content">新手专享</span></a>
            <div class="percent_month">
              <div class="index_year">
                <p id="year_rate" class="percent"></p>
                <p class="percent_little"></p>
                <p class="percent_plus" style="display: none;"></p>
              </div>
              <p id="loanmonth" class="month"></p>
              <p class="month_little"></p>
            </div>
            <div class="first_desc">
              <p class="first_desc_left">协议约定年利率</p>
              <!--<img class="question_mark_big pop-title" src="~/assets/img/Common/question_mark.png" alt="">-->

              <div class="titleTips add_style" style="color:#999999;display: none;">
                借款人履约意愿及能力等因素、借款人提前还款等情况都会影响最终收益率
              </div>

              <p class="first_desc_right">期限</p>
            </div>
            <div class="invest_progress"></div>
            <div class="invest_progress_now"></div>
            <div class="first_desc desc_margin">
              <span class="first_desc_left">剩余<span id="moneyLest"></span>可出借</span>
              <span class="percent_now"></span>
            </div>
            <div class="lend">
              <span class="lend_desc">最高可享一万元新手出借额度</span>
              <a href="">
                <div class="lend_btn" style="display:none;"></div>
              </a>
              <!--<a class="lend_detail">详细规则</a>-->
            </div>
          </div>
          <div class="car_lazy"></div>
          <div class="first_invest_right">
            <a>
              <div class="lazy_ad"></div>
              <div class="lazy_ad" style="margin-top: 12px;"></div>
              <div class="right_top"></div>
            </a>
            <a>
              <div class="right_bottom"></div>
            </a>
          </div>
        </div>
        <div class="investment">
          <div class="investment_left">
            <div class="investment_type">
              <p>汽车项目</p>
              <div class="line"></div>
              <div class="type_mask">
                <div class="goto_lend"><a class="a_lend" href="/Invest/list">查看出借</a></div>
              </div>
            </div>
          </div>
          <div class="lazyload">

          </div>
          <div class="lazyload">

          </div>
          <div class="lazyload">

          </div>
          <div class="lazyload">

          </div>
        </div>
        <!--活动-->
        <div class="activity">
        </div>
        <!--近期还款-->
        <div class="investment_list">
          <div class="investment_list_left list_img1">
            <p class="investment_list_type list_type_1 list_type_active">近期还款</p>
            <p class="investment_list_type list_type_2">债权转让</p>
          </div>
          <div class="investment_list_right" style="position:relative;">
            @*
            <div
              style="width:100%;height:56px;background:rgba(255,255,255,1);font-weight:bold;position:absolute;top:60px;left:0;z-index:0;"></div>
            *@
            <div class="zq_lazy"></div>
            <div class="sz_sq" style="width:100%;position:absolute;top:0;left:0;z-index:5;">
              <div id="sz_scroll" style="height:260px;overflow:hidden;">
                <div id="sz_scroll_1">
                  <ul class="sz_sq_list" id="recent_repayment"></ul>
                </div>
                <div id="sz_scroll_2"></div>
              </div>
            </div>
            <div class="sz_sq_22" style="display:none;width:100%;position:absolute;top:0;left:0;z-index:5;">
              <div id="sz_scroll_22" style="height:195px;overflow:hidden;">
                <div id="sz_scroll_1_22">
                  <ul class="sz_sq_list" id="debt_list"></ul>
                </div>
                <div id="sz_scroll_2_22"></div>
              </div>
            </div>

            <div class="remark_22">
              <p>想了解更多债权转让信息 <a href="/Creditor/list">点击进入></a></p>
            </div>
          </div>
        </div>
        <!--行业资讯-->
        <div class="industry">
          <div class="industry_title">
            <h1>行业资讯</h1>
            <a class="a_more" href="/Media/Information" target="_blank">更多>></a>
            <div class="industry_bar bar_red"></div>
          </div>
          <div class="industry_content">
            <div class="industry_content_detail icd_left">
              <img src="../../assets/img/Index/new.png" alt="">
              <div class="hy_lazy" style="margin-right:5%;"></div>
            </div>
            <div class="industry_content_detail icd_right">
              <img src="../../assets/img/Index/hot.png" alt="">
              <div class="hy_lazy" style="margin-left:5%;"></div>
            </div>
          </div>
        </div>
        <!--媒体报道-->
        <div class="media">
          <div class="media_content">
            <div class="industry_title">
              <h1>媒体报道</h1>
              <a class="a_more" href="/Media/MediaReport" target="_blank">更多>></a>
              <div class="industry_bar bar_orange"></div>
            </div>
            <div class="media_content_detail">
              <div class="mt_lazy"></div>
              <div class="mt_lazy" style="margin-left:30px;"></div>
              <div class="detail_left m_left">
              </div>
              <div class="detail_right m_right">
              </div>
            </div>
          </div>
          <div class="media_content">
            <div class="industry_title">
              <h1>公司动态</h1>
              <a class="a_more" href="/Media/Trends" target="_blank">更多>></a>
              <div class="industry_bar bar_orange"></div>
            </div>
            <div class="media_content_detail">
              <div class="mt_lazy"></div>
              <div class="mt_lazy" style="margin-left:30px;"></div>
              <div class="detail_left" id="company_1">
              </div>
              <div class="detail_right" id="company_2">
              </div>
            </div>
          </div>
        </div>
        <!--合作伙伴-->
        <div class="partner">
          <div class="industry_title">
            <h1>合作伙伴</h1>
            <div class="industry_bar bar_purple"></div>
          </div>
          <div class="partner_content">
            <div class="prev"></div>
            <div class="partner_img">
              <ul>
                <li style="left:0;">
                  <div>
                    <a class="f_1">
                      <img src="../../assets/img/Index/icn_cc.png">
                    </a>
                  </div>
                </li>
                <li style="left:228px">
                  <div>
                    <a class="f_2">
                      <img src="../../assets/img/Index/icn_fy.png">
                    </a>
                  </div>
                </li>
                <li style="left:456px">
                  <div>
                    <a class="f_3">
                      <img src="../../assets/img/Index/icn_as.png">
                    </a>
                  </div>
                </li>
                <li style="left:684px;">
                  <div>
                    <a class="f_9">
                      <img src="../../assets/img/Index/icn_hr.png">
                    </a>
                  </div>
                </li>
                <li style="left:912px;">
                  <div>
                    <a class="f_10">
                      <img src="../../assets/img/Index/icn_fdd.png">
                    </a>
                  </div>
                </li>
                <li style="left:1140px;">
                  <div>
                    <a class="f_8">
                      <img src="../../assets/img/Index/icn_py.png">
                    </a>
                  </div>
                </li>
                <li style="left:1368px;">
                  <div>
                    <a class="f_5">
                      <img src="../../assets/img/Index/icn_ty.png">
                    </a>
                  </div>
                </li>
                <li style="left:1596px">
                  <div>
                    <a class="f_4">
                      <img src="../../assets/img/Index/icn_wd.png">
                    </a>
                  </div>
                </li>
                <li style="left:1824px;">
                  <div>
                    <a class="f_7">
                      <img src="../../assets/img/Index/icn_fc.png">
                    </a>
                  </div>
                </li>
                <li style="left:2052px;">
                  <div>
                    <a class="f_6">
                      <img src="../../assets/img/Index/icn_zx.png">
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div class="friendly_link">
              <span class="link_title">友情链接</span>
              <a class="a_1">网贷聚焦</a>
              <a class="a_2">网贷帝国</a>
              <a class="a_3">网贷搜索</a>
              <a class="a_4">网贷帮</a>
              <a class="a_5">聚投汇</a>
              <a class="a_6">网贷门户</a>
              <a class="a_7">贷易查</a>
              <a class="a_8">51网贷</a>
              <a class="a_9">网贷投行</a>
              <a class="a_10">网贷江湖</a>
              <a class="a_11">网贷东方</a>
              <a class="a_12">上海保安公司</a>
            </div>
          </div>
          <div class="next"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {getIndex} from "../../api";

  export default {
    name: "Home",
    methods: {
      async getData() {
        let projects = await getIndex()
        debugger
      }
    },
    mounted() {
      this.getData();
    }
  }
</script>

<style scoped>
  /*内容部分*/
  body {
    font-family: "Microsoft YaHei";
  }

  .main {
    flex: 1 0 auto;
    background: #f8f8f8;
  }

  .container img {
    position: absolute;
    top: 440px;
    z-index: 11;
  }

  .container a {
    display: block;
    height: 440px;
  }

  .news {
    background: #ffffff;
    width: 100%;
    border-bottom: 1px solid #F4F4F4;
  }

  .notice {
    width: 1200px;
    margin: 0 auto;
    padding: 14px 0;
  }

  .news_title {
    color: #333333;
    margin: 0 0 0 14px;
    font-size: 14px;
  }

  .news_title:hover {
    color: #ff9600;
  }

  .news_title:before {
    content: url("../../assets/img/Index/notice.png");
    margin: 0 14px 0 0
  }

  .news_title:hover:before {
    content: url("../../assets/img/Index/notice_orange.png");
    margin: 0 14px 0 0
  }

  .news_content {
    color: #999999;
    font-size: 14px;
  }

  .news_left {
    width: 600px;
    margin: 0 0 0 32px;
    display: inline-block;
  }

  .news_left a {
    color: #999999;
  }

  .news_left a:hover {
    color: #ff9600;
  }

  .news_right {
    width: 408px;
    display: inline-block;
  }

  .news_right a {
    color: #999999;
  }

  .news_right a:hover {
    color: #ff9600;
  }

  .news_more {
    margin: 0 6px 0 0;
  }

  .news_more:hover {
    color: #ff9600;
  }

  .news_more:after {
    content: url("../../assets/img/Index/more.png");
    position: relative;
    top: 2px;
    left: 6px;
  }

  .icon_content {
    background: #ffffff;
    width: 100%;
  }

  .icon_content ul {
    width: 1200px;
    margin: 0 auto;
    height: 160px;
  }

  .icon_content ul li:nth-child(1) {
    float: left;
    width: 336px;
  }

  .icon_content ul li:nth-child(2) {
    float: left;
    width: 336px;
  }

  .icon_content ul li:nth-child(3) {
    float: left;
    width: 300px;
  }

  .icon_content ul li:nth-child(4) {
    float: left;
    width: 188px;
  }

  .icon_content ul li img {
    width: 81px;
    height: 80px;
    margin: 35px 0 44px 0;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }

  .icon_content ul li img:hover {
    /*cursor: pointer;*/
    -webkit-transform: translate3d(0, -4px, 0);
    -moz-transform: translate3d(0, -4px, 0);
    -ms-transform: translate3d(0, -4px, 0);
    -o-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }

  .icon_content ul li p {
    position: relative;
    top: -112px;
    left: 108px;
  }

  .sub_title {
    margin: 14px 0 0 0;
  }

  .first_invest {
    width: 1200px;
    height: 350px;
    margin: 50px auto;
  }

  .first_invest_left {
    width: 280px;
    height: 300px;
    background: url("../../assets/img/Index/first_invest_left.png") no-repeat;
    opacity: 0.8;
    padding: 72px 0 0 0;
    float: left;
  }

  .first_invest_left:hover {
    opacity: 1;
  }

  .first_invest_left > p:nth-child(1) {
    text-align: center;
    font-size: 30px;
    font-weight: bold;
  }

  .first_invest_left > p:nth-child(2) {
    text-align: center;
    font-size: 36px;
    font-weight: bold;
    margin: 24px 0 86px 0;
  }

  .branches {
    width: 194px;
    margin: 50px auto 0 auto;
    border: 2px solid #ffffff;
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    padding: 12px 0 14px 0;
  }

  .branches:hover {
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    color: #ffffff;
  }

  .first_invest_center {
    width: 610px;
    height: 350px;
    margin: 0 15px 0 15px;
    background: #ffffff;
    float: left;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }

  .first_invest_center:hover {
    /*-webkit-transform: translate3d(0, -4px, 0);
    -moz-transform: translate3d(0, -4px, 0);
    -ms-transform: translate3d(0, -4px, 0);
    -o-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);*/
    cursor: pointer;
    margin-top: -4px;
  }

  .first_invest_center img {
    margin: -18px 0 0 0;
  }

  .label_content {
    position: absolute;
    top: 7px;
    left: 327px;
    color: #ffffff;
    font-size: 18px;
    font-weight: 500;
    z-index: 91;
  }

  .label_content:hover {
    font-size: 20px;
    color: #ffffff;
  }

  .percent_month {
    width: 100%;
    margin: 40px 77px 0 75px;
  }

  .index_year {
    width: 380px;
    display: inline-block;
  }

  .percent {
    font-size: 48px;
    font-weight: 800;
    color: rgba(251, 68, 83, 1);
    display: inline-block;
  }

  .percent_little {
    font-size: 20px;
    font-weight: 800;
    color: rgba(251, 68, 83, 1);
    display: inline-block;
  }

  .percent_plus {
    font-size: 12px;
    color: #FF9600;
    border: 1px solid rgba(255, 150, 0, 1);
    border-radius: 10px;
    margin: -4px 0 0 23px;
    padding: 2px 4px;
    position: relative;
    top: -4px;
    display: inline-block;
  }

  .month {
    text-align: right;
    font-size: 52px;
    font-weight: 800;
    color: rgba(251, 68, 83, 1);
    display: inline-block;
  }

  .month_little {
    font-size: 20px;
    font-weight: 800;
    color: rgba(251, 68, 83, 1);
    display: inline-block;
  }

  .first_desc {
    margin: 4px 0 0 0;
    font-size: 14px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .first_desc_left {
    width: 420px;
    margin: 0 0 0 60px;
    display: inline-block;
  }

  .first_desc_right {
    display: inline-block;
  }

  .invest_progress {
    width: 470px;
    height: 8px;
    background: rgba(238, 238, 238, 1);
    border-radius: 4px;
    margin: 16px 80px 0 60px;
  }

  .invest_progress_now {
    width: 0px;
    height: 8px;
    background: -webkit-linear-gradient(-90deg, rgba(251, 66, 81, 1), rgba(251, 66, 81, 1), rgba(255, 75, 90, 1), rgba(255, 104, 116, 1));
    background: -moz-linear-gradient(-90deg, rgba(251, 66, 81, 1), rgba(251, 66, 81, 1), rgba(255, 75, 90, 1), rgba(255, 104, 116, 1));
    background: -o-linear-gradient(-90deg, rgba(251, 66, 81, 1), rgba(251, 66, 81, 1), rgba(255, 75, 90, 1), rgba(255, 104, 116, 1));
    background: linear-gradient(-90deg, rgba(251, 66, 81, 1), rgba(251, 66, 81, 1), rgba(255, 75, 90, 1), rgba(255, 104, 116, 1));
    border-radius: 4px;
    margin: 16px 80px 0 60px;
    position: relative;
    top: -24px;
  }

  .percent_now {
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: bold;
    color: rgba(252, 69, 84, 1);
    position: relative;
    /*right: -310px;*/
  }

  .desc_margin {
    margin: 0;
  }

  .first_desc_left > span {
    font-weight: bold;
  }

  .lend {
    margin: 44px 0 0 0;
  }

  .lend_desc {
    color: #171717;
    font-size: 20px;
    margin: 0 0 0 60px;
    font-weight: 400;
  }

  .lend_btn {
    width: 121px;
    height: 30px;
    font-size: 16px;
    text-align: center;
    line-height: 16px;
    background: -webkit-linear-gradient(-7deg, rgba(255, 75, 90, 1), rgba(251, 66, 81, 1), rgba(251, 66, 81, 1), rgba(255, 104, 116, 1));
    background: -moz-linear-gradient(-7deg, rgba(255, 75, 90, 1), rgba(251, 66, 81, 1), rgba(251, 66, 81, 1), rgba(255, 104, 116, 1));
    background: -o-linear-gradient(-7deg, rgba(255, 75, 90, 1), rgba(251, 66, 81, 1), rgba(251, 66, 81, 1), rgba(255, 104, 116, 1));
    background: linear-gradient(-7deg, rgba(255, 75, 90, 1), rgba(251, 66, 81, 1), rgba(251, 66, 81, 1), rgba(255, 104, 116, 1));
    border-radius: 4px;
    padding: 16px 0 0 0;
    float: right;
    margin: 0 70px 0 0;
    cursor: pointer;
  }

  .lend_btn:hover {
    font-size: 18px;
    color: #ffffff;
  }

  .lend_detail {
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 150, 0, 1);
    position: relative;
    top: 30px;
    left: -264px;
  }

  .first_invest_right {
    width: 280px;
    height: 350px;
    float: left;
  }

  .right_top {
    height: 169px;
    /*background: url("../../assets/img/Index/818.png") no-repeat;*/
    cursor: pointer;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }

  .right_top:hover {
    -webkit-transform: translate3d(0, -4px, 0);
    -moz-transform: translate3d(0, -4px, 0);
    -ms-transform: translate3d(0, -4px, 0);
    -o-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }

  .right_bottom {
    height: 169px;
    /*background: url("../../assets/img/Index/invite.png") no-repeat;*/
    margin: 10px 0 0 0;
    cursor: pointer;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }

  .right_bottom:hover {
    -webkit-transform: translate3d(0, -4px, 0);
    -moz-transform: translate3d(0, -4px, 0);
    -ms-transform: translate3d(0, -4px, 0);
    -o-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);
  }

  .investment {
    width: 1200px;
    height: 300px;
    margin: 50px auto 0 auto;
  }

  .investment_left {
    width: 228px;
    height: 300px;
    float: left;
    background: url("../../assets/img/Index/investment_left.png") no-repeat;
  }

  .type_mask {
    width: 228px;
    height: 0px;
    position: absolute;
    bottom: 65px;
    background: rgba(0, 0, 0, 0.5);
  }

  .goto_lend {
    width: 194px;
    height: 50px;
    border: 2px solid #ffffff;
    text-align: center;
    border-radius: 4px;
    font-size: 18px;
    line-height: 50px;
    position: relative;
    top: 100px;
    left: 17px;
    /*padding: 12px 0 14px 0;*/
    display: none;
  }

  .goto_lend:hover {
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
  }

  .a_lend {
    display: block;
  }

  .a_lend:hover {
    color: #ffffff;
  }

  .investment_type {
    height: 55px;
    background: rgba(255, 169, 46, 1);
    background: -webkit-linear-gradient(0deg, rgba(255, 150, 0, 1), rgba(255, 169, 46, 1));
    background: -moz-linear-gradient(0deg, rgba(255, 150, 0, 1), rgba(255, 169, 46, 1));
    background: -o-linear-gradient(0deg, rgba(255, 150, 0, 1), rgba(255, 169, 46, 1));
    background: linear-gradient(0deg, rgba(255, 150, 0, 1), rgba(255, 169, 46, 1));
    position: relative;
    top: 233px;
    text-align: center;
    padding: 10px 0 0 0;
  }

  .investment_type p {
    font-size: 20px;
    font-weight: 500;
  }

  .investment_type .line {
    width: 37px;
    height: 4px;
    background: rgba(255, 255, 255, 1);
    border-radius: 2px;
    margin: 10px 0 0 75px;
  }

  .investment_item {
    width: 228px;
    height: 300px;
    float: left;
    margin: 0 0 0 15px;
    background: #ffffff;
    -webkit-transition: all 0.2s linear;
    -moz-transition: all 0.2s linear;
    -ms-transition: all 0.2s linear;
    -o-transition: all 0.2s linear;
    transition: all 0.2s linear;
  }

  .canlend:hover {
    cursor: pointer;
    /*-webkit-transform: translate3d(0, -4px, 0);
    -moz-transform: translate3d(0, -4px, 0);
    -ms-transform: translate3d(0, -4px, 0);
    -o-transform: translate3d(0, -4px, 0);
    transform: translate3d(0, -4px, 0);*/
    -webkit-box-shadow: 10px 10px 5px #eeeeee;
    -moz-box-shadow: 10px 10px 5px #eeeeee;
    box-shadow: 10px 10px 5px #eeeeee;
    margin-top: -4px;
  }

  .investment_item_content p:nth-child(1) {
    font-size: 16px;
    font-weight: 400;
    color: rgba(98, 98, 98, 1);
    text-align: center;
    margin: 23px 0 16px 0;
  }

  .investment_desc {
    font-size: 12px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    text-align: center;
    margin: 8px 0 0 0;
  }

  .question_mark {
    position: relative;
    top: -16px;
    left: 160px;
  }

  .question_mark_big {
    position: relative;
    left: -320px;
  }

  .titleTips {
    /*    width: 240px;*/
    /*padding: 4px;*/
    /*background: #ffffff;*/
    line-height: 22px;
    text-align: left;
    /*border-radius: 5px;*/
    font-size: 12px;
    z-index: 999;
    color: black;
    /*-webkit-box-shadow: 10px 10px 5px #eeeeee;
    -moz-box-shadow: 10px 10px 5px #eeeeee;
    box-shadow: 10px 10px 5px #eeeeee;*/
    position: absolute;
    top: 140px;
    left: 8px;
    width: 221px;
    height: 47px;
    padding: 20px 25px;
    background: url('../../assets/img/Index/shadow_bg.png') no-repeat center center;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

  .add_style {
    position: absolute;
    top: 135px;
    left: 305px;
  }

  .investment_margin {
    margin: 0 0 0 80px;
  }

  .return_type {
    width: 63px;
    height: 16px;
    background: rgba(251, 68, 83, 1);
    border-radius: 5px;
    text-align: center;
    margin: 16px auto 0 auto;
  }

  .invest_progress_short {
    width: 166px;
    height: 8px;
    background: rgba(238, 238, 238, 1);
    border-radius: 4px;
    margin: 36px 36px 0 26px;
  }

  .invest_progress_short_now {
    width: 100px;
    height: 8px;
    background: rgba(255, 154, 11, 1);
    background: -webkit-linear-gradient(90deg, rgba(255, 195, 110, 1), rgba(255, 154, 11, 1));
    background: -moz-linear-gradient(90deg, rgba(255, 195, 110, 1), rgba(255, 154, 11, 1));
    background: -o-linear-gradient(90deg, rgba(255, 195, 110, 1), rgba(255, 154, 11, 1));
    background: linear-gradient(90deg, rgba(255, 195, 110, 1), rgba(255, 154, 11, 1));
    border-radius: 4px;
    margin: 16px 36px 0 26px;
    position: relative;
    top: -24px;
  }

  .invest_progress_0 {
    width: 0px;
    height: 8px;
    background: rgba(255, 154, 11, 1);
    background: -webkit-linear-gradient(90deg, rgba(255, 195, 110, 1), rgba(255, 154, 11, 1));
    background: -moz-linear-gradient(90deg, rgba(255, 195, 110, 1), rgba(255, 154, 11, 1));
    background: -o-linear-gradient(90deg, rgba(255, 195, 110, 1), rgba(255, 154, 11, 1));
    background: linear-gradient(90deg, rgba(255, 195, 110, 1), rgba(255, 154, 11, 1));
    border-radius: 4px;
    margin: 16px 36px 0 26px;
    position: relative;
    top: -24px;
  }

  .invest_progress_100 {
    width: 166px;
    height: 8px;
    background: rgba(255, 154, 11, 1);
    background: -webkit-linear-gradient(90deg, rgba(255, 195, 110, 1), rgba(255, 154, 11, 1));
    background: -moz-linear-gradient(90deg, rgba(255, 195, 110, 1), rgba(255, 154, 11, 1));
    background: -o-linear-gradient(90deg, rgba(255, 195, 110, 1), rgba(255, 154, 11, 1));
    background: linear-gradient(90deg, rgba(255, 195, 110, 1), rgba(255, 154, 11, 1));
    border-radius: 4px;
    margin: 16px 36px 0 26px;
    position: relative;
    top: -24px;
  }

  .item_desc {
    font-size: 12px;
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
  }

  .item_left {
    margin: 34px 0 0 26px;
  }

  .item_right {
    float: right;
    margin: 0 28px 0 0;
  }

  .investment_count {
    width: 228px;
    height: 300px;
    /*background: #ffffff;
    opacity: 0.5;*/
    position: relative;
    top: -280px;
    left: 0;
  }

  .circle {
    width: 148px;
    height: 148px;
    background: rgba(255, 255, 255, 0.9);
    border-radius: 50%;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 75px;
    left: 43px;
  }

  .circle img {
    margin: 24px 0 0 60px;
  }

  .circle p {
    font-size: 16px;
    font-weight: 500;
    margin: 16px 0 0 24px;
    color: #FB4251;
  }

  .countdown {
    margin: 16px 0 0 30px !important;
  }

  .soon {
    margin: 8px 0 0 44px !important;
    color: #535353 !important;
  }

  .investment_item:hover {
    cursor: pointer;
  }

  .investment_item_1 {
    width: 228px;
    height: 300px;
    float: left;
    margin: 0 0 0 15px;
  }

  .investment_count_1 {
    width: 228px;
    height: 300px;
    position: relative;
    bottom: 275px;
    background: rgba(0, 0, 0, 0.1);
  }

  .circle_1 {
    width: 148px;
    height: 148px;
    background: rgba(255, 255, 255, 0.9);
    /*opacity: 0.9;*/
    border-radius: 50%;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 57px;
    left: 43px;
  }

  .circle_1 img {
    margin: 24px 0 0 60px;
  }

  .circle_1 p {
    font-size: 16px;
    font-weight: 500;
    position: relative;
    top: 64px;
    left: 50px;
    color: #000000;
  }

  .investment_mask {
    height: 300px;
    background: rgba(0, 0, 0, 1);
    opacity: 0.1;
    position: relative;
    top: -280px;
    left: 0;
  }

  .borrowing_circle {
    width: 148px;
    height: 148px;
    background: rgba(255, 255, 255, 0.9);
    /*opacity: 0.9;*/
    border-radius: 50%;
    -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
    position: relative;
    top: 57px;
    left: 43px;
  }

  .borrowing {
    font-size: 16px !important;
    font-weight: 500 !important;
    color: #535353 !important;
    position: relative;
    top: 64px;
    left: 42px;
  }

  .activity {
    width: 1200px;
    height: 184px;
    margin: 0 auto 50px auto;
  }

  .activity:hover {
    cursor: pointer;
  }

  .investment_list {
    width: 1200px;
    height: 260px;
    margin: 0 auto 50px auto;
  }

  .investment_list_left {
    width: 230px;
    height: 260px;
    float: left;
  }

  .list_img1 {
    background: url("../../assets/img/Index/investment_list_left_1.png");
  }

  .list_img2 {
    background: url("../../assets/img/Index/investment_list_left_2.png");
  }

  .investment_list_type {
    position: relative;
    left: 118px;
    width: 87px;
    background: rgba(248, 248, 248, 0.66);
    font-size: 16px;
    font-weight: bold;
    color: rgba(83, 83, 83, 1);
    padding: 10px 0 10px 25px;
    cursor: pointer;
    font-family: "SourceHanSerifCN-Regular";
  }

  .list_type_1 {
    top: 30px;
  }

  .list_type_2 {
    top: 32px;
  }

  .list_type_active {
    color: rgba(255, 254, 254, 1);
    background: rgba(245, 63, 76, 0.66);
  }

  .list_type_active:after {
    content: '';
    width: 10px;
    height: 12px;
    position: absolute;
    top: 15px;
    right: -1px;
    background: url("../../assets/img/Index/list_type_active.png");
  }

  .investment_list_right {
    width: 957px;
    height: 260px;
    margin: 0 0 0 13px;
    float: left;
  }

  /*============近期还款滚动============*/
  .sz_sq {
    /*background-color: #f8f8f8;*/
    text-align: center;
  }

  .sz_sq_list {
    font-size: 14px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
  }

  .sz_sq_list li {
    height: 32px;
    padding: 16px 0;
    /*background: #f8f8f8;*/
  }

  .sz_sq_list li p {
    display: inline-block;
    font-size: 14px;
    line-height: 32px;
    color: rgba(102, 102, 102, 1);
  }

  .sz_header p, .sz_sq_list .sz_sq_bt p {
    font-size: 14px;
    color: #333;
  }

  .sz_sq_list p:nth-child(4n) {
    border-right: none;
  }

  /*============债权转让滚动============*/
  .sz_sq_22 {
    background-color: #f8f8f8;
    text-align: center;
  }

  .sz_sq_list {
    font-size: 14px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    /*background: rgba(255, 255, 255, 0.5);*/
  }

  .sz_sq_list li {
    height: 32px;
    padding: 16px 0;
  }

  .sz_sq_list li p {
    display: inline-block;
    font-size: 14px;
    line-height: 32px;
    color: rgba(102, 102, 102, 1);
  }

  .sz_header p, .sz_sq_list .sz_sq_bt p {
    font-size: 14px;
    color: #333;
  }

  .sz_sq_list p:nth-child(4n) {
    border-right: none;
  }

  /*-------------------------------------------*/

  .lend_name {
    float: left;
    width: 80px;
    height: 56px;
    text-align: left;
    padding-left: 20px;
  }

  .lend_mobile {
    float: left;
    width: 128px;
    text-align: left;
  }

  .lend_type {
    float: left;
    width: 128px;
    text-align: left;
  }

  .lend_money {
    float: left;
    width: 128px;
    text-align: left;
  }

  .lend_ratio {
    float: left;
    width: 128px;
    text-align: left;
  }

  .lend_percent {
    float: left;
    width: 100px;
    text-align: left;
  }

  .lend_get_money {
    float: left;
    width: 200px;
    text-align: left;
  }

  .investment_man_type_22 {
    width: 128px;
  }

  .investment_success_22 {
    width: 128px;
  }

  .investment_money_22 {
    width: 128px;
  }

  .investment_profit_22 {
    width: 100px;
  }

  .remark_22 {
    width: 957px;
    height: 65px;
    margin-top: 220px
  }

  .remark_22 p {
    text-align: center;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(102, 102, 102, 1);
    margin: 28px 0 0 0;
  }

  .remark_22 a {
    color: #333333;
  }

  .remark_22 a:hover {
    color: #ff9600;
  }

  .investment_name {
    float: left;
    width: 380px;
    height: 56px;
    text-align: left;
    padding-left: 20px;
  }

  .investment_man_type {
    float: left;
    width: 78px;
    text-align: left;
  }

  .investment_success {
    float: left;
    width: 78px;
    text-align: left;
  }

  .investment_money {
    float: left;
    width: 200px;
    text-align: left;
  }

  .investment_profit {
    float: left;
    width: 200px;
    text-align: left;
  }

  .bold {
    font-weight: bold;
    color: #ff9600 !important;
    /*background: #ffffff !important;*/
  }

  .sz_sq_list li.bold p {
    color: #ff9600 !important;
  }

  .industry {
    width: 1200px;
    height: 240px;
    margin: 0 auto 60px auto;
  }

  .industry_title {
    width: 100%;
  }

  .industry_title > h1 {
    font-size: 20px;
    font-weight: 500;
    color: rgba(83, 83, 83, 1);
    display: inline-block;
    margin: 0 52px 0 0;
    font-family: "SourceHanSerifCN-Regular";
  }

  .industry_title > a :hover {
    color: #ff9600;
  }

  .a_more:hover {
    color: #ff9600;
  }

  .industry_title > a {
    font-size: 14px;
    font-weight: 400;
    color: rgba(153, 153, 153, 1);
    float: right;
    padding-right: 30px;
  }

  .industry_bar {
    width: 37px;
    height: 4px;
    border-radius: 2px;
    margin: 16px 0 0 0;
  }

  .bar_red {
    background: rgba(255, 75, 90, 1);
  }

  .industry_content {
    width: 100%;
    float: left;
  }

  .industry_content_detail {
    float: left;
    width: 50%;
    height: 212px;
  }

  .industry_content_detail a {
    color: rgba(51, 51, 51, 1);
  }

  .industry_content_detail a:hover {
    color: #ff9600;
  }

  .industry_content_detail img {
    margin: 35px 0 0 0;
  }

  .industry_content_detail_first {
    font-weight: 400;
    font-size: 18px;
    margin: 35px 0 30px 11px;
  }

  .industry_content_detail ul {
    margin: 30px 0 0 0;
  }

  .industry_content_detail li {
    color: rgba(102, 102, 102, 1);
    font-size: 14px;
    margin: 0 0 23px 0;
  }

  .industry_content_detail li a > span {
    position: relative;
    top: -2px;
  }

  .industry_content_detail li :hover {
    color: #ff9600;
  }

  .media {
    width: 1200px;
    height: 280px;
    margin: 0 auto 36px auto;
  }

  .media_content {
    float: left;
    width: 50%;
  }

  .bar_orange {
    background: rgba(255, 159, 21, 1);
  }

  .media_content_detail {
    float: left;
    width: 100%;
    margin: 36px 0 0 0;
  }

  .media_content_detail img {
    width: 270px;
    height: 190px;
  }

  .media_content_detail > img:nth-child(1) {
    margin: 0 30px 0 0;
  }

  .detail_left {
    width: 270px;
    height: 190px;
    float: left;
    position: relative;
  }

  .detail_left:hover {
    cursor: pointer;
  }

  .detail_right {
    width: 270px;
    height: 190px;
    float: left;
    margin: 0 0 0 30px;
    position: relative;
  }

  .detail_right:hover {
    cursor: pointer;
  }

  .media_div {
    width: 270px;
    height: 28px;
    background: rgba(69, 72, 81, 0.8);
    position: relative;
    top: -40px;
    padding: 12px 0 0 0;
  }

  .left_p {
    font-size: 14px;
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    margin: 0 0 0 8px;
    font-family: "SourceHanSerifCN-Regular";
  }

  .media_mask {
    width: 270px;
    display: block;
    background: rgba(69, 72, 81, 0.8);
    position: absolute;
    bottom: 0;
  }

  .media_mask p {
    width: 240px;
    height: 118px;
    margin: 26px 15px 46px 15px;
    display: none;
    line-height: 24px;
  }

  .partner {
    width: 1200px;
    height: 304px;
    margin: 0 auto;
  }

  .bar_purple {
    background: rgba(157, 126, 253, 1);
  }

  .center_title {
    font-size: 18px;
    font-weight: 500;
    color: rgba(83, 83, 83, 1);
    text-align: center;
    margin: 66px 0 0 0;
    font-family: "SourceHanSerifCN-Regular";
  }

  .partner_content {
    width: 1200px;
    height: 195px;
    overflow: hidden;
  }

  .prev {
    width: 30px;
    height: 60px;
    /*background: url("../../assets/img/Index/prev_img.png") no-repeat center;*/
    background-color: #edecec;
    position: relative;
    top: 50px;
    float: left;
    cursor: pointer;
  }

  .next {
    width: 30px;
    height: 60px;
    /*background: url("../../assets/img/Index/next_img.png") no-repeat center;*/
    background-color: #edecec;
    position: relative;
    top: -150px;
    float: right;
    cursor: pointer;
  }

  .partner_img {
    width: 1140px;
    height: 60px;
    float: left;
    margin: 54px 0 0 0;
    overflow: hidden;
    position: relative;
  }

  .partner_img ul li {
    width: 220px;
    height: 60px;
    float: left;
    position: absolute;
  }

  .partner_img div {
    width: 190px;
    height: 61px;
    margin: 0 24px;
  }

  .partner_img div:hover {
    background: #ffffff;
    border-radius: 4px;
  }

  .partner_img img {
    /*width: 72px;
    height: 30px;
    margin: 15px 50px;*/
    cursor: pointer;
    display: block;
    width: 100%;
  }

  .friendly_link {
    clear: both;
    position: relative;
    top: 64px;
  }

  .friendly_link a {
    margin: 0 0 0 12px;
    color: #999999;
  }

  .friendly_link a:hover {
    color: #ff9600;
  }

  .link_title {
    color: #666666;
    border-right: 1px solid #666666;
    padding: 0 12px 0 0;
  }

  #about_platform, #org, #law, #or_data {
    cursor: pointer;
  }

  .lazyload {
    width: 228px;
    height: 300px;
    float: left;
    margin: 0 0 0 15px;
    background: #ebebeb;
  }

  .layzy_img {
    width: 100%;
    float: left;
    background: #ebebeb;
  }

  .lazy_ad {
    width: 280px;
    height: 169px;
    background: #ebebeb;
  }

  .hy_lazy {
    width: 90%;
    /*float:left;*/
    height: 103px;
    background: #ebebeb;
    margin-top: 30px;
  }

  .mt_lazy {
    width: 270px;
    height: 190px;
    float: left;
    background: #ebebeb;
  }

  .zq_lazy {
    width: 957px;
    height: 260px;
    margin: 0 0 0 13px;
    float: left;
    background: #ebebeb;
  }

  .car_lazy {
    width: 610px;
    height: 350px;
    margin: 0 15px 0 15px;
    background: #ebebeb;
    position: absolute;
    top: 3px;
    left: 280px;
    z-index: 10;
  }

  .no_hand:hover {
    cursor: default;
  }
</style>
