<template>
  <section class="employee__section">
    <span class="vertical-line"></span>
    <span class="horizontal-line"></span>
    <div class="hero__inner">
      <div class="hero__inner-block">
        <div class="hero__image-container">
          <picture>
            <source v-if="imageUrlMobile" :srcset="`${config.public.apiBase}${imageUrlMobile}`"
                    media="(max-width: 900px)">
            <img
                v-intersection-observer="value => onIntersectionObserver(value, 'image')"
                :class="['hero__content-image', {'show-up-500': isIntersectingVisible.title}]"
                :src="`${config.public.apiBase}${imageUrl}`"
                :alt="imageAlt ? imageAlt : 'Изображение сотрудника'"
            >
          </picture>
        </div>
        <div class="hero__content">
          <h1
              v-intersection-observer="value => onIntersectionObserver(value, 'title')"
              :class="['hero__content-name', {'fade-up__text-500': isIntersectingVisible.title}]"
          >
            {{ lastName }} <span class="hero__content-initials">{{ firstName }} {{ middleName }}</span>
          </h1>
          <p
              v-intersection-observer="value => onIntersectionObserver(value, 'description')"
              :class="['hero__content-description', {'fade-up__text-1000': isIntersectingVisible.description}]"
          >
            {{ typograf.execute(description) }}
          </p>
          <ButtonPrimary
              v-intersection-observer="value => onIntersectionObserver(value, 'button')"
              :class="['hero__content-button', {'fade-up__text-1500': isIntersectingVisible.button}]"
              :text="buttonText"
          >
          </ButtonPrimary>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import {vIntersectionObserver} from '@vueuse/components'

export type SectionEmployeeHeroProps = {
  firstName?: string
  lastName?: string
  middleName?: string
  description?: string
  buttonText?: string
  imageUrl?: string
  imageUrlMobile?: string
  imageAlt?: string
}

type IntersectingHeroElements = {
  title: boolean
  description: boolean
  button: boolean
  image: boolean
}

const props = defineProps<SectionEmployeeHeroProps>();
const config = useRuntimeConfig();

const isIntersectingVisible = reactive<IntersectingHeroElements>({
  title: false,
  description: false,
  button: false,
  image: false,
});

function onIntersectionObserver([{isIntersecting}]: IntersectionObserverEntry[], elem: keyof IntersectingHeroElements) {
  if (isIntersecting) {
    isIntersectingVisible[elem] = true;
  }
}
</script>

<style scoped>
.vertical-line {
  @apply absolute z-[1] top-0 left-[50%] h-[1000px] border-r-[1px] border-[#204C4F80] border-dashed
  xl:h-[724px] lg:h-[1124px]
  md:hidden sm:h-[1010px]
}

.horizontal-line {
  @apply absolute z-[1] top-[450px] left-0 w-[100%] border-t-[1px] border-[#204C4F80] border-dashed
  xl:top-[361px]
  md:hidden md:top-[486px] sm:top-[562px]
}

.hero__inner {
  @apply relative z-[2] flex items-start justify-center pt-[163px]
  xl:pt-[168px] lg:pt-[180px]
  sm:pt-[155px]
}

.hero__inner-block {
  @apply flex items-start justify-between w-[1374px] xl:w-[1002px]
  lg:flex-col lg:w-[748px] sm:w-[360px]
}

.hero__image-container {
  @apply w-[530px] h-[588px] min-w-[530px] ml-[77px]
  2xl:ml-0
  xl:w-[405px] xl:min-w-[405px] xl:h-[449px] xl:ml-[47px]
  lg:w-[428px] lg:min-w-[428px] lg:h-[470px] lg:mx-auto
  sm:w-[336px] sm:min-w-[336px] sm:h-[369px]
}

.hero__content-image {
  @apply w-full h-full object-cover opacity-0
}

.hero__content {
  @apply min-w-[754px] ml-[78px] mt-[96.5px]
  xl:min-w-[540px] xl:ml-[50px] xl:mt-[47.5px]
  lg:w-full lg:mt-[34px] lg:ml-[-2px] lg:text-center
  sm:min-w-[335px] sm:mt-[35px] sm:text-start
}

.hero__content-name {
  @apply text-black text-[68px] font-golos font-normal leading-[94%] tracking-[-2.72px] opacity-0
  xl:text-[50px] xl:tracking-[-2px]
  md:text-[48px] md:tracking-[-1.92px]
  sm:ml-[1px] sm:text-[36px] sm:leading-[92%] sm:tracking-[-2.5px]
}

.hero__content-initials {
  @apply inline-block
}

.hero__content-description {
  @apply max-w-[527px] mt-[16px] ml-[2px] text-black font-onest font-light text-[24px] leading-[108%] tracking-[-0.88px] opacity-0
  xl:max-w-[536px] xl:mt-[33px] xl:text-[20px] xl:tracking-[-0.7px]
  lg:mx-auto lg:mt-[21px]
  sm:max-w-[310px] sm:mt-[23px] sm:mx-[2px] sm:tracking-[-0.8px]
}

.hero__content-button {
  @apply w-[167px] h-[167px] mt-[61px] ml-[2px] opacity-0
  xl:mt-[64px]
  lg:w-[200px] lg:h-[200px] lg:mx-auto lg:mt-[61.5px]
  sm:w-[180px] sm:h-[180px] sm:mt-[58px]
}

.hero__content-name-br {
  @apply hidden sm:block
}
</style>