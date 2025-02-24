<script setup lang="ts">

</script>

<template>
  <label class="label__default">
    <slot></slot>
  </label>
</template>

<style scoped>
.label__default {
  @apply text-black text-[16px] font-onest font-normal leading-[17.28px] tracking-[-0.6px] sm:text-[14px] sm:leading-[15.12px]
}
</style>