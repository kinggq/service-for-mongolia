<script lang="ts" setup>
const { t } = useI18n()
</script>
<template>
  <div class="py-12 bg-white">
    <img src="/about.jpg" alt="关于我们" class="w-full object-cover rounded-lg rounded-rg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 页面标题 -->
      <div class="text-center">
        <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {{ t('nav.about') }}
        </h1>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {{ t('about.subtitle') }}
        </p>
      </div>

      <!-- 公司介绍 -->
      <div class="mt-12">
        <div class="bg-white overflow-hidden shadow rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg font-medium text-gray-900">{{ t('about.intro.title') }}</h3>
            <div class="mt-2 text-base text-gray-500">
              <p>{{ t('about.intro.content') }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- 服务优势 -->
      <div class="mt-12">
        <h3 class="text-lg font-medium text-gray-900 text-center">{{ t('about.advantages.title') }}</h3>
        <div class="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- 专业团队 -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <img src="/a1.png" alt="专业团队" class="w-full h-40 object-cover rounded-lg">
              <h4 class="text-lg font-medium text-gray-900">{{ t('about.advantages.team.title') }}</h4>
              <p class="mt-2 text-base text-gray-500">
                {{ t('about.advantages.team.content') }}
              </p>
            </div>
          </div>

          <!-- 一站式服务 -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <img src="/a3.png" alt="一站式服务" class="w-full h-40 object-cover rounded-lg">
              <h4 class="text-lg font-medium text-gray-900">{{ t('about.advantages.service.title') }}</h4>
              <p class="mt-2 text-base text-gray-500">
                {{ t('about.advantages.service.content') }}
              </p>
            </div>
          </div>

          <!-- 价格优势 -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <img src="/a2.png" alt="价格优势" class="w-full h-40 object-cover rounded-lg">
              <h4 class="text-lg font-medium text-gray-900">{{ t('about.advantages.price.title') }}</h4>
              <p class="mt-2 text-base text-gray-500">
                {{ t('about.advantages.price.content') }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- 联系表单 -->
      <div class="mt-12">
        <div class="bg-white shadow sm:rounded-lg">
          <div class="px-4 py-5 sm:p-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ t('contact.title') }}
            </h3>
            <div class="mt-2 max-w-xl text-sm text-gray-500">
              <p>{{ t('contact.subtitle') }}</p>
            </div>
            <div class="mt-5">
              <a
                href="mailto:contact@example.com"
                class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {{ t('contact.email') }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
