<template>
<span v-html="text" class="footer__text"></span>
</template>

<script setup lang="ts">
type TextFooterMainProps = {
  text?: string,
}

const props = defineProps<TextFooterMainProps>();
</script>

<style>
.footer__text {
  @apply text-white text-[16px] font-onest leading-[20.4px] block
}
.footer__text p {
  @apply text-white text-[16px] font-onest leading-[20.4px] block
}
</style>