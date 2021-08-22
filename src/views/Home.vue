<template>
  <div>
    <v-row no-gutters class="align-center justify-center">
      <!-- if no data to show -->
      <v-col
        cols="12"
        v-if="productsFiltered.length == 0"
        class="px-3 pb-3"
        style="max-height: calc(100vh - 117px); overflow-y: auto; height: calc(100vh - 117px);"
      >
        <div
          style="text-align: center; margin-bottom: 10%; margin-top: 14%"
          class="
            font-weight-medium
            text-uppercase text-center
            red--text
            text--lighten-1
          "
        >
          <h3>Tu busqueda no coincide con un producto del menu</h3>
        </div>

        <div>
          <v-img
            :src="
              $vuetify.theme.dark
                ? require('../assets/chefW.png')
                : require('../assets/chef.png')
            "
            max-height="300"
            contain
          ></v-img>
        </div>

        <div
          style="text-align: center; margin-top: 3%"
          class="
            font-weight-medium
            text-uppercase text-center
            red--text
            text--lighten-1
          "
        >
          <h3>Intenta de nuevo :)</h3>
        </div>
      </v-col>

      <!-- data to show if search is ok -->
      <v-col
        cols="12"
        v-else
        class="px-3 pb-3"
        style="max-height: calc(100vh - 117px); overflow-y: auto; height: calc(100vh - 117px);"
      >
        <!-- category name area -->
        <div v-for="list in productsFiltered" :key="list.name">
          <div
            class="font-weight-bold text-uppercase"
            style="text-align: center"
            :id="list.href"
          >
            <v-chip class="ma-2" outlined pill color="red">
              <v-img
                :src="
                  $vuetify.theme.dark
                    ? require('../assets/bocaDark.svg')
                    : require('../assets/boca.png')
                "
                max-height="30"
                contain
                style="width: 25px"
                class="mr-10"
              ></v-img>

              {{ list.name }}
              <v-img
                :src="
                  $vuetify.theme.dark
                    ? require('../assets/bocaDark.svg')
                    : require('../assets/boca.png')
                "
                max-height="30"
                contain
                style="width: 25px"
                class="ml-10"
              ></v-img>
            </v-chip>
          </div>

          <!-- product list area -->
          <v-card
            class="mx-auto rounded-xl"
            flat
            outlined
            :color="$vuetify.theme.dark ? '' : 'grey lighten-4'"
            style="padding-top: 2%; padding-bottom: 2%; 'border: 1px solid red;"
          >
            <v-list-item
              v-for="product in list.products"
              :key="product.name"
              pl-0
              pr-0
            >
              <v-container pa-0 pt-2 pb-2>
                <v-card
                  class="mx-auto rounded-lg"
                  :color="$vuetify.theme.dark ? 'black' : 'white'"
                  outlined
                  elevation="2"
                >
                  <v-list-item three-line>
                    <v-list-item-content>
                      <v-row no-gutters>
                        <v-col cols="9" sm="9">
                          <div
                            class="text-capitalize red--text text--lighten-1 pb-2"
                            style="letter-spacing: 2px"
                          >
                            {{ product.name }}
                            <v-icon small>{{ product.icono }}</v-icon>
                          </div>
                        </v-col>
                        <v-col cols="3" sm="3">
                          <div
                            class="font-weight-medium text-right"
                            style="text-align: center"
                          >
                            $ {{ product.price }}
                          </div>
                        </v-col>
                        <v-col cols="12" sm="12">
                          <span color="transparent red" class="caption">
                            {{ product.description }}
                          </span>

                          <v-list-item
                            v-for="subitem in product.subitems"
                            :key="subitem.name"
                            pl-0
                            pr-0
                          >
                            <v-row no-gutters>
                              <v-col cols="12" sm="12">
                                <div
                                  style="height: 100%"
                                  class="
                                        caption
                                        text-overline
                                        red--text
                                        text--lighten-1
                                      "
                                >
                                  {{ subitem.name }}
                                  <v-icon small>{{ subitem.icono }}</v-icon>
                                </div>
                              </v-col>
                              <v-col cols="12" sm="12">
                                <div class="caption">
                                  {{ subitem.description }}
                                </div>
                              </v-col>
                            </v-row>
                          </v-list-item>
                        </v-col>
                      </v-row>
                    </v-list-item-content>

                    <!-- <v-list-item-avatar
                    tile
                    size="60"
                    color="grey"
                  ></v-list-item-avatar> -->
                  </v-list-item>
                </v-card>
              </v-container>
            </v-list-item>
          </v-card>
        </div>
      </v-col>
    </v-row>

    <!-- footer with menu area -->
    <v-footer fixed padless height="61px">
      <v-container fluid class="pa-0">
        <v-row
          no-gutters
          class="align-center justify-center"
          style="height: 44px; margin-bottom: 17px"
        >
          <v-col cols="1" class="text-center">
            <v-btn icon small>
              <v-icon @click="scroll(-100)"> mdi-chevron-left </v-icon>
            </v-btn>
          </v-col>
          <v-col cols="10">
            <div
              style="overflow-x: auto; white-space: nowrap; scroll-behavior: smooth;"
              class="inner-border"
              ref="current"
            >
              <v-btn
                v-for="list in productsLists"
                :key="list.name"
                rounded
                small
                class="ma-2 white--text"
                color="red lighten-1"
                outlined
                text-color="teal accent-1"
                :href="'#' + list.href"
                @click="$store.commit('updateSearch', { search: '' })"
              >
                {{ list.name }}
              </v-btn>
            </div>
          </v-col>
          <v-col cols="1" class="text-center">
            <v-btn icon small>
              <v-icon @click="scroll(100)"> mdi-chevron-right </v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
import menu from "../data/menu";

export default {
  name: "Home",

  data() {
    return {
      productsLists: menu,
    };
  },

  computed: {
    productsFiltered() {
      let search = this.$store.getters.search.toLowerCase().trim();
      if (!search) return this.productsLists;

      return this.productsLists
        .map((item) => {
          let grupo = item.name;

          return {
            ...item,
            products: item.products.filter(
              (product) =>
                product.name.toLowerCase().includes(search) ||
                product.description.toLowerCase().includes(search) ||
                grupo.toLowerCase().includes(search) ||
                product.subitems.filter(this.filterProductSubitems).length
            ),
          };
        })
        .filter((category) => category.products.length);
    },
  },

  methods: {
    scroll(scrollOffset) {
      this.$refs.current.scrollLeft += scrollOffset;
    },

    filterProductSubitems(subitem) {
      let search = this.$store.getters.search.toLowerCase().trim();

      return (
        subitem.name.toLowerCase().includes(search) ||
        subitem.description.toLowerCase().includes(search)
      );
    },
  },
};
</script>
<style scoped>
a:link {
  text-decoration: none;
}
.change-font {
  font-family: "Arial", Helvetica, sans-serif;
}
.inner-border::-webkit-scrollbar {
  display: none;
}
</style>
