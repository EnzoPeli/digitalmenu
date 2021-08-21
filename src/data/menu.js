let menu = [
  {
    name: "Para picar",
    href: "PARA PICAR",
    products: [
      {
        name: "PROVOLONE con oregano",
        price: 240,
        description: "",
        subitems: [],
      },
      {
        name: "PROVOLONE con tomate y albahaca",
        price: 260,
        description: "",
        subitems: [],
      },
      {
        name: "PROVOLONE con panceta",
        price: 280,
        description: "",
        subitems: [],
      },
      {
        name: "ARROLLADITOS PRIMAVERA",
        price: 250,
        description: "8 unidades.",
        subitems: [],
      },
      {
        name: "NACHOS",
        price: 270,
        description: "Salsa cheddar y roja picante",
        subitems: [],
      },
      {
        name: "AROS DE CEBOLLA",
        price: 300,
        description: "",
        subitems: [],
      },
      {
        name: "DADOS DE MUZZARELLA",
        price: 300,
        description: "",
        subitems: [],
      },
      {
        name: "MILANESA PICADA CON SALSA CHEDDAR",
        price: 330,
        description: "",
        subitems: [],
      },
      {
        name: "PAPAS CON SALSA CHEDDAR O CHAMPI",
        price: 360,
        description: "",
        subitems: [],
      },
      {
        name: "PAPAS CON CHEDDAR Y PANCETA",
        price: 380,
        description: "",
        subitems: [],
      },
      {
        name: "PAPAS DOÑA MARTA",
        price: 410,
        description: "Papas rústicas, cheddar, panceta y puerro. ",
        subitems: [],
      },
      {
        name: "GRAMAJO",
        price: 410,
        description: "Papas,panceta,morrón, cebolla, huevo y perejil.",
        subitems: [],
      },
      {
        name: "GRAMAJO VEGETARIANO",
        price: 410,
        description:
          "Papas, huevo, zapallito, berenjena, morrón, cebolla y perejil.",
        subitems: [],
        icono: "mdi-leaf",
      },
      {
        name: "SALSA EXTRA",
        price: 60,
        description: "Champi, cheddar, BBQ",
        subitems: [],
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
      },
      {
        name: "CELIA CRUZ",
        price: 730,
        description:
          "Arrolladitos(4), arros de cebolla(8), dos hamburguesas a elección (de Tabla de Hamburguesas) y papas fritas con salsa a elección.",
        subitems: [],
      },

      {
        name: "DOÑA MARTA",
        price: 730,
        description:
          "Brochettes de carne(4) y pollo(4), aros de cebolla (8), dados de muzzarella(8) y papas fritas con salsa a elección.",
        subitems: [],
      },
      {
        name: "DEGUSTACIÓN DE PIZZAS",
        price: 690,
        description:
          "Para 3 personas - 50 X 25cm de muzzarella con 3 gustos a elección:  ",
        subitems: [
          {
            name: "Gustos",
            description:
              "Aceitunas, Panceta, Jamón crudo y rúcula, Tres quesos (parmesano, provolone, muzzarella), Caprese, Huevo duro, Pepperoni",
          },
        ],
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
      },
      {
        name: "CHIVITO VEGETARIANO CON FRITAS",
        price: 380,
        description:
          "Pan casero, berenjena, zapatillito, lechuga, tomate, rúcula y alioli.",
        subitems: [],
        icono: "mdi-leaf",
      },
      {
        name: "MILANESA CON PAPAS FRITAS",
        price: 380,
        description: "",
        subitems: [],
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
      },
      {
        name: "HUEVO Y PANCETA",
        price: 410,
        description: "",
        subitems: [],
      },
      {
        name: "RÚCULA, PARMESANO Y PANCETA",
        price: 430,
        description: "",
        subitems: [],
      },
      {
        name: "JAMÓN CRUDO Y RÚCULA ",
        price: 440,
        description: "",
        subitems: [],
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
      },
      {
        name: "DOÑA MARTA",
        price: 240,
        description: "Helado de crema, oreo trituradas y dulce de leche.",
        subitems: [],
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
      },
      {
        name: "CRISPY",
        price: 320,
        description:
          "Lechuga crespa y morada, tomates, chips de panceta(opción champi) y lascas de parmesano.",
        subitems: [],
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
      },
      {
        name: "LEMON PIE",
        price: 260,
        description:
          "Limoncello, vodka, licor de gianduia, lemon crud, jugo de limón y crema chantilly",
        subitems: [],
      },
      {
        name: "CHARLY'S FACTORY ",
        price: 260,
        description:
          "Oreo triturada, helado de crema, vodka, baileys, licor de gianduia, licor de menta, crema chantilly y cacao en polvo",
        subitems: [],
      },
      {
        name: "STRAWBERRY FIELDS",
        price: 260,
        description:
          "Frutilla, baileys, piña colada, licor de frutilla, crema chantilly y salsa de frutilla",
        subitems: [],
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
      },
      { name: "AGUA 600cc", price: 100, description: "", subitems: [] },
      {
        name: "JUGO DE NARANJA",
        price: 130,
        description: "",
        subitems: [],
      },
      {
        name: "LICUADO",
        price: 180,
        description: "Frutilla, ananá, durazno o limón",
        subitems: [],
      },
      {
        name: "LIMONADA",
        price: 180,
        description: "Clásica o con jengibre y/o menta",
        subitems: [],
      },
      {
        name: "RED BULL ENERGY DRINK",
        price: 180,
        description: "",
        subitems: [],
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
      },
      { name: "STELLA litro", price: 300, description: "", subitems: [] },
      {
        name: "ZILLERTAL IPA litro",
        price: 320,
        description: "",
        subitems: [],
      },
      { name: "CORONA 330cc", price: 180, description: "", subitems: [] },
      {
        name: "CERVEZA SIN ALCOHOL",
        price: 160,
        description: "",
        subitems: [],
      },
      {
        name: "CERVEZA DE BARRIL",
        price: "----",
        description: "Consultar por varidad y precio.",
        subitems: [],
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
        description: "Gin BEEFEATER, agua tónica y limón (opción pepino).",
        subitems: [],
      },
      {
        name: "CUBA LIBRE",
        price: 200,
        description: "Ron HAVANA, cola y lima.",
        subitems: [],
      },
      {
        name: "CUBA LIBRE 7 AÑOS",
        price: 250,
        description: "Ron HAVANA 7 años, cola y lima.",
        subitems: [],
      },
      {
        name: "CAIPIRINHA",
        price: 250,
        description: "Cachaca, lima y azúcar.",
        subitems: [],
      },
      {
        name: "CAIPIROSKA",
        price: 250,
        description: "ABSOLUT vodka, lima y azúcar.",
        subitems: [],
      },
      {
        name: "CAIPIROSKA CITRUS",
        price: 250,
        description: "ABSOLUT vodka, lima, azúcar, pomelo y curacao blue.",
        subitems: [],
      },
      {
        name: "COSMOPOLITAN",
        price: 250,
        description:
          "ABSOLUT vodka, triple sec, azúcar, licor de arándanos y jugo de lima.",
        subitems: [],
      },
      {
        name: "KRIPTONITA",
        price: 250,
        description: "ABSOLUT vodka, licor de menta, piña colada y azúcar.",
        subitems: [],
      },
      {
        name: "DOÑA MARTA",
        price: 260,
        description:
          "ABSOLUT vodka, helado de crema, frutilla, menta y azúcar.",
        subitems: [],
      },
      {
        name: "DAIKIRI",
        price: 250,
        description:
          "Ron HAVANA, azúcar y fruta a elección. FRUTILLA, ANANÁ, DURAZNO O LIMÓN.",
        subitems: [],
      },
      {
        name: "REGGAE CLUB",
        price: 250,
        description:
          "Ron HAVANA, frutilla, ananá, malibú, azúcar y jugo de naranja.",
        subitems: [],
      },
      {
        name: "STRAWBERRY CLUB",
        price: 250,
        description:
          "Ron HAVANA, frutilla, azúcar, jugo de naranja y albahaca.",
        subitems: [],
      },
      {
        name: "MOJITO CLÁSICO O FROZEN",
        price: 250,
        description: "Ron HAVANA, lima, menta, azúcar y soda.",
        subitems: [],
      },
      {
        name: "MOJITO DE FRUTILLA CLÁSICO O FROZEN",
        price: 250,
        description: "Ron HAVANA, lima, menta, frutilla y azúcar.",
        subitems: [],
      },
      {
        name: "MOJITO CON HELADO",
        price: 260,
        description: "Ron HAVANA, menta, lima, azúcar y helado de crema.",
        subitems: [],
      },
      {
        name: "MOJITO JAGERMEISTER",
        price: 250,
        description: "Jagermeister, LIMA, MENTA, AZÚCAR, SODA.",
        subitems: [],
      },
      {
        name: "MARGARITA CLÁSICA O FROZEN",
        price: 250,
        description: "Tequila JOSÉ CUERVO silver, triple sec, jugo de limón.",
        subitems: [],
      },
      {
        name: "MARGARITA DE FRUTILLA CLÁSICA O FROZEN",
        price: 250,
        description:
          "Tequila JOSÉ CUERVO silver, triple sec, jugo de limón y frutilla.",
        subitems: [],
      },
      {
        name: "TEQUILA SUNRISE",
        price: 250,
        description: "Tequila JOSÉ CUERVO silver, jugo de naranja y granadina",
        subitems: [],
      },
      {
        name: "NEBLINA DEL CARIBE",
        price: 250,
        description:
          "Tequila JOSÉ CUERVO silver, ananá, jugo de naranja, curacao blue y azúcar.",
        subitems: [],
      },
      {
        name: "MINT JULEP",
        price: 250,
        description: "JAMESON, lima, menta, azúcar y soda.",
        subitems: [],
      },
      {
        name: "HONEY SUMMER",
        price: 250,
        description:
          " JACK DANIEL'S honey, jugo de lima, licor de Melón y 7up.",
        subitems: [],
      },
      {
        name: "TIGER JACK",
        price: 250,
        description:
          "JACK DANIEL'S Nº 7, triple sec, jugo de naranja y granadina.",
        subitems: [],
      },
      {
        name: "APEROL SPRITZ",
        price: 250,
        description: "APEROL, espumante, soda, naranja.",
        subitems: [],
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
      },
      { name: "CHIVAS", price: 3200, description: "", subitems: [] },
      {
        name: "FERNET BRANCA",
        price: 2100,
        description: "",
        subitems: [],
      },
      { name: "RON HAVANA", price: 2100, description: "", subitems: [] },
      {
        name: "RON HAVANA 7 AÑOS",
        price: 2500,
        description: "",
        subitems: [],
      },
      { name: "ABSOLUT", price: 2300, description: "", subitems: [] },
      {
        name: "ABSOLUT SABORIZADOS",
        price: 2500,
        description: "",
        subitems: [],
      },
      {
        name: "GIN BEEAFEATER",
        price: 2400,
        description: "",
        subitems: [],
      },
      {
        name: "JAGERMEISTER",
        price: 2100,
        description: "",
        subitems: [],
      },
      {
        name: "TEQUILA JOSÉ CUERVO",
        price: 1900,
        description: "",
        subitems: [],
      },
      {
        name: "REFRESCO 1.25L EXTRA",
        price: 160,
        description: "",
        subitems: [],
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
      },
      { name: "JAMESON", price: 200, description: "", subitems: [] },
      {
        name: "JAMESON CRESTED",
        price: 250,
        description: "",
        subitems: [],
      },
      {
        name: "JAMESON BLACK BARREL",
        price: 290,
        description: "",
        subitems: [],
      },
      {
        name: "CHIVAS 12 AÑOS",
        price: 250,
        description: "",
        subitems: [],
      },
      {
        name: "CHIVAS 18 AÑOS",
        price: 350,
        description: "",
        subitems: [],
      },
      {
        name: "JACK DANIEL'S Nº 7 ",
        price: 240,
        description: "",
        subitems: [],
      },
      {
        name: "JACK DANIEL'S HONEY",
        price: 240,
        description: "",
        subitems: [],
      },
      {
        name: "FERNET BRANCA/BRANCA MENTA",
        price: 190,
        description: "",
        subitems: [],
      },
      {
        name: "RON HAVANA AÑEJO",
        price: 190,
        description: "",
        subitems: [],
      },
      {
        name: "RON HAVANA 7 AÑOS",
        price: 240,
        description: "",
        subitems: [],
      },
      {
        name: "ABSOLUT VODKA",
        price: 200,
        description: "",
        subitems: [],
      },
      {
        name: "ABSOLUT",
        price: 230,
        description: "MANGO/PERA/POMELO/FRAMBUESA",
        subitems: [],
      },
      {
        name: "JAGERMEISTER",
        price: 190,
        description: "",
        subitems: [],
      },
      {
        name: "GIN BEEAFEATER",
        price: 220,
        description: "",
        subitems: [],
      },
      {
        name: "BAILEYS",
        price: 240,
        description: "",
        subitems: [],
      },
      {
        name: "CAMPARI",
        price: 190,
        description: "",
        subitems: [],
      },
      {
        name: "CINZANO",
        price: 180,
        description: "",
        subitems: [],
      },
      {
        name: "TEQUILA JOSÉ CUERVO REPOSADO",
        price: 160,
        description: "",
        subitems: [],
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
      },
      {
        name: "ETCHART CAFAYATE Torrontes cosecha tardía / Vino blanco",
        price: 390,
        description: "",
        subitems: [],
      },
      {
        name: "ETCHART CAFAYATE Malbec",
        price: 390,
        description: "",
        subitems: [],
      },
      {
        name: "ETCHART CAFAYATE Cabernet Sauvignon",
        price: 390,
        description: "",
        subitems: [],
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
      },
      {
        name: "GRANDES",
        price: 180,
        description: "",
        subitems: [],
      },
    ],
  },
];

export default menu;
