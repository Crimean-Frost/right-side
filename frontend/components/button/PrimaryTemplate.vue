<template>
  <button class="button__primary">
    <span class="button__primary-span"><slot></slot></span>
  </button>
</template>

<script setup lang="ts">
</script>

<style scoped>
.button__primary {
  @apply flex items-center justify-center text-center w-[200px] h-[200px] text-[16px] font-medium font-golos leading-[15.68px] text-white bg-orange transition-colors duration-300
  rounded-[200px] tracking-[-0.7px] hover:bg-active-orange focus:bg-focus-orange active:bg-active-orange disabled:bg-disabled-gray
  xl:w-[167px] xl:h-[167px] md:w-[200px] md:h-[200px] sm:w-[180px] sm:h-[180px] sm:text-[14px] sm:leading-[13.72px] sm:tracking-[0.5px]
}

.button__primary-span {
  @apply block w-[114px] mx-auto
}
</style>