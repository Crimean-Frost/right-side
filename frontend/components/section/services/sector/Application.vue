<template>
  <section class="request__section">
    <div class="title-block__container">
      <TitleSection class="title-block__container-title">
        {{ typograf.execute(section.titleContainer.title) }}
      </TitleSection>
      <div>
        <TextSectionMain
            v-intersection-observer="value => onIntersectionVisible(value, 'title')"
            :class="['title-block__container-description', {'fade-up__text-500': isIntersectionVisible.title}]"
            :text="typograf.execute(section.titleContainer.description)"
        />
        <ButtonPrimary
            v-intersection-observer="value => onIntersectionVisible(value, 'button')"
            :class="['request__button', {'fade-up__text-1000': isIntersectionVisible.button}]"
            :text="section.button"
            :to="section.link"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components';
import type {SectorApplication} from "~/types/responses/components/sections/sector-application";

type IntersectionVisibleElements = {
  title: boolean,
  button: boolean,
}

type SectionRequestPromoProps = {
  section: SectorApplication;
}

const props = defineProps<SectionRequestPromoProps>();

const isIntersectionVisible = reactive<IntersectionVisibleElements>({
  title: false,
  button: false,
});

function onIntersectionVisible([{isIntersecting}]: IntersectionObserverEntry[], elem: keyof IntersectionVisibleElements) {
  if (isIntersecting) {
    isIntersectionVisible[elem] = true;
  }
}
</script>

<style scoped>
.request__section {
  @apply mt-[149px] xl:mt-[151px] md:mt-[118px] sm:mt-[97px]
}

.title-block__container {
  @apply flex items-start justify-between lg:block
}

.title-block__container-title {
  @apply lg:mb-[61px] sm:mb-[41.5px]
}

.title-block__container-description {
  @apply max-w-[1265px] mr-[151px] mt-[4px] mb-[43px] opacity-0
  xl:max-w-[1000px] xl:mt-[1.5px] xl:mb-[52px] xl:mr-[67px]
  lg:max-w-[1015px] lg:ml-[20%] lg:mr-0
  md:max-w-[740px] md:mb-[50px] md:ml-0 md:mr-auto md:tracking-[-1.9px] md:indent-[118px]
  sm:mb-[33px] sm:pr-[5px] sm:indent-0 sm:tracking-[-1.1px] sm:leading-[93%]
}

.request__button {
  @apply ml-[124px] opacity-0 lg:ml-[30%] md:mx-auto
}
</style>