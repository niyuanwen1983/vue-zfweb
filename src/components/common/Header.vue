<template>
  <header>
    <div class="headDiv">
      <div class="headLeft">
        <span class="color_red">欢迎来到智富贷！</span>
        <span class="color_black">上股交挂牌代码：202730</span>
      </div>
      <div class="" style="float:right;padding:10px 0 0 0;">
        <template v-if="!isLogined">
          <router-link to='/Login'>
            <a class="color_orange" href="javascript:void(0);">登录</a>
          </router-link>
        </template>
        <template v-else>
          <span class="username">{{userName}}</span>
        </template>
        <span class="vertical_line"></span>
        <a class="color_orange" href="/Login/regist" v-if="!isLogined">注册</a>
        <a class="logout" style="display:none;" href="/Login/SignOut">退出</a>
        <a class="color_black new_guide" href="/More/guide">新手攻略</a>
        <a id="downloadapp" class="color_black" href="/DownLoad/appDownload">下载客户端</a><a class="cm_0001_a_risk"
                                                                                         href="https://w3.zhifudai.com/More/qalist?code=154570747943">风险提示</a>
        <a class="color_black" href="/More/qadetail">客户服务</a><a class="cm_0001_a_welfare color_black"
                                                                href="/Account/welfareCenter">福利中心</a>
        <div class="downloadQR">
          <img src="{0}/Content/Img/Common/FT_tcode_02.png" alt="">
          <div class="downloadQR_right">
            <p class="p_app">智富贷投资APP</p>
            <div class="downloadQR_bar"></div>
            <p class="app_des">智慧投资 小额分散</p>
            <p class="app_des">高流动性 操作简便</p>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import * as common from '../../common/common'

  export default {
    name: "Header",
    data() {
      return {
        isLogined: false,
        userName: ''
      }
    },
    mounted() {
      if (!common.isEmpty(sessionStorage.getItem('name'))) {
        this.isLogined = true
        this.userName = sessionStorage.getItem('name')
      }
    }
  }
</script>

<style scoped>

</style>
