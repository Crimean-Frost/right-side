<template>
 <h1 class="page__title" v-html="title"></h1>
</template>

<script setup lang="ts">
export type ITitlePageProps = {
  title: string,
}

const props = defineProps<ITitlePageProps>()
</script>

<style scoped>
.page__title {
  @apply text-center text-black text-[88px] font-golos font-normal leading-[84px] tracking-[-3.7px]
  xl:text-[74px] xl:leading-[65.86px]
  md:text-left md:text-[68px] md:leading-[60.52px] md:tracking-[-2.7px]
  sm:text-[40px] sm:leading-[40.94px] sm:tracking-[-1.7px]
}
</style>