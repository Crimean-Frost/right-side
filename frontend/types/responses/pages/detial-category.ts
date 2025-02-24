import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {ContactUsWithout} from "~/types/responses/components/sections/contact-us-without";
import type {ModalWindow} from "~/types/responses/components/sections/modal-window";


type ContentItem = ContactUsWithout | ModalWindow

export interface DetailCategoryPageData extends BaseData {
    content: ContentItem[]
}

export interface DetailCategoryPageMeta extends BaseMeta {
}


export type DetailCategoryPageResponse = BasePageResponse<DetailCategoryPageData, DetailCategoryPageMeta>;