<template>
  <v-app dark>
    <v-toolbar
      class="d-block d-sm-none"
      color="black"
      style="position: fixed; z-index: 2;"
      width="100%"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-toolbar>
    <v-navigation-drawer
      class="px-0 px-sm-12 menu black"
      :class="{ closed: !drawer }"
      :value="drawer"
      :width="this.$vuetify.breakpoint.name === 'xs' ? 250 : 350"
      app
    >
      <v-btn
        class="menu-button primary pa-0 d-none d-sm-block"
        @click="drawer = !drawer"
        :ripple="false"
        text
        tile
      >
        <v-icon color="white">mdi-chevron-left</v-icon>
      </v-btn>
      <v-img :src="require('../assets/ih.svg')" class="my-12" contain></v-img>
      <v-list>
        <div v-for="(item, i) in menu_items" :key="i">
          <v-list-group v-if="item.sub" no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(sub, index) in item.sub"
              :key="index"
              :to="sub.to"
              router
              exact
              link
            >
              <v-list-item-content>
                <v-list-item-title v-text="sub.title" />
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item :to="item.to" router exact v-else>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
        </div>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
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
          to: '/inspire'
        },
        {
          title: 'Disciplines',
          sub: [
            {
              title: 'Code',
              to: '/discipline/code'
            },
            {
              title: 'Design',
              to: '/discipline/design'
            }
          ]
        },
        {
          title: 'Projects',
          to: '/inspire'
        },
        {
          title: 'Tech',
          to: '/inspire'
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
