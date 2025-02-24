import type {Agreement} from "~/types/responses/components/section-components/agreement";

export default (agreement: Agreement, apiBase: string): string => {
  let modifiedText = typograf.execute(agreement.agreement);

  agreement.files.forEach(substring => {
    const pattern = new RegExp(`${substring.label}`, 'g');
    const replacement = `<a style="color: #FF3B26; text-decoration: underline" href="${apiBase}${substring.file.url}" target="_blank">${substring.label}</a>`;
    modifiedText = modifiedText.replace(pattern, replacement);
  });
  return modifiedText;
}