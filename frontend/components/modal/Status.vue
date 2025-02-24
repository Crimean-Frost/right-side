<template>
  <div :class="['overflow', {'overflow-active': isModalOpen}]" @click="closeModal">
    <div class="modal" @click.stop>
      <picture>
        <img src="/img/svg/cross_modal.svg" alt="Крестик" class="modal__svg-close" @click="closeModal">
      </picture>
      <div class="modal__inner">
        <h3 class="modal__inner-title">Спасибо за обращение!</h3>
        <p class="modal__inner-content">Мы свяжемся с вами в течение дня</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useMyStore();

const isModalOpen = computed(() => store.isModalStatusOpen)

const closeModal = () => {
  store.toggleIsModalStatusOpen();
}
</script>

<style scoped>
.overflow {
  @apply fixed top-0 left-0 z-20 flex items-center justify-center w-[100%] h-[100%] bg-dark-green-56 overflow-auto invisible opacity-0 transition-opacity duration-300
}

.overflow-active {
  @apply visible opacity-100
}

.modal {
  @apply relative w-[616px] mt-[5%] p-[10px] rounded-[10px] bg-white
  md:w-[502px] lg:mt-[5%]
  sm:w-[336px]
}

.modal__svg-close {
  @apply absolute top-[-30px] right-[-44px] w-[30px] h-[30px] cursor-pointer
  md:top-[-70px] md:right-[-70px] md:w-[48px] md:h-[48px]
  sm:top-[-85px] sm:right-0 sm:w-[60px] sm:h-[60px]
}

.modal__inner {
  @apply p-[40px] border border-dashed rounded-[10px] border-light-green
  md:px-[32px]
}

.modal__inner-title {
  @apply mb-[20px] font-golos font-normal text-[26px] text-black leading-[89%] tracking-[-1.04px]
  sm:text-center sm:text-[22px] sm:tracking-[-0.88px]
}

.modal__inner-content {
  @apply font-onest font-light text-[24px] text-black leading-[108%] tracking-[-0.96px]
  md:text-[20px] md:tracking-[-0.8px]
  sm:max-w-[193px] sm:mx-auto sm:text-center
}
</style>