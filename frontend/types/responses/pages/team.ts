import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {MainHero} from "~/types/responses/components/sections/main-hero";
import type {ContactUs} from "~/types/responses/components/sections/contact-us";
import type {AboutCommand} from "~/types/responses/components/sections/about-command";
import type {OurEmployees} from "~/types/responses/components/sections/our-employees";
import type {LeaveApplicationDescription} from "~/types/responses/components/sections/leave-application-description";
import type {Advantages} from "~/types/responses/components/sections/advantages";
import type {Seo} from "~/types/responses/seo/seo";


type ContentItem = MainHero | AboutCommand | OurEmployees | LeaveApplicationDescription | ContactUs | Advantages

export interface TeamPageData extends BaseData {
  seo?: Seo
  content: ContentItem[]
}


export interface TeamPageMeta extends BaseMeta {
}


export type TeamPageResponse = BasePageResponse<TeamPageData, TeamPageMeta>;