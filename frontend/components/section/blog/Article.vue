<template>
  <div class="articles-section" ref="articleSectionRef">
    <div class="articles-section__filters">
      <div class="articles-section__category">
        <DropDownLabel>
          Выберите категорию:
        </DropDownLabel>
        <DropDownBlock
            :is-drop-down-open="isDropDownOpen.category"
            :list-items="categories"
            :selected-list-item="selectedCategoryFilterOption"
            @set-is-drop-down-open="value => setIsDropDownOpen('category', value)"
            @select-list-item="selectCategoryFilterOption"
        />
      </div>
      <div class="articles-section__category">
        <DropDownLabel>
          Когда опубликовано:
        </DropDownLabel>
        <DropDownBlock
            :is-drop-down-open="isDropDownOpen.sorting"
            :list-items="sorting"
            :selected-list-item="selectedTypeFilterOption"
            @set-is-drop-down-open="value => setIsDropDownOpen('sorting', value)"
            @select-list-item="selectTypeFilterOption"
        />
      </div>
    </div>
    <div class="article-section__list">
      <BlockBlogArticleCard
          :blog-article-list-data="modelsData"
          :general-card-button="generalButton"
      />
    </div>
    <Pagination
      :pagination="paginationData"
      @set-pagination-page="setPaginationPage"
    />
  </div>
</template>

<script setup lang="ts">
import Pagination from "~/components/block/Pagination.vue";
import type {IPagination} from "~/types/responses/components/default-components/pagination";
import type {CategoriesBase} from "~/types/responses/collections/categories";
import type {Sortings} from "~/types/responses/collections/sortings";
import type {BlogsCollectionPaginateResponse} from "~/types/responses/collections/blogs";

type SectionBlogArticleProps = {
  categories: CategoriesBase[],
  sorting: Sortings[],
  generalButton: string,
}
const props = defineProps<SectionBlogArticleProps>();

const config = useRuntimeConfig();
const articleSectionRef = ref<HTMLElement | null>(null);

export type IIsDropDownOpen = {
  category: boolean,
  sorting: boolean,
}

const isDropDownOpen = reactive<IIsDropDownOpen>({
  category: false,
  sorting: false,
});

const paginationData = ref<IPagination>({
  pageSize: 8,
  page: 1,
  pageCount: 1,
  total: 0
})

const defaultSorting = ref<string>(props.sorting.length > 0 ? props.sorting[0].value : 'desc')

let modelsData = ref<BlogsCollectionPaginateResponse | any>(null)

let screenWidth = ref(0);

let sortParam = ref<string | null>(null);
let filterParam = ref<number | null>(null);

const mountedUrl = computed(() => {
  let url = apiUrlFormat(apiUrl.blogPagination, {page: paginationData.value.page, pageSize: paginationData.value.pageSize});
  if (sortParam.value !== null) {
    url += `&sort[manualCreatedAt]=${sortParam.value}&sort[createdAt]=${sortParam.value}`;
  } else {
    url += `&sort[manualCreatedAt]=${defaultSorting.value}&sort[createdAt]=${defaultSorting.value}`;
  }
  if (filterParam.value !== null) {
    url += `&filters[category][$eq]=${filterParam.value}`;
  }
  return url;
});
const selectedCategoryFilterOption = ref<CategoriesBase|undefined>(undefined);
const selectedTypeFilterOption = ref<Sortings|undefined>(undefined);


const { data, error } = await useFetch<BlogsCollectionPaginateResponse>(
    apiUrlFormat(apiUrl.blogPagination, {page: 1, pageSize: 9}),
    {baseURL: config.public.apiBase},
)

modelsData.value = data.value?.data;

const getPageSize = (width: number) => {
  if (width > 1440) {
    return 8;
  } else if (width > 1250) {
    return 9;
  } else if (width > 640) {
    return 4;
  } else {
    return 2;
  }
};

async function getModelsData() {
  const fetchedData = await $fetch<BlogsCollectionPaginateResponse>(
    mountedUrl.value, {baseURL: config.public.apiBase},
  )
  modelsData.value = fetchedData.data;
  paginationData.value = fetchedData.meta.pagination;
}

const setIsDropDownOpen = (
  filterType: keyof IIsDropDownOpen,
  value: boolean
) => {
  isDropDownOpen[filterType] = value;
  if (value)
    for (const key in isDropDownOpen) {
      if (key !== filterType)
        isDropDownOpen[key as keyof IIsDropDownOpen] = false;
    }
};

const selectCategoryFilterOption = (filterType: CategoriesBase | any) => {
  selectedCategoryFilterOption.value = filterType;
  filterParam.value = filterType.id;
  isDropDownOpen.category = false;
  paginationData.value.page = 1
  getModelsData();
}

const selectTypeFilterOption = (filterOption: Sortings | any) => {
  selectedTypeFilterOption.value = filterOption;
  sortParam.value = filterOption.value;
  isDropDownOpen.sorting = false;
  paginationData.value.page = 1
  getModelsData();
}

const setPaginationPage = (page: number) => {
  paginationData.value.page = page;
  scrollToTop();
  getModelsData();
}

const scrollToTop = () => {
  if (articleSectionRef.value) {
    const offsetHeight = 130;
    const topPosition = articleSectionRef.value.getBoundingClientRect().top + window.scrollY - offsetHeight;
    window.scrollTo({top: topPosition, behavior: 'smooth'});
  }
}

onMounted(() => {
  screenWidth.value = window.innerWidth;
})

watch(screenWidth, (newWidth) => {
  if (newWidth !== 0) {
    paginationData.value.pageSize = getPageSize(newWidth);
    getModelsData();
  }
});

</script>

<style scoped>
.articles-section {
  @apply mb-[156px] md:mb-[118px] sm:mb-[98px]
}

.articles-section__filters {
  @apply mb-[39px] flex justify-between items-center xl:mb-[28.5px] sm:block md:mb-[30px]
}

.articles-section__category {
  @apply flex items-center lg:inline-block md:w-[49.1%] sm:w-full
}

.articles-section__category:last-child {
  @apply md:w-[49.5%] sm:w-full sm:mt-[21px]
}

.article-section__list {
  @apply grid grid-cols-4 gap-[13px] mb-[41px]
  xl:grid-cols-3 xl:gap-[18px] xl:mb-[39.5px]
  lg:grid-cols-2
  md:gap-[13px] md:mb-[30.5px] sm:grid-cols-1 sm:gap-[10px]
}
</style>