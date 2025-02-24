<template>
  <button v-if="!to" class="button">
    <slot></slot>
  </button>
  <NuxtLink v-else :to="!to!.startsWith('/') ? `/${to}/` : `${to === '/' ? '' : to}/`" class="button">
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{ to?: string }>()
</script>

<style scoped>
.button {
  @apply flex w-[200px] h-[60px] justify-center items-center text-center border-solid border-2 border-orange rounded-[30px] text-[16px] font-onest bg-white
  font-normal leading-[14.24px] tracking-[-0.6px] mt-[0.5px]
  transition-colors ease-out duration-300
  xl:w-[190px] xl:h-[47px]
  md:hidden
  sm:text-[14px] sm:leading-[12.46px]
  hover:bg-orange hover:text-white focus:bg-orange focus:text-white active:bg-orange active:text-white
}
</style>
