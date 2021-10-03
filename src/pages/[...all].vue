<script setup lang="ts">
const { t } = useI18n()

const router = useRouter()
let timer: number

onMounted(() => {
  timer = setTimeout(
    () => {
      router.push('/')
    },
    3000,
  ) as unknown as number
})
onUnmounted(() => {
  clearTimeout(timer)
})
</script>

<template>
  <div class="text-xl opacity-80 text-gray-600 dark:text-light-600">
    {{ t('not-found') }}
  </div>
</template>

<route lang="yaml">
meta:
  layout: 404
</route>
