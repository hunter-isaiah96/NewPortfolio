<template>
  <v-container class="pa-0">
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
        <v-col>
          <svg
            width="150px"
            height="150px"
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <polygon
              style="fill:#000000"
              points="148,183.138438763306 52,183.138438763306 4,100 52,16.8615612366939 148,16.8615612366939 196,99.9999999999999 148,183.138438763306"
            />
            <v-icon color="white">mdi-truck-fast</v-icon>
          </svg>
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

.hexagon-wrapper {
  text-align: center;
  margin: 20px;
  position: relative;
  display: inline-block;
}

.hexagon {
  height: 100%;
  width: calc(100% * 0.57735);
  display: inline-block;
}

.hexagon:before {
  position: absolute;
  top: 0;
  right: calc((100% / 2) - ((100% * 0.57735) / 2));
  background-color: inherit;
  height: inherit;
  width: inherit;
  content: '';
  transform: rotateZ(60deg);
}

.hexagon:after {
  position: absolute;
  top: 0;
  right: calc((100% / 2) - ((100% * 0.57735) / 2));
  background-color: inherit;
  height: inherit;
  width: inherit;
  content: '';
  transform: rotateZ(-60deg);
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