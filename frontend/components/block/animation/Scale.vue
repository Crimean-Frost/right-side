<script setup lang="ts">

</script>

<template>
<span class="scale__container">
  <SvgScale class="scale__icon"/>
  <SvgScaleCircle class="scale__circle spin"/>
</span>
</template>

<style scoped>
.scale__container {
  @apply relative hidden items-center justify-center bg-white w-[147px] h-[147px] p-[19px] border-2 border-orange rounded-[10px]
  xl:w-[138px] xl:h-[138px] md:w-[96px] md:h-[96px] sm:w-[68px] sm:h-[68px]
}

.scale__icon {
  @apply w-[68.66px] h-[67.32px] xl:w-[64.45px] xl:h-[63.2px] md:w-[44.84px] md:h-[43.29px] sm:w-[31.76px] sm:h-[30.61px]
}

.scale__circle {
  @apply absolute w-[109px] h-[109px] xl:w-[102px] xl:h-[102px] md:w-[71.2px] md:h-[70.09px] sm:w-[50.44px] sm:h-[49.56px]
}

.spin {
  animation: spin 4s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-360deg);
  }
}
</style>