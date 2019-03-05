<template>
  <div>
    <Header></Header>
    <FixedHeader></FixedHeader>
    <div class="content">
      <div class="bg"></div>
      <div class="detailBox">
        <div class="sell clearfix">
          <div class="conL">
            <div class="title">
              <div class="tit"></div>
              <div class="way"></div>
              <div class="zx_way"></div>
              <div class="app_way" style="display:none;"></div>
              <p class="way_code" style="display: none;"></p>
              <div class="num"></div>
            </div>
            <div class="main" style="position:relative;">
              <div class="time">
                <span id="open_time" style="display:none;">发布时间：<i></i></span>
                <span class="open_soon" style="display:none;">
                                <img id="img_count_down" src="../../../assets/img/Invest/jjfb.png" width="80"
                                     height="27"/>
                                <em class="orange"></em>
                                <span id="hidden_countdown" style="display: inline-block;"></span>
                            </span>
                <span style="display:none;">
                                <img src="../../../assets/img/Invest/djss.png" width="80" height="27"/>
                                <em class="red"></em>
                            </span>
                <span id="end_time" style="display:none;">截止时间：<i></i></span>
              </div>
              <ul class="clearfix">
                <li><span id="year_rate"></span>协议约定年利率</li>
                <li><span id="loanmonth"></span>借款期限(月)</li>
                <li><span id="loanmoney" style="color:#333333;"></span>借款金额(万元)</li>
              </ul>
              <div class="progressBar">
                <span class="barOut"><span class="barIn" style="width:50%;"></span></span>
                <span class="percent"></span>
              </div>
              <div class="surplus">
                <span>剩余可投额度(元)：<i id="lastmoney"></i></span>
                <span class="repay_way">
                                还款方式：<i></i>
                            <span class="repay_desc">说明</span>
                            </span>
                <div class="titleTips" style="display: none;"></div>
                <span>起息日：<i>满标当日计息</i></span>
              </div>
              <span id="newtender" style="display:none;"></span>
            </div>
            <div class="agreement">
              <p class="xy">
                相关协议：
                <a href="https://w3.zhifudai.com/More/qalist?code=154570747943">《风险提示及承诺》</a>
                <a href="https://w3.zhifudai.com/More/qalist?code=154803986992">《借款协议范本》</a>
                <a href="/Disclosure/Law#laws" target="_blank">法律法规</a>
              </p>
              <div class="bor"></div>
              <p class="zs" style="font-weight:bold;">该借款标的可债权转让！出借人债权转让可能存在无人承接的流动性风险！<br>出借有风险，借款人履约意愿，能力等因素可能会影响您的实际收益，请谨慎出借！
              </p>
            </div>
          </div>
          <div class="conR">
            <!-- 未登录 -->
            <div class="loginBefore" style="display:none;">
              <div class="money">
              </div>
              <div class="guide dlImg"></div>
              <div class="income">
                <p>成为会员即可获得<span class="span_red">加息</span>等福利</p>
                <button id="login" class="btn">立即登录</button>
              </div>
            </div>
            <!-- 已登录 -->
            <div class="loginAfter">
              <!-- 立即出借 -->
              <div id="soon_lend" class="has_bank" style="display: none;">
                <div class="money balance">
                  <span>可用余额：<em class="pd_ca_balance"></em>元</span>
                  <a class="ld_0001_a_recharge" href="/Account/recharge">充值</a>
                </div>
                @*专享福利*@
                <div class="welfare">
                  <p>专享福利<a class="seeDetailBtn">查看详情></a></p>
                  <ul class="clearfix">
                    <li id="init" style="display:none;">新手奖励</li>
                    <li id="begin" style="display:none;">起借奖励</li>
                    <li id="first" style="display:none;">首杀奖励</li>
                    <li id="most" style="display:none;">魁杀奖励</li>
                    <li id="last" style="display:none;">绝杀奖励</li>
                    <li id="redpacket_detail">红包奖励</li>
                    <li id="card">卡券奖励</li>
                    <li id="member">会员奖励</li>
                  </ul>
                </div>
                <div class="interest" style="display:none;">
                  <ul class="clearfix" style="visibility: hidden;">
                    <li>新手加息<span>+1%</span></li>
                    <li>会员增加利息<span>+1%</span></li>
                    <li>首投加息<span>+1%</span></li>
                    <li>起借金额加息<span>+1%</span></li>
                    <li>最大出借加息<span>+1%</span></li>
                    <li>尾投加息<span>+1%</span></li>
                  </ul>
                </div>
                <div class="income">
                  <p>预计收益：<em id="common_money_profit_invest">0</em>元</p>
                  <div class="cj_box">
                    <input id="top_invest_money" type="text" placeholder="100元整数倍" class="tzInput">
                    <input type="button" placeholder="" value="全投" class="fullBtn">
                    <button class="nowBtn">立即出借</button>
                  </div>
                  <div class="chk_box">
                    <label><input type="checkbox" style="visibility:hidden;" id="choose"><span></span>我已阅读并同意</label>
                    <a href="https://w3.zhifudai.com/More/qalist?code=154570747943" id="tipAgreement">《风险提示及承诺》</a>
                  </div>
                  <button class="autoBtn">立即设置自动投标</button>
                  <button class="appBtn" style="display:none;">下载投资APP进行出借</button>
                </div>
                <div class="friendlyTip">
                  @*<span>网贷有风险 出借需谨慎</span>*@
                </div>
              </div>
              <!-- 招标完成 -->
              <div id="project_complete" class="has_bank" style="display:none;">
                <div class="money balance">

                </div>
                <div class="guide cjImg"></div>
                <div class="income">
                  <p id="over_text"></p>
                  <button class="btn btn_more">查看其它热门项目</button>
                </div>
                <div class="friendlyTip">
                  @*<span>网贷有风险 出借需谨慎</span>*@
                </div>
              </div>
              <!-- 还款中 -->
              <div id="repaying" class="has_bank" style="display:none;">
                <div class="money balance">

                </div>
                <div class="guide cjImg"></div>
                <div class="income">
                  <p>还款中</p>
                  <button class="btn btn_more">查看其它热门项目</button>
                </div>
                <div class="friendlyTip">
                  @*<span>网贷有风险 出借需谨慎</span>*@
                </div>
              </div>
              <!-- 未开通银行资金存管 -->
              <div id="has_not_bank" style="display:none;">
                <div class="money balance">
                </div>
                <div class="guide cjImg"></div>
                <div class="income">
                  <p></p>
                  <button id="btn_bank" class="btn">开通银行资金存管</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="bidDetail clearfix">
          <div class="detailTitle">
            <span class="current">项目详情</span>
            <span>借款人及担保物信息</span>
            <span>出借记录</span>
            <span>还款计划</span>
            <span id="project_change_info" style="display:none;">项目信息变化</span>
          </div>
          <div class="detailCon">
            <!-- 项目详情 -->
            <div class="info">
              <div class="box projectBox">
                <ol>
                  <li>
                    @*
                    <div>项目名称：<span class="project_name"></span></div>
                    *@
                    <div style="width:100%;">
                      项目风险等级：<span id="risk_grade"></span><b
                      style="font-weight:normal;font-size:12px;margin-left:15px;">
                      星级越高则风险越低，根据项目风险等级以及<a style="color:orange;"
                                             href="https://w3.zhifudai.com/More/qalist?code=154570921262"
                                             target="_blank">《出借人分级管理制度》</a>将设置不同的出借限制。
                    </b>
                    </div>
                  </li>
                  <li>
                    <div>项目介绍： <span id="remark_2"></span></div>
                  </li>
                  <li>
                    <div>还款来源 ：<span class="sHuanKLaiYuan"></span></div>
                    <div>借款用途：<span class="sYongTu"></span></div>
                  </li>
                  <li>
                    <div>借款人账号：<span class="sAccount"></span></div>
                    <div>所在地：<span class="sLocation"></span></div>
                  </li>
                  <li>
                    <div>协议约定年利率：<span class="sYearRate"></span></div>
                    <div>借款金额：<span class="sJKAmount"></span></div>
                  </li>
                  <li>
                    <div>借款期限：<span class="sQiXian"></span></div>
                    <div>募集时间：<span class="sTime"></span></div>
                  </li>
                  <li>
                    <div>担保措施：<span>车辆抵押，保证人为江苏智华非融资性担保有限公司，借款人以车辆抵押的方式向保证人提供反担保，该担保车辆已履行相关法律手续</span></div>
                  </li>
                  <li style="background:transparent;">
                  </li>
                </ol>
              </div>
            </div>
            <!-- 借款人及担保物信息 -->
            <div class="info project_record" style="display:none;">
              <!-- 借款人信息 -->
              <div class="detail_enterprise box">
                <h3>借款人信息</h3>
                <ol>
                  <li>
                    <div>主体性质：<span class="sNature"></span></div>
                    <div>企业名称：<span class="sEnterpriseName"></span></div>
                  </li>
                  <li>
                    <div style="width:420px;">统一社会信用代码：<span class="sMechanismCode"></span></div>
                    <div style="width:420px;">所属行业：<span class="sIndustryName"></span></div>
                  </li>
                  <li>
                    <div>平台历史还款次数 ：<span class="sHuanKLaiYuan"></span></div>
                    <div>平台历史逾期次数：<span class="sLateCount"></span></div>
                  </li>
                  <li>
                    <div style="width:420px;">平台当前逾期金额：<span class="sCurrentLateMoney"></span></div>
                    <div style="width:420px;">平台历史逾期三天以上次数：<span class="sLateCountLarge3"></span></div>
                  </li>
                  <li>
                    <div style="width:100%;">本平台还款中金额：<span class="sRepayingMoeny"></span></div>
                  </li>
                  <li style="height:100px;">
                    <div style="width:100%;line-height:28px;">
                      借款人承诺：在网络借贷信息中介平台（含本平台）借款总余额符合以下规定：同一自然人在不同网络借贷信息中介机构平台借款总余额不超过100万元；同一法人或其他组织在不同网络借贷信息中介机构平台借款总余额不超过500万元。
                    </div>
                  </li>
                  <li style="background:transparent;">
                    <div>借款人信息收集时间 ：<span class="sShangBiaoTime"></span></div>
                  </li>
                </ol>
              </div>
              <!-- 担保物信息 -->
              <div class="detail_enterprise box">
                <h3>担保物信息</h3>
                <ol>
                  <li>
                    <div>担保物类型：<span class="sDanBaoType"></span></div>
                    <div>车辆型号：<span class="sCheJiaNum"></span></div>
                  </li>
                  <li>
                    <div style="width:420px;">车牌号码：<span class="sMechanismCode"></span></div>
                    <div style="width:420px;">车辆首次登记时间：<span class="sEnterpriseName"></span></div>
                  </li>
                  <li>
                    <div>车辆品牌 ：<span class="sCarBrand"></span></div>
                    <div>新车价格：<span class="sNewCarPrice"></span></div>
                  </li>
                  <li>
                    <div>行驶里程：<span class="sKilometer"></span></div>
                    <div>评估价格：<span class="sPGPrice"></span></div>
                  </li>
                  <li style="background:transparent;">
                    <div>担保物信息收集时间 ：<span class="sShangBiaoTime"></span></div>
                  </li>
                </ol>
              </div>
              <!-- 借款人人行征信 -->
              <div class="detail_enterprise box">
                <h3>借款人人行征信</h3>
                <ol>
                  <li style="height:95px;">
                    <div class="sEnterprise" style="width:100%;line-height:20px;padding:20px 0;">
                    </div>
                  </li>
                  <li style="background:transparent;">
                    <div>人行征信信息收集时间 ：<span class="sShangBiaoTime"></span></div>
                  </li>
                </ol>
              </div>
              <!-- 审核内容 -->
              <div class="detail_enterprise box">
                <h3>审核内容</h3>
                <ol>
                  <li>
                    <div><p class="check_title">身份证：</p><span class="mo_checked">已审核</span></div>
                    <div><p class="check_title">法院执行网查：</p><span class="mo_checked">已审核</span></div>
                  </li>
                  <li>
                    <div style="width:420px;">
                      <p class="check_title">风控网查：</p><span class="mo_checked">已审核</span>
                    </div>
                    <div style="width:420px;">
                      <p class="check_title">担保物审核：</p><span class="mo_checked">已审核</span>
                    </div>
                  </li>
                  <li>
                    <div><p class="check_title">GPS安装 ：</p><span class="mo_checked">已审核</span></div>
                    <div><p class="check_title">担保物评估：</p><span class="mo_checked">已审核</span></div>
                  </li>
                  <li>
                    <div><p class="check_title">保单：</p><span class="mo_checked">已审核</span></div>
                    <div><p class="check_title">违章查询：</p><span class="mo_checked">已审核</span></div>
                  </li>
                  <li></li>
                </ol>
              </div>
              <!-- 借款人信息 -->
              <div class="detail_person box">
                <h3>借款人信息</h3>
                <ol>
                  <li>
                    <div>主体性质：<span class="sNature"></span></div>
                    <div>所属行业：<span class="sHangYe"></span></div>
                  </li>
                  <li>
                    <div style="width:420px;">借款人每月总收入：<span class="sZShouRu"></span></div>
                    <div style="width:420px;">年龄：<span class="sAge"></span></div>
                  </li>
                  <li>
                    <div>证件号码 ：<span class="sCardID"></span></div>
                    <div>婚姻状况：<span class="sMarital"></span></div>
                  </li>
                  <li>
                    <div>姓名：<span class="sJKRName"></span></div>
                    <div>平台历史逾期次数：<span class="sLateCount sLateCount_person"></span></div>
                  </li>
                  <li>
                    <div>学历：<span class="sXueLi"></span></div>
                    <div>平台历史还款次数：<span class="sRepaymentCount"></span></div>
                  </li>
                  <li>
                    <div>性别：<span class="sSex"></span></div>
                    <div>本平台还款中金额：<span class="sRepayingMoeny"></span></div>
                  </li>
                  <li>
                    <div style="width:420px;">平台历史逾期三天以上次数：<span class="sLateCountLarge3"></span></div>
                    <div style="width:420px;">平台当前逾期金额：<span class="sCurrentLateMoney"></span></div>
                  </li>
                  <li style="height:100px;">
                    <div style="width:100%;line-height:28px;">
                      借款人承诺：在网络借贷信息中介平台（含本平台）借款总余额符合以下规定：同一自然人在不同网络借贷信息中介机构平台借款总余额不超过100万元；同一法人或其他组织在不同网络借贷信息中介机构平台借款总余额不超过500万元。
                    </div>
                  </li>
                  <li style="background:transparent;">
                    <div>借款人信息收集时间 ：<span class="sShangBiaoTime"></span></div>
                  </li>
                </ol>
              </div>
              <!-- 担保物信息 -->
              <div class="detail_person box">
                <h3>担保物信息</h3>
                <ol>
                  <li>
                    <div>担保物类型：<span class="sDanBaoType"></span></div>
                    <div>车辆型号：<span class="sCheJiaNum"></span></div>
                  </li>
                  <li>
                    <div style="width:420px;">车牌号码：<span class="sLicense"></span></div>
                    <div style="width:420px;">车辆首次登记时间：<span class="sCarNianXian"></span></div>
                  </li>
                  <li>
                    <div>车辆品牌 ：<span class="sCarBrand"></span></div>
                    <div>新车价格：<span class="sNewCarPrice"></span></div>
                  </li>
                  <li>
                    <div>行驶里程：<span class="sKilometer"></span></div>
                    <div>评估价格：<span class="sPGPrice"></span></div>
                  </li>
                  <li style="background:transparent;">
                    <div>担保物信息收集时间 ：<span class="sShangBiaoTime"></span></div>
                  </li>
                </ol>
              </div>
              <!-- 借款人人行征信 -->
              <div class="detail_person box">
                <h3>借款人人行征信</h3>
                <ol class="person_auth">
                  <li>
                    <div style="width:420px;">贷款逾期笔数：<span class="sLoanOverdueNum"></span></div>
                    <div style="width:420px;">贷记卡逾期账户数：<span class="sDJKOverdueAccountNum"></span></div>
                  </li>
                  <li>
                    <div style="width:420px;">贷款逾期月数：<span class="sLoanOverdueMonths"></span></div>
                    <div style="width:420px;">贷记卡逾期月份数：<span class="sDJKOverdueMonthNum"></span></div>
                  </li>
                  <li>
                    <div style="width:420px;">贷款单月最高逾期总额：<span class="sLoanMostOverdueMoney"></span></div>
                    <div style="width:420px;">贷记卡单月最高逾期总额：<span class="sDJKMostOverdueMoney"></span></div>
                  </li>
                  <li>
                    <div style="width:420px;">贷款最长逾期月数：<span class="sLoanMostOverdueMonths"></span></div>
                    <div style="width:420px;">贷记卡最长逾期月数：<span class="sDJKMostOverdueMonths"></span></div>
                  </li>
                  <li>
                    <div style="width:420px;">
                      准贷记卡60天以上透支账户数：<span class="sZJKOverdueAccountNum"></span>
                    </div>
                    <div style="width:420px;">
                      未结清贷款最近6个月平均应还款：<span class="sUnSettle6YueYinHuan"></span>
                    </div>
                  </li>
                  <li>
                    <div style="width:420px;">准贷记卡60天以上透支月份数：<span class="sZJKOverdueMonthNum"></span></div>
                    <div style="width:420px;">
                      未销户贷记卡最近6个月平均使用额度：<span class="sUnXiaoHuDJK6YueuseMoeny"></span>
                    </div>
                  </li>
                  <li>
                    <div style="width:420px;">准贷记卡单月最高透支余额：<span class="sZJKMostOverdueMoney"></span></div>
                    <div style="width:420px;">
                      未销户准贷记卡最近6个月平均透支金额：<span class="sUnXiaoHuZJK6YueuseMoeny"></span>
                    </div>
                  </li>
                  <li>
                    <div style="width:420px;">准贷记卡最长透支月数：<span class="sZJKMostOverdueMonths"></span></div>
                  </li>
                  <li id="no_auth" style="display:none;">
                    <div style="width:420px;">
                      借款人未授权调取，暂无法披露<span class="sZJKMostOverdueMonths"></span>
                    </div>
                  </li>
                  <li style="background:transparent;">
                    <div>人行征信信息收集时间 ：<span class="sShangBiaoTime"></span></div>
                  </li>
                </ol>
              </div>
              <!-- 审核内容 -->
              <div class="detail_person box">
                <h3>审核内容</h3>
                <ol>
                  <li>
                    <div><p class="check_title">身份证：</p><span class="mo_checked">已审核</span></div>
                    <div><p class="check_title">法院执行网查：</p><span class="mo_checked">已审核</span></div>
                  </li>
                  <li>
                    <div style="width:420px;">
                      <p class="check_title">风控网查：</p><span class="mo_checked">已审核</span>
                    </div>
                    <div style="width:420px;">
                      <p class="check_title">担保物审核：</p><span class="mo_checked">已审核</span>
                    </div>
                  </li>
                  <li>
                    <div><p class="check_title">GPS安装 ：</p><span class="mo_checked">已审核</span></div>
                    <div><p class="check_title">担保物评估：</p><span class="mo_checked">已审核</span></div>
                  </li>
                  <li>
                    <div><p class="check_title">保单：</p><span class="mo_checked">已审核</span></div>
                    <div><p class="check_title">违章查询：</p><span class="mo_checked">已审核</span></div>
                  </li>
                  <li style="background-color: #F6FBFD;height: 0px;"></li>
                </ol>
              </div>
            </div>
            <!-- 出借记录 -->
            <div class="info project_record" style="display:none;">
              <div class="box recordBox">
                <table id="invest_list" cellspacing="0" cellpadding="0">
                  <tr>
                    <th>序号</th>
                    <th></th>
                    <th>出借人</th>
                    <th>出借金额</th>
                    <th>出借时间</th>
                    <th>来源</th>
                  </tr>
                </table>
              </div>
            </div>
            <!-- 还款计划 -->
            <div class="info project_record" style="display:none;">
              <div class="box repayBox">
                <table id="repay_list" cellspacing="0" cellpadding="0">
                  <tr>
                    <th>期数</th>
                    <th>协议约定还款日</th>
                    <th>预计最晚还款时间</th>
                    <th>协议约定还款本息（元）</th>
                    <th>状态</th>
                  </tr>
                </table>
              </div>
            </div>
            <!-- 项目信息变化 -->
            <div class="info project_record" style="display:none;">
              <div class="box projectInfo">
                <h3>借款项目正在还款中，项目有关信息变化如下 :</h3>
                <ol>
                  <li>
                    <div>借款资金运用情况：<span id="sYongTu"></span></div>
                    <div>借款人逾期情况：<span id="sOverdueStatus"></span></div>
                  </li>
                  <li>
                    <div>借款人经营状况及财务状况：<span id="sJYStatus"></span></div>
                    <div>借款人涉诉情况：<span id="sSheSuStatus"></span></div>
                  </li>
                  <li>
                    <div>借款人还款能力变化情况：<span id="sRepaymentAbility"></span></div>
                    <div>借款人受行政处罚：<span id="sChuFaStatus"></span></div>
                  </li>
                </ol>
              </div>
            </div>
            <!-- 未登录 -->
            <div id="not_logined" style="display:none;">
              <div class="unloginBox">
                <div class="wdl_zw">
                  <img src="../../../assets/img/Invest/wdl.png"/>
                  <p><a class="pd_0001_a_login">登录</a>后即可查看完整信息</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="fix" style="display: none;">
        <div class="fixCon">
          <ul class="clearfix">
            <li>协议约定年利率<span class="red"><i id="i_yearrate"></i>%</span></li>
            <li>期限<span class="red"><i id="i_month"></i>月</span></li>
            <li>剩余可投<span class="black">50000.00</span>元</li>
            <li>预计最大收益<span class="black">50000.00</span>元</li>
            <li>
              <div>
                <input type="text" placeholder="100元整数倍" class="tzInput">
                <input type="button" placeholder="" value="全投" class="fullBtn">
              </div>
              <button>立即出借</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
  import * as getApi from "../../../api"
  import Header from "../../common/Header"
  import FixedHeader from "../../common/FixedHeader"
  import Footer from "../../common/Footer"

  export default {
    name: "InvestDetail",
    components: {
      FixedHeader,
      Header,
      Footer
    },
    data() {
      return {
        isLoading: true
      }
    },
    methods: {
      async getData() {
        console.log(this.$route.query.loansn)
        let projects = await getApi.getInvestDetail(this.$route.query.loansn)

        this.isLoading = false

        debugger
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>

<style scoped>
  input, select, option, textarea, button {
    outline: none;
  }

  .content {
    margin-top: 60px;
    position: relative;
    flex: 1 0 auto;
  }

  body {
    font-family: "Microsoft YaHei";
  }

  #no_data {
    margin-top: 60px;
  }

  #common_no_data {
    margin-top: 20px;
  }

  /*banner*/
  .banBg {
    /*width: 100%;*/
    /*height: 330px;
    background: url(../../../assets/img/Invest/investBanner.png) no-repeat top center;*/
    /*margin-top: 80px;*/
    /*height: 204px;
    background: url(../../../assets/img/Invest/investBanner_new.jpg) no-repeat top center;*/
  }

  .banBg .ban {
    width: 1200px;
    height: 204px;
    margin: 0 auto;
    position: relative;
  }

  .openBtn {
    border: 0;
    width: 100%;
    height: 145px;
    /*border: 1px solid #FC4C4C;
    border-radius: 5px;
    font-size: 14PX;
    color: #FC4C4C;
    background-color: #ffffff;*/
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    line-height: 30px;
    text-indent: -9999px;
  }

  /*.banBg .openBtn:hover {
      border: 0;
      background-color: #FC4C4C;
      color: #ffffff;
  }*/

  /*公共样式*/
  .wrap {
    /*width:1200px;*/
    /*margin: 0 auto 60px;*/
  }

  .listBox {
    /*height: 204px;*/
    background: url(../../../assets/img/Invest/investBanner_new.jpg) no-repeat top center;
  }

  .mainCon {
    width: 1200px;
    min-height: 550px;
    margin: 0 auto;
    padding-top: 146px;
  }

  .new {
    /*margin-top: 40px !important;*/
  }

  /*头部筛选*/
  .choose {
    width: 100%;
    background-color: #ffffff;
  }

  .choose .chooseType {
    height: 58px;
    padding: 0 25px 0 25px;
    font-size: 14px;
    font-weight: 500;
    line-height: 58px;
    font-family: "SourceHanSerifCN-Regular";
  }

  .choose .chooseType li {
    width: 190px;
    float: left;
    cursor: pointer;
  }

  .choose .chooseType li:hover a {
    color: #FB4251;
  }

  .choose .chooseType li:hover i {
    display: block;
    width: 42px;
    height: 2px;
    background-color: #FB4251;
  }

  .choose .chooseType li a {
    color: #535353;
  }

  .choose .chooseType li.red a {
    color: #FB4251;
  }

  .choose .chooseType li.red i {
    display: block;
    width: 42px;
    height: 2px;
    background-color: #FB4251;
  }

  .choose .chooseSearch {
    padding: 5px 25px 0 25px;
    font-size: 14px;
    color: #333333;
    position: relative;
  }

  .choose .chooseSearch ul {
    border-top: 1px solid #F8F8F8;
    padding: 25px 0 30px 0;
  }

  .choose .chooseSearch li {
    margin-bottom: 30px;
  }

  .choose .chooseSearch li:last-child {
    margin-bottom: 0;
  }

  .choose .chooseSearch label {
    display: inline-block;
    width: 190px;
  }

  .choose .chooseSearch span {
    display: inline-block;
  }

  .choose .chooseSearch span a {
    display: inline-block;
    width: 75px;
    margin-right: 50px;
    text-align: center;
    color: #333333;
  }

  .choose .chooseSearch span a.on {
    color: #FB4251;
  }

  .choose .chooseSearch .clickBtn {
    width: 116px;
    height: 32px;
    background-color: #ffffff;
    border-radius: 5px;
    position: absolute;
    left: 50%;
    margin-left: -58px;
    text-align: center;
    cursor: pointer;
  }

  .choose .chooseSearch .clickBtn span {
    line-height: 32px;
    font-size: 14px;
    color: #333333;
  }

  .choose .chooseSearch .clickBtn span:hover {
    color: #FB4251;
  }

  .choose .chooseSearch .clickBtn em {
    display: inline-block;
    width: 5px;
    height: 4px;
    margin-left: 10px;
    vertical-align: middle;
  }

  .choose .chooseSearch .clickBtn em.up {
    background: url(../../../assets/img/Invest/up.png) no-repeat top center;
  }

  .choose .chooseSearch .clickBtn em.down {
    background: url(../../../assets/img/Invest/down.png) no-repeat top center;
  }

  /*列表*/
  .list {
    margin-top: 20px;
  }

  .list .quickBar {
    padding: 0 25px;
  }

  .list .quickBar ul li {
    font-size: 14px;
    float: left;
    cursor: pointer;
    margin-right: 50px;
  }

  .list .quickBar ul li a {
    display: inline-block;
    color: #535353;
  }

  .list .quickBar ul li:hover a {
    color: #FB4251;
  }

  .list .quickBar ul li i {
    display: inline-block;
    width: 9px;
    height: 12px;
    background: url(../../../assets/img/Invest/px.png) no-repeat 0 0;
    margin-left: 5px;
    position: relative;
    top: 1px;
  }

  .list .quickBar ul li.on i {
    background-position: 0 -12px;
  }

  .list .quickBar ul li.off i {
    background-position: 0 -24px;
  }

  .list .listBox .bidList {
    background-color: #ffffff;
    margin: 20px 0 0 0;
  }

  .list .listBox a {
    display: block;
  }

  .list .listBox a dl {
    height: 100px;
    padding: 20px 60px 20px 25px;
    border-bottom: 1px solid #eeeeee;
  }

  .list .listBox a dl dd {
    font-size: 14px;
    color: #999999;
    float: left;
  }

  .list .listBox a dl .ddTit {
    color: #333333;
    width: 100%;
    height: 35px;
  }

  .list .listBox a dl .ddTit p {
    /*width: 280px;*/
    float: left;
    font-family: "SourceHanSerifCN-Regular";
  }

  .list .listBox a dl .ddTit div {
    width: 65px;
    height: 15px;
    border-radius: 15px;
    float: left;
    font-size: 12px;
    text-align: center;
    line-height: 15px;
  }

  .list .listBox a dl .ddTit div.hk_way {
    border: 1px solid #FF9F15;
    color: #FF9F15;
    margin-right: 10px;
  }

  .list .listBox a dl .ddTit div.zx_way {
    border: 1px solid #FB4251;
    color: #FB4251;
    margin-right: 10px;
  }

  .list .listBox a dl .ddTit div.tz_way {
    border: 1px solid #FB4251;
    color: #FB4251;
  }

  .list .listBox a dl .ddRate {
    width: 105px;
    margin-right: 80px;
    text-align: center;
    line-height: 35px;
    position: relative;
  }

  .list .listBox a dl .ddTerm {
    width: 72px;
    margin-right: 92px;
    text-align: center;
    line-height: 35px;
  }

  .list .listBox a dl .s1 {
    font-size: 30px;
    color: #FB4251;
  }

  .list .listBox a dl .s2 {
    font-size: 18px;
    color: #FB4251;
  }

  .list .listBox a dl .s3 {
    font-size: 12px;
    color: #FF9F15;
    border: 1px solid #FF9F15;
    border-radius: 4px;
    padding: 0 5px;
    position: absolute;
    bottom: 10px;
    right: -40px;
    line-height: 18px;
  }

  .list .listBox a dl .s {
    font-size: 14px;
    color: #033333;
  }

  .list .listBox a dl .dd4 {
    width: 60px;
    margin-right: 135px;
    text-align: center;
    line-height: 35px;
  }

  .list .listBox a dl .dd4 {
    width: 88px;
    margin-right: 70px;
    text-align: center;
    line-height: 35px;
  }

  .list .listBox a dl .dd5 {
    width: 160px;
    text-align: center;
  }

  .list .listBox a dl .dd5 .ddCountdown,
  .list .listBox a dl .ddTime {
    height: 60px;
  }

  .list .listBox a dl .dd5 img {
    display: block;
    width: 26px;
    height: 26px;
    float: left;
    margin-right: 10px;
    margin-top: 17px;
  }

  .list .listBox a dl .dd5 em {
    float: left;
    font-size: 16px;
    color: #F23F40;
    line-height: 60px;
  }

  .list .listBox a dl .ddTime em {
    color: #FF9600;
  }

  /*进度条*/
  .list .listBox a dl .ddProgress {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    font-size: 14px;
    color: #FF9F15;
    position: relative;
  }

  .list .listBox a dl .ddProgress strong {
    position: relative;
    top: -42px;
    z-index: 10;
  }

  .list .listBox a dl .ddProgress strong i {
    font-style: normal;
  }

  .list .listBox a dl .ddBtn {
    width: 125px;
    float: right;
  }

  .list .listBox a dl .ddBtn button {
    width: 125px;
    height: 40px;
    border: 1px solid rgba(255, 159, 21, 1);
    border-radius: 5px;
    background-color: transparent;
    margin-top: 10px;
    color: #FF9F15;
  }

  .bidList a:hover {
    background-color: #FFF8EE;
  }

  .list .listBox .bidList a:hover .change_color {
    background-color: #FF9F15;
    color: #ffffff;
  }

  /*.change_color:hover {
      background-color: #FF9F15;
      color: #ffffff;
  }*/

  .over {
    border: none !important;
    color: #AAAAAA;
  }

  .repaying {
    border: none !important;
  }

  /*占位图*/
  .zwt {
    height: 380px;
    text-align: center;
    font-size: 14px;
    color: #999999;
    margin-top: 32px;
    padding-top: 100px;
  }

  .zwt p {
    margin-top: 12px;
  }

  /*标的详情*/
  .bg {
    height: 418px;
    background: url('../../../assets/img/Invest/detail_bg.png') no-repeat top center;
  }

  .detailBox {
    width: 1200px;
    margin: 0px auto 80px;
  }

  .sell {
    height: 400px;
    background-color: #ffffff;
    box-shadow: 0px 5px 5px 0px rgba(183, 183, 183, 0.05);
    margin-top: -365px;
  }

  .sell .conL {
    width: 790px;
    height: 400px;
    float: left;
  }

  .sell .conL .title {
    height: 16px;
    padding: 18px 55px 18px 50px;
    border-bottom: 1px dashed #FEF4EB;
  }

  .sell .conL .title div {
    float: left;
  }

  .sell .conL .title div.tit {
    font-size: 14px;
    color: #000000;
    line-height: 16px;
    font-family: "SourceHanSerifCN-Regular";
  }

  .sell .conL .title div.way {
    font-size: 12px;
    color: #FF9D11;
    line-height: 14px;
    text-align: center;
    width: 64px;
    height: 14px;
    border: 1px solid rgba(255, 159, 21, 1);
    border-radius: 5px;
    margin: 0 12px;
  }

  .zx_way {
    font-size: 12px;
    color: #FF4251;
    line-height: 14px;
    text-align: center;
    width: 64px;
    height: 14px;
    border: 1px solid #FF4251;
    border-radius: 5px;
    margin: 0 12px 0 0;
  }

  .app_way {
    font-size: 12px;
    color: #9F60FD;
    line-height: 14px;
    text-align: center;
    width: 64px;
    height: 14px;
    border: 1px solid #9F60FD;
    border-radius: 5px;
    margin: 0 12px 0 0;
  }

  .sell .conL .title div.num {
    font-size: 12px;
    color: #999999;
    line-height: 16px;
  }

  .sell .conL .main {
    padding: 20px 55px 35px 50px;
  }

  .sell .conL .main .time {
  }

  .sell .conL .main .time span {
    display: inline-block;
    font-size: 12px;
    color: #999999;
    margin-right: 25px;
  }

  .debtCon .sell .conL .main .time span.repay_way {
    float: right;
    margin-right: 0;
  }

  .debtCon .sell .conL .main .time .qipao {
    vertical-align: top;
  }

  .sell .conL .main .time span i {
    font-style: normal;
    color: #333333;
  }

  .sell .conL .main .time em.orange {
    font-size: 16px;
    color: rgb(255, 150, 0);
  }

  .sell .conL .main .time em.red {
    font-size: 16px;
    color: rgb(242, 63, 64);
  }

  .sell .conL .main .time img {
    vertical-align: middle;
  }

  .sell .conL .main ul {
    margin-top: 30px;
  }

  .sell .conL .main ul li {
    float: left;
    font-size: 12px;
    color: #999999;
    margin-right: 142px;
    text-align: center;
  }

  .sell .conL .main ul li:last-child {
    margin-right: 0;
  }

  .debtCon .sell .conL .main ul li {
    width: 160px;
    margin-right: 132px;
  }

  .debtCon .sell .conL .main ul li:last-child {
    width: 100px;
    margin-right: 0;
  }

  .sell .conL .main ul li span {
    display: block;
    font-size: 36px;
    color: #FB4251;
    margin-bottom: 8px;
  }

  .sell .conL .main ul li span i {
    font-size: 18px;
    font-style: normal;
  }

  .sell .conL .main .progressBar {
    width: 685px;
    margin: 35px 0 30px 0;
    position: relative;
  }

  .sell .conL .main .progressBar .barOut {
    display: inline-block;
    width: 685px;
    height: 8px;
    background-color: #EEEEEE;
    border-radius: 4px;
  }

  .sell .conL .main .progressBar .barIn {
    display: block;
    height: 8px;
    background-color: #FF9A0B;
    border-radius: 4px;
  }

  .sell .conL .main .progressBar .percent {
    position: absolute;
    top: 15px;
    left: 48%;
    /*z-index: 20;*/
    font-size: 12px;
    color: #FF9B0C;
  }

  .sell .conL .main .surplus span {
    font-size: 12px;
    color: #999999;
    margin-right: 95px;
  }

  .sell .conL .main .surplus span:last-child {
    margin-right: 0;
    margin-left: 40px;
  }

  .sell .conL .main .surplus i {
    color: #333333;
    font-style: normal;
  }

  .sell .conL .main .surplus .initBtn {
    display: block;
    width: 100px;
    height: 40px;
    border: 1px solid rgba(255, 157, 17, 1);
    border-radius: 5px;
    color: #FF9D11;
    line-height: 40px;
    text-align: center;
    float: right;
    margin-top: -30px;
  }

  .sell .conL .main .surplus .initBtn:hover {
    background: #FF9D11;
    color: #fff;
  }

  .sell .conL .transfer {
    padding: 0 80px 0 50px;
    height: 70px;
  }

  .sell .conL .transfer li {
    float: left;
    font-size: 12px;
    color: #999999;
    text-align: center;
    margin-right: 90px;
  }

  .sell .conL .transfer li:last-child {
    margin-right: 0;
  }

  .sell .conL .transfer li span {
    display: block;
    font-size: 36px;
    color: #FB4251;
    margin-bottom: 8px;
  }

  .sell .conL .transfer li span.black {
    color: #333333;
  }

  .sell .conL .discount {
    padding: 50px 80px 50px 50px;
  }

  .sell .conL .discount span {
    display: inline-block;
    font-size: 12px;
    color: #999999;
    margin-right: 60px;
  }

  .sell .conL .discount span em {
    color: #333333;
  }

  .sell .conL .discount span em.orange {
    color: #FF9D16;
  }

  #hidden_countdown {
    color: #FF9D16;
    font-size: 16px;
  }

  .sell .conL .agreement {
    padding: 0 0 0 50px;
    font-size: 12px;
  }

  .sell .conL .agreement p {
    font-size: 12px;
    color: #666666;
  }

  .sell .conL .agreement p.xy {
    color: #999999;
  }

  .sell .conL .agreement p.xy a {
    color: #FF9D16;
    font-weight: bold;
  }

  /*.sell .conL .agreement p.xy a:hover {
      color: #FF9D16;
  }*/

  .debtCon .bor {
    margin: 12px 0 8px 0;
  }

  .bor {
    height: 1px;
    background-color: #F8F8F8;
    margin: 4px 0 8px 0;
  }

  .sell .conR {
    width: 410px;
    height: 400px;
    float: right;
    background-color: #FEF4EB;
    /*padding:15px 0;*/
  }

  .sell .conR p em {
    font-size: 16px;
    color: rgb(51, 51, 51);
  }

  .sell .conR .friendlyTip {
    font-size: 12px;
    color: #666666;
    padding: 0 30px;
  }

  .sell .conR .friendlyTip a {
    color: #999999;
    float: right;
  }

  .sell .conR .friendlyTip a:hover {
    color: #FF9F15;
  }

  .sell .conR .money {
    height: 22px;
    border-bottom: 1px dashed #ffffff;
    padding: 15px 28px 15px 28px;
    font-size: 14px;
    color: #666666;
  }

  .sell .conR .money p {
    text-align: center;
  }

  .sell .conR .money em {
    font-size: 16px;
    color: #333333;
  }

  .sell .conR .money span {
    float: left;
  }

  .sell .conR .money a {
    float: right;
    color: #666666;
  }

  .sell .conR .income {
    width: 300px;
    margin: 0 auto;
  }

  .sell .conR .guide {
    width: 220px;
    height: 180px;
    margin: 0 auto;
  }

  .sell .conR .dlImg {
    background: url(../../../assets/img/Invest/detail_out_lft.png) no-repeat center center;
  }

  .sell .conR .cj {
    background: url(../../../assets/img/Invest/cj.png) no-repeat center center;
  }

  .sell .conR .zr {
    background: url(../../../assets/img/Invest/zr.png) no-repeat center center;
  }

  .sell .conR .income p {
    font-size: 14px;
    color: #666666;
    text-align: center;
  }

  .sell .conR .income p a {
    color: #FB4251;
  }

  .sell .conR .interest {
    width: 290px;
    margin: 45px auto 40px;
  }

  .sell .conR .interest ul li:nth-child(1),
  .sell .conR .interest ul li:nth-child(2),
  .sell .conR .interest ul li:nth-child(3) {
    margin-bottom: 25px;
  }

  .sell .conR .interest ul li {
    font-size: 12px;
    color: rgb(102, 102, 102);
    float: left;
    width: 96px;
  }

  .sell .conR .interest ul li:nth-child(3n) {
    margin-right: 0;
  }

  .sell .conR .interest ul li span {
    display: block;
    margin-top: 5px;
    color: rgb(255, 150, 0);
  }

  .sell .conR .income .cj_box {
    width: 298px;
    height: 44px;
    background-color: rgb(255, 255, 255);
    margin: 20px auto 10px;
    border-width: 1px;
    border-style: solid;
    border-color: #e1e1e1;
    border-image: initial;
    border-radius: 5px;
  }

  .sell .conR .income .cj_box .tzInput {
    display: block;
    width: 125px;
    height: 44px;
    float: left;
    padding: 5px 0px 5px 5px;
  }

  .sell .conR .income .cj_box .fullBtn {
    width: 44px;
    height: 44px;
    font-size: 14px;
    color: rgb(245, 63, 76);
    line-height: 44px;
    text-align: center;
    float: left;
  }

  .sell .conR .income .cj_box .nowBtn {
    width: 120px;
    height: 44px;
    background-color: rgb(253, 78, 93);
    font-size: 16px;
    color: rgb(255, 255, 255);
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    float: right;
  }

  .autoBtn {
    width: 300px;
    height: 44px;
    background-color: rgb(253, 78, 93);
    font-size: 16px;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    margin: 20px 0 0 0;
    display: none;
  }

  .appBtn {
    width: 300px;
    height: 44px;
    background-color: rgb(253, 78, 93);
    font-size: 16px;
    color: rgb(255, 255, 255);
    border-radius: 5px;
    margin: 20px 0 0 0;
    display: none;
  }

  .cant_lend {
    background-color: #cccccc !important;
  }

  .sell .conR .cjImg {
    background: url(../../../assets/img/Invest/cj.png) center center no-repeat;
  }

  .sell .conR .cjImg {
    background: url(../../../assets/img/Invest/cj.png) center center no-repeat;
  }

  .sell .conR .btn {
    width: 300px;
    height: 45px;
    font-size: 16px;
    margin: 30px 0 10px 0;
    background-color: #F52F3E;
    color: #ffffff;
  }

  /*转让、流标按钮*/
  .sell .conR .zrBtn {
    background-color: #E8E8E8;
    color: #999999;
  }

  .bidDetail {
    margin: 65px 0 30px 0;
  }

  .bidDetail .detailTitle {
    width: 170px;
    float: left;
    border: 1px solid #E9E9E9;
    border-bottom: none;
  }

  .bidDetail .detailTitle span {
    display: block;
    height: 60px;
    font-size: 14px;
    color: #000000;
    text-align: center;
    line-height: 60px;
    border-bottom: 1px solid #E9E9E9;
    cursor: pointer;
    font-family: "SourceHanSerifCN-Regular";
  }

  .bidDetail .detailTitle span.current {
    background-color: #FB4251;
    color: #FFFEFE;
    position: relative;
  }

  .bidDetail .detailTitle span.current:after {
    content: "";
    position: absolute;
    right: 0;
    top: 24px;
    height: 0;
    width: 0;
    border-top: 6px solid transparent;
    border-right: 10px solid #ffffff;
    border-bottom: 6px solid transparent;
  }

  .bidDetail .detailCon {
    width: 990px;
    min-height: 430px;
    float: right;
  }

  .bidDetail .detailCon .info {
  }

  .bidDetail .detailCon .info ol li {
    height: 50px;
    padding: 0 15px;
  }

  .bidDetail .detailCon .info ol li:nth-child(odd) {
    background-color: #ffffff;
  }

  .bidDetail .detailCon .info ol li div {
    font-size: 12px;
    color: #666666;
    width: 420px;
    height: 50px;
    line-height: 50px;
    float: left;
  }

  .bidDetail .detailCon .info ol li:nth-child(2) div,
  .bidDetail .detailCon .info ol li:nth-child(7) div,
  .bidDetail .detailCon .info ol li:nth-child(8) div {
    width: 100%;
  }

  .bidDetail .detailCon .info ol li:last-child div {
    text-align: right;
    color: #999999;
    width: 880px;
  }

  .bidDetail .detailCon .info .projectInfo ol li div {
    font-size: 12px;
    color: #666666;
    width: 420px;
    height: 50px;
    line-height: 50px;
    float: left;
  }

  .bidDetail .detailCon .info .projectInfo ol li:last-child div {
    font-size: 12px;
    color: #666666;
    width: 420px;
    height: 50px;
    line-height: 50px;
    float: left;
    text-align: left;
  }

  .bidDetail .detailCon .infool li span {
    color: #000000;
  }

  .bidDetail .detailCon .info h3 {
    font-size: 13px;
    color: #000000;
    border-left: 4px solid #F53F4C;
    border-radius: 2px;
    padding-left: 10px;
    margin-bottom: 18px;
  }

  .bidDetail .detailCon .info .box {
    padding: 38px 45px 38px 45px;
    margin-bottom: 15px;
    background-color: #F6FBFD;
    min-height: 306px;
  }

  .unloginBox {
    padding: 38px 45px 38px 45px;
    margin-bottom: 15px;
    background-color: #F6FBFD;
  }

  .wdl_zw {
    width: 220px;
    margin: 60px auto 0;
    padding-bottom: 120px;
  }

  .wdl_zw p {
    font-size: 14px;
    color: #666666;
    font-weight: bold;
    text-align: center;
  }

  .wdl_zw p a {
    color: #FE4B5A;
  }

  .bidDetail .detailCon .info table {
    width: 100%;
  }

  .bidDetail .detailCon .info tr:nth-child(even) {
    background-color: #ffffff;
  }

  .bidDetail .detailCon .info tr th {
    font-size: 14px;
    color: #333333;
    padding: 15px 0;
  }

  .bidDetail .detailCon .info tr td {
    height: 50px;
    text-align: center;
    font-size: 14px;
    color: rgb(102, 102, 102);
  }

  .bidDetail .detailCon .info tr td:first-child {
    position: relative;
  }

  .bidDetail .detailCon .info .recordBox tr td:nth-child(2) {
    width: 150px;
  }

  .bidDetail .detailCon .info tr td u {
    display: inline-block;
    width: 45px;
    height: 19px;
    vertical-align: middle;
    margin-left: 10px;
  }

  .bidDetail .detailCon .info tr td u.icn_pt {
    background: url('../../../assets/img/Invest/icn_pt.png') no-repeat center center;
  }

  .bidDetail .detailCon .info tr td u.icn_by {
    background: url('../../../assets/img/Invest/icn_by.png') no-repeat center center;
  }

  .bidDetail .detailCon .info tr td u.icn_hj {
    background: url('../../../assets/img/Invest/icn_hj.png') no-repeat center center;
  }

  .bidDetail .detailCon .info tr td u.icn_bj {
    background: url('../../../assets/img/Invest/icn_bj.png') no-repeat center center;
  }

  .bidDetail .detailCon .info tr td u.icn_hej {
    background: url('../../../assets/img/Invest/icn_hej.png') no-repeat center center;
  }

  .bidDetail .detailCon .info tr td u.icn_zs {
    background: url('../../../assets/img/Invest/icn_zs.png') no-repeat center center;
  }

  .bidDetail .detailCon .info tr td u.icn_jz {
    background: url('../../../assets/img/Invest/icn_jz.png') no-repeat center center;
  }

  .bidDetail .detailCon .info tr td b {
    display: inline-block;
    width: 27px;
    height: 57px;
    vertical-align: middle;
    margin-left: 13px;
    margin-top: -5px;
  }

  .bidDetail .detailCon .info tr td b.st {
    background: url('../../../assets/img/Invest/st.png') no-repeat center center;
  }

  .bidDetail .detailCon .info tr td b.tp {
    background: url('../../../assets/img/Invest/tp.png') no-repeat center center;
  }

  .bidDetail .detailCon .info tr td b.wt {
    background: url('../../../assets/img/Invest/wt.png') no-repeat center center;
  }

  .bidDetail .detailCon .info tr td i {
    display: inline-block;
    width: 16px;
    height: 18px;
    vertical-align: middle;
    margin-right: 13px;
  }

  .bidDetail .detailCon .info tr td i.app {
    background: url('../../../assets/img/Invest/app.png') no-repeat center center;
  }

  .bidDetail .detailCon .info tr td i.wap {
    background: url('../../../assets/img/Invest/wap.png') no-repeat center center;
  }

  .bidDetail .detailCon .info tr td i.web {
    background: url('../../../assets/img/Invest/web.png') no-repeat center center;
  }

  .bidDetail .detailCon .info tr td i.auto {
    background: url('../../../assets/img/Invest/auto.png') no-repeat center center;
  }

  .fix {
    width: 100%;
    height: 70px;
    background-color: rgb(254, 244, 235);
    position: absolute;
    bottom: 0px;
    left: 0px;
    right: 0px;
    z-index: 10;
  }

  .fix .fixCon {
    width: 1200px;
    height: 30px;
    margin: 0 auto;
    padding: 20px 0;
  }

  .fix .fixCon ul li {
    float: left;
    margin-right: 40px;
    font-size: 14px;
    color: rgb(102, 102, 102);
    line-height: 30px;
  }

  .fix .fixCon ul li span.red {
    font-size: 18px;
    color: rgb(251, 66, 81);
  }

  .fix .fixCon ul li span {
    display: inline-block;
    margin-left: 15px;
  }

  .fix .fixCon ul li span.black {
    font-size: 24px;
    color: rgb(51, 51, 51);
  }

  .fix .fixCon ul li span i {
    font-style: normal;
    font-size: 30px;
    color: #FB4251;
  }

  .fix .fixCon ul li:last-child {
    margin-right: 0px;
    float: right;
  }

  .pagination {
    height: 30px;
    margin: 40px 0 50px 0;
  }

  .fix .fixCon ul li:last-child > div {
    width: 178px;
    height: 34px;
    float: left;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(191, 191, 191);
    border-image: initial;
    border-radius: 5px;
  }

  .fix .fixCon ul li:last-child > div .tzInput {
    width: 136px;
    height: 30px;
    float: left;
    padding: 2px 3px;
  }

  .fix .fixCon ul li:last-child > div .fullBtn {
    width: 34px;
    height: 34px;
    float: right;
    cursor: pointer;
    font-size: 12px;
    color: rgb(245, 63, 76);
    line-height: 34px;
    text-align: center;
  }

  .fix .fixCon ul li button {
    display: block;
    width: 106px;
    height: 36px;
    border-radius: 5px;
    background-color: #FB4251;
    font-size: 14px;
    color: #ffffff;
  }

  .fix .fixCon ul li button {
    display: block;
    width: 106px;
    height: 36px;
    background-color: rgb(251, 66, 81);
    font-size: 14px;
    color: rgb(255, 255, 255);
    float: right;
    margin-left: 5px;
    border-radius: 5px;
  }

  .check_title {
    width: 100px;
    display: inline-block;
  }

  .mo_checked:after {
    content: url("/Content/Img/Invest/checked.png");
    position: relative;
    top: 2px;
    left: 8px;
  }

  .fullBtn:hover {
    cursor: pointer;
  }

  .span_red {
    color: rgb(251, 66, 81);
  }

  .titleTips {
    width: 332px;
    padding: 4px;
    background: #ffffff;
    line-height: 30px;
    text-align: left;
    border-radius: 5px;
    font-size: 12px;
    z-index: 999;
    color: black;
    box-shadow: 2px 0px 10px #eeeeee;
    position: absolute;
    left: 320px;
  }

  .star {
    margin: 0 0 0 16px;
  }

  .important_mark {
    position: relative;
    top: -8px;
    left: 4px;
  }

  #div_popup {
    background-color: #ffffff;
    width: 480px;
    position: absolute;
    border-radius: 4px;
    padding: 4px 8px;
    box-shadow: 2px 0px 10px #eeeeee;
    height: 50px;
    line-height: 20px;
    display: none;
  }

  #popup_close {
    color: #000000;
  }

  .has_bank {
    display: none;
  }

  #btn_bank:hover {
    cursor: pointer;
  }

  .soon_accept:hover {
    cursor: pointer;
  }

  .listBox #no_data {
    margin: 40px 0 0 0;
    text-align: center;
    background: transparent;
  }

  .btn_disabled {
    background-color: #AAAAAA !important;
  }

  .ld_0001_a_recharge {
    background: #FED3CF;
    border-radius: 16px;
    color: #FB4251 !important;
    padding: 4px 16px;
  }

  .welfare {
    padding: 15px 28px;
  }

  .welfare p {
    font-size: 14px;
    color: #666666;
  }

  .welfare p a {
    color: #FF9600;
    float: right;
  }

  .welfare ul {
    margin: 20px 0;
  }

  .welfare ul li {
    width: 68px;
    height: 20px;
    background: rgba(255, 219, 222, 1);
    background: linear-gradient(92deg, rgba(255, 219, 222, 1) 0);
    float: left;
    font-size: 12px;
    color: #FD4E5D;
    line-height: 20px;
    text-align: center;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .welfare ul li.first_child {
    background: #E1E1E1;
    background: linear-gradient(92deg, rgba(225, 225, 225, 1) 0%);
    color: #999999;
  }

  .w_tk {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    z-index: 100;
  }

  .w_tk .w_tk_box {
    width: 600px;
    background: rgba(255, 255, 255, 1);
    border-radius: 5px;
    padding: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -187.5px 0 0 -300px;
  }

  .w_tk .w_tk_box span {
    font-size: 13px;
    color: #333;
    float: right;
    cursor: pointer;
  }

  .w_tk .w_tk_box .con {
    padding: 30px 35px;
  }

  .w_tk .w_tk_box .con h3 {
    font-size: 22px;
    color: #333333;
    text-align: center;
    font-weight: normal;
  }

  .w_tk .w_tk_box .con ul {
    margin-top: 35px;
  }

  .w_tk .w_tk_box .con ul li {
    height: 20px;
    line-height: 20px;
    margin-bottom: 20px;
  }

  .w_tk .w_tk_box .con ul li span:first-child {
    font-size: 14px;
    color: #666666;
    float: left;
  }

  .w_tk .w_tk_box .con ul li span:first-child i {
    font-size: 14px;
    color: #666;
    font-style: normal;
  }

  .w_tk .w_tk_box .con ul li span:last-child {
    font-size: 14px;
    color: #FF6058;
    float: right;
  }

  .w_tk ul li span:hover {
    cursor: default !important;
  }

  #redpacket_detail {
    margin-right: 20px;
  }

  #newtender {
    font-size: 12px;
    color: #FF9F15;
    border: 1px solid #FF9F15;
    border-radius: 12px;
    padding: 0 5px;
    position: absolute;
    top: 96px;
    left: 132px;
    line-height: 18px;
  }

  .question_mark:hover {
    cursor: pointer;
  }

  .repay_desc {
    color: #fb9600 !important;
    margin-left: 20px !important;
  }

  .repay_desc:hover {
    cursor: pointer;
  }
</style>
