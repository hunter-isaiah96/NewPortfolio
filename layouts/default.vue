<template>
  <v-app>
    <v-app-bar max-height="64" flat>
      <v-container class="d-flex align-center">
        <v-toolbar-title class="text-uppercase font-weight-black">
          <nuxt-link class="black--text no-underline" to="/">Isaiah Hunter</nuxt-link>
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-container>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" width="50%" absolute temporary>
      <v-list class="pt-12" flat nav>
        <v-list-item-group v-model="item" color="primary">
          <v-list-item
            v-for="(item, index) in menu_items"
            :key="index"
            class="nav-item mb-6"
            :class="{ animate: drawer }"
            @click="drawer = !drawer"
          >
            <v-list-item-title>
              <h1 class="display-2 font-weight-light text-uppercase">{{item.title}}</h1>
            </v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  asyncData() {},
  data() {
    return {
      clipped: false,
      menu_items: [
        {
          title: 'Home',
          to: '/'
        },
        {
          title: 'Blog',
          to: '/blog'
        },
        {
          title: 'Disciplines',
          to: '/disciplines'
        },
        {
          title: 'Projects',
          to: '/projects'
        },
        {
          title: 'Tech',
          to: '/tech'
        },
        {
          title: 'About',
          to: '/about'
        }
      ]
    }
  },
  computed: {
    drawer: {
      get() {
        return this.$store.state.drawer.drawer
      },
      set(value) {
        this.$store.commit('drawer/toggle', value)
      }
    }
  }
}
</script>
<style lang="scss">
.animate {
  &.nav-item {
    opacity: 1;
    transform: translateY(0);
  }
}
.nav-item {
  opacity: 0;
  transform: translateY(-30px);
  transition: all 0.3s ease;
  @for $i from 1 through 6 {
    &:nth-child(#{$i}) {
      transition-delay: #{$i * 0.1}s;
    }
  }
}
</style>
