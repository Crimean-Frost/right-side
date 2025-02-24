<template>
  <input
    class="input__default"
    :value="modelValue"
    @input="updateValue"
    :placeholder="placeholder"
  >
</template>

<script setup lang="ts">
const props = defineProps<{
  modelValue: string;
  placeholder?: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value);
};
</script>

<style scoped>
.input__default {
  @apply w-full h-[60px] mt-[14px] py-[24.5px] xl:py-[19.5px] px-[20px] placeholder-light-gray font-onest font-normal text-[16px] leading-[17.28px] text-black
  border border-dark-green rounded-[30px] bg-white tracking-[-0.6px] xl:h-[50px] lg:h-[60px]
}
</style>