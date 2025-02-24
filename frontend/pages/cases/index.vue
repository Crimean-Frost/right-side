<template>
  <div class="cases">
    <template v-for="(section, index) in data?.data?.content" :key="index">
      <template v-if="section.__component==='sections.blog-hero'">
        <SectionCasesHero
          :cases-hero-title="section?.title"
          :cases-hero-company-name="section?.company"
          :cases-hero-description="section?.description"
        />
      </template>
      <template v-if="section.__component==='sections.card-pagination'">
        <SectionCasesArticle
          :categories="section?.categories"
          :sorting="section?.sortings"
          :general-button="section?.generalButton"
        />
      </template>
      <template v-if="section.__component==='sections.advantages'">
        <SectionCasesLearnMore
          :section="section"
        />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import type {CasesPageResponse} from "~/types/responses/pages/cases";

const config = useRuntimeConfig();


const { data, error } = await useFetch<CasesPageResponse>(
    apiUrl.cases,
    {baseURL: config.public.apiBase},
)

seo(config.public.apiBase, data.value?.data?.seo);
</script>

<style scoped>
.cases {
  @apply mt-[230px] xl:mt-[132px] md:mt-[183px] sm:mt-[135.5px]
}
</style>
