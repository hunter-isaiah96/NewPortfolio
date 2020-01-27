<template>
  <v-container class="pa-0" fluid>
    <v-img
      style="position: fixed; left: 0; top: 0; z-index: 0;"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
      :src="require('../assets/background.jpg')"
      height="100vh"
    ></v-img>
    <v-container style="position: relative;" class="pa-0" fluid>
      <v-container class="full-height d-flex flex-column justify-center align-center text-center">
        <v-avatar class="bordered-img" size="200">
          <v-img :src="require('../assets/me.jpg')"></v-img>
        </v-avatar>
        <h1 class="display-2 text-uppercase white--text font-weight-black mt-6">
          Isaiah
          <span class="primary--text">Hunter</span>
        </h1>
        <div class="white--text mt-6">
          I'm a
          <vue-typer :text="skills" erase-style="backspace" :erase-delay="70"></vue-typer>
        </div>
        <svg
          class="mt-12"
          height="40pt"
          viewBox="-105 0 512 512.00002"
          width="40pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m150.601562 0c-83.042968 0-150.601562 67.558594-150.601562 150.601562v210.796876c0 83.042968 67.558594 150.601562 150.601562 150.601562 83.042969 0 150.601563-67.558594 150.601563-150.601562v-210.796876c0-83.042968-67.558594-150.601562-150.601563-150.601562zm119.882813 361.398438c0 66.101562-53.78125 119.882812-119.882813 119.882812-66.101562 0-119.882812-53.78125-119.882812-119.882812v-210.796876c0-66.101562 53.78125-119.882812 119.882812-119.882812 66.101563 0 119.882813 53.78125 119.882813 119.882812zm0 0"
          />
          <path
            class="scroll-wheel"
            d="m150.605469 101.851562c-8.484375 0-15.359375 6.875-15.359375 15.359376v70.695312c0 8.480469 6.875 15.359375 15.359375 15.359375 8.480469 0 15.359375-6.878906 15.359375-15.359375v-70.695312c0-8.484376-6.875-15.359376-15.359375-15.359376zm0 0"
          />
        </svg>
      </v-container>
      <div class="secondary darken-1">
        <v-container class="d-flex align-center px-sm-12 py-12">
          <div>
            <h1 class="font-weight-regular">
              Hey! I'm
              <span class="primary--text font-weight-bold">Isaiah Hunter</span>,
            </h1>
            <p class="font-weight-light white--text text--darken-4 my-6">
              I'm a very passionate Web Developer with over 6 years of
              experience. I am very passionate about my work and treat every
              project as if it's my own. Starting this from being a hobby to my
              career allowed me to understand the problems in tech and how I can
              solve them. I try to make the process from development to delivery
              as seamless as possible.
            </p>
            <v-btn height="60" color="primary" depressed>Download Resume</v-btn>
            <v-btn height="60" href="#" depressed>Contact Me</v-btn>
          </div>
        </v-container>
      </div>

      <div class="secondary darken-2">
        <v-container class="px-sm-12 py-12">
          <div class="mb-12">
            <h1>Services</h1>
            <h3 class="grey--text text--lighten-2">I provide high quality services</h3>
          </div>
          <v-row>
            <v-col v-for="i in 3" :key="i" cols="12" sm="4">
              <service-card
                :index="i"
                title="Web Design"
                description="Web Design isn't just what your website looks like, it's how your website
        navigates, how it feels, the interactive experience. I supply you all you
        need to have a seemless website experience."
              ></service-card>
            </v-col>
          </v-row>
        </v-container>
        <v-container class="px-sm-12 py-12">
          <div class="mb-12">
            <h1>Lastest Blog Posts</h1>
            <h3 class="grey--text text--lighten-2">Check out recent blog posts</h3>
          </div>
          <v-row>
            <v-col v-for="i in 3" :key="i" cols="12" sm="4">
              <article-card
                date="January 27, 2020"
                title="How to Create a Great Logo for Your Business"
                description="If you're reading this, you probably plan to start a small
                  business or a side hustle very soon. And you probably have a
                  couple of questions."
              ></article-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-footer light>
        <v-container>
          <div class="mb-12">
            <h1>Contact</h1>
            <h3 class="grey--text text--darken-1">Reach out to me!</h3>
          </div>
          <v-row>
            <v-col cols="12" sm="6">
              <v-text-field label="Name" required></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
              <v-text-field label="Email" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea label="Message" auto-grow></v-textarea>
            </v-col>
            <v-col class="text-center" cols="12">
              <v-btn dark>Send Message</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-container>
    <div class="white"></div>
  </v-container>
</template>

<script>
import ArticleCard from '@/components/ArticleCard'
import ServiceCard from '@/components/ServiceCard'
export default {
  data: () => ({
    skills: [
      'Web Developer.',
      'Web Designer.',
      'Graphic Designer.',
      'Freelancer.'
    ]
  }),
  components: {
    ArticleCard,
    ServiceCard
  }
}
</script>

<style>
.scroll-down {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
