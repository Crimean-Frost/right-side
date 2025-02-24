import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {MainHero} from "~/types/responses/components/sections/main-hero";
import type {Services} from "~/types/responses/components/sections/services";
import type {ContactUs} from "~/types/responses/components/sections/contact-us";
import type {Seo} from "~/types/responses/seo/seo";


type ContentItem = MainHero | Services | ContactUs

export interface ServicesPageData extends BaseData {
  seo?: Seo
  content: ContentItem[]
}


export interface ServicesPageMeta extends BaseMeta {
}


export type ServicesPageResponse = BasePageResponse<ServicesPageData, ServicesPageMeta>;