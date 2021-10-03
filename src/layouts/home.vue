<script setup lang="ts">
const date = ref(new Date().getFullYear())
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-light-500 h-full flex flex-col justify-center items-center">
    <router-view />
    <div class="mx-auto text-center opacity-80 dark:opacity-80 text-sm fixed bottom-4 w-full">
      <span class="text-sm">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          class="pr-2"
        >CC BY-NC-SA 4.0</a> {{ date }} © Songhn
      </span>
    </div>
  </main>
</template>
