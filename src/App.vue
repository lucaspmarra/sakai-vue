<script setup></script>

<template>
  <TolgeeProvider>
    <template v-slot:fallback>
      <div>Loading...</div>
    </template>
    <router-view />
  </TolgeeProvider>
</template>

<style scoped></style>
