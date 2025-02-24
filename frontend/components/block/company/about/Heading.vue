<template>
  <div class="title-block__container">
    <TitleSection class="title-block__container-title">
      {{ typograf.execute(title) }}
    </TitleSection>
    <TextSectionMain
        v-intersection-observer="value => onIntersectionObserver(value)"
        :class="['title-block__container-description', {'fade-up__text-500': isDescriptionVisible}]"
        :text="typograf.execute(formatingText(description))"
    />
  </div>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components';

type BlockTitleContainerProps = {
  title: string;
  description: string;
}
const props = defineProps<BlockTitleContainerProps>();

const pageWidth = ref<number>(0);
const isDescriptionVisible = ref(false);

const formatingText = (text: string) => {
  if (pageWidth.value <= 768) {
    return text.replace(/(мы|принципы)/g, '<br>$1');
  } else {
    return text
  }
}

function onIntersectionObserver([{isIntersecting}]: IntersectionObserverEntry[]) {
  if (isIntersecting) {
    isDescriptionVisible.value = true;
  }
}

onMounted(() => {
  pageWidth.value = window.innerWidth;
});
</script>

<style scoped>
.title-block__container {
  @apply flex items-start justify-between lg:block
}

.title-block__container-title {
  @apply mt-[-1px] xl:mt-0 lg:mb-[61.5px] sm:mb-[42px]
}

.title-block__container-description {
  @apply max-w-[1408px] mt-[2px] mr-[8px] opacity-0
  xl:max-w-[1000px] xl:mr-[66px] xl:mt-[3px]
  lg:max-w-[1015px] lg:ml-[20%] lg:mr-0
  md:max-w-full md:ml-0 md:tracking-[-1.9px] md:indent-[118px]
  sm:w-full sm:indent-0 sm:tracking-[-1.3px]
}
</style>