//CAMBIAR EL COLOR DEL BOTON DEL SWITCH DE TEMA PARA QUE CUANDO CAMBIE EL TEMA CAMBIE EL COLOR DEL ICONO
//CAMBIAR EL COLOR DE LA PAGINA DE NORESULTS SEGUN EL MODO
//  :src="'../assets/'+ $vuetify.theme.dark ? 'bocaDark.svg' : 'boca.png'"

<template>
  <div>
    <v-app-bar app flat>
      <v-row no-gutters class="align-center">
        <v-col cols="2" class="text-left">
          <v-img
            :src="logoForTheme"
            max-height="30"
            width="50"
            v-bind:class="{ corazon: latir }"
            @click="latir = !latir"
            contain
          ></v-img>
        </v-col>
        <v-col cols="8">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            placeholder="Busca aca"
            color="red lighten-2"
            hide-details
          ></v-text-field>
        </v-col>
        <v-col cols="2" class="text-end">
          <v-icon
            v-model="darkmode"
            @click="darkmode = !darkmode"
            :color="$vuetify.theme.dark ? '' : 'black'"
          >
            mdi-brightness-4
          </v-icon>
        </v-col>
      </v-row>
    </v-app-bar>
    <v-main>
      <!-- if no data to show -->
      <v-container v-if="productsFiltered.length == 0">
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
          <v-img :src="logoNoData" max-height="300" contain></v-img>
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
      </v-container>
      <!-- data to show if search is ok -->

      <v-container>
        <v-row>
          <v-col cols="12" sm="12">
            <!-- category name area -->
            <div v-for="list in productsFiltered" :key="list.name">
              <div
                class="font-weight-bold text-uppercase text-center"
                style="margin-bottom: 3%; margin-top: 2%; text-align: center"
                :id="list.href"
              >
                <v-chip class="ma-2" outlined pill color="red">
                  <v-img
                    :src="logoCategory"
                    max-height="30"
                    contain
                    style="width: 25px"
                    class="mr-10"
                  ></v-img>

                  {{ list.name }}
                  <v-img
                    :src="logoCategory"
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
                                class="
                                  text-capitalize
                                  red--text
                                  text--lighten-1
                                  pb-2
                                "
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
                              <v-sheet color="transparent" class="caption"
                                >{{ product.description }}
                              </v-sheet>

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

          <!-- footer with menu area -->
          <v-col cols="12" sm="12">
            <v-sheet min-height="50" color="transparent">
              <v-footer color="" fixed elevation="0">
                <div
                  style="overflow-x: auto; white-space: nowrap"
                  class="inner-border"
                >
                  <v-btn
                    v-for="list in productsLists"
                    :key="list.name"
                    rounded
                    small
                    class="ma-2 white--text"
                    color="red lighten-1"
                    text-color="teal accent-1"
                    :href="'#' + list.href"
                    @click="clearSearch()"
                  >
                    {{ list.name }}
                  </v-btn>
                </div>

                <v-col cols="12" sm="12" style="padding: 0%">
                  <div
                    class="text--lighten-1 text-center"
                    style="
                      font-size: x-small;
                      font-weight: bold;
                      font-family: 'Times New Roman', Times, serif;
                    "
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
              </v-footer>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import imageW from "../assets/boca.png";
import imageD from "../assets/bocaDark.svg";
import notFoundW from "../assets/chef.png";
import notFoundD from "../assets/chefW.png";

export default {
  name: "Food",

  data() {
    return {
      search: "",
      darkmode: false,
      logoForTheme: "",
      LogoNoData: "",
      logoCategory: "",
      latir: false,
      productsComputed: [],
      productsLists: [
        {
          name: "Para picar",
          href: "PARA PICAR",
          products: [
            {
              name: "PROVOLONE con oregano",
              price: 240,
              description: "",
              subitems: [],
              grupo: "Para picar",
            },
            {
              name: "PROVOLONE con tomate y albahaca",
              price: 260,
              description: "",
              subitems: [],
              grupo: "Para picar",
            },
            {
              name: "PROVOLONE con panceta",
              price: 280,
              description: "",
              subitems: [],
              grupo: "Para picar",
            },
            {
              name: "ARROLLADITOS PRIMAVERA",
              price: 250,
              description: "8 unidades.",
              subitems: [],
              grupo: "Para picar",
            },
            {
              name: "NACHOS",
              price: 270,
              description: "Salsa cheddar y roja picante",
              subitems: [],
              grupo: "Para picar",
            },
            {
              name: "AROS DE CEBOLLA",
              price: 300,
              description: "",
              subitems: [],
              grupo: "Para picar",
            },
            {
              name: "DADOS DE MUZZARELLA",
              price: 300,
              description: "",
              subitems: [],
              grupo: "Para picar",
            },
            {
              name: "MILANESA PICADA CON SALSA CHEDDAR",
              price: 330,
              description: "",
              subitems: [],
              grupo: "Para picar",
            },
            {
              name: "PAPAS CON SALSA CHEDDAR O CHAMPI",
              price: 360,
              description: "",
              subitems: [],
              grupo: "Para picar",
            },
            {
              name: "PAPAS CON CHEDDAR Y PANCETA",
              price: 380,
              description: "",
              subitems: [],
              grupo: "Para picar",
            },
            {
              name: "PAPAS DOÑA MARTA",
              price: 410,
              description: "Papas rústicas, cheddar, panceta y puerro. ",
              subitems: [],
              grupo: "Para picar",
            },
            {
              name: "GRAMAJO",
              price: 410,
              description: "Papas,panceta,morrón, cebolla, huevo y perejil.",
              subitems: [],
              grupo: "Para picar",
            },
            {
              name: "GRAMAJO VEGETARIANO",
              price: 410,
              description:
                "Papas, huevo, zapallito, berenjena, morrón, cebolla y perejil.",
              subitems: [],
              grupo: "Para picar",
              icono: "mdi-leaf",
            },
            {
              name: "SALSA EXTRA",
              price: 60,
              description: "Champi, cheddar, BBQ",
              subitems: [],
              grupo: "Para picar",
            },
          ],
        },
        {
          name: "Tablas",
          href: "TABLAS",
          products: [
            {
              name: "TABLA DE HAMBURGUESAS",
              price: 750,
              description:
                "4 unidades acompañadas con papas rústicas a elegir entre:       ",
              subitems: [
                {
                  name: "VEGETARIANA: ",
                  description:
                    "hamburguesa de lenteja, lechuga, tomate, rúcula, muzzarella, alioli.",
                  icono: "mdi-leaf",
                },
                {
                  name: "CLÁSICA: ",
                  description:
                    "hamburguesa de carne, lechuga, tomate, muzzarella, huevo.",
                },
                {
                  name: "CHEDDAR: ",
                  description:
                    "hamburguesa de carne, lechuga, tomate, panceta, cheddar.",
                },
                {
                  name: "BBQ: ",
                  description:
                    "hamburguesa de carne, lechuga, tomate, cebolla caramelizada y salsa bbq.",
                },
              ],
              grupo: "Tablas",
            },
            {
              name: "CELIA CRUZ",
              price: 730,
              description:
                "Arrolladitos(4), arros de cebolla(8), dos hamburguesas a elección (de Tabla de Hamburguesas) y papas fritas con salsa a elección.",
              subitems: [],
              grupo: "Tablas",
            },

            {
              name: "DOÑA MARTA",
              price: 730,
              description:
                "Brochettes de carne(4) y pollo(4), aros de cebolla (8), dados de muzzarella(8) y papas fritas con salsa a elección.",
              subitems: [],
              grupo: "Tablas",
            },
            {
              name: "DEGUSTACIÓN DE PIZZAS",
              price: 690,
              description:
                "Para 3 personas - 50 X 25cm de muzzarella con 3 gustos a elección:  ",
              subitems: [
                {
                  description:
                    "Aceitunas, Panceta, Jamón crudo y rúcula, Tres quesos (parmesano, provolone, muzzarella), Caprese, Huevo duro, Pepperoni",
                },
              ],
              grupo: "Tablas",
            },
          ],
        },

        {
          name: "La Cocina de Marta",
          href: "LA COCINA DE MARTA",
          products: [
            {
              name: "CHIVITO CON FRITAS",
              price: 380,
              description:
                "Pan casero, lomo, muzzarella, panceta, lechuga, tomate y huevo.",
              subitems: [],
              grupo: "La Cocina de Marta",
            },
            {
              name: "CHIVITO VEGETARIANO CON FRITAS",
              price: 380,
              description:
                "Pan casero, berenjena, zapatillito, lechuga, tomate, rúcula y alioli.",
              subitems: [],
              grupo: "La Cocina de Marta",
              icono: "mdi-leaf",
            },
            {
              name: "MILANESA CON PAPAS FRITAS",
              price: 380,
              description: "",
              subitems: [],
              grupo: "La Cocina de Marta",
            },
          ],
        },
        {
          name: "Pizzetas",
          href: "PIZZETAS",
          products: [
            { name: "MUZZARELLA", price: 380, description: "", subitems: [] },
            { name: "ACEITUNAS", price: 390, description: "", subitems: [] },
            {
              name: "TOMATE Y ALBAHACA",
              price: 390,
              description: "",
              subitems: [],
              grupo: "Pizzetas",
            },
            {
              name: "HUEVO Y PANCETA",
              price: 410,
              description: "",
              subitems: [],
              grupo: "Pizzetas",
            },
            {
              name: "RÚCULA, PARMESANO Y PANCETA",
              price: 430,
              description: "",
              subitems: [],
              grupo: "Pizzetas",
            },
            {
              name: "JAMÓN CRUDO Y RÚCULA ",
              price: 440,
              description: "",
              subitems: [],
              grupo: "Pizzetas",
            },
          ],
        },
        {
          name: "Postres",
          href: "POSTRES",
          products: [
            {
              name: "BROWNIE con Helado de crema",
              price: 240,
              description: "",
              subitems: [],
              grupo: "Postres",
            },
            {
              name: "DOÑA MARTA",
              price: 240,
              description: "Helado de crema, oreo trituradas y dulce de leche.",
              subitems: [],
              grupo: "Postres",
            },
          ],
        },
        {
          name: "Ensaladas",
          href: "ENSALADAS",
          products: [
            {
              name: "TIBIA DE POLLO",
              price: 320,
              description:
                "Lechuga crespa y morada, rúcula, tomates, tiras de pollo, salsa teriyaki.",
              subitems: [],
              grupo: "Ensaladas",
            },
            {
              name: "CRISPY",
              price: 320,
              description:
                "Lechuga crespa y morada, tomates, chips de panceta(opción champi) y lascas de parmesano.",
              subitems: [],
              grupo: "Ensaladas",
            },
          ],
        },
        {
          name: "Dessert Cocktails",
          href: "DESSERT COCKTAILS",
          products: [
            {
              name: "DESLIZ DE CHOCOLATE",
              price: 260,
              description:
                "Vodka, baileys, licor de café, licor de gianduia, crema, salsa de chocolate y cacao en polvo.",
              subitems: [],
              grupo: "Dessert Cocktails",
            },
            {
              name: "LEMON PIE",
              price: 260,
              description:
                "Limoncello, vodka, licor de gianduia, lemon crud, jugo de limón y crema chantilly",
              subitems: [],
              grupo: "Dessert Cocktails",
            },
            {
              name: "CHARLY'S FACTORY ",
              price: 260,
              description:
                "Oreo triturada, helado de crema, vodka, baileys, licor de gianduia, licor de menta, crema chantilly y cacao en polvo",
              subitems: [],
              grupo: "Dessert Cocktails",
            },
            {
              name: "STRAWBERRY FIELDS",
              price: 260,
              description:
                "Frutilla, baileys, piña colada, licor de frutilla, crema chantilly y salsa de frutilla",
              subitems: [],
              grupo: "Dessert Cocktails",
            },
          ],
        },
        {
          name: "Bebidas sin Alcohol",
          href: "BEBIDAS SIN ALCOHOL",
          products: [
            {
              name: "REFRESCO línea PEPSI 350cc",
              price: 100,
              description: "",
              subitems: [],
              grupo: "Bebidas sin Alcohol",
            },
            { name: "AGUA 600cc", price: 100, description: "", subitems: [] },
            {
              name: "JUGO DE NARANJA",
              price: 130,
              description: "",
              subitems: [],
              grupo: "Bebidas sin Alcohol",
            },
            {
              name: "LICUADO",
              price: 180,
              description: "Frutilla, ananá, durazno o limón",
              subitems: [],
              grupo: "Bebidas sin Alcohol",
            },
            {
              name: "LIMONADA",
              price: 180,
              description: "Clásica o con jengibre y/o menta",
              subitems: [],
              grupo: "Bebidas sin Alcohol",
            },
            {
              name: "RED BULL ENERGY DRINK",
              price: 180,
              description: "",
              subitems: [],
              grupo: "Bebidas sin Alcohol",
            },
          ],
        },
        {
          name: "Cerveza",
          href: "CERVEZA",
          products: [
            {
              name: "ZILLERTAL litro",
              price: 280,
              description: "",
              subitems: [],
              grupo: "Cerveza",
            },
            { name: "STELLA litro", price: 300, description: "", subitems: [] },
            {
              name: "ZILLERTAL IPA litro",
              price: 320,
              description: "",
              subitems: [],
              grupo: "Cerveza",
            },
            { name: "CORONA 330cc", price: 180, description: "", subitems: [] },
            {
              name: "CERVEZA SIN ALCOHOL",
              price: 160,
              description: "",
              subitems: [],
              grupo: "Cerveza",
            },
            {
              name: "CERVEZA DE BARRIL",
              price: "----",
              description: "Consultar por varidad y precio.",
              subitems: [],
              grupo: "Cerveza",
            },
          ],
        },
        {
          name: "Tragos",
          href: "TRAGOS",
          products: [
            {
              name: "GIN TONIC",
              price: 230,
              description:
                "Gin BEEFEATER, agua tónica y limón (opción pepino).",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "CUBA LIBRE",
              price: 200,
              description: "Ron HAVANA, cola y lima.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "CUBA LIBRE 7 AÑOS",
              price: 250,
              description: "Ron HAVANA 7 años, cola y lima.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "CAIPIRINHA",
              price: 250,
              description: "Cachaca, lima y azúcar.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "CAIPIROSKA",
              price: 250,
              description: "ABSOLUT vodka, lima y azúcar.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "CAIPIROSKA CITRUS",
              price: 250,
              description:
                "ABSOLUT vodka, lima, azúcar, pomelo y curacao blue.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "COSMOPOLITAN",
              price: 250,
              description:
                "ABSOLUT vodka, triple sec, azúcar, licor de arándanos y jugo de lima.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "KRIPTONITA",
              price: 250,
              description:
                "ABSOLUT vodka, licor de menta, piña colada y azúcar.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "DOÑA MARTA",
              price: 260,
              description:
                "ABSOLUT vodka, helado de crema, frutilla, menta y azúcar.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "DAIKIRI",
              price: 250,
              description:
                "Ron HAVANA, azúcar y fruta a elección. FRUTILLA, ANANÁ, DURAZNO O LIMÓN.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "REGGAE CLUB",
              price: 250,
              description:
                "Ron HAVANA, frutilla, ananá, malibú, azúcar y jugo de naranja.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "STRAWBERRY CLUB",
              price: 250,
              description:
                "Ron HAVANA, frutilla, azúcar, jugo de naranja y albahaca.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "MOJITO CLÁSICO O FROZEN",
              price: 250,
              description: "Ron HAVANA, lima, menta, azúcar y soda.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "MOJITO DE FRUTILLA CLÁSICO O FROZEN",
              price: 250,
              description: "Ron HAVANA, lima, menta, frutilla y azúcar.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "MOJITO CON HELADO",
              price: 260,
              description: "Ron HAVANA, menta, lima, azúcar y helado de crema.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "MOJITO JAGERMEISTER",
              price: 250,
              description: "Jagermeister, LIMA, MENTA, AZÚCAR, SODA.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "MARGARITA CLÁSICA O FROZEN",
              price: 250,
              description:
                "Tequila JOSÉ CUERVO silver, triple sec, jugo de limón.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "MARGARITA DE FRUTILLA CLÁSICA O FROZEN",
              price: 250,
              description:
                "Tequila JOSÉ CUERVO silver, triple sec, jugo de limón y frutilla.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "TEQUILA SUNRISE",
              price: 250,
              description:
                "Tequila JOSÉ CUERVO silver, jugo de naranja y granadina",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "NEBLINA DEL CARIBE",
              price: 250,
              description:
                "Tequila JOSÉ CUERVO silver, ananá, jugo de naranja, curacao blue y azúcar.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "MINT JULEP",
              price: 250,
              description: "JAMESON, lima, menta, azúcar y soda.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "HONEY SUMMER",
              price: 250,
              description:
                " JACK DANIEL'S honey, jugo de lima, licor de Melón y 7up.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "TIGER JACK",
              price: 250,
              description:
                "JACK DANIEL'S Nº 7, triple sec, jugo de naranja y granadina.",
              subitems: [],
              grupo: "Tragos",
            },
            {
              name: "APEROL SPRITZ",
              price: 250,
              description: "APEROL, espumante, soda, naranja.",
              subitems: [],
              grupo: "Tragos",
            },
          ],
        },
        {
          name: "Botellas",
          href: "BOTELLAS",
          products: [
            { name: "BALLANTINES", price: 2500, description: "", subitems: [] },
            { name: "JAMESON", price: 2500, description: "", subitems: [] },
            {
              name: "JACK DANIEL'S (Nº 7 o Honey)",
              price: 2700,
              description: "",
              subitems: [],
              grupo: "Botellas",
            },
            { name: "CHIVAS", price: 3200, description: "", subitems: [] },
            {
              name: "FERNET BRANCA",
              price: 2100,
              description: "",
              subitems: [],
              grupo: "Botellas",
            },
            { name: "RON HAVANA", price: 2100, description: "", subitems: [] },
            {
              name: "RON HAVANA 7 AÑOS",
              price: 2500,
              description: "",
              subitems: [],
              grupo: "Botellas",
            },
            { name: "ABSOLUT", price: 2300, description: "", subitems: [] },
            {
              name: "ABSOLUT SABORIZADOS",
              price: 2500,
              description: "",
              subitems: [],
              grupo: "Botellas",
            },
            {
              name: "GIN BEEAFEATER",
              price: 2400,
              description: "",
              subitems: [],
              grupo: "Botellas",
            },
            {
              name: "JAGERMEISTER",
              price: 2100,
              description: "",
              subitems: [],
              grupo: "Botellas",
            },
            {
              name: "TEQUILA JOSÉ CUERVO",
              price: 1900,
              description: "",
              subitems: [],
              grupo: "Botellas",
            },
            {
              name: "REFRESCO 1.25L EXTRA",
              price: 160,
              description: "",
              subitems: [],
              grupo: "Botellas",
            },
          ],
        },
        {
          name: "Destilados",
          href: "DESTILADOS",
          products: [
            { name: "BALLANTINES", price: 200, description: "", subitems: [] },
            {
              name: "BALLANTINES 12 AÑOS",
              price: 240,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            { name: "JAMESON", price: 200, description: "", subitems: [] },
            {
              name: "JAMESON CRESTED",
              price: 250,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "JAMESON BLACK BARREL",
              price: 290,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "CHIVAS 12 AÑOS",
              price: 250,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "CHIVAS 18 AÑOS",
              price: 350,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "JACK DANIEL'S Nº 7 ",
              price: 240,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "JACK DANIEL'S HONEY",
              price: 240,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "FERNET BRANCA/BRANCA MENTA",
              price: 190,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "RON HAVANA AÑEJO",
              price: 190,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "RON HAVANA 7 AÑOS",
              price: 240,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "ABSOLUT VODKA",
              price: 200,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "ABSOLUT",
              price: 230,
              description: "MANGO/PERA/POMELO/FRAMBUESA",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "JAGERMEISTER",
              price: 190,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "GIN BEEAFEATER",
              price: 220,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "BAILEYS",
              price: 240,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "CAMPARI",
              price: 190,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "CINZANO",
              price: 180,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
            {
              name: "TEQUILA JOSÉ CUERVO REPOSADO",
              price: 160,
              description: "",
              subitems: [],
              grupo: "Destilados",
            },
          ],
        },
        {
          name: "Vinos",
          href: "VINOS",
          products: [
            {
              name: "CLERICOT - con ETCHART CAFAYATE Torrontes",
              price: 400,
              description: "",
              subitems: [],
              grupo: "Vinos",
            },
            {
              name: "ETCHART CAFAYATE Torrontes cosecha tardía / Vino blanco",
              price: 390,
              description: "",
              subitems: [],
              grupo: "Vinos",
            },
            {
              name: "ETCHART CAFAYATE Malbec",
              price: 390,
              description: "",
              subitems: [],
              grupo: "Vinos",
            },
            {
              name: "ETCHART CAFAYATE Cabernet Sauvignon",
              price: 390,
              description: "",
              subitems: [],
              grupo: "Vinos",
            },
          ],
        },
        {
          name: "Cigarros",
          href: "CIGARROS",
          products: [
            {
              name: "CHICOS",
              price: 100,
              description: "",
              subitems: [],
              grupo: "Cigarros",
            },
            {
              name: "GRANDES",
              price: 180,
              description: "",
              subitems: [],
              grupo: "Cigarros",
            },
          ],
        },
      ],
    };
  },
  watch: {
    darkmode() {
      this.handledarkmode();
      this.changeLogoTheme();
    },
  },
  created() {
    this.changeLogoTheme();
    this.productsComputed = this.productsLists;

    if (process.browser) {
      if (localStorage.getItem("DarkMode")) {
        const cookieValue = localStorage.getItem("DarkMode") === "true";
        this.darkmode = cookieValue;
      } else {
        this.handledarkmode();
      }
    }
  },
  computed: {
    productsFiltered() {
      if (!this.search) return this.productsComputed;

      const search = this.search.toLowerCase();

      return this.productsComputed
        .map((item) => {
          return {
            ...item,
            products: item.products.filter((product) => {
              return (
                product.name.toLowerCase().includes(search) ||
                (product.description + "" + product.grupo)
                  .toLowerCase()
                  .includes(search)
              );
            }),
          };
        })
        .filter((category) => category.products.length != 0);
    },
  },
  methods: {
    top() {
      window.scrollTo(0, 0);
    },
    clearSearch() {
      this.search = "";
    },

    handledarkmode() {
      if (process.browser) {
        if (this.darkmode === true) {
          this.$vuetify.theme.dark = true;

          localStorage.setItem("DarkMode", true);
        } else if (this.darkmode === false) {
          this.$vuetify.theme.dark = false;

          localStorage.setItem("DarkMode", false);
        }
      }
    },
    changeLogoTheme() {
      if (this.$vuetify.theme.dark) {
        this.logoForTheme = imageD;
        this.logoNoData = notFoundD;
        this.logoCategory = imageD;
      } else {
        this.logoNoData = notFoundW;
        this.logoForTheme = imageW;
        this.logoCategory = imageW;
      }
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
