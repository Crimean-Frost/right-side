import type {Input} from "~/types/responses/components/section-components/input";
import type {Agreement} from "~/types/responses/components/section-components/agreement";


export interface ModalForm {
    id: number
    writeMe: string
    button: string
    fullName: Input
    phone: Input
    agreement: Agreement
}