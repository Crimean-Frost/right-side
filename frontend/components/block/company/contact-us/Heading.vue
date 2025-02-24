<template>
  <div class="title-block__container">
    <TitleSection class="title-block__container-title">
      {{ typograf.execute(title) }}
    </TitleSection>
    <TextSectionMain
        v-intersection-observer="value => onIntersectionObserver(value)"
        :class="['title-block__container-description', {'fade-up__text-500': isDescriptionVisible}]"
        :text="typograf.execute(description)"
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

const isDescriptionVisible = ref(false);

function onIntersectionObserver([{isIntersecting}]: IntersectionObserverEntry[]) {
  if (isIntersecting) {
    isDescriptionVisible.value = true;
  }
}
</script>

<style scoped>
.title-block__container {
  @apply flex items-start justify-between lg:block sm:ml-[-5px]
}

.title-block__container-title {
  @apply mt-[-1px] xl:ml-0 lg:ml-0 lg:mb-[61px] sm:mb-[42px]
}

.title-block__container-description {
  @apply max-w-[1405px] mt-[2px] mr-[11px] opacity-0
  xl:max-w-[1013px] xl:mr-[53px] xl:mt-[1px]
  lg:max-w-[1015px] lg:ml-[20%] lg:mr-0
  md:max-w-full md:ml-0 md:tracking-[-1.9px]
  sm:w-full sm:tracking-[-1.3px]
}
</style>