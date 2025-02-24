<template>
  <div class="title-block__container">
    <TitleSection class="title-block__container-title">
      {{ typograf.execute(title) }}
    </TitleSection>
    <TextSectionMain class="title-block__container-description"
      :text="typograf.execute(description)"
    />
  </div>
</template>

<script setup lang="ts">
type BlockTitleContainerProps = {
  title: string;
  description: string;
}
const props = defineProps<BlockTitleContainerProps>();
</script>

<style scoped>
.title-block__container {
  @apply flex items-start justify-between lg:block
}

.title-block__container-title {
  @apply lg:mb-[65px] sm:mb-[44px]
}

.title-block__container-description {
  @apply max-w-[1265px] mr-[151px] mt-[4px]
  xl:max-w-[1032px] xl:mr-[104px]
  lg:max-w-[1015px] lg:ml-[20%] lg:mr-0
  md:max-w-full md:ml-0 md:tracking-[-1.9px] md:indent-[118px]
  sm:pr-[5px] sm:indent-0 sm:tracking-[-1.3px]
}
</style>