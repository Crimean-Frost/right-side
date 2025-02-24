<script setup lang="ts">

</script>

<template>
 <h2 class="section__title">
   <span class="section__title-dot"></span>
   <slot></slot>
 </h2>
</template>

<style scoped>
.section__title {
  @apply max-w-[232px] min-w-[232px] inline-flex items-start text-[16px] text-black font-onest leading-[108%] tracking-[-0.65px] text-wrap
  lg:flex lg:mb-[55px] sm:mb-[34px]
}

.section__title-dot {
  @apply block w-[8px] h-[8px] min-w-[8px] min-h-[8px] bg-orange rounded-[200px] mr-[6px] mt-[3.5px]
}
</style>