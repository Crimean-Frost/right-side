import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {ModalWindow} from "~/types/responses/components/sections/modal-window";


export interface ModalWindowData extends BaseData {
    modalWindow: ModalWindow
}

export interface ModalWindowMeta extends BaseMeta {
}


export type ModalWindowResponse = BasePageResponse<ModalWindowData, ModalWindowMeta>;