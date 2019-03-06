<template>
  <div class="div_fixed">
    <div class="head_fixed">
      <a href="/"><img src="../../assets/img/Common/zf_logo.png" alt=""><img src="../../assets/img/Common/zf_logo_5.png"
                                                                             alt=""></a>
      <div class="fixed_right">
        <router-link to='/'>
          <a id="index" :class="{ color_black: this.$route.path!=='/',color_orange:this.$route.path==='/' }"
             href="/">首页</a>
        </router-link>
        <router-link to='/Invest/InvestList'>
          <a
            :class="{ color_black: this.$route.path!=='/Invest/InvestList',color_orange:this.$route.path==='/Invest/InvestList' }"
            href="javascript:void(0);">我要出借</a>
        </router-link>
        <router-link to='/'>
          <a id="borrow" class="color_black" href="/Borrow">我要借款</a>
        </router-link>
        <router-link to='/'>
          <a id="info" class="color_black" href="/Disclosure/about">信息披露</a>
        </router-link>
        <router-link to='/'>
          <a id="aboutus" class="color_black" href="/Aboutus">关于我们</a>
        </router-link>
        <router-link to='/MyAccount'>
          <a id="myaccount" class="color_black myaccount no_login_account" href="#">我的账户</a>
        </router-link>
      </div>
      <div class="lend_expand">
        <a id="firstinvest" href="/Novice/list">新手专享</a>
        <a id="carproject" href="/Invest/list">汽车项目</a>
        <a id="sellto" href="/Creditor/list">债权转让</a>
        <div class="link_bar"></div>
      </div>
      <div class="info_expand">
        <div class="info_group">
          <p id="org">组织信息</p>
          <div class="info_bar"></div>
          <a href="/Disclosure/Org#state">信息披露声明</a><br/>
          <a href="/Disclosure/Org#team">管理团队</a><br/>
          <a href="/Disclosure/Org#org_wrap">组织架构</a><br/>
          <a href="/Disclosure/Org#channel">官方渠道</a><br/>
        </div>
        <div class="v_line"></div>
        <div class="info_group">
          <p id="about_platform">工商信息</p>
          <div class="info_bar"></div>
          <a href="/Disclosure/About#ic_wrap">工商信息</a><br/>
          <a href="/Disclosure/About#licence">营业执照</a><br/>
          <a href="/Disclosure/About#stock_percent">股东信息</a><br/>
          <a href="/Disclosure/About#branch_wrap">分支机构</a><br/>
        </div>
        <div class="v_line"></div>
        <div class="info_group">
          <p id="law">运营数据</p>
          <div class="info_bar"></div>
          <a href="/Disclosure/OperationReport">运营报告</a><br/>
          <a href="/Disclosure/PlateformData">平台数据</a>
        </div>
        <div class="v_line"></div>
        <div class="info_group">
          <p id="r_data">合规信息</p>
          <div class="info_bar"></div>
          <a href="/Disclosure/Law#laws">法律法规</a><br/>
          <a href="/Disclosure/Law#compliance">合规审查报告</a><br/>
          <a href="/Disclosure/Law#audit">审计报告</a><br/>
          <a href="/Disclosure/Law#important_wrap">重大事项报告</a><br/>
          <a href="/Disclosure/Law#record">备案情况</a>
        </div>
        <div class="v_line"></div>
        <div class="info_group">
          <p id="or_data">其他</p>
          <div class="info_bar"></div>
          <a href="/Disclosure/Other#bank">资金存管银行</a><br/>
          <a href="/Disclosure/Other#risk">风险管理体系</a><br/>
          <a href="/Disclosure/Other#fee">收费标准</a><br/>
          <a href="/Disclosure/Other#information">信息公告</a>
        </div>
      </div>
      <div class="account_expand">
        <div class="account_group">
          <a href="/Account/myaccount" class="account_left user_attr_hidden">待收本息</a>
          <p id="totalAmount" class="account_right user_attr_hidden"></p>
          <a href="/Account/myaccount" class="account_left">可用余额</a>
          <p id="ca_balance" class="account_right"></p>
          <a class="recharge" href="/Account/recharge">
            <img src="{0}/Content/Img/Common/recharge.png" alt="">
            <span>充值</span>
          </a><br/>
          <a class="withdraw" href="/Account/withdraw">
            <img src="{0}/Content/Img/Common/withdraw.png" alt="">
            <span>提现</span>
          </a>
        </div>
        <div class="v_line"></div>
        <div class="account_group">
          <a href="/Account/fundDetails" class="account_left">资金明细</a>
          <a class="account_right"></a>
          <a href="/Account/myTrade" class="account_left user_attr_hidden">交易记录</a>
          <a class="account_right user_attr_hidden"></a>
          <a id="isAuto" href="/Account/autoSign" class="account_left contact red_dot user_attr_hidden"></a>
          <a id="userLoanNum" href="/Account/debtTransfer" class="account_left contact red_dot user_attr_hidden"></a>
          <a href="/Account/borrow" class="account_left contact">存管户授权</a>
        </div>
        <div class="v_line"></div>
        <div class="account_group_3">
          <div class="account_bar"></div>
          <a href="/Account/enterpriseAuth" id="center" class="account_left">认证中心</a>
          <a href="/Account/enterpriseAuth" id="bindStatus" class="account_right red_dot"></a>
          <a href="/Account/myRedpacket" id="redbag" class="account_left user_attr_hidden">我的红包</a>
          <a href="/Account/myRedpacket" id="redpacket" class="account_right red_dot user_attr_hidden"></a>
          <a href="/Account/myProfit" id="myprofit" class="account_left user_attr_hidden">我的收益</a>
          <a href="/Account/myProfit" class="account_right user_attr_hidden"></a>
          <a href="/Account/myTask" id="myask" class="account_left user_attr_hidden">我的任务</a>
          <a href="/Account/myTask" id="myTask" class="account_right red_dot user_attr_hidden"></a>
          <a href="/Account/messageCenter" id="mymessage" class="account_left">消息中心</a>
          <a href="/Account/messageCenter" id="message" class="account_right red_dot"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FixedHeader",
    mounted() {
      //显示当前选中标签


      //滚动监听
      window.addEventListener("scroll", function () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

        if (scrollTop > 40) {
          document.getElementsByClassName('div_fixed')[0].style.position = 'fixed'
          document.getElementsByClassName('div_fixed')[0].style.top = 0
          document.getElementsByClassName('div_fixed')[0].style.left = 0

          //$('.div_fixed').css('position', 'fixed');
          //$('.div_fixed').css('top', 0);
          //$('.div_fixed').css('left', 0);
        } else {
          document.getElementsByClassName('div_fixed')[0].style.position = 'absolute'
          document.getElementsByClassName('div_fixed')[0].style.top = '40px'
          document.getElementsByClassName('div_fixed')[0].style.left = 0

          //$('.div_fixed').css('position', 'absolute');
          //$('.div_fixed').css('top', '40px');
          //$('.div_fixed').css('left', 0);
        }

        //滑到顶部按钮显示/隐藏
        /*if (scrollTop > $(window).height()) {
          $('.bk_top').css('visibility', 'visible');
        } else {
          $('.bk_top').css('visibility', 'hidden');
        }*/
      });
    }
  }
</script>

<style scoped>

</style>
