<template>
  <NuxtLink :to="localePath(path)" class="group decoration-none">
    <div class="relative hover:shadow-xl transition-shadow duration-300">
      <div class="relative h-64 w-full overflow-hidden rounded-lg bg-gray-200">
        <slot name="image" />
      </div>
      <div class="mt-4">
        <h3 class="text-lg font-medium text-gray-900">{{ title }}</h3>
        <p class="mt-2 text-base text-gray-500">{{ description }}</p>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const localePath = useLocalePath()

defineProps<{
  title: string
  description: string
  path: string
}>()
</script> 
