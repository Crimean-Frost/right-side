import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {ContactUsWithout} from "~/types/responses/components/sections/contact-us-without";
import type {Advantages} from "~/types/responses/components/sections/advantages";


type ContentItem = ContactUsWithout | Advantages

export interface DetailEmployeePageData extends BaseData {
    content: ContentItem[]
}

export interface DetailEmployeePageMeta extends BaseMeta {
}


export type DetailEmployeePageResponse = BasePageResponse<DetailEmployeePageData, DetailEmployeePageMeta>;