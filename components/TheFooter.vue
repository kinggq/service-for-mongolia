<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 联系方式 -->
        <div>
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            {{ t('contact.title') }}
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a href="mailto:contact@example.com" class="text-base text-gray-300 hover:text-white">
                {{ t('contact.email') }}
              </a>
            </li>
            <li>
              <a href="tel:+1234567890" class="text-base text-gray-300 hover:text-white">
                {{ t('contact.phone') }}
              </a>
            </li>
            <li class="text-base text-gray-300">
              {{ t('contact.address') }}
            </li>
          </ul>
        </div>

        <!-- 社交媒体 -->
        <div>
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            {{ t('contact.social') }}
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <a href="https://instagram.com" target="_blank" class="text-base text-gray-300 hover:text-white">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://facebook.com" target="_blank" class="text-base text-gray-300 hover:text-white">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" class="text-base text-gray-300 hover:text-white">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>

        <!-- 快速链接 -->
        <div>
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            {{ t('nav.quickLinks') }}
          </h3>
          <ul class="mt-4 space-y-4">
            <li>
              <NuxtLink to="/about" class="text-base text-gray-300 hover:text-white">
                {{ t('nav.about') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/contact" class="text-base text-gray-300 hover:text-white">
                {{ t('nav.contact') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/privacy" class="text-base text-gray-300 hover:text-white">
                {{ t('nav.privacy') }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/terms" class="text-base text-gray-300 hover:text-white">
                {{ t('nav.terms') }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>

      <!-- 版权信息 -->
      <div class="mt-8 border-t border-gray-700 pt-8">
        <p class="text-base text-gray-400 text-center">
          © {{ new Date().getFullYear() }} {{ t('footer.copyright') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script> 
