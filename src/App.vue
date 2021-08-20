<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark> </v-app-bar> -->

    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),
};
</script>
<style lang="scss" scoped>
.v-application {
  font-family: "Antonio", sans-serif;
  letter-spacing: 2px;
}
</style>
