<template>
  <h1 class="hero__title">
    <slot></slot>
  </h1>
</template>

<script setup lang="ts">

</script>

<style scoped>
.hero__title {
  @apply text-black text-[88px] font-golos font-normal leading-[89%] tracking-[-3.5px]
  xl:text-[74px] xl:leading-[82%] xl:tracking-[-3px]
  lg:text-[68px] lg:leading-[89%] lg:tracking-[-2.7px]
  sm:text-[40px] sm:tracking-[-1.85px]
}
</style>