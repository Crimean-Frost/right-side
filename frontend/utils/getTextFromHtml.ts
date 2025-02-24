export default (str: string) => {
  const tempDiv = ref<HTMLElement | null>(null);
  const text = ref<string>()
  const plainText = (text: string) => {
    if (tempDiv.value) {
      tempDiv.value.innerHTML = text || "";
      return tempDiv.value.textContent || tempDiv.value.innerText || "";
    }
  };

  onBeforeMount(() => {
    tempDiv.value = document.createElement("div");
    text.value = plainText(str)
  });

  onUnmounted(() => {
    if (tempDiv.value) {
      tempDiv.value.remove();
    }
  });
  return [text];
};
