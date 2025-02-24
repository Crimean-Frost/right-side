<template>
  <h3 v-html="text" class="text__section"></h3>
</template>

<script setup lang="ts">
type TextSectionMainProps = {
  text: string;
}
const props = defineProps<TextSectionMainProps>();
</script>

<style scoped>
.text__section {
  @apply text-[68px] text-black font-golos font-normal leading-[94%] tracking-[-2.7px] indent-[118px]
  xl:text-[50px] xl:tracking-[-2px]
  md:text-[48px]
  sm:text-[28px] sm:font-normal sm:indent-0 sm:tracking-[-1.3px]
}
</style>