<template>
  <div>
    <UiBreadcrumbs v-bind="breadcrumbsData"></UiBreadcrumbs>
    <BlockCaseHero v-bind="heroData"></BlockCaseHero>
    <BlockCaseContent v-bind="contentData"></BlockCaseContent>
    <template v-for="(section, index) in caseData?.data?.content" :key="index">
      <template v-if="section.__component==='sections.contact-us'">
        <SectionCasesContactUs
            :contact-us="section"
        />
      </template>
      <template v-if="section.__component==='sections.advantages'">
        <SectionCasesDynamicLearnMore :section="section"/>
      </template>
    </template>
  </div>
</template>
<script lang="ts" setup>
import dayjs from "dayjs";
import type {BreadCrumbsProps} from "~/components/ui/breadcrumbs.vue";
import type {DetailCasesPageResponse} from "~/types/responses/pages/detail-cases";
import type {CasesCollectionResponse} from "~/types/responses/collections/cases";
import type {CaseHeroProps} from "~/components/block/case/hero.vue";
import type {CaseContentProps} from "~/components/block/case/content.vue";

const config = useRuntimeConfig();
const route = useRoute();

const pageApiUrl = computed(() => {
  return apiUrlFormat(apiUrl.casesCollection, {'case-slug': route.params.id})
});

const {data: pageData, error} = await useFetch<CasesCollectionResponse>(
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
const {data: caseData} = await useFetch<DetailCasesPageResponse>(
    apiUrl.casesDetailPage,
    {baseURL: config.public.apiBase}
);

const breadcrumbsData = computed<BreadCrumbsProps>(() => ({
  links: [
    {text: "Наши кейсы", path: "/cases"},
    {text: pageData?.value?.data.shortTitle},
  ],
}));

const heroData = computed<CaseHeroProps>(() => ({
  title: pageData.value?.data.title,
  data: pageData.value?.data.manualCreatedAt ? dayjs(pageData.value?.data.manualCreatedAt).format("DD.MM.YY") : dayjs(pageData.value?.data.createdAt).format("DD.MM.YY"),
  categories: pageData.value?.data.categories || [],
  img: {
    src: config?.public.apiBase + pageData.value?.data.image.url,
    alt: pageData.value?.data.image.alternativeText,
  },
  imgMobile: {
    src: config?.public.apiBase + pageData.value?.data.imageMobile.url,
    alt: pageData.value?.data.imageMobile.alternativeText,
  },
}));

const contentData = computed<CaseContentProps>(() => ({
  chapters: pageData?.value?.data.chapters,
  authorLabel: caseData?.value?.data?.label,
  authorList: pageData?.value?.data?.employeers || []
}));

seo(config.public.apiBase, pageData.value?.data?.seo);
</script>
