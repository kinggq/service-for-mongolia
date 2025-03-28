<template>
  <div class="relative overflow-hidden">
    <!-- 背景图片 -->
    <div class="absolute inset-0">
      <!-- <div class="absolute inset-0 bg-[url('../public/hero-bg.jpg')] bg-cover bg-center bg-no-repeat"></div> -->
      <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30"></div>
    </div>

    <!-- 内容区域 -->
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div class="text-center">
        <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
          <span class="block">{{ t('hero.title') }}</span>
          <span class="block text-blue-300">{{ t('hero.subtitle') }}</span>
        </h1>
        <p class="mt-3 max-w-md mx-auto text-base text-gray-100 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          {{ t('hero.description') }}
        </p>
        <div class="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
          <div class="rounded-md shadow">
            <NuxtLink
              to="/contact"
              class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
            >
              {{ t('hero.cta') }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script> 
