<template>
  <div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports'
const { locale } = useI18n()

const props = defineProps<{
  title: string
  description: string
  keywords: string
  structuredData?: Record<string, any>
}>()

const defaultStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '蒙古-中国跨境服务平台',
  description: props.description,
  url: 'https://example.com',
  logo: 'https://example.com/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+86-XXX-XXXX-XXXX',
    contactType: 'customer service',
    areaServed: ['MN', 'CN'],
    availableLanguage: ['mn', 'zh', 'en']
  }
}

const structuredData = computed(() => props.structuredData || defaultStructuredData)

useHead({
  title: props.title,
  meta: [
    { name: 'description', content: props.description },
    { name: 'keywords', content: props.keywords },
    { property: 'og:title', content: props.title },
    { property: 'og:description', content: props.description },
    { property: 'og:type', content: 'website' },
    { property: 'og:locale', content: locale.value },
    { property: 'og:site_name', content: '蒙古-中国跨境服务平台' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: props.title },
    { name: 'twitter:description', content: props.description }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(structuredData.value) // ✅ 这里正确插入 JSON-LD 结构化数据
    }
  ]
})
</script> 
