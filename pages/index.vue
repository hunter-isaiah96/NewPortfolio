<template>
  <v-container class="pa-0" style="max-width: 1200px;">
    <v-container class="d-flex align-center justify-center header">
      <div class="text-center" style="padding-bottom: 64px;">
        <section-header title="Isaiah Hunter" caption="Hello, I'm"></section-header>
        <v-row class="font-weight-light" justify="center">
          <v-col class="tick" cols="auto">Graphic Designer</v-col>
          <v-col class="tick" cols="auto">Web Developer</v-col>
          <v-col class="tick" cols="auto">Tech Enthusiast</v-col>
        </v-row>
        <svg
          class="my-12 mouse"
          xmlns="http://www.w3.org/2000/svg"
          height="40pt"
          viewBox="-105 0 512 512.00002"
          width="40pt"
        >
          <path
            d="m150.601562 0c-83.042968 0-150.601562 67.558594-150.601562 150.601562v210.796876c0 83.042968 67.558594 150.601562 150.601562 150.601562 83.042969 0 150.601563-67.558594 150.601563-150.601562v-210.796876c0-83.042968-67.558594-150.601562-150.601563-150.601562zm119.882813 361.398438c0 66.101562-53.78125 119.882812-119.882813 119.882812-66.101562 0-119.882812-53.78125-119.882812-119.882812v-210.796876c0-66.101562 53.78125-119.882812 119.882812-119.882812 66.101563 0 119.882813 53.78125 119.882813 119.882812zm0 0"
          />
          <path
            class="touch-bar"
            d="m150.605469 101.851562c-8.484375 0-15.359375 6.875-15.359375 15.359376v70.695312c0 8.480469 6.875 15.359375 15.359375 15.359375 8.480469 0 15.359375-6.878906 15.359375-15.359375v-70.695312c0-8.484376-6.875-15.359376-15.359375-15.359376zm0 0"
          />
        </svg>
      </div>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="4" v-for="(i, index) in 6" :key="index">
          <div class="hexagon">
            <v-icon class="hex-icon" size="40" color="white">mdi-truck-fast-outline</v-icon>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import SectionHeader from '@/components/SectionHeader'
export default {
  components: {
    SectionHeader
  }
}
</script>

<style lang="scss" scoped>
$hexcolor: black;
.header {
  position: relative;
  height: calc(100vh - 64px);
}

.tick {
  opacity: 0;
  animation-name: words;
  animation-fill-mode: forwards;
  animation-duration: 1s;
  @for $i from 1 through 3 {
    &:nth-child(#{$i}) {
      animation-delay: #{1 + $i * 0.2}s;
    }
  }
}

.mouse {
  opacity: 0;
  animation: mouse;
  animation-duration: 3s;
  animation-fill-mode: forwards;
  animation-delay: 2s;
  position: absolute;
  bottom: 50px;
  left: 50%;
}

.touch-bar {
  opacity: 0;
  animation: mouse-track;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-delay: 3.7s;
}

.hexagon {
  position: relative;
  width: 90px;
  height: 51.96px;
  background-color: $hexcolor;
  margin: 25.98px 0;
  .hex-icon {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}

.hexagon:before,
.hexagon:after {
  content: '';
  position: absolute;
  width: 0;
  border-left: 45px solid transparent;
  border-right: 45px solid transparent;
}

.hexagon:before {
  bottom: 100%;
  border-bottom: 25.98px solid $hexcolor;
}

.hexagon:after {
  top: 100%;
  width: 0;
  border-top: 25.98px solid $hexcolor;
}

@keyframes mouse {
  from {
    opacity: 0;
    transform: translate(-50%, 20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

@keyframes words {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes mouse-track {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(40%);
  }
}
</style>