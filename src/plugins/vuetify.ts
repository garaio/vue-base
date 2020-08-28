import Vue from "vue";
import Vuetify from "vuetify/lib";
import de from "vuetify/src/locale/de";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        // primary: "#42b983",
        // secondary: "#42b983",
        // accent: "#82B1FF",
        // error: "#FF5252",
        // info: "#2196F3",
        // success: "#4CAF50",
        // warning: "#FFC107",
      },
    },
  },
  lang: {
    locales: { de },
    current: "de",
  },
});
