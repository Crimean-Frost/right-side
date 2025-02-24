<template>
  <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="-1" y="1" width="79" height="78" rx="39" transform="matrix(-1 0 0 1 79 0.000976562)" :stroke="fill"
          stroke-width="2"/>
    <path
        d="M20.2929 40.7081C19.9024 40.3176 19.9024 39.6844 20.2929 39.2939L26.6569 32.9299C27.0474 32.5394 27.6805 32.5394 28.0711 32.9299C28.4616 33.3204 28.4616 33.9536 28.0711 34.3441L22.4142 40.001L28.0711 45.6578C28.4616 46.0484 28.4616 46.6815 28.0711 47.072C27.6805 47.4626 27.0474 47.4626 26.6569 47.072L20.2929 40.7081ZM60 41.001H21V39.001H60V41.001Z"
        :fill="fill"/>
  </svg>
</template>

<script setup lang="ts">

type ArrowCardPrevProps = {
  fill?: string;
};

const props = defineProps<ArrowCardPrevProps>();
</script>

<style scoped>

</style>