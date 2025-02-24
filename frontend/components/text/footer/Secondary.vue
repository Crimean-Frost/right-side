<template>
<span v-html="text" class="footer__secondary"></span>
</template>

<script setup lang="ts">
type TextFooterSecondaryProps = {
  text?: string,
}

const props = defineProps<TextFooterSecondaryProps>();
</script>

<style>
.footer__secondary {
  @apply text-light-gray text-[16px] font-onest leading-[20.4px] block
}
.footer__secondary p {
  @apply text-light-gray text-[16px] font-onest leading-[20.4px] block
}
</style>