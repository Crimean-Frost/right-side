<template>
  <div class="form__container" @submit.prevent="handleSubmit">
    <form class="form__inner">
      <div class="form__row">
        <LabelDefault for="name">{{ contactUsForm.fullName.label }}</LabelDefault>
        <InputDefault
            type="text"
            id="name"
            v-model="form.fullName"
            :placeholder="contactUsForm.fullName.placeholder"
            :class="{'form__input-error': formErrors.isName}"
        />
      </div>
      <div class="form__drop-down-container">
        <div class="form__drop-down-item">
          <LabelDefault for="phone">{{ contactUsForm.phone.label }}</LabelDefault>
          <InputDefault
              type="tel"
              id="phone"
              v-model="form.phone"
              :placeholder="contactUsForm.phone.placeholder"
              :class="{'form__input-error': formErrors.isPhone}"
          />
        </div>
        <div class="form__drop-down-item">
          <LabelDefault for="mail">{{ contactUsForm.mail.label }}</LabelDefault>
          <InputDefault
              type="email"
              id="mail"
              v-model="form.mail"
              :placeholder="contactUsForm.mail.placeholder"
              :class="{'form__input-error': formErrors.isMail}"
          />
        </div>
      </div>
      <div class="form__row-comment">
        <LabelDefault for="comment">{{ contactUsForm.comment.label }}</LabelDefault>
        <textarea
            class="form__input-comment"
            id="comment"
            v-model="form.comment"
            :placeholder="contactUsForm.comment.placeholder"
            :class="{'form__input-error': formErrors.isComment}"

        />
      </div>
      <InputCheckboxDefault
          :el-id="'personal'"
          v-model="form.agreement"
          :text="agreementText"
          :is-error="formErrors.isAgreement"
      />
      <ButtonContactUs
          class="form__drop-down-button"
          :text="contactUsForm.button"
      />
    </form>
  </div>
</template>

<script setup lang="ts">
import type {ContactUsFormCareer} from "~/types/responses/components/section-components/contact-us-form-career";
import type {ContactUsCareerFormData} from "~/types/submit-form-types";

type PageFormErrors = {
  isName: boolean
  isPhone: boolean
  isMail: boolean
  isComment: boolean
  isAgreement: boolean
}

export type SectionCareerContactUsFormProps = {
  contactUsForm: ContactUsFormCareer
}

const props = defineProps<SectionCareerContactUsFormProps>();

const config = useRuntimeConfig();
const store = useMyStore();

const agreement = props.contactUsForm.agreement;
const agreementText = ref<string>(agreementFunc(agreement, config.public.apiBase));

const form = ref<ContactUsCareerFormData>({
  type: 'contact-us-career',
  fullName: '',
  phone: '',
  mail: '',
  comment: '',
  agreement: false,
});

const formErrors = reactive<PageFormErrors>({
  isName: false,
  isPhone: false,
  isMail: false,
  isComment: false,
  isAgreement: false,
});

const formValidation = (): boolean => {
  let isValid = true;
  const phonePattern = /^\+?[0-9\s()-]*$/;

  formErrors.isName = !form.value.fullName;
  formErrors.isPhone = !form.value.phone || !phonePattern.test(form.value.phone);
  formErrors.isAgreement = !form.value.agreement;
  formErrors.isMail = !form.value.mail;
  formErrors.isComment = !form.value.comment;


  if (formErrors.isName || formErrors.isPhone || formErrors.isAgreement || formErrors.isMail || formErrors.isComment) {
    isValid = false;
  }
  return isValid
}

const handleSubmit = async () => {
  const isValid = formValidation();
  const isSuccess = await submitForm(form.value, config, isValid);

  if (isSuccess) {
    form.value = {
      type: 'contact-us-career',
      fullName: '',
      phone: '',
      mail: '',
      comment: '',
      agreement: false,
    };
    store.toggleIsModalStatusOpen();
  }
};

watch(() => form.value.fullName, () => {
  formErrors.isName = false;
});
watch(() => form.value.phone, () => {
  formErrors.isPhone = false;
});
watch(() => form.value.agreement, () => {
  formErrors.isAgreement = false;
});
watch(() => form.value.mail, () => {
  formErrors.isMail = false;
});
watch(() => form.value.comment, () => {
  formErrors.isComment = false;
});
</script>

<style scoped>
.form__container {
  @apply w-full
}

.form__row {
  @apply mb-[12px]
}

.form__row-comment {
  @apply mb-[20px] xl:mb-[14px] sm:mb-[20px]
}

.form__drop-down-container {
  @apply grid grid-cols-2 gap-[18px] mb-[12px]
  xl:gap-[10px] xl:mb-[14px]
  lg:mb-[12px]
  sm:grid-cols-1 sm:gap-[12px] sm:mb-[12px]
}

.form__drop-down-button {
  @apply mt-[39px] mx-auto md:mt-[69.5px] sm:mt-[31px]
}

.form__input-comment {
  @apply block w-full h-[60px] mt-[14px] py-[20.5px] px-[18px] placeholder-light-gray font-onest font-normal text-[16px] leading-[17.28px] text-black
  border border-dark-green rounded-[30px] bg-white tracking-[-0.6px]
  xl:h-[167px] xl:mt-[12px] xl:py-[19.5px]
  md:mt-[14px]
}

.form__input-comment {
  scrollbar-width: none;
}

.form__input-comment::-webkit-scrollbar {
  display: none;
}
</style>