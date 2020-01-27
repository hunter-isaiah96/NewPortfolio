<template>
  <v-card flat tile dark>
    <v-img
      class="white--text align-end"
      height="260px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    ></v-img>
    <v-card-subtitle>{{ date }}</v-card-subtitle>
    <v-card-title class="font-weight-bold" style="word-break: break-word;">{{ title }}</v-card-title>
    <v-card-text>{{ description }}</v-card-text>
    <v-card-actions>
      <v-btn color="primary" text>Read More</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: {
    date: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }
}
</script>