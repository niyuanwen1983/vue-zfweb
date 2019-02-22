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
