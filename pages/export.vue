<script lang="ts" setup>
const { t } = useI18n()
</script>
<template>
  <div class="py-12 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- 页面标题 -->
      <div class="text-center">
        <h1 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          {{ t('services.export.title') }}
        </h1>
        <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          {{ t('services.export.description') }}
        </p>
      </div>

      <!-- 服务区域 -->
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- 出口服务 -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <img src="/w1.png" alt="出口服务" class="w-full h-40 object-cover rounded-lg">
              <h3 class="text-lg font-medium text-gray-900">{{ t('services.export.export.title') }}</h3>
              <p class="mt-2 text-base text-gray-500">
                {{ t('services.export.export.description') }}
              </p>
            </div>
          </div>

          <!-- 进口服务 -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <img src="/w2.png" alt="进口服务" class="w-full h-40 object-cover rounded-lg">
              <h3 class="text-lg font-medium text-gray-900">{{ t('services.export.import.title') }}</h3>
              <p class="mt-2 text-base text-gray-500">
                {{ t('services.export.import.description') }}
              </p>
            </div>
          </div>

          <!-- 物流服务 -->
          <div class="bg-white overflow-hidden shadow rounded-lg">
            <div class="px-4 py-5 sm:p-6">
              <img src="/w3.png" alt="物流服务" class="w-full h-40 object-cover rounded-lg">
              <h3 class="text-lg font-medium text-gray-900">{{ t('services.export.logistics.title') }}</h3>
              <p class="mt-2 text-base text-gray-500">
                {{ t('services.export.logistics.description') }}
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
