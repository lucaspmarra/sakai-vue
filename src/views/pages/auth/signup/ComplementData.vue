<script setup>
import { reactive } from "vue";

const user = reactive({
  email: null,
  password: null,
});
</script>
<template>
  <label
    for="email1"
    class="block text-surface-900 dark:text-surface-0 text-xl font-medium mb-2"
    >Email</label
  >
  <InputText
    id="email1"
    type="text"
    placeholder="Email address"
    class="w-full mb-8"
    v-model="user.email"
  />

  <label
    for="password1"
    class="block text-surface-900 dark:text-surface-0 font-medium text-xl mb-2"
    >Password</label
  >
  <Password
    id="password1"
    v-model="user.password"
    placeholder="Password"
    :toggleMask="true"
    class="mb-4"
    fluid
    :feedback="false"
  ></Password>
</template>
