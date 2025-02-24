<template>
  <div>
    <UiBreadcrumbs v-bind="breadcrumbsData"></UiBreadcrumbs>
    <BlockPostHero v-bind="heroData"></BlockPostHero>
    <BlockPostContent v-bind="contentData"></BlockPostContent>
    <SectionBlogDynamicLearnMore v-if="learnMoreData" :section="learnMoreData"/>
  </div>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";
import type {PostContentProps} from "~/components/block/post/content.vue";
import type {PostHeroProps} from "~/components/block/post/hero.vue";
import type {BreadCrumbsProps} from "~/components/ui/breadcrumbs.vue";
import type {Advantages} from "~/types/responses/components/sections/advantages";
import type {DetailBlogPageResponse} from "~/types/responses/pages/detail-blog";
import type {BlogsCollectionResponse} from "~/types/responses/collections/blogs";

const config = useRuntimeConfig();
const route = useRoute();

const pageApiUrl = computed(() => {
  return apiUrlFormat(apiUrl.blogCollection, {'blog-slug': route.params.id})
});

const {data: pageData, error} = await useFetch<BlogsCollectionResponse>(
    pageApiUrl,
    {
      baseURL: config?.public.apiBase,
    }
);
if (error.value?.data?.error?.status === 404) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found',
    data: {
      myCustomField: true
    }
  })
}
const {data: blogData} = await useFetch<DetailBlogPageResponse>(
    apiUrl.blogDetailPage,
    {baseURL: config.public.apiBase}
);

const breadcrumbsData = computed<BreadCrumbsProps>(() => ({
  links: [
    {text: "Блог", path: "/blog"},
    {text: pageData?.value?.data.shortTitle},
  ],
}));

const heroData = computed<PostHeroProps>(() => ({
  title: pageData.value?.data.title,
  data: pageData.value?.data.manualCreatedAt ? dayjs(pageData.value?.data.manualCreatedAt).format("DD.MM.YY") : dayjs(pageData.value?.data.createdAt).format("DD.MM.YY"),
  category: pageData.value?.data.category?.label,
  img: {
    src: config?.public.apiBase + pageData.value?.data.image.url,
    alt: pageData.value?.data.image.alternativeText,
  },
  imgMobile: {
    src: config?.public.apiBase + pageData.value?.data.imageMobile.url,
    alt: pageData.value?.data.imageMobile.alternativeText,
  },
}));

const contentData = computed<PostContentProps>(() => ({
  chapters: pageData?.value?.data.chapters,
  description: pageData.value?.data.description,
}));

const learnMoreData = computed<Advantages | undefined>(
    () =>
        blogData.value?.data?.content?.map((section) => ({
          ...section,
        }))[0]
);

seo(config.public.apiBase, pageData.value?.data?.seo, true);
</script>
