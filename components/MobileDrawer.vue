<template>
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="transform -translate-x-full"
    enter-to-class="transform translate-x-0"
    leave-active-class="transition duration-300 ease-in"
    leave-from-class="transform translate-x-0"
    leave-to-class="transform -translate-x-full"
  >
    <div v-if="isOpen" class="fixed inset-0 z-50">
      <!-- 遮罩层 -->
      <div class="fixed inset-0 bg-black bg-opacity-50" @click="close"></div>
      
      <!-- 抽屉内容 -->
      <div class="drawer-content fixed inset-y-0 left-0 w-[100%]">
        <!-- 关闭按钮 -->
        <div class="absolute right-4 top-4">
          <Icon @click="close" class="text-white" name="material-symbols:close-rounded" size="24px" />
        </div>

        <!-- 菜单内容 -->
        <div class="flex text-center h-full flex-col pt-16">
          <nav class=" space-y-1 px-4">
            <NuxtLink
              v-for="(item, key) in navItems"
              :key="key"
              :to="localePath(`/${key}`)"
              class="group flex items-center rounded-md px-2 py-2 text-base justify-center decoration-none font-medium text-white hover:bg-blue-700"
              @click="close"
            >
              {{ item }}
            </NuxtLink>
          </nav>

          <!-- 底部语言选择器 -->
          <div class="border-t border-blue-500 p-4">
            <select
              v-model="selectedLocale"
              class="w-full rounded-md border-0 bg-blue-700 py-2 pl-3 pr-10 text-white focus:outline-none focus:ring-2 focus:ring-white"
              @change="changeLanguage"
            >
              <option value="mn">Монгол</option>
              <option value="zh">中文</option>
              <option value="en">English</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const { t, locale, setLocale } = useI18n()
const localePath = useLocalePath()

const props = defineProps<{
  isOpen: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const close = () => {
  emit('close')
}

const navItems = computed(() => ({
  '': t('nav.home'),
  'car': t('nav.car'),
  'shopping': t('nav.shopping'),
  'tourism': t('nav.tourism'),
  'export': t('nav.export'),
  'wholesale': t('nav.wholesale'),
  'about': t('nav.about'),
  'contact': t('nav.contact')
}))

const selectedLocale = ref(locale.value)

const changeLanguage = (event: Event) => {
  const target = event.target as HTMLSelectElement
  selectedLocale.value = target.value as 'zh' | 'mn' | 'en'
  setLocale(target.value as 'zh' | 'mn' | 'en')
}
</script> 
<style scoped>
.drawer-content {
  background: linear-gradient(270deg,#008bef -0.9%,#0032ff 99.24%);
}
</style>
