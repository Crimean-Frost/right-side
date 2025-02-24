import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {MainHero} from "~/types/responses/components/sections/main-hero";
import type {CompetenceCard} from "~/types/responses/components/sections/competence-card";
import type {About} from "~/types/responses/components/sections/about";
import type {Services} from "~/types/responses/components/sections/services";
import type {Principles} from "~/types/responses/components/sections/principles";
import type {LeaveApplication} from "~/types/responses/components/sections/leave-application";
import type {Cases} from "~/types/responses/components/sections/cases";
import type {ClientsAndPartners} from "~/types/responses/components/sections/clients-and-partners";
import type {LeaveApplicationDescription} from "~/types/responses/components/sections/leave-application-description";
import type {Blog} from "~/types/responses/components/sections/blog";
import type {ContactUs} from "~/types/responses/components/sections/contact-us";
import type {Seo} from "~/types/responses/seo/seo";


type ContentItem = MainHero | CompetenceCard | About | Services | Principles | LeaveApplication | Cases | ClientsAndPartners | LeaveApplicationDescription | Blog | ContactUs

export interface MainPageData extends BaseData {
  seo?: Seo
  content: ContentItem[]
}


export interface MainPageMeta extends BaseMeta {
}


export type MainPageResponse = BasePageResponse<MainPageData, MainPageMeta>;