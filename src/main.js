import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import Aura from "@primevue/themes/aura";
import PrimeVue from "primevue/config";

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

app.mount("#app");
