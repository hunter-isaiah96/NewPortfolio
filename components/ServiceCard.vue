<template>
  <div>
    <v-card class="service-card py-6 pl-12" flat tile>
      <h4 class="pb-6">0{{ index }}</h4>
      <h2 class="mt-4">{{ title }}</h2>
      <p class="subtitle-1 mt-4">{{ description }}</p>
    </v-card>
  </div>
</template>
<script>
export default {
  props: {
    index: {
      type: Number,
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
<style lang="scss" scoped>
.service-card {
  border-right: 10px solid var(--v-primary-base);
}
h4 {
  border-bottom: 10px solid var(--v-primary-base);
}
</style>
