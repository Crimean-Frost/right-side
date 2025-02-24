<template>
  <section class="hero">
    <span class="hero__vertical-line"></span>
    <span class="horizontal-line"></span>
    <div class="hero__inner">
      <div class="hero__inner-icon-container-mobile">
        <BlockAnimationScale class="hero__inner-icon-mobile"/>
      </div>
      <TitleHero
          v-intersection-observer="value => onIntersectionObserver(value, 'title')"
          :class="['hero__inner-title', {'fade-up__text-500': isIntersectingVisible.title}]"
          :title="typograf.execute(title)"
      />
      <ButtonPrimary
          v-intersection-observer="value => onIntersectionObserver(value, 'button')"
          :class="['hero__inner-button', {'fade-up__text-1500': isIntersectingVisible.button}]"
          :text="button"
      />
      <div class="hero__footer">
        <span
            v-intersection-observer="value => onIntersectionObserver(value, 'description')"
            :class="['hero__footer-text', {'fade-up__text-1000': isIntersectingVisible.description}]"
            v-html="typograf.execute(description)"
        />
        <BlockAnimationScale class="hero__footer-icon"/>
        <ButtonPrimary
            v-intersection-observer="value => onIntersectionObserver(value, 'button')"
            :class="['hero__footer-button-mobile', {'fade-up__text-1500': isIntersectingVisible.button}]"
            :text="button"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'

export type IntersectingHeroElements = {
  title: boolean
  description: boolean
  button: boolean
}

type HomeTitleHeroSectionProps = {
  title: string
  description: string
  button: string
}

const props = defineProps<HomeTitleHeroSectionProps>();

const isIntersectingVisible = reactive<IntersectingHeroElements>({
  title: false,
  description: false,
  button: false,
});

function onIntersectionObserver([{isIntersecting}]: IntersectionObserverEntry[], elem: keyof IntersectingHeroElements) {
  if (isIntersecting) {
    isIntersectingVisible[elem] = true;
  }
}
</script>


<style scoped>
.hero {
  @apply relative pt-[1px]
}

.hero__vertical-line {
  @apply absolute top-0 left-[50%] z-[1] h-full w-[0.5px] border-r-[1px] border-[#204C4F80] border-dashed
  md:hidden
}

.horizontal-line {
  @apply absolute z-[1] top-[446px] left-0 w-[100%] border-t-[1px] border-[#204C4F80] border-dashed
  xl:top-[362px]
  md:hidden md:top-[477px] sm:top-[335px]
}

.hero__inner {
  @apply relative z-[2] mt-[352px] xl:mt-[286px] xl:pb-[43px]
  md:mt-[325px] md:pt-[77px] md:pb-[66px] sm:mt-[265px] sm:pt-0 sm:pb-[57px]
}

.hero__inner-title {
  @apply mb-[71px] pr-[3px] leading-[92%] opacity-0
  xl:mb-[77px] xl:leading-[88%]
  md:mb-[26px] md:leading-[90%] md:pr-0
  sm:mt-[-8px] sm:mb-[18px] sm:leading-[89%]
}

.hero__inner-button {
  @apply relative mx-auto z-0 opacity-0 md:hidden
}

.hero__footer {
  @apply flex justify-between items-center mt-[64px] xl:mt-[2px] xl:items-start md:block
}

.hero__footer-text {
  @apply block max-w-[504px] text-[24px] font-onest font-light leading-[108%] tracking-[-0.9px] opacity-0
  xl:text-[20px] xl:leading-[110%] xl:mt-[5px] xl:max-w-[429px] xl:tracking-[-0.75px]
  sm:max-w-[325px]
}

.hero__footer-icon {
  @apply flex md:hidden
}

.hero__footer-button-mobile {
  @apply relative z-0 hidden md:block mx-auto mt-[60px] opacity-0 sm:mt-[37px]
}

.hero__inner-icon-container-mobile {
  @apply hidden absolute z-0 top-[-113px] w-full md:flex justify-center items-center sm:top-[-123px]
}

.hero__inner-icon-mobile {
  @apply hidden md:flex
}
</style>