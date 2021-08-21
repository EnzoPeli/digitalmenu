<template>
  <v-app-bar app class="elevation-2 transparent">
    <v-row no-gutters class="align-center justify-center">
      <v-col cols="2" class="text-center">
        <v-img
          :src="
            $vuetify.theme.dark
              ? require('../assets/bocaDark.svg')
              : require('../assets/boca.png')
          "
          v-bind:class="{ corazon: latir }"
          @click="latidos()"
          width="50"
          contain
          class="d-inline-block"
        />
      </v-col>

      <v-col cols="8" class="px-3">
        <v-text-field
          v-model="search"
          :append-icon="!search ? 'mdi-magnify' : ''"
          placeholder="Buscar"
          color="red lighten-2"
          hide-details
          clearable
          @input="$store.commit('updateSearch', { search: search })"
        />
      </v-col>

      <v-col cols="2" class="text-center">
        <v-btn icon @click="$vuetify.theme.dark = !$vuetify.theme.dark">
          <v-icon>
            mdi-brightness-4
          </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppMenu",

  data() {
    return {
      latir: false,
      search: "",
    };
  },

  watch: {
    "$store.getters.search"() {
      this.search = this.$store.getters.search;
    },
  },

  created() {
    this.$store.commit("updateSearch", { search: "" });
  },

  methods: {
    latidos() {
      if (!this.latir) {
        this.latir = true;
        setTimeout(() => (this.latir = false), 1800);
      }
    },
  },
};
</script>

<style scoped>
/* Animación con keyframe llamada "latidos" */
@keyframes latidos {
  from {
    transform: none;
  }
  90% {
    transform: scale(1.05);
  }
  to {
    transform: none;
  }
}

/* En la clase corazon vamos a llamar latidos en la animación  */
.corazon {
  animation: latidos 0.9s infinite;
  transform-origin: center;
}
</style>
