<template>
  <section class="leave_application__section">
    <TitleSection class="leave_application__title">
      {{ headingTitle }}
    </TitleSection>
    <div
        v-intersection-observer="value => onIntersectionImageObserver(value)"
        :class="['leave_application__promo', {'leave_application__promo-is-visible': isImageIntersectionVisible}]"
    >
      <picture>
        <img src="/img/webp/drawing.webp" alt="Круг с полосками" class="leave_application__promo-drawing">
      </picture>
      <picture>
        <source :srcset="`${config.public.apiBase}${card.coverMobile.url}`" media="(max-width: 900px)">
        <img :src="`${config.public.apiBase}${card.cover.url}`" :alt="card.cover.alternativeText"
             class="leave_application__promo-img">
      </picture>
      <div class="leave_application__inner">
        <div class="leave_application__content">
          <p class="leave_application__inner-text" v-html="typograf.execute(card.title)"></p>
          <p class="leave_application__inner-text-secondary" v-html="typograf.execute(card.description)"></p>
          <ButtonSecondary
              :class="['leave_application__button', {'fade-up__text-500': isButtonIntersectionVisible}]"
              :to="card.link"
          >
            {{ card.button }}
          </ButtonSecondary>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'
import type {TitleDescriptionCard} from "~/types/responses/components/section-components/title-description-card";

type SectionTeamApplicationDescription = {
  headingTitle: string,
  card: TitleDescriptionCard,
}
const props = defineProps<SectionTeamApplicationDescription>();
const config = useRuntimeConfig();

const isButtonIntersectionVisible = ref(false);
const isImageIntersectionVisible = ref(false);

function onIntersectionImageObserver([{isIntersecting}]: IntersectionObserverEntry[]) {
  if (isIntersecting && !isImageIntersectionVisible.value) {
    isImageIntersectionVisible.value = true;
    setTimeout(() => {
      isButtonIntersectionVisible.value = true;
    }, 2000);
  }
}
</script>

<style scoped>
.leave_application__section {
  @apply mt-[149px] xl:mt-[125px] md:mt-[117px] sm:mt-[97px]
}

.leave_application__title {
  @apply mb-[65px] xl:mb-[64px] md:mb-[42px] sm:mb-[41px]
}

.leave_application__promo {
  @apply relative h-0 overflow-hidden transition-all duration-[2s]
}

.leave_application__promo-is-visible {
  @apply h-[748px] xl:h-[561px] sm:h-[394px]
}

.leave_application__promo-img {
  @apply absolute w-full h-full rounded-[16px] object-cover
}

.leave_application__promo-drawing {
  @apply absolute z-[1] bottom-[40px] right-[-10px] w-[388px] h-[322px] opacity-0 transition-all duration-[2s]
  xl:bottom-[34px] xl:right-[-10px] xl:w-[334px] xl:h-[277px]
  lg:top-auto lg:bottom-[40px] lg:right-[-7px] lg:w-[204px] lg:h-[169px]
  sm:top-[11px] sm:right-[2px] sm:w-[72px] sm:h-[60px]
}

.leave_application__promo-is-visible .leave_application__promo-drawing {
  @apply opacity-100
}

.leave_application__inner {
  @apply flex items-end justify-start py-[39px] px-[41px] w-full h-full opacity-0 transition-all duration-[2s]
  md:p-[30px] sm:px-[18px]
  sm:py-[25px]
}

.leave_application__promo-is-visible .leave_application__inner {
  @apply opacity-100
}

.leave_application__inner-text {
  @apply relative z-[1] max-w-[520px] text-white text-[26px] font-golos font-medium leading-[31.2px] mb-[11px]
  xl:max-w-[440px] xl:mb-[9px] xl:text-[22px] xl:leading-[119%]
  md:max-w-[465px] md:mb-[13px] md:ml-[6px] md:leading-[116%]
  sm:max-w-[96%] sm:mb-[5px] sm:ml-0 sm:text-[16px] sm:leading-[118%]
}

.leave_application__inner-text-secondary {
  @apply relative max-w-[358px] text-white text-[18px] font-light font-onest leading-[114%] z-[1] tracking-[-0.7px]
  md:leading-[108%] md:ml-[6px]
  sm:max-w-[290px] sm:ml-0 sm:text-[16px] sm:leading-[111%] sm:tracking-[-0.6px]
}

.leave_application__button {
  @apply relative z-[1] w-[250px] mt-[24px] opacity-0
  xl:w-[200px] xl:h-[52px]
  md:w-[250px] md:h-[60px]
  sm:w-[171px] sm:h-[47px] sm:mt-[32px]
}
</style>