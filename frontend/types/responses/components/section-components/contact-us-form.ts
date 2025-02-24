import type {Input} from "~/types/responses/components/section-components/input";
import type {Agreement} from "~/types/responses/components/section-components/agreement";
import type {RangeTimes} from "~/types/responses/collections/range-times";
import type {SocialNetworks} from "~/types/responses/collections/social-networks";


export interface ContactUsForm {
    id: number
    button: string
    firstName: Input
    phone: Input
    time: Input
    socialNetwork: Input
    agreement: Agreement
    rangeTimes: RangeTimes[]
    socialNetworks: SocialNetworks[]
}