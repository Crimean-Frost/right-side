<template>
  <div class="blog">
    <template v-for="(section, index) in data?.data?.content" :key="index">
      <template v-if="section.__component==='sections.blog-hero'">
        <SectionBlogHero
          :blog-hero-title="section?.title"
          :blog-hero-company-name="section?.company"
          :blog-hero-description="section?.description"
        />
      </template>
      <template v-if="section.__component==='sections.card-pagination'">
        <SectionBlogArticle
          :categories="section?.categories"
          :sorting="section?.sortings"
          :general-button="section?.generalButton"
        />
      </template>
      <template v-if="section.__component==='sections.advantages'">
        <SectionBlogLearnMore
          :section="section"
        />
      </template>
    </template>
  </div>
</template>

<script setup lang="ts">
import type {BlogPageResponse} from "~/types/responses/pages/blog";

const config = useRuntimeConfig();


const { data, error } = await useFetch<BlogPageResponse>(
    apiUrl.blog,
    {baseURL: config.public.apiBase},
)

seo(config.public.apiBase, data.value?.data?.seo);
</script>

<style scoped>
.blog {
  @apply mt-[250px] xl:mt-[150px] md:mt-[191px] sm:mt-[135.5px]
}
</style>
