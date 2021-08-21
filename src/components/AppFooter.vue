<template>
  <v-footer fixed padless>
    <v-container fluid class="pa-0">
      <v-row no-gutters class="align-center justify-center">
        <v-col cols="12">
          <div
            class="text--lighten-1 text-center"
            style="font-size: x-small; font-weight: bold; font-family: 'Times New Roman', Times, serif; height: 17px;"
          >
            <a
              href="https://www.instagram.com/dmartabar/"
              target="_blank"
              style="color: #cd5c5c"
            >
              <v-icon small>mdi-instagram</v-icon> dmartabar</a
            >
            | app by
            <a
              href="https://www.instagram.com/enzopeli/"
              target="_blank"
              style="color: #cd5c5c"
            >
              <v-icon small>mdi-instagram</v-icon> enzopeli</a
            >
            |© 2021
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter",

  data() {
    return {};
  },
};
</script>
