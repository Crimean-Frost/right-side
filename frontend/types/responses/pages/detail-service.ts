import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {ContactUsWithout} from "~/types/responses/components/sections/contact-us-without";


type ContentItem = ContactUsWithout

export interface DetailServicePageData extends BaseData {
    content: ContentItem[]
}

export interface DetailServicePageMeta extends BaseMeta {
}


export type DetailServicePageResponse = BasePageResponse<DetailServicePageData, DetailServicePageMeta>;