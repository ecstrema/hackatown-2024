<script setup lang="ts">
import { showInPage } from '~/logic/storage'
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <img src="/assets/icon.svg" class="icon-btn mx-2 text-2xl" alt="extension icon">
    <div>Options</div>

    <div class="flex gap-2 items-center justify-center">
      <label for="showInPage">Show popup inside page: </label>
      <input id="showInPage" v-model="showInPage" type="checkbox">
    </div>
  </main>
</template>
