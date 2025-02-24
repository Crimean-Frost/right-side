<template>
  <ul class="contacts__info">
    <li class="contacts__info-item" v-for="(item, index) in contactLinks" :key="index">
      <TextContactsLabel class="contacts__info-label">{{ typograf.execute(item.label) }}</TextContactsLabel>
      <div class="contacts__info-value">
        <picture>
          <img class="contacts__info-img" :src="apiBase + item?.icon?.url" :alt="item?.icon?.alternativeText">
        </picture>
        <TextContactsSecondary
          :text="item.link"
        />
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type {ContactLink} from "~/types/responses/components/section-components/contact-link";

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

type BlockContactsInfoProps = {
  contactLinks: ContactLink[];
}
const props = defineProps<BlockContactsInfoProps>();
</script>

<style scoped>
.contacts__info-value {
  @apply flex items-center
}

.contacts__info-item {
  @apply mb-[47.5px] last:mb-0 lg:mb-[57.5px] sm:mb-[40px]
}

.contacts__info-label {
  @apply mb-[16px]
}

.contacts__info-img {
  @apply w-[24px] h-[24px] mr-[8px]
}
</style>