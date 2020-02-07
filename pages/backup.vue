<template>
  <v-container class="pa-0" fluid>
    <v-container style="position: relative;" class="pa-0" fluid>
      <v-container class="full-height d-flex flex-column justify-center align-center">
        <v-row align="center" justify="center">
          <v-col cols="auto">
            <v-avatar size="320">
              <v-img class="bordered-img" :src="require('../assets/me.png')" max-height="600"></v-img>
            </v-avatar>
          </v-col>
          <v-col :cols="7">
            <h1 class="text-uppercase my-3">Hi there!</h1>
            <h1 class="display-2 text-uppercase white--text font-weight-black mb-3">
              <span class="first-name">I'm</span>
              <span class="last-name primary--text">Isaiah Hunter</span>
            </h1>
            <p
              class="mt-3"
            >I'm a UI/UX Designer and Developer based in New Jersey / New York. I aim to build beautifully functional web applications with consumers in mind first.</p>
            <div class="text-uppercase">
              <v-btn class="font-weight-bold primary mr-6 px-6" rounded large>
                <v-icon class="mr-3">mdi-account</v-icon>More About Me
              </v-btn>
              <v-btn class="font-weight-bold px-6" color="primary" rounded outlined large>
                <v-icon class="mr-3">mdi-briefcase</v-icon>Portfolio
              </v-btn>
            </div>
          </v-col>
        </v-row>
        <!-- <text-changer :texts="['A Chef', 'A Bro']"></text-changer> -->
      </v-container>
      <!-- <div class="secondary darken-1">
        <v-card>
          <v-container>
            <v-row>
              <v-col cols="12" sm="5">
                <v-img class="highlight-img" :src="require('../assets/me.png')" max-height="600"></v-img>
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
      </div>-->
      <!-- <div class="secondary darken-2">
        <v-container>
          <section-header title="Portfolio" caption="Gallery"></section-header>
          <v-tabs v-model="selected_filter" background-color="transparent" color="white">
            <v-tab>All</v-tab>
            <v-tab>UI/UX</v-tab>
            <v-tab>Graphic Design</v-tab>
            <v-tab>Web Dev</v-tab>
          </v-tabs>
          <v-row>
            <v-col v-for="(item, index) in sorted_projects" :key="index" cols="12" sm="3">
              <project :image="require('../assets/docks.jpg')"></project>
            </v-col>
          </v-row>
        </v-container>
      </div>-->
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
import TextChanger from '@/components/TextChanger'

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
    Project,
    TextChanger
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
    }
    // sorted_projects() {
    //   switch (this.selected_filter) {
    //     case 0:
    //       return this.projects
    //     case 1:
    //       return this.projects.filter(item => item.type === 'UI/UX')
    //     case 2:
    //       return this.projects.filter(item => item.type === 'Graphic Design')
    //     case 3:
    //       return this.projects.filter(item => item.type === 'Dev')
    //   }
    // }
  }
}
</script>

<style lang="scss" scoped>
.first-name,
.last-name {
  opacity: 0;
  display: inline-block;
}

.first-name {
  animation: first-name;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.last-name {
  animation: last-name;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

@keyframes first-name {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes last-name {
  from {
    opacity: 0;
    transform: translateX(20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
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
