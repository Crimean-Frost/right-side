<template>
  <div :class="['overflow', {'overflow-active': isModalOpen}]" @click="closeModal">
    <div class="modal" @click.stop>
      <picture>
        <img src="/img/svg/cross_modal.svg" alt="Крестик" class="modal__svg-close" @click="closeModal">
      </picture>
      <div class="modal__inner">
        <div class="modal__content">
          <picture>
            <img :src="`${config.public.apiBase}${modalWindow?.logo?.url}`"
                 :alt="modalWindow?.logo?.alternativeText" class="modal__logo"
            >
          </picture>
          <h3 class="modal__content-title">
            {{ typograf.execute(modalWindow.title) }}
          </h3>
          <form class="modal__form" @submit.prevent="handleSubmit">
            <div class="modal__form-item">
              <LabelDefault class="modal__form-label" :for="modalWindow.form.fullName.id">
                {{ modalWindow.form.fullName.label }}
              </LabelDefault>
              <InputDefault
                  :id="modalWindow.form.fullName.id"
                  :placeholder="modalWindow.form?.fullName.placeholder"
                  v-model="form.fullName"
                  :class="['modal__form-input', {'form__input-error': formErrors.isName}]"
              />
            </div>
            <div class="modal__form-item">
              <LabelDefault class="modal__form-label" :for="modalWindow.form.phone.id">
                {{ modalWindow.form.phone.label }}
              </LabelDefault>
              <InputDefault
                  :id="modalWindow.form.phone.id"
                  :placeholder="modalWindow.form.phone.placeholder"
                  v-model="form.phone"
                  :class="['modal__form-input', {'form__input-error': formErrors.isPhone}]"
              />
            </div>
            <InputCheckboxDefault
                class="modal__form-checkbox"
                :el-id="`wright-me-sector`"
                :text="modalWindow.form.writeMe || ''"
                v-model="form.writeMe"
            />
            <InputCheckboxDefault
                v-if="agreementText"
                class="modal__form-checkbox"
                :el-id="modalWindow.form.agreement.id.toString()"
                :text="agreementText"
                v-model="form.agreement"
                :is-error="formErrors.isAgreement"
            />
            <ButtonModalApplication
                class="modal__form-button"
                :text="modalWindow.form.button"
            />
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type {ModalWindowFormData} from "~/types/submit-form-types";
import type {ModalWindow} from "~/types/responses/components/sections/modal-window";
import type {PageFormErrors} from "~/components/block/services-page/contact-us/Form.vue";

export type ModalSectorProps = {
  modalWindow: ModalWindow
}

const props = defineProps<ModalSectorProps>();

const config = useRuntimeConfig();
const store = useMyStore();

const isModalOpen = computed(() => store.isModalSectorOpen)

const agreementText = ref<string | null>(null);

const agreement = props.modalWindow.form.agreement;
if (agreement) {
  agreementText.value = agreementFunc(agreement, config.public.apiBase);
}

const closeModal = () => {
  store.toggleIsModalSectorOpen();
}

const form = ref<ModalWindowFormData>({
  type: 'contact-us-modal',
  fullName: '',
  phone: '',
  writeMe: false,
  agreement: false,
});

const formErrors = reactive<PageFormErrors>({
  isName: false,
  isPhone: false,
  isAgreement: false,
});

const formValidation = (): boolean => {
  let isValid = true;
  const phonePattern = /^\+?[0-9\s()-]*$/;

  formErrors.isName = !form.value.fullName;
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
      type: 'contact-us-modal',
      fullName: '',
      phone: '',
      writeMe: false,
      agreement: false,
    };
    store.toggleIsModalSectorOpen();
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
</script>

<style scoped>
.overflow {
  @apply fixed top-0 left-0 z-20 flex items-start justify-center w-[100%] h-[100vh] bg-dark-green-56 overflow-auto invisible opacity-0 transition-opacity duration-300
}

.overflow-active {
  @apply visible opacity-100
}

.modal {
  @apply relative w-[442px] mt-[7.5%] mr-[13px] p-[10px] rounded-[10px] bg-white
  xl:mt-[5.4%] xl:mr-0
  lg:mt-[24.8%] md:w-[502px]
  sm:w-[336px] sm:mt-[29.3%]
}

.modal__svg-close {
  @apply absolute top-[-30px] right-[-44px] w-[30px] h-[30px] cursor-pointer
  md:top-[-70px] md:right-[-70px] md:w-[48px] md:h-[48px]
  sm:top-[-85px] sm:right-0 sm:w-[60px] sm:h-[60px]
}

.modal__inner {
  @apply border border-dashed rounded-[10px] border-light-green
}

.modal__content {
  @apply w-[330px] pt-[18px] pb-[24px] mx-auto
  md:w-[406px] md:pt-[38px] md:pb-[72px]
  sm:w-[288px] sm:pt-[25px] sm:pb-[21px]
}

.modal__logo {
  @apply w-[123px] h-[34px] mx-auto
  md:w-[140px] md:h-[38.6px]
  sm:w-[139.7px]
}

.modal__content-title {
  @apply max-w-[335px] mt-[21px] mb-[25px] mx-auto text-[26px] text-center font-normal leading-[89%]
  md:max-w-full md:mt-[23px] md:mb-[18px]
  sm:mb-[22px] sm:text-[22px]
}

.modal__form-item {
  @apply mb-[13px]
}

.modal__form-item:nth-child(2) {
  @apply mb-[16px] md:mb-[14px]
}

.modal__form-input {
  @apply h-[46px] py-[22px] mt-[9px]
  md:h-[60px] md:mt-[13px]
}

.modal__form-checkbox {
  @apply mb-[16px] ml-[-2px] xl:ml-[1px] md:max-w-[296px] sm:mr-[-6px]
}

.modal__form-button {
  @apply w-[167px] h-[167px] mt-[19px] mx-auto
  md:mt-[26px]
  sm:w-[180px] sm:h-[180px] sm:mt-[36px]
}
</style>