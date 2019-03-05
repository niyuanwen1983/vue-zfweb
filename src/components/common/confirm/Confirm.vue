<template>
  <transition name="fade">
    <div class="confirm-wrap" v-if="visible">
      <div class="confirm" :style="{marginTop:halfHeight+'px'}" style="padding:20px 0 0 0;">
        <div class="hd">
          {{title}}
          <i class="btn-close iconfont icon-close" @click="handleAction('close')"></i>
        </div>
        <div class="bd" style="font-size:20px;height:100px;margin:20px 0 0 0;">
          <i v-if="type!=''" class="icon-type iconfont" :class="'icon-'+type"></i>{{content}}
        </div>
        <div class="ft" style="text-align:center;">
          <a href="#" class="btn btn-primary" @click="handleAction('yes')">{{yesBtnText}}</a>
          <a href="#" class="btn btn-default" @click="handleAction('cancel')">{{cancelBtnText}}</a>
        </div>
      </div>
      <div class="backdrop" @click="handleAction('close')"></div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: "MyConfirm",
    data() {
      return {
        visible: false,
        title: '',
        content: '',
        yesBtnText: '确定',
        cancelBtnText: '取消',
        type: '',
        promiseStatus: null
      }
    },
    computed: {
      halfHeight: function () {
        debugger
        return (window.innerHeight - 234) / 2
      }
    },
    watch: {
      visible: function (curVal) {
        if (curVal && document.body.scrollHeight > window.innerHeight) {
          document.getElementsByTagName('body')[0].classList.add('backdrop-open');
        } else {
          document.getElementsByTagName('body')[0].classList.remove('backdrop-open');
        }
      }
    },
    methods: {
      confirm() {
        let _this = this;
        this.visible = true;
        return new Promise(function (resolve, reject) {
          _this.promiseStatus = {resolve, reject};
        });
      },
      handleAction(action) {
        this.visible = false;
        if (action == 'yes') {
          this.promiseStatus && this.promiseStatus.resolve();
        } else {
          this.promiseStatus && this.promiseStatus.reject();
        }
      }
    }
  }
</script>

<style scoped>
  .confirm-wrap {
    background: rgba(0, 0, 0, 0.3);
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .confirm {
    width: 500px;
    height: 214px;
    border-radius: 4px;
    background: #ffffff;
    z-index: 100;
    color: #000000;
    text-align: center;
    padding: 0 0 20px 0;
    margin: 0 auto;
  }

  .btn {
    width: 160px;
    height: 40px;
    margin: 40px;
    background: #fb4251;
    border-radius: 4px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
    font-weight: 400;
    color: rgba(255, 255, 255, 1);
    line-height: 40px;
    padding: 4px 20px;
  }
</style>
