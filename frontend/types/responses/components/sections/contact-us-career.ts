import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {Image} from "~/types/responses/components/default-components/image";
import type {ContactUsFormCareer} from "~/types/responses/components/section-components/contact-us-form-career";


export interface ContactUsCareer {
    id: number
    __component: 'sections.contact-us-career'
    titleContainer: TitleContainer
    form: ContactUsFormCareer
    image: Image
    imageMobile: Image
}