<template>
  <div class="text-changer-wrapper">
    <span>
      <b class="display-3 font-weight-bold" v-for="(text, index) in texts" :key="index">{{ text }}</b>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    texts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.text-changer-wrapper {
  position: relative;
  width: 550px;
  span {
    overflow: hidden;
  }
  b {
    position: absolute;
    left: 0;
  }
}
</style>