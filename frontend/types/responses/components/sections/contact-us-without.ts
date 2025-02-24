import type {Image} from "~/types/responses/components/default-components/image";
import type {ContactUsForm} from "~/types/responses/components/section-components/contact-us-form";


export interface ContactUsWithout {
    id: number
    __component: 'sections.contact-us-without'
    form: ContactUsForm
    image: Image
    imageMobile: Image
}