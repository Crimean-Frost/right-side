<template>
  <div class="not-found">
    <div class="not-found__image">
      <picture>
        <img :src="config.public.apiBase + data?.pageNotFound?.image?.url"
             :alt="data?.pageNotFound?.image?.alternativeText ? data?.pageNotFound?.image?.alternativeText : 'Изображение'">
      </picture>
    </div>
    <h1 class="not-found__title" v-html="typograf.execute(textError)"></h1>
    <ButtonPrimary to="/" text="Вернуться<br>на главную" class="not-found__button"></ButtonPrimary>
  </div>
</template>
<script lang="ts" setup>
import type {NotFoundPageResponse} from '~/types/responses/pages/404';

const config = useRuntimeConfig();

const props = defineProps<NotFoundPageResponse>();

const windowSize = ref<number>(0);
const textError = ref(props.data?.pageNotFound?.description);

const addTextTransfer = () => {
  if (windowSize.value <= 640) textError.value = textError.value.replace('Ошибка. ' , 'Ошибка. <br>');
}

onMounted(() => {
  windowSize.value = window.innerWidth;
  addTextTransfer();
})
</script>
<style scoped>
.not-found {
  @apply mt-[250px] flex flex-col items-center
  b-xl:mt-[163px]
  b-md:mt-[192px]
  b-sm:items-start b-sm:mt-[135px]
}

.not-found__image {
  @apply mb-[81px] w-[936px] h-[387px]
  b-xl:w-[961px] b-xl:h-[398px] b-xl:mb-[51px] b-xl:mr-[17px]
  b-md:w-[536px] b-md:h-[222px] b-md:mb-[30px] b-md:mr-0
  b-sm:w-[336px] b-sm:h-[139px] b-sm:mb-[25px] b-sm:mx-auto
}

.not-found__image img {
  @apply object-contain w-full h-full
}

.not-found__title {
  @apply max-w-[956px] mb-[81px] mx-auto text-[68px] text-black font-golos font-normal leading-[95%] tracking-[-2.7px] indent-[118px]
  b-xl:mb-[41px] b-xl:pl-[122px] xl:text-[50px] xl:tracking-[-2px]
  b-md:max-w-[660px] b-md:mb-[59px] b-md:pl-0 md:text-[48px]
  b-sm:max-w-full b-sm:mb-[40px] b-sm:mx-0 sm:text-[28px] sm:font-normal sm:indent-0 sm:tracking-[-1.3px]
}

:deep(.not-found__title *) {
  @apply text-left !important
}

.not-found__button {
  @apply w-[167px] h-[167px]
  b-md:w-[200px] b-md:h-[200px]
  b-sm:mx-auto b-sm:w-[180px] b-sm:h-[180px] b-sm:tracking-[-0.5px]
}

</style>

