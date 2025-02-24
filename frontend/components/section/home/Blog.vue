<template>
  <section class="blog__section">
    <BlockHomeBlogHeading
        :title="titleContainer.title"
        :description-heading="titleContainer.description"
        :description-section="description"
    />
    <BlockHomeBlogCarousel
        :data="blogs"
        :button="button"
    />
  </section>
</template>

<script setup lang="ts">
import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {BlogsBase} from "~/types/responses/collections/blogs";

export type SectionHomeBlogProps = {
  titleContainer: TitleContainer
  button: string
  description: string
  blogs: BlogsBase[]
}
const props = defineProps<SectionHomeBlogProps>();
</script>

<style scoped>
.blog__section {
  @apply mt-[160px] xl:mt-[159px] md:mt-[118px] sm:mt-[100px]
}
</style>