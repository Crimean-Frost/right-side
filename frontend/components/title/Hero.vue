<template>
<h1 class="title__hero" v-html="title"></h1>
</template>

<script setup lang="ts">
type titleHeroProps = {
  title: string;
}
const props = defineProps<titleHeroProps>();
</script>

<style scoped>
.title__hero {
  @apply text-[88px] leading-[89%] font-golos text-center font-normal text-black tracking-[-3.5px]
  xl:text-[74px] xl:tracking-[-3px]
  md:text-start md:text-[68px] md:tracking-[-2.7px]
  sm:text-[40px] sm:tracking-[-1.9px]
}
</style>