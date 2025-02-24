<template>
  <div class="form__container">
    <form class="form__inner" @submit.prevent="handleSubmit">
      <div class="form__row">
        <LabelDefault for="name">{{ contactUsForm.firstName.label }}</LabelDefault>
        <InputDefault
            type="text"
            id="name"
            v-model="form.firstName"
            :placeholder="contactUsForm.firstName.placeholder"
            :class="{'form__input-error': formErrors.isName}"
        />
      </div>
      <div class="form__row">
        <LabelDefault for="phone">{{ contactUsForm.phone.label }}</LabelDefault>
        <InputDefault
            type="tel"
            id="phone"
            v-model="form.phone"
            :placeholder="contactUsForm.phone.placeholder"
            :class="{'form__input-error': formErrors.isPhone}"
        />
      </div>
      <div class="form__drop-down-container">
        <div class="form__drop-down-item">
          <LabelDefault>{{ contactUsForm.time.label }}</LabelDefault>
          <DropDownHomeContactUs
              class="form__drop-down-block"
              :is-drop-down-open="isDropDownFormOpen.time"
              :list-items="dropDownCallTimeOptions"
              :selected-list-item="selectedCallTimeOption"
              @set-is-drop-down-open="value => setIsDropDownOpen('time', value)"
              @select-list-item="selectCallTimeOption"
          />
        </div>
        <div class="form__drop-down-item">
          <LabelDefault>{{ contactUsForm.socialNetwork.label }}</LabelDefault>
          <DropDownHomeContactUs
              class="form__drop-down-block"
              :is-drop-down-open="isDropDownFormOpen.messenger"
              :list-items="dropDownMessangerOptions"
              :selected-list-item="selectedMessengerOption"
              @set-is-drop-down-open="value => setIsDropDownOpen('messenger', value)"
              @select-list-item="selectTypeFilterOption"
          />
        </div>
      </div>
      <InputCheckboxDefault :el-id="'personal'" v-model="form.agreement" :text="agreementText"
                            :is-error="formErrors.isAgreement"/>
      <ButtonContactUs
          class="form__drop-down-button"
          :text="contactUsForm.button"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import type {ContactUsForm} from "~/types/responses/components/section-components/contact-us-form";
import type {ContactUsFormData} from "~/types/submit-form-types";
import type {PageFormErrors} from "~/components/block/services-page/contact-us/Form.vue";

export type SectionServicesDynamicContactUsFormProps = {
  contactUsForm: ContactUsForm
}

const props = defineProps<SectionServicesDynamicContactUsFormProps>();

export type IIsDropDownFormOpen = {
  time: boolean,
  messenger: boolean,
}

const isDropDownFormOpen = reactive<IIsDropDownFormOpen>({
  time: false,
  messenger: false,
})

const config = useRuntimeConfig();
const store = useMyStore();

const agreement = props.contactUsForm.agreement;
const agreementText = ref<string>(agreementFunc(agreement, config.public.apiBase));

const dropDownCallTimeOptions = props.contactUsForm.rangeTimes.map(item => {
  const timeFrom = item.timeFrom.slice(0, -3)
  const timeTo = item.timeTo.slice(0, -3)
  return `${timeFrom} - ${timeTo}`;
});
const dropDownMessangerOptions = props.contactUsForm.socialNetworks.map(item => item.title)
const selectedCallTimeOption = ref<string>('');
const selectedMessengerOption = ref<string>('');

const setIsDropDownOpen = (
    filterType: keyof IIsDropDownFormOpen,
    value: boolean
) => {
  isDropDownFormOpen[filterType] = value;
  if (value)
    for (const key in isDropDownFormOpen) {
      if (key !== filterType)
        isDropDownFormOpen[key as keyof IIsDropDownFormOpen] = false;
    }
};

const form = ref<ContactUsFormData>({
  type: 'contact-us-general',
  firstName: '',
  phone: '',
  time: '',
  socialNetwork: '',
  agreement: false,
});

const selectCallTimeOption = (filterType: string) => {
  selectedCallTimeOption.value = filterType;
  form.value.time = filterType;
  isDropDownFormOpen.time = false;
}

const selectTypeFilterOption = (filterOption: string) => {
  selectedMessengerOption.value = filterOption;
  form.value.socialNetwork = filterOption;
  isDropDownFormOpen.messenger = false;
}

const formErrors = reactive<PageFormErrors>({
  isName: false,
  isPhone: false,
  isAgreement: false,
});

const formValidation = (): boolean => {
  let isValid = true;
  const phonePattern = /^\+?[0-9\s()-]*$/;

  formErrors.isName = !form.value.firstName;
  formErrors.isPhone = !form.value.phone || !phonePattern.test(form.value.phone);
  formErrors.isAgreement = !form.value.agreement

  if (formErrors.isName || formErrors.isPhone || formErrors.isAgreement) {
    isValid = false;
  }
  return isValid
}

const handleSubmit = async () => {
  const isValid = formValidation();
  const isSuccess = await submitForm(form.value, config, isValid);

  if (isSuccess) {
    form.value = {
      type: 'contact-us-general',
      firstName: '',
      phone: '',
      time: '',
      socialNetwork: '',
      agreement: false,
    };
    selectedCallTimeOption.value = '';
    selectedMessengerOption.value = '';
    store.toggleIsModalStatusOpen();
  }
};

watch(() => form.value.firstName, () => {
  formErrors.isName = false;
});
watch(() => form.value.phone, () => {
  formErrors.isPhone = false;
});
watch(() => form.value.agreement, () => {
  formErrors.isAgreement = false;
});
</script>

<style scoped>
.form__container {
  @apply w-full
}

.form__row {
  @apply mb-[12px]
}

.form__drop-down-container {
  @apply grid grid-cols-2 gap-[18px] mb-[19px] xl:gap-[10px] xl:mb-[14px] lg:mb-[12px] sm:grid-cols-1 sm:gap-[12px] sm:mb-[20px]
}

.form__drop-down-block {
  @apply mt-[14px]
}

.form__drop-down-button {
  @apply mt-[39px] mx-auto md:mt-[59px] sm:mt-[29px]
}
</style>