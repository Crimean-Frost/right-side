<template>
<div class="footer__requisites">
  <ul>
    <li v-for="(item, index) in files" :key="index">
      <NuxtLink :to="apiBase + item.file.url" target="_blank">
        <TextFooterSecondary
          :text="item.label"
        />
      </NuxtLink>
    </li>
  </ul>
  <TextFooterSecondary
    :text="disclaimer"
    class="footer__requisites-copyright">
  </TextFooterSecondary>
</div>
</template>

<script setup lang="ts">

import type {FileLink} from "~/types/responses/components/section-components/footer";

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

type BlockFooterRequisitesProps = {
  files?: FileLink[]
  disclaimer?: string
}

const props = defineProps<BlockFooterRequisitesProps>();
</script>

<style scoped>
.footer__requisites {
  @apply pr-[4px] xl:pr-[2px] lg:hidden sm:block
}

.footer__requisites-copyright {
  @apply mt-[86px] sm:hidden
}
</style>