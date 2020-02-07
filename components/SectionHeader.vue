<template>
  <div
    class="my-6 text-center text-uppercase"
    :class="{ 'animate': animate }"
    v-intersect.once="animateText"
  >
    <h4 class="d-inline-block subtitle font-weight-regular" v-if="caption">{{ caption }}</h4>
    <h1 class="heading">{{ title}}</h1>
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
      type: String
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
.heading,
.subtitle,
.subtitle:after,
.subtitle:before {
  transition: all 1s ease-in-out;
}

.animate {
  .heading,
  .subtitle {
    opacity: 1;
    transform: translate(0);
  }
  .subtitle:before {
    transform: translate(0, -50%) scaleX(1);
  }
  .subtitle:after {
    transform: translate(0, -50%) scaleX(1);
  }
}

.heading {
  letter-spacing: 5px;
  opacity: 0;
  transform: translateY(20px);
}

.subtitle {
  position: relative;
  letter-spacing: 5px;
  opacity: 0;
  transform: translateY(-20px);
  z-index: 1;
  &:before,
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translate(0, -50%) scaleX(0);
    width: 120px;
    background-color: #000;
    height: 2px;
    transition-timing-function: cubic-bezier(0.8, 0, 0.45, 0.94);
  }

  &:before {
    left: -150px;
    transform-origin: 100%;
  }

  &:after {
    right: -150px;
    transform-origin: 0;
  }
  // span {
  //   position: relative;
  //   z-index: 100;
  //   background: white;
  // }
  // &::before {
  //   content: '';
  //   position: absolute;
  //   left: 50%;
  //   top: 50%;
  //   transform: translate(-50%, -50%) scale(0);
  //   width: 140%;
  //   height: 2px;
  //   background-color: #000;
  //   z-index: -100;
  //   transition: all ease 1s;
  // }
}
</style>
