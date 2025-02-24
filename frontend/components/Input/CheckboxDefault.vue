<template>
  <label :for="elId" class="checkbox__label">
    <input
      :id="elId"
      type="checkbox"
      :class="['checkbox__input', {'checkbox__input-checked': modelValue}]"
      :checked="modelValue"
      @input="updateValue"
    />
    <span :class="['checkbox', {'checkbox-error': isError}]"></span>
    <span
      class="checkbox__input-text"
      v-html="text"
    >
    </span>
  </label>
</template>

<script setup lang="ts">
type InputDefaultProps = {
  elId?: string,
  modelValue: boolean;
  text: string,
  isError?: boolean
}
const props = defineProps<InputDefaultProps>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const updateValue = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).checked);
};
</script>

<style scoped>
.checkbox__label {
  @apply flex items-start max-w-[450px] cursor-pointer
}

.checkbox__input {
  @apply hidden
}

.checkbox {
  @apply relative w-[16px] h-[16px] min-w-[16px] min-h-[16px] mr-[6px] border border-dark-green rounded-[3px] bg-white
}

.checkbox__input-checked + .checkbox::after {
  content: "";
  position: absolute;
  top: 2px;
  left: 3px;
  background: url("~/public/img/svg/checkbox_vector.svg") no-repeat;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.checkbox__input-text {
  @apply mt-[-2px] font-onest font-normal tracking-[-0.55px] text-[14px] leading-[15.2px] text-black transition-colors ease-out duration-300
  focus:text-active-orange hover:text-active-orange
}
</style>