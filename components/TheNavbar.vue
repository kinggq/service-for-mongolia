<template>
  <nav class="nav shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex-shrink-0 flex items-center">
          <NuxtLink to="/" class="text-2xl font-bold text-blue-600">
            <img src="/logo.png" alt="logo" class="w-30 h-8 object-contain">
          </NuxtLink>
        </div>
        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
          <NuxtLink
            v-for="(item, key) in navItems"
            :key="key"
            :to="localePath(`/${key}`)"
            class="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-blue-600"
          >
            {{ item }}
          </NuxtLink>
        </div>
        <!-- 语言切换 -->
        <div class="flex items-center">
          {{ locale }}
          <select
            v-model="selectedLocale"
            class="hidden sm:block ml-4 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            @change="changeLanguage"
          >
            <option value="mn">Монгол</option>
            <option value="zh">中文</option>
            <option value="en">English</option>
          </select>
          <!-- 移动端菜单按钮 -->
          <Icon @click="isOpen = true" name="material-symbols:menu-rounded" size="30px" class="text-white sm:hidden" />
          
        </div>
      </div>
    </div>

    <!-- 移动端抽屉菜单 -->
    <MobileDrawer
      :is-open="isOpen"
      @close="isOpen = false"
    />
  </nav>
</template>

<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const route = useRoute()
const localePath = useLocalePath()
const isOpen = ref(false)
const selectedLocale = ref(locale.value)

const navItems = computed(() => ({
  '': t('nav.home'),
  // 'car': t('nav.car'),
  // 'shopping': t('nav.shopping'),
  // 'tourism': t('nav.tourism'),
  // 'export': t('nav.export'),
  'wholesale': t('nav.wholesale'),
  'about': t('nav.about'),
  'contact': t('nav.contact')
}))

const changeLanguage = (event: Event) => {
  
  const target = event.target as HTMLSelectElement
  selectedLocale.value = target.value as 'zh' | 'mn' | 'en'
  setLocale(target.value as 'zh' | 'mn' | 'en')
}
</script>

<style scoped>
.nav {
  background: linear-gradient(270deg,#008bef -0.9%,#0032ff 99.24%);
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}
.nav a {
  color: #fff;
  text-decoration: none;
}
.nav a:hover {
    color: #3cdbc0;
}
</style>
