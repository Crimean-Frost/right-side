<script setup lang="ts">
import type { NuxtError } from "#app";
import type { NotFoundPageResponse } from "./types/responses/pages/404";

const props = defineProps({
  error: Object as () => NuxtError,
});
const config = useRuntimeConfig();

const { data } = await useFetch<NotFoundPageResponse>(
  "/api/base?populate[pageNotFound][populate][image]=*&populate[pageNotFound][populate][imageMobile]=*",
  {
    baseURL: config?.public.apiBase,
  }
);
</script>
<template>
  <NuxtLayout>
    <BlockNotFound v-if="props.error?.statusCode === 404 && data" v-bind="data"></BlockNotFound>
    <div v-else>
    <h1>{{ error?.statusCode }}</h1>
    <p>{{ error?.message }}</p>
    <NuxtLink to="/">Вернуться на главную</NuxtLink>
  </div>
  </NuxtLayout>
 
</template>
