<script setup lang="ts">

</script>

<template>
  <span class="competencies__item-number"><span class="competencies__item-number-bg-circle"></span>
    <slot></slot>
  </span>
</template>

<style scoped>
.competencies__item-number {
  @apply relative flex items-center justify-center w-[21px] h-[21px] bg-orange border border-[#FAC6C0] rounded-[200px]
  text-white text-[13px] leading-[16.2px] mt-[5px] ml-[4px]
}

.competencies__item-number-bg-circle {
  @apply absolute top-[-5.5px] left-[-5.5px] z-[-1] bg-pink w-[30px] h-[30px] rounded-[200px]
}
</style>