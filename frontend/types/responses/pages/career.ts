import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {MainHero} from "~/types/responses/components/sections/main-hero";
import type {AboutCommand} from "~/types/responses/components/sections/about-command";
import type {Vacancies} from "~/types/responses/components/sections/vacancies";
import type {ContactUsCareer} from "~/types/responses/components/sections/contact-us-career";
import type {Seo} from "~/types/responses/seo/seo";


type ContentItem = MainHero | AboutCommand | Vacancies | ContactUsCareer

export interface CareerPageData extends BaseData {
  seo?: Seo
  content: ContentItem[]
}


export interface CareerPageMeta extends BaseMeta {
}


export type CareerPageResponse = BasePageResponse<CareerPageData, CareerPageMeta>;