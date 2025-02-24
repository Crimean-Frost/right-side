<template>
  <div class="pagination">
    <span v-if="pagination.pageCount > 2" class="pagination__icon-span" @click="onPageChange(getNextPage(pagination.page - 1))">
      <SvgArrowPagination class="pagination__icon-back"/>
    </span>
    <ul class="pagination__list">
      <template v-for="(page, index) in visiblePages" :key="index">
        <li v-if="typeof page === 'number'" :class="{'pagination__list-number': true, 'pagination__list-number-active': page === pagination.page}" @click="page !== pagination.page && onPageChange(page)">
          {{ page }}
        </li>
        <li v-else class="pagination__list-ellipsis">...</li>
      </template>
    </ul>
    <span v-if="pagination.pageCount > 2" class="pagination__icon-span" @click="onPageChange(getNextPage(pagination.page + 1))">
      <SvgArrowPagination class="pagination__icon-next"/>
    </span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type {IPagination} from "~/types/responses/components/default-components/pagination";

export type BlockPaginationProps = {
  pagination: IPagination,
}
const props = defineProps<BlockPaginationProps>();

type BlockPaginationEmits = {
  setPaginationPage: [value: number],
}
const emit = defineEmits<BlockPaginationEmits>()

const onPageChange = (page: number) => {
  emit('setPaginationPage', page);
};

const getNextPage = (page: number) => {
  if (page < 1) {
    page = props.pagination.pageCount;
  } else if (page > props.pagination.pageCount) {
    page = 1;
  }
  return page;
};


const desktopVisiblePages = () => {
  const pages: (number | string)[] = [];
  const { page, pageCount } = props.pagination;
  if (pageCount <= 6) {
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
  } else {
    let isLeftPart = false;
    let isRightPart = false;
    for (let i = 1; i <= pageCount; i++) {
      let isNotShouldDisplayDots = checkDisplayDots(i)
      if (isNotShouldDisplayDots) {
        pages.push(i)
      } else {
        if (!isLeftPart && page >= i) {
          isLeftPart = true;
          pages.push('...');
        } else if (!isRightPart && page < i) {
          isRightPart = true;
          pages.push('...');
        }
      }
    }
  }
  return pages;
}

const mobileVisiblePages = () => {
  const pages: (number | string)[] = [];
  const { page, pageCount } = props.pagination;
  if (pageCount <= 3) {
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
  } else {
    if (page === 1 || page === pageCount) {
      pages.push(1, '...', pageCount);
    } else {
      pages.push(page - 1, page, page + 1);
    }
  }
  return pages
}

const visiblePages = computed(() => {
  let pages: any[];
  if (props.pagination.pageSize != 2) {
    pages = desktopVisiblePages();
  } else {
    pages = mobileVisiblePages();
  }
  return pages;
});

const checkDisplayDots = (page: number) => {
  return (page === 1 || page === props.pagination.page || page == props.pagination.pageCount) ||
  (props.pagination.page <= 3 && (page <= 4 || page > props.pagination.pageCount - 2)) ||
  (props.pagination.page >= props.pagination.pageCount - 2 && (page >= props.pagination.pageCount - 3 || page <= 2)) ||
  (page === props.pagination.page - 1 || page === props.pagination.page + 1)
};

</script>

<style scoped>
.pagination {
  @apply flex items-center justify-center cursor-pointer
}

.pagination__icon-span {
  @apply w-[60px] h-[60px] inline-flex items-center justify-center border-orange border rounded-[8px]
}

.pagination__icon-back {
  @apply w-[25px] h-[25px]
}

.pagination__icon-next {
  @apply w-[25px] h-[25px] rotate-180
}

.pagination__list {
  @apply inline-flex items-center mx-[85.5px] md:mx-[88px] sm:mx-auto
}

.pagination__list-number {
  @apply flex items-center justify-center w-[60px] h-[60px] mr-[8px] last:mr-0 rounded-[200px] text-[16px] font-onest leading-[20.4px]
  hover:bg-active-orange hover:text-white transition-colors duration-300
}

.pagination__list-number-active {
  @apply bg-orange text-white hover:bg-orange
}

.pagination__list-ellipsis {
  @apply flex items-center justify-center w-[40px] h-[40px] mr-[8px]
}
</style>