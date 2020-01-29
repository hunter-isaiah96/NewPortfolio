<template>
  <v-img :src="image" aspect-ratio="1"></v-img>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    }
  }
}
</script>