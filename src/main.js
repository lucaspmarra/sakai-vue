import ptBrPrimeVue from "@/assets/locales/pt-BR.json";
import enUS from "@/i18n/en-US.json";
import esES from "@/i18n/es-ES.json";
import ptBR from "@/i18n/pt-BR.json";
import Aura from "@primevue/themes/aura";
import {
  BackendFetch,
  DevTools,
  FormatSimple,
  Tolgee,
  VueTolgee,
} from "@tolgee/vue";
import PrimeVue from "primevue/config";
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import App from "./App.vue";
import router from "./router";

const i18n = createI18n({
  legacy: false,
  locale: "pt-BR",
  fallbackLocale: "pt-BR",
  globalInjection: true,
  messages: {
    "en-US": { message: enUS },
    "pt-BR": { message: ptBR },
    "es-ES": { message: esES },
  },
});

const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatSimple())
  .use(
    BackendFetch({
      prefix: "https://cdn.tolg.ee/19048826fcf72c9b7d910e39ae720f04",
    })
  )
  .init({
    language: "pt-BR",
    apiUrl: import.meta.env.VUE_APP_TOLGEE_API_URL,
    apiKey: import.meta.env.VUE_APP_TOLGEE_API_KEY,
  });

import Button from "primevue/button";
import Card from "primevue/card";
import ConfirmationService from "primevue/confirmationservice";
import ProgressSpinner from "primevue/progressspinner";
import ToastService from "primevue/toastservice";

import "@/assets/styles.scss";
import "@/assets/tailwind.css";

const app = createApp(App);

import { supabase } from "./service/SupabaseClient";

app.provide("supabase", supabase);

app.use(router);
app.use(PrimeVue, {
  locale: ptBrPrimeVue,
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: ".app-dark",
    },
  },
});
app.use(ToastService);
app.use(ConfirmationService);
app.use(ProgressSpinner);
app.use(Card);
app.use(Button);

app.use(i18n);

app.use(VueTolgee, { tolgee });
app.mount("#app");
