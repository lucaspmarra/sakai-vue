<script setup>
import { reactive, ref } from "vue";

const user = reactive({
  first_name: null,
  last_name: null,
  cpf: null,
  email: null,
  password: null,
});

let today = new Date();
let month = today.getMonth();
let year = today.getFullYear();
let prevMonth = month === 0 ? 11 : month - 1;
let prevYear = prevMonth === 11 ? year - 1 : year;
let nextMonth = month === 11 ? 0 : month + 1;
let nextYear = nextMonth === 0 ? year + 1 : year;

const date = ref();
const minDate = ref(new Date());
const maxDate = ref(new Date());

minDate.value.setMonth(prevMonth);
minDate.value.setFullYear(year - 100);
maxDate.value.setMonth(nextMonth);
maxDate.value.setFullYear(nextYear);
</script>
<template>
  <div class="flex flex-row justify-between">
    <div class="col">
      <label
        for="first_name"
        class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2"
        >{{ $t("signup.personal_data.first_name") }}</label
      >
      <InputText
        id="first_name"
        type="text"
        :placeholder="$t('signup.personal_data.first_name')"
        class="w-full mb-8"
        v-model="user.first_name"
      />
    </div>
    <div class="col">
      <label
        for="last_name"
        class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2"
        >{{ $t("signup.personal_data.last_name") }}</label
      >
      <InputText
        id="last_name"
        type="text"
        :placeholder="$t('signup.personal_data.last_name')"
        class="w-full mb-8"
        v-model="user.last_name"
      />
    </div>
  </div>
  <div class="flex flex-row justify-between">
    <div class="col">
      <label
        for="cpf"
        class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2"
        >Cpf</label
      >
      <InputText
        id="cpf"
        type="text"
        placeholder="Cpf"
        class="w-full mb-8"
        v-model="user.cpf"
      />
    </div>
    <div class="col">
      <label
        for="Data de nascimento"
        class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2"
        >{{ $t("signup.personal_data.date_of_birth") }}</label
      >
      <DatePicker
        :placeholder="$t('signup.personal_data.date_of_birth')"
        v-model="date"
        :minDate="minDate"
        :maxDate="maxDate"
        :manualInput="false"
      />
    </div>
  </div>
  <label
    for="email1"
    class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2"
    >E-mail</label
  >
  <InputText
    id="email1"
    type="text"
    placeholder="E-mail"
    class="w-full mb-8"
    v-model="user.email"
  />

  <label
    for="password1"
    class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2"
    >{{ $t("signup.personal_data.password") }}</label
  >
  <Password
    id="password1"
    v-model="user.password"
    :placeholder="$t('signup.personal_data.password')"
    :toggleMask="true"
    class="mb-4"
    fluid
    :feedback="false"
  ></Password>
</template>
