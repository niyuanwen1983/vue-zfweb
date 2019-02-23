<template>
  <div class="content">
    <div class="loginBox">
      <div class="w1200 login_wrap">
        <div class="lg_0001_div_wrap">
          <div class="lg_0001_div_content clearfix">
            <div class="lg_0001_login_img">
              <img src="../../assets/img/Regist/banner_login.png"/>
            </div>
            <div class="lg_0001_login_panel">
              <div class="lg_0001_mobile_wrap">
                <ul>
                  <li class="has_bottom_border">
                    <img class="lg_0001_img_title" src="../../assets/img/Login/mobile.png">
                    <input class="tel" type="number" maxlength="11" placeholder="请输入您的手机号" v-model="userAccount">
                    <img class="lg_0001_img_okorno img_ok" src="../../assets/img/Login/ok.png" alt="">
                    <img class="lg_0001_img_okorno img_no" src="../../assets/img/Login/no.png" alt="">
                  </li>
                  <li class="has_bottom_border">
                    <img class="lg_0001_img_title" src="../../assets/img/Login/password.png">
                    <input class="pwd" type="password" placeholder="请输入登录密码" v-model="userPassword">
                    <a class="lg_0001_right_a">找回密码</a>
                    <img class="lg_0001_img_okorno img_ok" src="../../assets/img/Login/ok.png" alt="">
                    <img class="lg_0001_img_okorno img_no" src="../../assets/img/Login/no.png" alt="">
                  </li>
                  <li class="has_bottom_border">
                    <img class="lg_0001_img_title" src="../../assets/img/Login/invite_code.png">
                    <input class="pvc" id="GraphicVal" type="text" maxlength="4" placeholder="请输入图中字符">
                    <div class="img_cover">
                      <img src="/Login/GraphicVerifyCodeNew?t='+DateTime.Now.Ticks+'"
                           class="pictureCode img"/>
                      <i class="refresh" id="refresh"><img
                        src="../../assets/img/Regist/refresh.png"/></i>
                    </div>
                    <img class="lg_0001_img_okorno img_ok" src="../../assets/img/Login/ok.png" alt="">
                    <img class="lg_0001_img_okorno img_no" src="../../assets/img/Login/no.png" alt="">
                  </li>
                  <li class="has_bottom_border">
                    <img class="lg_0001_img_title" src="../../assets/img/Login/verify_code.png">
                    <input class="sms" type="text" maxlength="4" placeholder="请输入序号为**的验证码">
                    <input type="button" name="yzm" value="获取验证码" class="lg_0001_right_a2 yzm"
                           id="yzmbtn">
                    <img class="lg_0001_img_okorno img_ok" src="../../assets/img/Login/ok.png" alt="">
                    <img class="lg_0001_img_okorno img_no" src="../../assets/img/Login/no.png" alt="">
                  </li>
                  <li class="phone_code" style="height:20px;">
                    <p class="yyCode" style="display:none;">没有收到验证码，请使用<a id="yybtn">语音验证码</a></p>
                    <p class="yyCode sss" style="display: none;">请注意接听语音验证</p>
                  </li>
                  <li class="lg_0001_li_login" style="background:#FB4251;">
                    <a id="loginBtn" class="loginBtn" @click="doLogin">立即登录</a>
                  </li>
                  <li class="lg_0001_li_regist">
                    <p>没有账号？
                      <router-link to='/'>
                        <a href="javascript:void(0);">首页 ></a>
                      </router-link>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <a class="risk_link"
               href="https://w3.zhifudai.com/More/qalist?code=154570747943">《风险提示及承诺》</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import * as common from '../../common/common'
  import * as getApi from "../../api"

  export default {
    name: "Login",
    data() {
      return {
        userAccount: '',
        userPassword: ''
      }
    },
    methods: {
      /**
       * 登录
       */
      async doLogin() {
        debugger
        if (common.isEmpty(this.userAccount)) {
          alert('请输入账号！')
          return false
        }

        if (common.isEmpty(this.userPassword)) {
          alert('请输入密码！')
          return false
        }

        let res = await getApi.doLogin(this.userPassword, this.userPassword)
        sessionStorage.setItem('name', res.Info.name)
        sessionStorage.setItem('token', res.Token)

        debugger

        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  input {
    border: none;
    outline: none;
  }

  /*公共样式*/
  .wrap {
    margin-top: 40px;
  }

  .reg_wrap {
    margin-top: 100px;
  }

  .w1200 {
    width: 1200px;
    margin: 0 auto;
    padding: 40px 0;
  }

  body {
    font-family: "Microsoft YaHei";
  }

  .main {
    background-color: #ffffff;
    position: relative;
    flex: 1 0 auto;
  }

  a:hover {
    color: #FB4251 !important;
  }

  /*登录*/
  .loginBox {
    width: 100%;
    /*height: 640px;*/
    background: #f5f5f5;
    /*background: url(../../assets/img/Login/bg_login.png) no-repeat top center;*/
  }

  .login {
    width: 400px;
    height: 460px;
    background-color: #fff;
    float: right;
    margin-top: 60px;
  }

  .loginForm {
    padding: 30px 40px 20px 40px;
  }

  .loginForm h2 {
    font-size: 24px;
    color: #333;
    font-weight: normal;
  }

  .loginForm .inputBox {
    padding-top: 15px;
    height: 30px;
    border-bottom: 1px solid #E5E5E5;
    position: relative;
    font-size: 0;
  }

  .loginForm .errorTip {
    border-bottom: 1px solid #FB4251;
  }

  .loginForm .inputBox input {
    width: 160px;
    height: 30px;
  }

  .loginForm .inputBox input.yzm {
    background-color: none;
    color: #cccccc;
    text-align: right;
  }

  .loginForm .inputBox .tipL {
    width: 100%;
    height: 20px;
    font-size: 12px;
    color: #FB4251;
    line-height: 20px;
    text-align: right;
    position: absolute;
    left: 0;
    bottom: -21px;
  }

  .tipL {
    display: none;
  }

  .loginForm .loginDiv {
    margin: 10px 0 20px 0;
  }

  .loginForm .loginDiv a {
    display: block;
    font-size: 12px;
    color: #333333;
  }

  .loginForm .loginDiv a:hover {
    color: #FB4251;
  }

  .loginForm .loginDiv .loginBtn {
    width: 320px;
    height: 44px;
    background-color: #FB4251;
    border-radius: 4px;
    font-size: 18px;
    color: #ffffff;
    line-height: 44px;
    margin: 10px 0 13px 0;
  }

  .loginForm .loginDiv p {
    font-size: 0;
  }

  .loginForm .loginDiv p a {
    display: inline-block;
    width: 160px;
    font-size: 14px;
    color: #999999;
  }

  .loginForm .loginDiv p a:last-child {
    text-align: right;
  }

  .loginForm .loginOther div {
    border-top: 1px solid #F4F4F4;
  }

  .loginForm .loginOther div h6 {
    width: 128px;
    height: 16px;
    background-color: #ffffff;
    font-size: 12px;
    color: #cccccc;
    font-weight: normal;
    line-height: 16px;
    text-align: center;
    margin: -8px auto 0;
  }

  .loginForm .loginOther ul li {
    width: 88px;
    float: left;
    font-size: 12px;
    color: #999999;
    cursor: pointer;
  }

  .loginForm .loginOther ul {
    margin-top: 18px;
  }

  .loginForm .loginOther ul li i {
    display: inline-block;
    width: 20px;
    height: 20px;
    margin-right: 8px;
    vertical-align: middle;
  }

  .loginForm .loginOther ul li i.wx {
    background: url(../../assets/img/Regist/wx.png) no-repeat center center;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

  .loginForm .loginOther ul li i.qq {
    background: url(../../assets/img/Regist/qq.png) no-repeat center center;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

  .loginForm .loginOther ul li i.wb {
    background: url(../../assets/img/Regist/wb.png) no-repeat center center;
    -webkit-background-size: 100%;
    background-size: 100%;
  }

  .yyBox {
    height: 20px;
  }

  .yyBox .yyCode {
    font-size: 12px;
    color: #CCCCCC;
    text-align: left;
    line-height: 20px;
    /*display:none;*/
  }

  .yyBox .yyCode a {
    color: #FB4251;
  }

  .loginForm .img {
    display: block;
    width: 50px;
    height: 22px;
    float: right;
    position: relative;
  }

  .loginForm .refresh {
    display: block;
    width: 50px;
    height: 12px;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0px;
    right: 0px;
    z-index: 100;
    text-align: center;
    padding: 5px 0;
    display: none;
  }

  .img {
    display: block;
    width: 90px;
    height: 38px;
    float: right;
    position: relative;
  }

  /*微信扫码登录*/
  .loginWx {
    padding: 58px 100px 68px 100px;
    text-align: center;
  }

  .loginWx h4 {
    font-size: 16px;
    color: #333333;
    font-weight: normal;
  }

  .loginWx .ewm {
    width: 200px;
    height: 200px;
    margin: 44px 0 30px 0;
  }

  .loginWx .ewm img {
    display: block;
    width: 100%;
  }

  .loginWx .other {
    display: block;
    font-size: 14px;
    color: #4AA1FA;
    cursor: pointer;
  }

  /*注册，找回密码，授权绑定公共样式*/
  .tit {
    height: 50px;
    position: absolute;
    top: -50px;
    left: 0;
  }

  .tit h1 {
    width: 600px;
    height: 50px;
    float: left;
    font-size: 24px;
    color: #333333;
    font-weight: normal;
  }

  .tit p {
    width: 600px;
    height: 50px;
    float: right;
    font-size: 14px;
    color: #999999;
    text-align: right;
  }

  .tit p a {
    color: #4AA1FA;
  }

  .form {
    width: 460px;
    margin: 0 auto;
  }

  .form .inputBox {
    width: 420px;
    height: 40px;
    margin-bottom: 30px;
    position: relative;
  }

  .form .inputBox .sTit {
    display: inline-block;
    width: 95px;
    height: 40px;
    font-size: 14px;
    color: #333333;
    line-height: 40px;
    text-align: right;
  }

  .form .inputBox .sTit b {
    color: #FB4251;
    margin-right: 3px;
  }

  .form .inputBox input {
    width: 310px;
    /*height: 30px;*/
    border: 1px solid #E5E5E5;
    border-radius: 2px;
    padding: 11.5px 4px;
  }

  .form .errorTip input {
    border: 1px solid #FB4251;
  }

  .form .inputCheck {
    position: relative;
  }

  .form .inputCheck .tipR {
    right: 180px;
    top: 15px;
  }

  .form .inputBox input.yzm {
    width: 130px;
    height: 30px;
    border: none;
    border-left: 1px solid #E5E5E5;
    padding: 0;
    position: absolute;
    top: 6px;
    right: 2px;
    z-index: 10;
    color: #cccccc;
    cursor: pointer;
  }

  .yzm:hover {
    cursor: pointer;
  }

  .form .inputCheck {
    font-size: 12px;
    color: #666666;
    padding-left: 100px;
  }

  .form .inputCheck .check {
    vertical-align: middle;
  }

  .form .inputCheck a {
    color: #4AA1FA;
  }

  .form .btnBox {
    width: 320px;
    margin: 44px 0 0 100px;
  }

  .form .btnBox .btn {
    display: block;
    width: 320px;
    height: 50px;
    background-color: #FB4251;
    border-radius: 4px;
    font-size: 18px;
    color: #ffffff;
    cursor: pointer;
  }

  .form .tipR {
    width: 180px;
    height: 40px;
    position: absolute;
    top: 0;
    right: -200px;
    font-size: 14px;
    color: #FB4251;
    line-height: 40px;
    z-index: 10;
    display: none;
  }

  .form .tipR em {
    display: inline-block;
    width: 18px;
    height: 18px;
    background: url(../../assets/img/Regist/tipError.png) no-repeat center center;
    vertical-align: middle;
    margin-right: 5px;
  }

  /*注册账号*/
  .regist {
    height: 530px;
  }

  /*找回密码*/
  .forget {
    height: 468px;
  }

  /*授权绑定*/
  .bind {
    height: 598px;
  }

  .bind .bindName img {
    width: 60px;
    height: 60px;
    vertical-align: middle;
    margin-right: 20px;
  }

  .bind .bindName span {
    font-size: 28px;
    color: #666666;
  }

  .bind .bindName p {
    font-size: 12px;
    color: #666666;
    margin: 42px 0 32px 0;
  }

  .bind .btnBox a {
    display: inline-block;
    font-size: 12px;
    color: #4AA1FA;
    margin-top: 20px;
  }

  /*实名认证*/
  .certify {
    height: 468px;
  }

  .certify .tit span {
    display: inline-block;
    font-size: 14px;
    color: #999999;
    margin-left: 40px;
  }

  .certifyBox .tab {
    width: 301px;
    height: 40px;
    margin: 0 0 50px 505px;
    font-size: 0;
  }

  .certifyBox .tab .tabItem {
    display: inline-block;
    width: 150px;
    height: 32px;
    font-size: 18px;
    color: #cccccc;
    line-height: 32px;
    margin-top: 4px;
    cursor: pointer;
  }

  .certifyBox .tab .tabItem .current {
    color: #FB4251;
  }

  .certifyBox .tab .tabItem font {
    display: inline-block;
    width: 32px;
    height: 32px;
    margin-right: 8px;
    vertical-align: middle;
  }

  .certifyBox .tab .tabG {
    border-right: 1px solid #E5E5E5;
  }

  .certifyBox .tab .tabQ {
    text-align: right;
  }

  .certifyBox .tab .tabItem font.gr {
    background: url(../../assets/img/Regist/grayP.png) no-repeat center center;
  }

  .certifyBox .tab .tabItem font.qy {
    background: url(../../assets/img/Regist/grayE.png) no-repeat center center;
  }

  .certifyBox .tab .current {
    color: #FB4251;
  }

  .certifyBox .tab .current font.gr {
    background: url(../../assets/img/Regist/redP.png) no-repeat center center;
  }

  .certifyBox .tab .current font.qy {
    background: url(../../assets/img/Regist/redE.png) no-repeat center center;
  }

  .certifyBox .company .inputBox {
    width: 440px;
  }

  .certifyBox .company .inputBox .sTit {
    width: 115px;
  }

  /*选择用户属性*/
  .userAttr {
    height: 548px;
    border-top: none;
    padding-top: 0;
    border: 1px solid #EEEEEE;
  }

  .userAttr .tit span {
    display: inline-block;
    font-size: 14px;
    color: #999999;
    margin-left: 40px;
  }

  .userAttr .borrow {
    width: 1200px;
    height: 550px;
  }

  .userAttr .borrow > div {
    width: 600px;
    position: relative;
  }

  .userAttr .borrow .item {
    width: 600px;
    height: 550px;
  }

  .userAttr .borrow .wy {
    width: 244px;
    height: 70px;
    padding: 240px 178px 240px 178px;
    position: relative;
  }

  .userAttr .borrow > div:after {
    content: "";
    width: 1px;
    height: 550px;
    background-color: #EEEEEE;
    position: absolute;
    top: 0;
    right: 0;
  }

  .userAttr .borrow .item span {
    display: block;
    width: 243px;
    height: 70px;
    background-color: #F5F5F5;
    border-radius: 35px;
    font-size: 20px;
    color: #333333;
    line-height: 70px;
    text-align: center;
  }

  .userAttr .borrow .redBg {
    background: url(../../assets/img/Regist/invest.png) no-repeat center center;
  }

  .userAttr .borrow .yellowBg {
    background: url(../../assets/img/Regist/loan.png) no-repeat center center;
  }

  .userAttr .borrow .item > div {
    width: 300px;
    margin: 0 auto;
    padding-top: 130px;
    color: #ffffff;
    text-align: center;
  }

  .userAttr .borrow .item > div h3 {
    font-size: 70px;
  }

  .userAttr .borrow .item > div p {
    font-size: 18px;
    margin: 42px 0 75px 0;
  }

  .userAttr .borrow .item > div button {
    display: inline-block;
    width: 183px;
    height: 36px;
    background-color: #ffffff;
    border-radius: 18px;
    font-size: 16px;
    color: #F6534C;
  }

  /*银行存管开户*/
  .depository {
    height: 468px;
  }

  .depository .tit span {
    display: inline-block;
    font-size: 14px;
    color: #999999;
    margin-left: 40px;
  }

  .account .top {
    width: 845px;
    margin: 0 auto 65px;
  }

  .account .top .lft {
    display: inline-block;
    width: 300px;
  }

  .account .top .rgt {
    display: inline-block;
    width: 540px;
  }

  .account .top ul li {
    font-size: 14px;
    color: #999999;
  }

  .account .top .lft li {
    margin-bottom: 45px;
  }

  .account .top .rgt li {
    margin-bottom: 15px;
  }

  .account .top ul li span:first-child {
    display: inline-block;
    width: 120px;
  }

  .account .top ul li span:last-child {
    color: #333333;
    display: inline-block;
    width: 180px;
  }

  .account .top .rgt li p {
    font-size: 12px;
    padding-left: 120px;
  }

  .account .top .rgt li p a {
    color: #4AA1FA;
  }

  .account .btnBox {
    width: 845px;
    margin: 130px auto 0;
    text-align: center;
  }

  .account .btn {
    display: inline-block;
    width: 320px;
    height: 50px;
    background-color: #FB4251;
    border-radius: 4px;
    font-size: 18px;
    color: #ffffff;
  }

  .account .back {
    display: inline-block;
    font-size: 18px;
    color: #999999;
    margin-right: 40px;
    cursor: pointer;
  }

  .account .bottom {
    width: 1060px;
    height: 34px;
    background-color: #FFF0F1;
    margin: 0 auto;
    font-size: 0;
    color: #999999;
    line-height: 34px;
    padding: 0 50px;
  }

  .account .bottom p {
    width: 580px;
    display: inline-block;
    font-size: 12px;
  }

  .account .bottom a {
    width: 480px;
    display: inline-block;
    text-align: right;
    color: #4AA1FA;
    font-size: 12px;
  }

  .tipImg {
    display: inline-block;
    width: 16px;
    height: 16px;
    background: url(../../assets/img/Regist/tip.png) no-repeat center center;
    vertical-align: middle;
    margin-right: 8px;
  }

  /*开户*/
  .cj {
    height: 468px;
  }

  .cj div {
    width: 580px;
    margin: 80px auto 0;
  }

  .cj div p {
    font-size: 16px;
    color: #333333;
    text-align: center;
    line-height: 25px;
  }

  .cj div button {
    display: block;
    width: 240px;
    height: 50px;
    background: #FB4251;
    border-radius: 4px;
    font-size: 18px;
    color: #ffffff;
    margin: 60px auto 0;
  }

  .jk {
    height: 468px;
  }

  .jk div {
    width: 580px;
    margin: 80px auto 0;
  }

  .jk div p {
    font-size: 16px;
    color: #333333;
    text-align: center;
    line-height: 25px;
  }

  .jk div button {
    display: block;
    width: 240px;
    height: 50px;
    background: #FB4251;
    border-radius: 4px;
    font-size: 18px;
    color: #ffffff;
    margin: 60px auto 0;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }


  /*登陆成功弹框*/
  .success_tk {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, .5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 150;
    display: none;
  }

  .success_tk .success_box {
    width: 780px;
    height: 380px;
    background: #fff;
    padding: 50px 40px 50px 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -190px 0 0 -390px;
    z-index: 200;
  }

  .success_tk .success_box .title {

  }

  .success_tk .success_box .title i {
    display: inline-block;
    width: 120px;
    height: 5px;
    background: rgba(243, 243, 243, 1);
  }

  .success_tk .success_box .title span {
    display: inline-block;
    margin: 0 25px;
    font-size: 26px;
    color: #333;
  }

  .success_tk .success_box .title span label {
    color: #FB4251;
  }

  .success_tk .success_box .title span label b {
    font-size: 48px;
  }

  .success_tk .success_box .packet {
    width: 630px;
    margin: 40px auto;
  }

  .success_tk .success_box .packet img {
    display: block;
    width: 100%;
  }

  .success_tk .success_box .seeBtn {
    display: block;
    width: 300px;
    height: 44px;
    background: rgba(251, 66, 81, 1);
    border-radius: 4px;
    font-size: 18px;
    color: #fff;
    margin: 0 auto;
  }

  .success_tk .success_box .close {
    width: 42px;
    height: 42px;
    background: url('../../assets/img/Regist/close.png') no-repeat center center;
    position: absolute;
    top: 0;
    right: -60px;
    z-index: 200;
  }

  .form .btnBox .login2Btn {
    width: 150px;
    height: 44px;
    background: rgba(251, 66, 81, 1);
    border-radius: 4px;
    font-size: 18px;
    color: #fff;
    float: left;
  }

  .form .btnBox .regist2Btn {
    width: 150px;
    height: 44px;
    background: rgba(251, 66, 81, 1);
    border-radius: 4px;
    font-size: 18px;
    color: #fff;
    float: right;
  }

  /*注册协议和风险提示及承诺弹框*/
  .risk_tk {
    width: 780px;
    height: 545px;
    background-color: rgba(0, 0, 0, 0);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 150;
    display: none;
  }

  .risk_tk .risk_box {
    width: 700px;
    height: 445px;
    background: #fff;
    padding: 50px 40px 50px 40px;
    /*position: absolute;
    top: 50%;
    left: 50%;
    margin: -200px 0 0 -350px;*/
    z-index: 200;
    border-radius: 5px;
  }

  .risk_tk .risk_con {
    height: 400px;
    overflow: hidden;
    overflow-y: scroll;
    position: relative;
  }

  .risk_tk h2 {
    font-size: 16px;
    color: #FB4251;
    text-align: center;
    margin-bottom: 15px;
  }

  .risk_tk h3 {
    font-size: 14px;
    color: #333;
    margin-bottom: 10px;
  }

  .risk_tk .content-user,
  .risk_tk .riskNote {
    font-size: 12px;
    color: #666;
    margin-bottom: 10px;
  }

  .risk_tk .regAgree-item-tit,
  .risk_tk .riskNote-item-tit {
    margin-bottom: 6px;
  }

  .risk_tk .riskNote-item-content,
  .risk_tk .regAgree-text {
    margin-bottom: 6px;
  }

  .risk_tk .readBtn {
    display: block;
    width: 300px;
    height: 44px;
    background: #999;
    border-radius: 4px;
    font-size: 18px;
    color: #fff;
    margin: 20px auto 0;
  }

  .risk_tk .red {
    background: #FB4251;
  }

  .risk_tk .closeDown {
    font-size: 18px;
    position: absolute;
    top: 10px;
    right: 44px;
    z-index: 200;
    cursor: pointer;
  }

  .risk_tk .readProtocol {
    font-size: 12px;
  }

  .risk_tk .readProtocol input {
    -webkit-appearance: checkbox;
    width: 16px;
    height: 16px;
    vertical-align: -3px;
    margin-right: 5px;
  }

  .risk_tk .readProtocol a {
    color: #4AA1FA !important;
  }

  .rc_0001_p_title {
    color: #FB4251;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }

  .enterprise_account {
    color: #AAAAAA !important;
    text-align: center;
    position: absolute;
    top: 160px;
    left: 148px;
    display: none;
    font-size: 12px;
    padding-top: 0 !important;
  }

  .enterprise_account > p {
    font-size: 14px !important;
    margin: 0 !important;
    padding: 0;
  }

  /*新版登录*/
  .lg_0001_div_wrap {
    /*height:525px;*/
  }

  .lg_0001_div_content {
    /*float: left;*/
    /*width: 446px;*/
  }

  .login_wrap {
    padding: 50px 0 65px 0;
  }

  .lg_0001_login_img {
    width: 735px;
    float: left;
  }

  .lg_0001_login_img img {
    display: block;
    width: 100%;
  }

  .lg_0001_login_panel {
    background: #FFFFFF;
    /*border-radius: 16px;*/
    /*box-shadow: 2px 0 10px #EEEEEE;*/
    width: 464px;
    height: 463px;
    /*margin: 60px 0 0 0;*/
    padding: 60px 0 0 0;
    /*width: 446px;*/
    float: right;
    border: 1px dotted #9396a3;
    border-left: none;
    /*border-top:1px dotted #9396a3;
    border-right:1px dotted #9396a3;
    border-bottom:1px dotted #9396a3;*/
  }

  .lg_0001_div_slider {
    float: left;
    position: relative;
    width: 714px;
  }

  .lg_0001_img_logo {
    margin: 100px 0 0 20px;
  }

  .container {
    position: absolute;
    top: 180px;
    left: 0;
    /*width: 879px;*/
    /*width: 828px;*/
  }

  @media screen and (max-width: 1920px) {
    .container {
      width: 879px;
    }
  }

  @media screen and (max-width: 1680px) {
    .container {
      width: 877px;
    }
  }

  @media screen and (max-width: 1600px) {
    .container {
      width: 878px;
    }
  }

  @media screen and (max-width: 1440px) {
    .container {
      width: 865px;
    }
  }

  @media screen and (max-width: 1400px) {
    .container {
      width: 844px;
    }
  }

  @media screen and (max-width: 1366px) {
    .container {
      width: 828px;
    }
  }

  .slides li a {
    display: block;
    height: 291px;
    /*width: 879px;*/
  }

  .flexslider {
    height: 291px !important;
  }

  .lg_0001_tab_weixin {
    display: inline-block;
    font-size: 18px;
    position: relative;
    text-align: center;
    width: 216px
  }

  .lg_0001_tab_weixin:before {
    content: url('../../assets/img/Login/weixin.png');
    margin: 0 8px 0 0;
  }

  .lg_0001_tab_weixin:hover {
    cursor: pointer;
  }

  .lg_0001_tab_mobile {
    display: inline-block;
    font-size: 18px;
    position: relative;
    text-align: center;
    width: 216px
  }

  .lg_0001_tab_mobile:hover {
    cursor: pointer;
  }

  .lg_0001_selected_bar {
    height: 4px;
    width: 36px;
    background: #fc555b;
    position: absolute;
    bottom: -8px;
    left: 92px;
    display: none;
  }

  .lg_0001_selected_bar2 {
    height: 4px;
    width: 36px;
    background: #fc555b;
    position: absolute;
    bottom: -8px;
    left: 72px;
    display: none;
  }

  .selected .lg_0001_selected_bar {
    display: block;
  }

  .selected .lg_0001_selected_bar2 {
    display: block;
  }

  .unselected {
    color: #AAAAAA;
  }

  .lg_0001_crcode_wrap {
    margin: 40px auto 0;
    width: 260px;
    height: 270px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0 3px 24px 0 rgba(251, 68, 83, 0.1);
    border-radius: 5px;
    padding: 30px 40px;
  }

  .lg_0001_mobile_wrap {
    margin: 0 auto;
    width: 300px;
  }

  .lg_0001_mobile_wrap ul {
    margin: 30px auto 0 auto;
  }

  .lg_0001_mobile_wrap ul li.has_bottom_border {
    border-bottom: 1px solid #CBDDE7;
    height: 60px;
    position: relative;
  }

  .lg_0001_mobile_wrap ul li .lg_0001_img_title {
    position: absolute;
    top: 20px;
  }

  .lg_0001_mobile_wrap ul li input {
    position: absolute;
    top: 24px;
    left: 36px;
  }

  .lg_0001_img_okorno {
    display: none;
    position: absolute;
    top: 24px;
    left: 300px;
  }

  .phone_code {
    margin: 4px 0 0 0;
    text-align: right;
    visibility: hidden;
  }

  #yybtn {
    color: #FB4251;
  }

  #yybtn:hover {
    cursor: pointer;
  }

  .lg_0001_li_login {
    font-size: 18px;
    /*margin: 20px 0 0 0;*/
    text-align: center;
    width: 100%;
    height: 40px;
    background: linear-gradient(0deg, rgba(253, 50, 50, 0.83), rgba(255, 28, 22, 0.83));
    background: #FD3232;
    line-height: 40px;
  }

  .lg_0001_li_login:hover {
    cursor: pointer;
  }

  #loginBtn {
    color: #fff;
  }

  #loginBtn:hover {
    color: #fff !important;
  }

  .lg_0001_li_risk {
    margin: 20px 0 0 0;
    text-align: center;
  }

  .lg_0001_li_risk a {
    color: #AAAAAA;
  }

  .no_redirect:hover {
    cursor: default;
  }

  .lg_0001_right_a {
    color: #FB4251;
    font-size: 14px;
    position: absolute;
    top: 24px;
    left: 240px;
  }

  .lg_0001_right_a2 {
    color: #FB4251;
    position: absolute;
    top: 24px;
    left: 230px;
  }

  .lg_0001_li_regist {
    font-size: 14px;
    color: #999;
    text-align: right;
    margin-top: 20px;
  }

  .lg_0001_li_regist a {
    font-size: 16px;
    color: #FC565B;
    text-align: right;
  }

  .pictureCode {
    height: 22px;
    width: 50px;
  }

  .img_cover {
    height: 22px;
    position: absolute;
    top: 24px;
    left: 236px;
    width: 50px;
  }

  .refresh {
    display: none;
    width: 50px;
    height: 12px;
    background: rgba(0, 0, 0, 0.6);
    position: absolute;
    z-index: 100;
    text-align: center;
    padding: 5px 0;
  }

  #yzmbtn {
    font-size: 14px;
    left: 224px;
  }

  .counting {
    color: #AAAAAA;
  }

  /*微信扫码登录*/
  #div_wx > iframe {
    height: 392px;
    width: 260px;
  }

  div.title {
    display: none;
  }

  div.main {
    border-top: none;
    padding-top: 0;
  }

  .impowerBox .info {
    width: 260px;
    margin: 0 auto;
  }

  .impowerBox .qrcode {
    width: 192px !important;
  }

  @media screen and (max-width: 1366px) {
    .lg_0001_div_content {
      -webkit-transform: scale(0.88);
      -moz-transform: scale(0.88);
      -o-transform: scale(0.88);
      -ms-transform: scale(0.88);
      transform: scale(0.88);
    }

    .login_wrap {
      padding: 0;
    }
  }

  .risk_link {
    color: #aaaaaa;
    font-weight: bold;
    position: relative;
    top: -36px;
    left: 180px;
  }
</style>
