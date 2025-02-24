<template>
  <div class="contacts__map-container">
    <client-only>
      <yandex-map
          v-model="map"
          :settings="settingsMap"
          width="100%"
          height="100%"
      >
        <yandex-map-default-scheme-layer/>
        <yandex-map-default-features-layer/>

        <yandex-map-marker :settings="markerSettings" class="test-marker">
          <div class="marker">
            <img class="contacts__map-icon" :src="apiBase + section.icon.url" :alt="section.icon.alternativeText">
          </div>
        </yandex-map-marker>
      </yandex-map>
    </client-only>
  </div>
</template>

<script setup lang="ts">
import {YandexMap, YandexMapDefaultFeaturesLayer, YandexMapDefaultSchemeLayer, YandexMapMarker} from "vue-yandex-maps";
import {type LngLat, YMap, type YMapMarkerProps} from "@yandex/ymaps3-types";
import type {Map} from "~/types/responses/components/sections/map";

const config = useRuntimeConfig();
const apiBase = config.public.apiBase;

type BlockContactsMapProps = {
  section: Map;
}
const props = defineProps<BlockContactsMapProps>();

const map = shallowRef<null | YMap>(null);

const settingsMap = {
  location: {
    center: [props.section.centerY, props.section.centerX] as LngLat,
    zoom: props.section.zoom,
  },
  showScaleInCopyrights: true,
  behaviors: []
};

const markerSettings: YMapMarkerProps = {
  coordinates: [props.section.iconY, props.section.iconX] as LngLat,
};
</script>

<style scoped>
.contacts__map-container {
  @apply w-full h-[749px] rounded-[16px] overflow-hidden xl:h-[561px] md:h-[562px]
}

.contacts__map-icon {
  @apply w-[71.29px] h-[71.89px]
}

.marker {
  @apply w-[71.29px] h-[71.89px]
}

.test-marker {
  @apply w-[100px] h-[100px]
}
</style>