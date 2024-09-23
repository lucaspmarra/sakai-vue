<script setup>
import FloatingLanguageSelector from "@/components/FloatingLanguageSelector.vue";
import { useLayout } from "@/layout/composables/layout";
import { computed } from "vue";
import { useI18n } from "vue-i18n";

const { toggleDarkMode, isDarkTheme } = useLayout();
const { locale } = useI18n();

const countryCode = computed(() => {
  const parts = locale.value.split("-");
  return parts[1] ? parts[1].toLowerCase() : "pt";
});
</script>

<template>
  <div class="fixed flex gap-4 top-8 right-8">
    <Button
      type="button"
      @click="toggleDarkMode"
      rounded
      :icon="isDarkTheme ? 'pi pi-moon' : 'pi pi-sun'"
      severity="secondary"
    />
    <div class="relative">
      <!-- <Button
        icon="pi pi-palette"
        v-styleclass="{
          selector: '.app',
          enterFromClass: 'hidden',
          enterActiveClass: 'animate-scalein',
          leaveToClass: 'hidden',
          leaveActiveClass: 'animate-fadeout',
          hideOnOutsideClick: true,
        }"
        type="button"
        rounded
      /> -->
      <Button
        v-styleclass="{
          selector: '@next',
          enterFromClass: 'hidden',
          enterActiveClass: 'animate-scalein',
          leaveToClass: 'hidden',
          leaveActiveClass: 'animate-fadeout',
          hideOnOutsideClick: true,
        }"
        type="button"
        severity="secondary"
        rounded
      >
        <template #icon>
          <img
            :alt="$t('address.flag', [countryCode])"
            src="https://primefaces.org/cdn/primevue/images/flag/flag_placeholder.png"
            :class="`flag flag-${countryCode.toLowerCase()} mr-2`"
            class="w-full object-cover"
            style="width: 120px"
          />
        </template>
      </Button>
      <FloatingLanguageSelector />

      <!-- <AppConfigurator class="app" /> -->
    </div>
  </div>
</template>
