<template>
  <div
    class="my-12 text-center text-uppercase"
    :class="{ 'animate': animate }"
    v-intersect.once="animateText"
  >
    <h4 class="heading font-weight-regular">{{ title }}</h4>
    <h1 class="subtitle">{{ caption }}</h1>
  </div>
</template>
<script>
export default {
  data: () => ({
    animate: false
  }),
  props: {
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      required: true
    }
  },
  methods: {
    animateText(entries, observer, isIntersecting) {
      if (isIntersecting) {
        this.animate = true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.animate {
  .heading,
  .subtitle {
    opacity: 1;
    transform: translate(0);
  }
}
.heading {
  letter-spacing: 5px;
  opacity: 0;
  transform: translateY(-20px);
  transition: all 1s ease;
}

.subtitle {
  letter-spacing: 5px;
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s ease;
}
</style>
