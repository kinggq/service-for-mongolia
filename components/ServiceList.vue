<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2 class="text-base text-blue-600 font-semibold tracking-wide uppercase">Services</h2>
      <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {{ t('services.title') }}
      </p>
    </div>

    <div class="mt-10">
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <!-- Car Service -->
        <slot />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script> 
