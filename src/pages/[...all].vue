<script setup lang="ts">
const { t } = useI18n()

const router = useRouter()
let timer: number

onMounted(() => {
  timer = setTimeout(
    () => {
      router.push('/')
    },
    2000,
  ) as unknown as number
})
onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<template>
  <div class="text-xl opacity-80 text-gray-600 dark:text-light-600 w-full flex flex-col items-center">
    <div class="lds-ripple mb-3">
      <div></div><div></div>
    </div>
    {{ t('not-found') }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
