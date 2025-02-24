<template>
  <div class="drop-down">
    <div @click.stop="toggleIsDropDownOpen" class="drop-down__select">
      <p class="drop-down__text" :class="{'drop-down__text-active': selectedListItem}">
        {{ selectedListItem?.label || (listItems && listItems.length > 0 ? listItems[0].label : '') }}
      </p>
      <SvgArrowDropDown
          class="drop-down__icon"
          :class="{'drop-down__icon-active': isDropDownOpen}"
      />
    </div>
    <ul ref="dropDownListRef" class="drop-down__list" :class="{'drop-down__list-active': isDropDownOpen}">
      <li @click="selectListItem(item)" class="drop-down__item" v-for="(item, index) in listItems" :key="index">
        {{ item.label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import type {Sortings} from "~/types/responses/collections/sortings";
import type {CategoriesBase} from "~/types/responses/collections/categories";

export type DropDownBlockProps = {
  listItems?: Sortings[] | CategoriesBase[],
  isDropDownOpen: boolean,
  selectedListItem?: Sortings | CategoriesBase,
};

type DropDownBlockEmits = {
  setIsDropDownOpen: [value: boolean],
  selectListItem: [value: Sortings | CategoriesBase],
}

const props = defineProps<DropDownBlockProps>();
const emit = defineEmits<DropDownBlockEmits>()

const dropDownListRef = ref<HTMLElement | null>(null);

const toggleIsDropDownOpen = () => {
  emit('setIsDropDownOpen', !props.isDropDownOpen);
}

const selectListItem = (item: Sortings | CategoriesBase) => {
  emit('selectListItem', item)
}

const handleDropDownClickOutside = (event: MouseEvent) => {
  if (dropDownListRef.value && !dropDownListRef.value.contains(event.target as Node)) {
    emit('setIsDropDownOpen', false);
  }
}

onMounted(() => {
  document.addEventListener('click', handleDropDownClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleDropDownClickOutside);
});
</script>

<style scoped>
.drop-down {
  @apply relative
}

.drop-down__select {
  @apply flex justify-between items-center w-[459px] h-[60px] px-[17.5px] py-[22px] border
  border-dark-green rounded-[30px] cursor-pointer pt-[16.5px] pl-[20px] 2xl:w-[400px] xl:w-[381px]
  lg:w-[360px] md:w-full
}

.drop-down__text {
  @apply mt-[4px] leading-[17.28px] tracking-[-0.6px] font-golos text-light-gray line-clamp-1
}

.drop-down__text-active {
  @apply text-black
}

.drop-down__icon {
  @apply mt-[5.5px] transition ease-in-out duration-300
}

.drop-down__icon-active {
  @apply rotate-[180deg]
}

.drop-down__list {
  @apply hidden absolute top-[70px] left-0 z-20 w-full py-[19px] px-[30px] bg-white border border-dark-green rounded-[30px]
  transition ease-in-out delay-[0.3s] opacity-0
}

.drop-down__list-active {
  @apply block opacity-100
}

.drop-down__item {
  @apply w-full mb-[14px] last:mb-0 text-[16px] font-golos text-black leading-[17.28px] cursor-pointer tracking-[-0.85px] rounded-[5px]
  hover:text-active-orange active:text-orange focus:text-active-orange
}
</style>