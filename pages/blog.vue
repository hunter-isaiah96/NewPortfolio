<template>
  <v-container class="pa-0" fluid>
    <!-- <section-header title="Portfolio" caption="Projects I've Worked On"></section-header> -->

    <section-header title="Blog" caption="Blogs Posts and Podcasts"></section-header>
    <v-container>
      <v-breadcrumbs :items="items"></v-breadcrumbs>
      <v-row>
        <v-col v-for="(i, index) in 11" :key="index" :cols="index === 0 ? 8 : 4">
          <blog-grid-item
            title="A guide to rocky rocky mountain vacations"
            category="Destination"
            :type="index%2===0 ? 'Podcast' : 'Blog'"
          ></blog-grid-item>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
<script>
import SectionHeader from '@/components/SectionHeader'
import BlogGridItem from '@/components/BlogGridItem'
export default {
  components: {
    SectionHeader,
    BlogGridItem
  },
  data: () => ({
    items: [
      {
        text: 'Home',
        disabled: false,
        href: '/'
      },
      {
        text: 'Blog',
        disabled: true,
        href: '/blog'
      }
    ]
  })
}
</script>