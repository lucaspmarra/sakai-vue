<script setup>
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";
import { usePrimeVue } from "primevue/config";
import ptBr from "@/assets/locales/pt-BR.json";
import esES from "@/assets/locales/es-ES.json";
import enUS from "@/assets/locales/en-US.json";

const selected_country = ref();
const primevue = usePrimeVue();
const { locale, availableLocales, t } = useI18n();

const country_codes = availableLocales.map((locale) => {
  const parts = locale.split("-");

  return { name: locale, code: parts[1] };
});

const changeToSpanish = () => {
  primevue.config.locale = esES;
};

const changeToPortuguese = () => {
  primevue.config.locale = ptBr;
};

const changeToEnglish = () => {
  primevue.config.locale = enUS;
};

const onSelectionChange = () => {
  if (selected_country.value.code === "BR") {
    changeToPortuguese();
  }

  if (selected_country.value.code === "ES") {
    changeToSpanish();
  }

  if (selected_country.value.code === "US") {
    changeToEnglish();
  }

  locale.value = selected_country.value.name;
};

onMounted(() => {
  const default_contry = country_codes.find(
    (country) => country.name === locale.value
  );
  selected_country.value = default_contry;
});
</script>
<template>
  <div
    class="hidden absolute top-[3.25rem] right-0 bg-surface-0 dark:bg-surface-900 origin-top"
  >
    <Listbox
      v-model="selected_country"
      :options="
        country_codes.filter(
          (country) => country.code !== selected_country?.code
        )
      "
      optionLabel="name"
      listStyle="max-height:250px; width: 60px;"
      @change="onSelectionChange"
    >
      <template #option="slotProps">
        <div class="flex items-center">
          <img
            :alt="slotProps.name"
            src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
            :class="`flag flag-${slotProps.option.code.toLowerCase()} mr-2`"
            style="width: 120px"
          />
        </div>
      </template>
    </Listbox>
  </div>
</template>
