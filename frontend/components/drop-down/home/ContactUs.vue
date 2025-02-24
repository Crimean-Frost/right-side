<template>
  <div class="drop-down">
    <div @click.stop="toggleIsDropDownOpen" class="drop-down__select">
      <p class="drop-down__text" :class="{'drop-down__text-active': selectedListItem}">
        {{ selectedListItem ? selectedListItem : listItems[0] }}
      </p>
      <SvgArrowDropDown
          class="drop-down__icon"
          :class="{'drop-down__icon-active': isDropDownOpen}"
      />
    </div>
    <ul ref="dropDownListRef" class="drop-down__list" :class="{'drop-down__list-active': isDropDownOpen}">
      <li @click="selectListItem(item)" class="drop-down__item" v-for="(item, index) in listItems" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
export type DropDownBlockProps = {
  listItems: string[],
  isDropDownOpen: boolean,
  selectedListItem: string | null,
};

type DropDownBlockEmits = {
  setIsDropDownOpen: [value: boolean],
  selectListItem: [value: string],
}

const props = defineProps<DropDownBlockProps>();
const emit = defineEmits<DropDownBlockEmits>()

const dropDownListRef = ref<HTMLElement | null>(null);

const toggleIsDropDownOpen = () => {
  emit('setIsDropDownOpen', !props.isDropDownOpen);
}

const selectListItem = (item: string) => {
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
  @apply flex justify-between items-center w-[100%] h-[60px] px-[17.5px] py-[18px] border
  border-dark-green rounded-[30px] cursor-pointer pt-[16.5px] pl-[20px] xl:h-[50px] lg:h-[60px]
}

.drop-down__text {
  @apply leading-[17.28px] tracking-[-0.85px] overflow-visible font-golos text-light-gray line-clamp-1
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
  @apply w-full mb-[14px] last:mb-0 text-[16px] text-black font-golos leading-[17.28px] cursor-pointer tracking-[-0.85px] rounded-[5px]
  hover:text-active-orange active:text-orange focus:text-active-orange
}
</style>