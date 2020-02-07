<template>
  <v-img :src="require('../assets/docks.jpg')" height="350" max-height="350" class="rounded-image">
    <v-row class="fill-height pa-5 bottom-gradient">
      <v-col cols="12">
        <v-icon color="white">{{typeFinal}}</v-icon>
      </v-col>
      <v-col class="white--text" align-self="end">
        <h6 class="overline font-weight-regular text-uppercase">{{category}}</h6>
        <h2 class="font-weight-bold text-capitalize">{{title}}</h2>
      </v-col>
    </v-row>
  </v-img>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  computed: {
    typeFinal() {
      switch (this.type) {
        case 'Podcast':
          return 'mdi-microphone'
        case 'Blog':
          return 'mdi-post'
      }
    }
  }
}
</script>