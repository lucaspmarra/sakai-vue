<script setup>
import { inject, onMounted, ref } from 'vue';

const supabase = inject('supabase');
const countries = ref([]);
const loading = ref(false);

async function getCompanies() {
  if (loading.value) return;
  try {
    loading.value = true;

    const { data } = await supabase.from('countries').select();
    countries.value = data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

function cardHeader(country) {
  return `<img alt="${country.name} Logo" src="${country.logo}" style="width: 100%; height: auto;" />`;
}

function cardFooter(country) {
  return `
        <a href="https://twitter.com/${country.social_twitter}" target="_blank" class="p-button p-button-rounded p-button-outlined p-button-info p-mr-2">
          <i class="pi pi-twitter"></i>
        </a>
        <a href="https://facebook.com/${country.social_facebook}" target="_blank" class="p-button p-button-rounded p-button-outlined p-button-primary">
          <i class="pi pi-facebook"></i>
        </a>
      `;
}

onMounted(() => {
  getCompanies();
});
</script>
<template>
  <div class="card">
    <div v-if="loading" class="flex justify-content-center align-center">
      <ProgressSpinner aria-label="Loading" style="width: 42px; height: 42px" />
    </div>

    <div v-else class="flex flex-wrap">
      <div
        v-for="country in countries"
        :key="country.id"
        class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
      >
        <Card class="flex flex-col h-full">
          <template #title>
            <h2 class="text-xl font-semibold">{{ country.name }}</h2>
          </template>
          <template #content>
            <div class="p-1 h-full">
              <div class="mt-2">
                <p>Capital: {{ country.capital }}</p>
              </div>
              <div class="mt-2">
                <p>População: {{ country.population }}</p>
              </div>
              <div class="mt-2">
                <p>Área: {{ country.area }}</p>
              </div>
              <div class="mt-2">
                <p>Região: {{ country.region }}</p>
              </div>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
