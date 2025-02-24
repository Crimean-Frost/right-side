<template>
  <span v-html="text" class="hero__text"></span>
</template>

<script setup lang="ts">
export type TextCasesHeroProps = {
  text?: string,
}
const props = defineProps<TextCasesHeroProps>();
</script>

<style scoped>
.hero__text {
  @apply text-black text-[20px] font-onest font-light leading-[110%] tracking-[-1px]
  xl:text-[20px] xl:pt-[11px] xl:tracking-[-0.8px]
  lg:leading-[110%] lg:tracking-[-0.7px]
  md:text-[20px] md:pt-0
}
</style>