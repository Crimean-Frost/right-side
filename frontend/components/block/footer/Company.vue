<template>
  <div class="footer__personal-company">
    <TextFooterSecondary
      class="footer__personal-company-name"
      :text="typograf.execute(description)"
    />
    <TextFooterSecondary
      class="footer__personal-company-bart"
      :text="credit"
    />
  </div>
</template>

<script setup lang="ts">

type BlockFooterCompanyProps = {
  description?: string,
  credit?: string
}

const props = defineProps<BlockFooterCompanyProps>();
</script>

<style scoped>
.footer__personal-company {
  @apply max-w-[242px]
}

.footer__personal-company-name {
  @apply mb-[45px] xl:mb-[46px] lg:mb-[64px] sm:mb-[43px]
}

.footer__personal-company-bart {
  @apply sm:hidden
}
</style>