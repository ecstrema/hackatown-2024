<script setup lang="ts">
import { extractors } from '../logic/extractor'

function openOptionsPage() {
  browser.runtime.openOptionsPage()
}

let currentItemName = null
for (const extractor of extractors) {
  currentItemName = extractor()
  if (currentItemName)
    break
}

const url = ref(currentItemName ? `https://www.facebook.com/marketplace/search/?query=${encodeURIComponent(currentItemName)}` : null)
</script>

<template>
  <main class="w-[300px] px-4 py-5 text-center text-gray-700 flex flex-col items-center">
    <Logo />
    <div
      v-if="url"
      class="bg-white text-gray-800 rounded-lg shadow w-max h-min p-2"
    >
      <a class="p-2 bg-teal-900 hover:bg-teal-800 text-teal-100 rounded-lg border-none cursor-pointer no-underline" :href="url" target="_blank" rel="noreferrer noopener">
        See if there are matching items on facebook marketplace
      </a>
    </div>

    <button class="btn mt-2" @click="openOptionsPage">
      Open Options
    </button>
  </main>
</template>
