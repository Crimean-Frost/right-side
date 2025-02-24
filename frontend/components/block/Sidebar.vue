<template>
  <div @click="closeSidebar" :class="['overflow', {'overflow-active': isSidebarOpen}]"></div>
  <aside :class="['sidebar', {'sidebar-active': isSidebarOpen}]">
    <div class="sidebar__inner">
      <div class="sidebar__header">
        <NuxtLink @click="closeSidebar" to="/">
          <picture>
            <img class="sidebar__logo" :src="apiBase + headerMenu?.logo?.url"
                 :alt="headerMenu?.logo?.alternativeText ? headerMenu?.logo?.alternativeText : 'Логотип Right Side'">
          </picture>
        </NuxtLink>
        <SvgCrossSidebar @click="closeSidebar" class="sidebar__cross-icon"/>
      </div>
      <div class="sidebar__content">
        <nav>
          <ul class="sidebar__list">
            <template v-for="(item, index) in headerMenu?.items" :key="index">
              <li v-if="item.categories.length === 0" class="sidebar__list-item">
                <NuxtLink @click="closeSidebar" :to="`/${item.path}/`" class="sidebar__link">{{ item.label }}</NuxtLink>
              </li>
              <li v-else
                  :class="['sidebar__drop-down', {'sidebar__drop-down-active': isSidebarDropDownOpen[item.path]}]">
                <p @click="toggleIsSidebarDropDownOpen(item.path)" class="sidebar__drop-down-title">
                  {{ item.label }}
                  <SvgArrowSidebarDropDown
                      :class="['sidebar__drop-down-icon', {'sidebar__drop-down-icon-active': isSidebarDropDownOpen[item.path]}]"/>
                </p>
                <nav>
                  <ul :class="['sidebar__drop-down-list', {'sidebar__drop-down-list-active': isSidebarDropDownOpen[item.path]}]">

                    <li class="sidebar__drop-down-item" v-for="(subItem, index) in item?.categories" :key="index">
                      <NuxtLink @click="closeSidebar" :to="`/${item.path}/${config.public.prefix}` + subItem.slug + '/'">
                        {{ subItem.label }}
                      </NuxtLink>
                    </li>
                  </ul>
                </nav>
              </li>
            </template>
          </ul>
        </nav>
        <div class="sidebar__contacts">
          <NuxtLink v-for="(item, index) in headerMenu?.contactLinks" :key="index" :to="getLink(item)">
            <picture>
              <img :src="apiBase + item.icon?.url"
                   :alt="item.icon?.alternativeText ? item.icon?.alternativeText : 'Иконка'"
                   class="sidebar__contacts-icon">
            </picture>
          </NuxtLink>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type {HeaderMenu} from "~/types/responses/components/section-components/header";
import type {ContactLink} from "~/types/responses/components/section-components/contact-link";

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

export type ISidebarProps = {
  isSidebarOpen: boolean;
  headerMenu?: HeaderMenu;
};

type SidebarBlockEmits = {
  closeSidebar: [],
};

const props = defineProps<ISidebarProps>();

const emit = defineEmits<SidebarBlockEmits>();

const isSidebarDropDownOpen = ref<Record<string, boolean>>({});

const toggleIsSidebarDropDownOpen = (key: string) => {
  for (const k in isSidebarDropDownOpen.value) {
    if (key !== k) {
      isSidebarDropDownOpen.value[k] = false;
    }
  }
  isSidebarDropDownOpen.value[key] = !isSidebarDropDownOpen.value[key];
};

const closeSidebar = () => {
  emit('closeSidebar');
}

const getLink = (item: ContactLink) => {
  if (item.action === 'phone') {
    return `tel:${item.link}`;
  } else if (item.action === 'mail') {
    return `mailto:${item.link}`;
  } else {
    return item.link + '/';
  }
};
</script>

<style scoped>
.overflow {
  @apply fixed invisible top-0 left-0 z-40 w-full h-[100vh] bg-dark-green-56 opacity-0
  transition-all duration-1000 ease-in-out
}

.overflow-active {
  @apply opacity-100 visible
}

.sidebar {
  @apply fixed top-0 right-0 z-50 w-[477px] h-[100vh] px-[30px] bg-white overflow-y-auto
  transition-transform duration-1000 ease-in-out translate-x-full
  sm:w-full sm:px-[12px]
}

.sidebar-active {
  @apply translate-x-0
}

.sidebar__inner {
  @apply relative w-full h-full
}

.sidebar__header {
  @apply flex justify-between mb-[38px] sm:mb-[26px]
}

.sidebar__cross-icon {
  @apply w-[48px] h-[48px] cursor-pointer mr-[0.7px] md:w-[64.11px] md:h-[64.11px] sm:w-[55.15px] sm:h-[55.15px]
}

.sidebar__logo {
  @apply w-[173px] h-[48px] mt-[1px] md:w-[232px] md:h-[64px] sm:w-[182px] sm:h-[55px]
}

.sidebar__content {
  @apply flex flex-col justify-between items-start h-[calc(100%-89px)]
}

.sidebar__list {
  @apply w-[258px] mb-[40px]
}

.sidebar__list-item {
  @apply text-[36px] text-black font-golos font-normal leading-[33.84px] tracking-[-1.5px] mb-[30.3px] last:mb-0
}

.sidebar__drop-down {
  @apply mb-[30px]
}

.sidebar__drop-down-active {
  @apply mb-[24px]
}

.sidebar__drop-down-title {
  @apply flex items-center text-[36px] text-black font-golos font-normal leading-[33.84px] tracking-[-1.5px] cursor-pointer
}

.sidebar__drop-down-icon {
  @apply w-[24px] h-[24px] ml-[9px] transition ease-in-out duration-700
}

.sidebar__drop-down-icon-active {
  @apply rotate-[180deg]
}

.sidebar__drop-down-list {
  @apply max-h-0 overflow-hidden transition-all ease-in-out duration-700
}

.sidebar__drop-down-list-active {
  @apply max-h-[265px]
}

.sidebar__drop-down-item {
  @apply text-[16px] leading-[17.6px] tracking-[-0.6px] font-light font-onest mb-[13.4px] last:mb-0 hover:text-active-orange first:mt-[21.5px]
}

.sidebar__link {
  @apply cursor-pointer
}

.sidebar__contacts {
  @apply flex pb-[20px] md:pb-[30px] sm:pb-[20px]
}

.sidebar__contacts-icon {
  @apply w-[48px] h-[48px] mr-[20px] md:w-[60px] md:h-[60px]
}
</style>