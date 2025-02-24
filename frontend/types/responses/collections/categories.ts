import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {CasesBase} from "~/types/responses/collections/cases";
import type {ServicesBase} from "~/types/responses/collections/services";
import type {MainHero} from "~/types/responses/components/sections/main-hero";
import type {SectorServices} from "~/types/responses/components/sections/sector-services";
import type {SectorCases} from "~/types/responses/components/sections/sector-cases";
import type {Principles} from "~/types/responses/components/sections/principles";
import type {ForWhom} from "~/types/responses/components/sections/for-whom";
import type {ContactUsTitle} from "~/types/responses/components/sections/contact-us-title";
import type {Seo} from "~/types/responses/seo/seo";
import type {SectorApplication} from "~/types/responses/components/sections/sector-application";


export interface CategoriesBase extends BaseData {
    label: string
    slug: string
    description: string
}

type ContentItem = MainHero | SectorServices | SectorCases | Principles | SectorApplication | ForWhom | ContactUsTitle

export interface CategoriesCollectionData extends CategoriesBase {
    seo?: Seo
    cases: CasesBase[]
    services: ServicesBase[]
    content: ContentItem[]
}

export interface CategoriesCollectionMeta extends BaseMeta {
}

export type CategoriesCollectionResponse = BasePageResponse<CategoriesCollectionData, CategoriesCollectionMeta>