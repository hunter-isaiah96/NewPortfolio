<template>
  <v-container class="pa-0" fluid>
    <v-container style="position: relative;" class="pa-0" fluid>
      <v-container class="full-height d-flex flex-column justify-center align-center text-center">
        <h1 class="display-4 text-uppercase white--text font-weight-black mb-6">
          <span class="first-name">Isaiah</span>
          <span class="last-name primary--text">Hunter</span>
        </h1>
        <h3 class="text-uppercase">Web Developer, Designer and Graphic Artist</h3>
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
        <v-card>
          <v-container>
            <v-row>
              <v-col cols="12" sm="5">
                <v-img
                  class="highlight-img"
                  :src="require('../assets/me.png')"
                  width="100%"
                  max-width="100%"
                  max-height="600"
                ></v-img>
              </v-col>
              <v-col cols="12" sm="7">
                <h1 class="font-weight-regular">Isaiah Hunter</h1>
                <h4 class="font-weight-light">UI/UX Designer & Web Developer</h4>
                <div class="grey--text text--lighten-2 my-6">
                  <p>
                    I'm a very passionate Web Developer with over 6 years of
                    experience. I am very passionate about my work and treat
                    every project as if it's my own. Starting this from being a
                    hobby to my career allowed me to understand the problems in
                    tech and how I can solve them. I try to make the process
                    from development to delivery as seamless as possible.
                  </p>
                  <p>
                    If I'm not coding (which is probably like... 20% - 30% of
                    the time), I'm gaming, lifting weights, or hanging out with
                    friends. I enjoy downtime but tech is just something that
                    intrigues me so even after a long project, I still continue
                    learning new things. Check out some of my links!
                  </p>
                </div>
                <v-row>
                  <v-col v-for="i in 5" :key="i" cols="auto">
                    <v-btn elevation="0" fab small outlined>
                      <v-icon>mdi-instagram</v-icon>
                    </v-btn>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="6" sm="auto">
                    <v-btn width="100%" height="60" color="primary" depressed>Download Resume</v-btn>
                  </v-col>
                  <v-col cols="6" sm="auto">
                    <v-btn width="100%" height="60" href="#" depressed text>Contact Me</v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </div>
      <div class="secondary darken-2">
        <v-container>
          <section-header title="Portfolio" caption="Gallery"></section-header>
          <v-tabs v-model="selected_filter" background-color="transparent" color="white">
            <v-tab>All</v-tab>
            <v-tab>UI/UX</v-tab>
            <v-tab>Graphic Design</v-tab>
            <v-tab>Web Dev</v-tab>
          </v-tabs>

          <v-row>
            <v-col v-for="item in sorted_projects" :key="item.id" cols="12" sm="3">
              <project :image="require('../assets/docks.jpg')"></project>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <div class="secondary darken-2">
        <v-container>
          <section-header title="Services" caption="What I Do"></section-header>
          <v-row>
            <v-col v-for="i in 6" :key="i" cols="12" :sm="item_cols">
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
        <v-container>
          <section-header title="Latest Blog Posts" caption="Check out my blog"></section-header>
          <v-row>
            <v-col v-for="i in 4" :key="i" cols="12" :sm="blog_cols">
              <article-card
                :image="require('../assets/docks.jpg')"
                date="January 27, 2020"
                title="How to Create a Great Logo for Your Business"
                description="You probably plan to start a small
                  business or a side hustle very soon."
              ></article-card>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-footer light>
        <v-container>
          <section-header title="Contact" caption="Get in touch"></section-header>
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
              <v-btn depressed tile dark>Send Message</v-btn>
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
import SectionHeader from '@/components/SectionHeader'
import Project from '@/components/Project'

export default {
  data: () => ({
    skills: [
      'Web Developer.',
      'Web Designer.',
      'UI/UX Designer',
      'Graphic Designer.',
      'Freelancer.'
    ],
    selected_filter: 0,
    projects: [
      { type: 'UI/UX', id: '123' },
      { type: 'UI/UX', id: '321' },
      { type: 'Dev', id: '213' },
      { type: 'Graphic Design', id: '213' },
      { type: 'Dev', id: '213' },
      { type: 'Graphic Design', id: '213' }
    ]
  }),
  components: {
    ArticleCard,
    ServiceCard,
    SectionHeader,
    Project
  },
  mounted() {},
  computed: {
    drawer() {
      return this.$store.state.drawer.drawer
    },
    item_cols() {
      if (this.$vuetify.breakpoint.lg && this.drawer) {
        return 6
      }
      return 4
    },
    blog_cols() {
      if (this.$vuetify.breakpoint.lg && this.drawer) {
        return 6
      }
      return 3
    },
    sorted_projects() {
      switch (this.selected_filter) {
        case 0:
          return this.projects
        case 1:
          return this.projects.filter(item => item.type === 'UI/UX')
        case 2:
          return this.projects.filter(item => item.type === 'Graphic Design')
        case 3:
          return this.projects.filter(item => item.type === 'Dev')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.first-name {
  display: block;
  opacity: 0;
  transform: translateY(-20px);
  animation: first-name;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.last-name {
  display: block;
  opacity: 1;
  transform: translateY(20px);
  animation: last-name;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes first-name {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes last-name {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

// .highlight-img {
//   overflow: visible;
//   &:before {
//     content: '';
//     position: absolute;
//     bottom: -20px;
//     left: -20px;
//     width: 100%;
//     height: 100%;
//     background-color: white;
//     z-index: -1;
//     opacity: 0.3;
//   }
// }
</style>
