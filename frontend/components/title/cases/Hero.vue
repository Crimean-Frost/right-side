<template>
  <h1 class="hero__title">
    <slot></slot>
  </h1>
</template>

<script setup lang="ts">

</script>

<style scoped>
.hero__title {
  @apply text-black text-[88px] font-golos font-normal leading-[78.32px] tracking-[-3.5px]
  xl:text-[74px] xl:leading-[60.52px] xl:tracking-[-3px]
  lg:text-[68px] lg:leading-[60.52px] lg:tracking-[-2.7px]
  sm:text-[40px] sm:leading-[40.94px] sm:tracking-[-1.85px]
}
</style>