import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {ContactLink} from "~/types/responses/components/section-components/contact-link";


export interface Contacts {
    id: number
    __component: 'sections.contacts'
    address: string
    addressLabel: string
    titleContainer: TitleContainer
    contactLinks: ContactLink[]
}