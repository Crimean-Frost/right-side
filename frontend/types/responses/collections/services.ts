import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {MainHero} from "~/types/responses/components/sections/main-hero";
import type {AboutCommand} from "~/types/responses/components/sections/about-command";
import type {CompetenceCard} from "~/types/responses/components/sections/competence-card";
import type {Principles} from "~/types/responses/components/sections/principles";
import type {ForWhom} from "~/types/responses/components/sections/for-whom";
import type {ContactUsTitle} from "~/types/responses/components/sections/contact-us-title";
import type {Seo} from "~/types/responses/seo/seo";


export interface ServicesBase extends BaseData {
    slug: string
    sectorSlug: string
    label: string
    description: string
    success: boolean
    sorting?: number
}

type ContentItem = MainHero | AboutCommand | CompetenceCard | Principles | ForWhom | ContactUsTitle

export interface ServicesCollectionData extends ServicesBase {
    seo?: Seo
    content: ContentItem[]
}

export interface ServicesCollectionMeta extends BaseMeta {
}

export type ServiceCollectionResponse = BasePageResponse<ServicesCollectionData, ServicesCollectionMeta>