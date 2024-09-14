<script setup>
import { inject, onMounted, ref } from 'vue';

const supabase = inject('supabase');
const tenants = ref([]);
const loading = ref(false);

async function getCompanies() {
  if (loading.value) return;
  try {
    loading.value = true;

    const { data } = await supabase.from('tenants').select();
    tenants.value = data;
  } catch (error) {
    console.error(error);
  } finally {
    loading.value = false;
  }
}

function cardHeader(tenant) {
  return `<img alt="${tenant.name} Logo" src="${tenant.logo}" style="width: 100%; height: auto;" />`;
}

function cardFooter(tenant) {
  return `
        <a href="https://twitter.com/${tenant.social_twitter}" target="_blank" class="p-button p-button-rounded p-button-outlined p-button-info p-mr-2">
          <i class="pi pi-twitter"></i>
        </a>
        <a href="https://facebook.com/${tenant.social_facebook}" target="_blank" class="p-button p-button-rounded p-button-outlined p-button-primary">
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

    <div v-else class="flex flex-wrap -mx-4">
      <div
        v-for="tenant in tenants"
        :key="tenant.tenant_code"
        class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-4"
      >
        <Card class="flex flex-col h-full">
          <template #header>
            <div class="p-4">
              <span v-html="cardHeader(tenant)"></span>
            </div>
          </template>
          <template #title>
            <h2 class="text-xl font-semibold">{{ tenant.name }}</h2>
          </template>
          <template #subtitle>
            <h3 class="text-md text-gray-500">{{ tenant.tag_line }}</h3>
          </template>
          <template #content>
            <div class="p-4 h-full">
              <div class="mt-2">
                <p>{{ tenant.description }}</p>
              </div>
              <div class="mt-4">
                <p><i class="pi pi-phone mr-2"></i>{{ tenant.phone }}</p>
              </div>
              <div class="mt-2">
                <p><i class="pi pi-mobile mr-2"></i>{{ tenant.mobile }}</p>
              </div>
              <div class="truncate mt-2">
                <i class="pi pi-envelope mr-2"></i>
                <a :href="`mailto:${tenant.contact_email}`">{{
                  tenant.contact_email
                }}</a>
              </div>
            </div>
          </template>
          <template #footer>
            <div class="flex flex-1 p-4 mt-auto">
              <span class="flex-1" v-html="cardFooter(tenant)"></span>
            </div>
          </template>
        </Card>
      </div>
    </div>
  </div>
</template>
