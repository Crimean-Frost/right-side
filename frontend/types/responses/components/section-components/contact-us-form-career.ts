import type {Input} from "~/types/responses/components/section-components/input";
import type {Agreement} from "~/types/responses/components/section-components/agreement";


export interface ContactUsFormCareer {
    id: number
    button: string
    fullName: Input
    phone: Input
    mail: Input
    comment: Input
    agreement: Agreement
}