<script setup lang="ts">
import { useToggle } from '@vueuse/core'
import 'uno.css'

import { extractors } from '../../logic/extractor'

// Get the curent item from the extracters
let currentItemName = null
for (const extractor of extractors) {
  currentItemName = extractor()
  if (currentItemName)
    break
}

const url = ref(currentItemName ? `https://www.facebook.com/marketplace/search/?query=${encodeURIComponent(currentItemName)}` : null)
const [show, toggle] = useToggle(false)
</script>

<template>
  <div class="fixed right-0 bottom-0 m-5 z-100 flex items-end font-sans select-none leading-1em">
    <div
      class="bg-white text-gray-800 rounded-lg shadow w-max h-min p-2"
      m="y-auto r-2"
      transition="opacity duration-300"
      :class="show ? 'opacity-100 block' : 'opacity-0 hidden'"
    >
      <a class="p-2 bg-teal-900 hover:bg-teal-800 text-teal-100 rounded-lg border-none cursor-pointer no-underline" :href="url" target="_blank" rel="noreferrer noopener">
        See if there are matching items on facebook marketplace
      </a>
    </div>
    <button
      v-if="url"
      class="flex w-10 h-10 rounded-full shadow cursor-pointer border-none"
      bg="teal-600 hover:teal-700"
      @click="toggle()"
    >
      <pixelarticons-power class="block m-auto text-white text-lg" />
    </button>
  </div>
</template>
