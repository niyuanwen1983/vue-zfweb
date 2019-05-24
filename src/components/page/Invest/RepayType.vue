<template>
  <div>
    <input id="isX" type="checkbox" v-model="ckeckVal" @change="checkChanged">
    <label for="isX" style="color:black;">是否先息后本</label>
  </div>
</template>

<script>
export default {
  name: "RepayType",
  data() {
    return {
      ckeckVal: true
    };
  },
  methods: {
    checkChanged() {
      this.$store.dispatch("setIsX", this.ckeckVal);
    }
  }
}
</script>