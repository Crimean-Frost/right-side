import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {Image} from "~/types/responses/components/default-components/image";
import type {ContactUsForm} from "~/types/responses/components/section-components/contact-us-form";


export interface ContactUs {
    id: number
    __component: 'sections.contact-us'
    titleContainer: TitleContainer
    form: ContactUsForm
    image: Image
    imageMobile: Image
}