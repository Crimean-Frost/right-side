import type {Image} from "~/types/responses/components/default-components/image";
import type {ModalForm} from "~/types/responses/components/section-components/modal-form";


export interface ModalWindow {
    id: number
    __component: 'sections.modal-window'
    title: string
    completeTitle: string
    completeDescription: string
    logo: Image
    form: ModalForm
}