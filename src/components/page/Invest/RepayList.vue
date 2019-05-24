<template>
  <div>
    <label style="color:black;">{{isX}}</label>
  </div>
</template>

<script>
export default {
  name: "RepayType",
  data() {
    return {
    }
  },
  computed:{
      isX(){
          return this.$store.getters.getIsX ? "先息后本" : "等额本息"
      }
  },
  methods: {
    checkChanged() {
      this.$store.dispatch("setIsX", ckeckVal);
    }
  }
}
</script>