<template>
  <div class="breadcrumbs">
    <template v-for="(link, index) in links" :key="index">
      <div class="breadcrumbs__block">
        <NuxtLink
            v-if="index !== links.length - 1"
            :to="`${link.path}/`"
        >
          <span class="breadcrumbs__link" :class="{ disabled: !link.path }">{{ typograf.execute(link.text) }}</span>
        </NuxtLink>
        <span class="breadcrumbs__link" v-else>{{ typograf.execute(link.text) }}</span>
        <div v-if="index !== links.length - 1" class="breadcrumbs__slash">/</div>
      </div>
    </template>
  </div>
</template>

<script lang="ts" setup>
export type BreadCrumbsProps = {
  links: {
    text?: string;
    path?: string;
  }[];
};
defineProps<BreadCrumbsProps>();
</script>

<style scoped>
.breadcrumbs {
  @apply flex items-center flex-wrap gap-[12px] mt-[147px]
  b-xl:mt-[125px] b-xl:ml-[8px]
  b-md:gap-[11.5px] b-md:mt-[157px] b-md:ml-0
  b-sm:flex-col b-sm:items-start b-sm:gap-[5.5px] b-sm:mt-[132px];
}

.breadcrumbs__block {
  @apply flex items-center flex-wrap gap-[12px] b-md:gap-[11.5px] b-sm:gap-[5.5px]
}

.breadcrumbs__link,
.breadcrumbs__slash {
  @apply block text-[18px] text-wrap font-onest leading-[115%] text-dark-green-56
  b-md:leading-[112%] b-md:tracking-[-0.72px]
  b-sm:max-w-[270px];
}

.breadcrumbs__link.disabled {
  @apply text-black;
}
</style>
