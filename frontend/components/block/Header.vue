<template>
  <header :class="['header', {'header-is-scrolled': isScrolled}]">
    <NuxtLink to="/">
      <picture>
        <img class="header__logo" :src="apiBase + logo?.url" :alt="logo?.alternativeText">
      </picture>
    </NuxtLink>
    <div class="header__actions">
      <ButtonHeader class="header__button" @click="store.toggleIsModalApplicationOpen()">{{
          openModalCallbackButton
        }}
      </ButtonHeader>
      <SvgHeader @click="toggleIsSidebarOpen" class="header__menu"/>
    </div>
  </header>
</template>

<script setup lang="ts">
import type {Image} from "~/types/responses/components/default-components/image";

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;
const store = useMyStore();

type BlockHeaderProps = {
  logo?: Image,
  openModalCallbackButton?: string,
}

const props = defineProps<BlockHeaderProps>();

type HeaderBlockEmits = {
  openSidebar: [],
}

const emit = defineEmits<HeaderBlockEmits>();
const isScrolled = ref<boolean | null>(null);
const toggleIsSidebarOpen = () => {
  emit('openSidebar');
}

const handleIsScrolled = () => scrollY >= 1 ? isScrolled.value = true : isScrolled.value = false;

onMounted(() => {
  window.addEventListener('scroll', handleIsScrolled);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleIsScrolled);
});
</script>

<style scoped>
.header {
  @apply py-[30px] px-[12px] flex justify-between fixed top-0 left-0 z-10 w-full
  xl:py-[20px] xl:px-[10px] md:py-[30px] md:px-[12px] sm:py-[20px]
}

.header-is-scrolled {
  @apply bg-white
}

.header__logo {
  @apply relative z-50 w-[200px] h-[60px] bg-white rounded-[200px]
  xl:w-[159px] xl:h-[48px]
  md:w-[232px] md:h-[70px]
  sm:w-[182px] sm:h-[55px]
}

.header__actions {
  @apply flex
}

.header__button {
  @apply flex mr-[12px] xl:mr-[20px] md:hidden
}

.header__menu {
  @apply w-[60px] h-[60px] bg-white rounded-[200px] cursor-pointer xl:w-[48px] xl:h-[48px] md:w-[70px] md:h-[70px] sm:w-[55px] sm:h-[55px]
}
</style>