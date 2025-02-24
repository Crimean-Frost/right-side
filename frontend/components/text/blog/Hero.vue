<template>
  <span v-html="text" class="hero__text"></span>
</template>

<script setup lang="ts">
export type TextBlogHeroProps = {
  text?: string,
}
const props = defineProps<TextBlogHeroProps>();
</script>

<style scoped>
.hero__text {
  @apply text-black text-[24px] font-onest font-light leading-[108%] tracking-[-1px]
  xl:text-[20px] xl:pt-[11px] xl:tracking-[-0.8px]
  lg:leading-[110%] lg:tracking-[-0.7px]
  md:text-[20px] md:pt-0
}

.hero__text p {
  @apply text-black text-[24px] font-onest font-light leading-[25.92px] tracking-[-1.1px]
  xl:text-[20px] xl:leading-[22px] xl:pt-[11px] xl:tracking-[-1px]
  md:text-[20px] md:pt-0
}
</style>