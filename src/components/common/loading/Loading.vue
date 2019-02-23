<template>
  <div class="load-model" v-show="showLoading">
    <img src="../../../assets/img/Common/loading.gif" alt="loading...">
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    },
    props: {
      showLoading: false
    }
  }
</script>

<style scoped>
  .load-model {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9;
    /*background:rgba(255,255,255,0.8);*/
    /* background:rgba(0,0,0,0.6); */
  }

  .load-model > img {
    width: 12rem;
    height: 12rem;
    margin-top: -5rem;
  }
</style>

<!--

<template>
  <div v-if="isShow"><img src="../../../assets/img/Common/loading.gif" alt="">
    <p>加载中，请稍候......</p>
  </div>
</template>

<script>
  export default {
    name: "Loading",
    props: {
      isShow: Boolean
    }
  }
</script>

<style scoped>

</style>
-->
