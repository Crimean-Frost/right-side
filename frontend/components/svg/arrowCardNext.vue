<template>
  <svg width="81" height="80" viewBox="0 0 81 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1.00098" width="79" height="78" rx="39" :stroke="fill" stroke-width="2"/>
    <path
        d="M60.7071 40.7081C61.0976 40.3176 61.0976 39.6844 60.7071 39.2939L54.3431 32.9299C53.9526 32.5394 53.3195 32.5394 52.9289 32.9299C52.5384 33.3204 52.5384 33.9536 52.9289 34.3441L58.5858 40.001L52.9289 45.6578C52.5384 46.0484 52.5384 46.6815 52.9289 47.072C53.3195 47.4626 53.9526 47.4626 54.3431 47.072L60.7071 40.7081ZM21 41.001H60V39.001H21V41.001Z"
        :fill="fill"/>
  </svg>
</template>

<script setup lang="ts">

type ArrowCardNextProps = {
  fill?: string;
};

const props = defineProps<ArrowCardNextProps>();
</script>

<style scoped>

</style>