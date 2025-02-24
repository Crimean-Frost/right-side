import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {PageNotFound} from "~/types/responses/components/sections/page-not-found";

export interface NotFoundPageData extends BaseData {
    pageNotFound: PageNotFound
}

export interface NotFoundPageMeta extends BaseMeta {
}


export type NotFoundPageResponse = BasePageResponse<NotFoundPageData, NotFoundPageMeta>;