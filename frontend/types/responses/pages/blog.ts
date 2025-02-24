import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {BlogHero} from "~/types/responses/components/sections/blog-hero";
import type {CardPagination} from "~/types/responses/components/sections/card-pagination";
import type {Advantages} from "~/types/responses/components/sections/advantages";
import type {Seo} from "~/types/responses/seo/seo";


type ContentItem = BlogHero | CardPagination | Advantages

export interface BlogPageData extends BaseData {
  seo?: Seo
  content: ContentItem[]
}


export interface BlogPageMeta extends BaseMeta {
}


export type BlogPageResponse = BasePageResponse<BlogPageData, BlogPageMeta>;