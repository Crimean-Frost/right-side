<template>
<span v-html="text" class="contacts__secondary"></span>
</template>

<script setup lang="ts">
type TextContactsSecondaryProps = {
  text: string;
}
const props = defineProps<TextContactsSecondaryProps>();
</script>

<style scoped>
.contacts__secondary {
  @apply font-onest text-[24px] font-light leading-[25.92px] tracking-[-0.86px]
  xl:text-[20px] xl:tracking-[-0.75px]
  sm:text-[16px] sm:leading-[17.28px] sm:font-normal sm:tracking-[-0.65px]
}
.contacts__secondary p {
  @apply font-onest text-[24px] font-light leading-[25.92px] tracking-[-0.9px] xl:text-[20px] xl:tracking-[-0.75px]
  sm:text-[16px] sm:leading-[17.28px] sm:font-normal sm:tracking-[-0.65px]
}
</style>