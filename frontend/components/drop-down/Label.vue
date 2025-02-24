<script setup lang="ts">

</script>

<template>
  <p class="drop-down__label">
    <slot></slot>
  </p>
</template>

<style scoped>
.drop-down__label {
  @apply mr-[22px] font-onest text-black text-[24px] text-nowrap font-light leading-[25.92px] tracking-[-0.9px]
  xl:text-[20px] xl:leading-[21.6px] xl:tracking-[-0.8px] lg:mb-[14px] md:text-[18px] md:leading-[20.7px] md:tracking-[-0.67px]
  sm:text-[16px] sm:leading-[18.4px] sm:tracking-[-0.64px] sm:mb-[10px]
}
</style>