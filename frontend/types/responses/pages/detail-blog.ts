import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {Advantages} from "~/types/responses/components/sections/advantages";


type ContentItem = Advantages

export interface DetailBlogPageData extends BaseData {
    label: string
    content: ContentItem[]
}

export interface DetailBlogPageMeta extends BaseMeta {
}


export type DetailBlogPageResponse = BasePageResponse<DetailBlogPageData, DetailBlogPageMeta>;