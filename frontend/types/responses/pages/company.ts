import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {MainHero} from "~/types/responses/components/sections/main-hero";
import type {ContactUs} from "~/types/responses/components/sections/contact-us";
import type {LearnMoreClean} from "~/types/responses/components/sections/learn-more-clean";
import type {AboutCompany} from "~/types/responses/components/sections/about-company";
import type {Certificates} from "~/types/responses/components/sections/certificates";
import type {LeaveApplication} from "~/types/responses/components/sections/leave-application";
import type {Advantages} from "~/types/responses/components/sections/advantages";
import type {Seo} from "~/types/responses/seo/seo";


type ContentItem = MainHero | LearnMoreClean | AboutCompany | Certificates | LeaveApplication | ContactUs | Advantages

export interface CompanyPageData extends BaseData {
  seo?: Seo
  content: ContentItem[]
}


export interface CompanyPageMeta extends BaseMeta {
}


export type CompanyPageResponse = BasePageResponse<CompanyPageData, CompanyPageMeta>;