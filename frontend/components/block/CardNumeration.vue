<script setup lang="ts">

</script>

<template>
        <span class="competencies__item-number"><span class="competencies__item-number-bg-circle"></span>
          <slot></slot>
        </span>
</template>

<style scoped>
.competencies__item-number {
  @apply relative flex items-center justify-center w-[27px] h-[27px] bg-orange border border-[#FAC6C0] rounded-[200px]
  text-white text-[16px] leading-[19.2px] mt-[5px] ml-[4px]
}

.competencies__item-number-bg-circle {
  @apply absolute top-[-7px] left-[-7px] z-[-1] bg-pink w-[40px] h-[40px] rounded-[200px]
}
</style>