<template>
  <h3 class="contacts__label">
    <slot></slot>
  </h3>
</template>

<script setup lang="ts">

</script>

<style scoped>
.contacts__label {
  @apply font-medium font-golos text-[26px] text-black leading-[31.2px] tracking-[0.05px]
  xl:tracking-[0px]
  lg:text-[22px] lg:leading-[26.4px]
  sm:text-[16px] sm:leading-[19.2px]
}
</style>