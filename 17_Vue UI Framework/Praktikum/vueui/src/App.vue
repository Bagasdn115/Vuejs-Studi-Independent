<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-toolbar class="primary" dark>
        <v-toolbar-title>Menu</v-toolbar-title>

        <v-spacer></v-spacer>
      </v-toolbar>
      <v-list dense nav>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-image</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Photos</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi mdi-map-legend</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title class="white--text">News</v-toolbar-title>
    </v-app-bar>

    <v-main>
      
      <v-card :loading="loading" class="mx-auto my-5" max-width="460">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title v-for="news in listNews" :key="news.author">{{ news.author }}</v-card-title>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ml-4">4.5 (413)</div>
          </v-row>

          <div class="my-4 subtitle-1">$ • Italian, Cafe</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>
      </v-card>

      <v-card :loading="loading" class="mx-auto my-5" max-width="460">
        <template slot="progress">
          <v-progress-linear
            color="deep-purple"
            height="10"
            indeterminate
          ></v-progress-linear>
        </template>

        <v-img
          height="250"
          src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
        ></v-img>

        <v-card-title>Cafe Badilico</v-card-title>
        <v-card-text>
          <v-row align="center" class="mx-0">
            <v-rating
              :value="4.5"
              color="amber"
              dense
              half-increments
              readonly
              size="14"
            ></v-rating>

            <div class="grey--text ml-4">4.5 (413)</div>
          </v-row>

          <div class="my-4 subtitle-1">$ • Italian, Cafe</div>

          <div>
            Small plates, salads & sandwiches - an intimate setting with 12
            indoor seats plus patio seating.
          </div>
        </v-card-text>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name : "App",
  computed: {
    listNews(){
      return this.$store.state.news.list;
    },
  },
  methods: {
    fetchNews() {
      this.$store.dispatch("news/fetchList");
    },
  },
  mounted(){
    this.fetchNews();
  },
};
</script>