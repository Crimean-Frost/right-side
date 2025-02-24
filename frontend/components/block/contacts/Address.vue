<template>
  <div class="contacts__address">
    <TextContactsLabel class="contacts__address-label">
      {{ label }}
    </TextContactsLabel>
    <TextContactsSecondary
        :text="formatterText(address)"
        class="contacts__address-text">
    </TextContactsSecondary>
  </div>
</template>

<script setup lang="ts">
type BlockContactsAddressProps = {
  label: string;
  address: string;
}
const props = defineProps<BlockContactsAddressProps>();

const formatterText = (text: string) => text.replace(/<\/?p>/g, '');
</script>

<style scoped>
.contacts__address {
  @apply inline-block mx-auto pr-[153px]
  xl:pr-0 xl:pl-[7.1%] lg:mx-0 lg:px-0
}

.contacts__address-label {
  @apply mb-[11px] xl:mb-[10px] lg:mb-[3.5px] sm:mb-[7px] sm:max-w-[330px]
}

.contacts__address-text {
  @apply mb-[40px] last:mb-0 sm:mb-[25px]
}

.contacts__address-text * {
  @apply leading-[36px]
  xl:leading-[33.9px]
  sm:inline-block sm:leading-[108%] sm:mb-[5px]
}

.contacts__address-text *:nth-child(10) {
  @apply mt-[5px]
}

.contacts__address-text *:nth-child(12) {
  @apply mt-[5px]
}

.contacts__address-test-text {
  @apply font-onest text-[24px] font-light leading-[25.92px] tracking-[-0.85px] xl:text-[20px] xl:tracking-[-0.75px]
  sm:text-[16px] sm:leading-[17.28px] sm:font-normal sm:tracking-[-0.65px]
  sm:block sm:mt-[3px] sm:mb-[10px] last:mt-0 last:mb-0
}
</style>