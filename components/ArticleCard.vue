<template>
  <v-card flat tile light>
    <v-img class="white--text align-end" height="260px" :src="image"></v-img>
    <v-content class="pa-6">
      <v-card-text class="caption font-weight-bold black--text pb-0">{{
        date
      }}</v-card-text>
      <v-card-title
        class="font-weight-bold body-1 py-3"
        style="word-break: break-word;"
        >{{ title }}</v-card-title
      >
      <v-card-text
        style="line-height: 1.75;"
        class="pt-0 body-2 grey--text text--darken-2"
        >{{ description }}</v-card-text
      >
    </v-content>
    <!-- <v-card-actions>
      <v-btn color="primary" text>Read More</v-btn>
      <v-spacer></v-spacer>
      <v-card-subtitle>{{ date }}</v-card-subtitle>
    </v-card-actions> -->
  </v-card>
</template>
<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
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
