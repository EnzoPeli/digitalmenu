<template>
  <v-app>
    <AppMenu />

    <v-main>
      <router-view />
    </v-main>

    <AppFooter />
  </v-app>
</template>

<script>
import AppMenu from "./components/AppMenu.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "App",

  components: {
    AppMenu,
    AppFooter,
  },

  data() {
    return {};
  },
};
</script>
<style lang="scss" scoped>
.v-application {
  font-family: "Antonio", sans-serif;
  letter-spacing: 2px;
}
</style>
