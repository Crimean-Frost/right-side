<template>
  <div class="footer__office">
    <TextFooterMain
      :text="typograf.execute(address)"
      class="footer__office-address"
    />
    <TextFooterMain
      :text="typograf.execute(workingTime)"
      class="footer__office-time"
    />
  </div>
</template>

<script setup lang="ts">

type BlockFooterOfficeProps = {
  address?: string,
  workingTime?: string,
}

const props = defineProps<BlockFooterOfficeProps>();
</script>

<style scoped>
.footer__office {
  @apply mt-[-2px] xl:mt-0 sm:mb-[40px]
}

.footer__office-address {
  @apply mb-[26px] sm:mb-[20px]
}
</style>