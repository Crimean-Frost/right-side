import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {ContactUs} from "~/types/responses/components/sections/contact-us";
import type {Advantages} from "~/types/responses/components/sections/advantages";


type ContentItem = ContactUs | Advantages

export interface DetailCasesPageData extends BaseData {
    label: string
    content: ContentItem[]
}

export interface DetailCasesPageMeta extends BaseMeta {
}


export type DetailCasesPageResponse = BasePageResponse<DetailCasesPageData, DetailCasesPageMeta>;