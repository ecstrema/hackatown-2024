<script setup lang="ts">
import { showInPage } from '~/logic/storage'
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200 flex flex-col h-screen items-center bg-[#5ad0d2] gap-2">
    <img src="/assets/logo.png" alt="Logo" class="w-60 mb-4">
    <h1 class="text-4xl">
      Options
    </h1>

    <div class="flex gap-2 items-center justify-center">
      <label class="text-xl" for="showInPage">Show popup inside page: </label>
      <input id="showInPage" v-model="showInPage" type="checkbox" class="w-4 h-4">
    </div>
    <div class="text-gray-900">
      If checked, the popup will be shown inside the page instead of in a separate window.
    </div>
  </main>
</template>
