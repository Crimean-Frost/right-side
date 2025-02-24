import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {Image} from "~/types/responses/components/default-components/image";
import type {CasesBase} from "~/types/responses/collections/cases";
import type {AboutEmployee} from "~/types/responses/components/sections/about-employee";
import type {CompetencesEmployee} from "~/types/responses/components/sections/competences-employee";
import type {Publications} from "~/types/responses/components/sections/publications";
import type {SectorCases} from "~/types/responses/components/sections/sector-cases";
import type {ContactUsTitle} from "~/types/responses/components/sections/contact-us-title";
import type {Seo} from "~/types/responses/seo/seo";


export interface EmployeesBase extends BaseData {
    seo?: Seo
    firstName: string
    lastName: string
    middleName: string
    shortDescription: string
    description: string
    position: string
    slug: string
    button: string
    link: any
    mainPhoto: Image
    mainPhotoMobile: Image
}

type ContentItem = AboutEmployee | CompetencesEmployee | Publications | SectorCases | ContactUsTitle

export interface EmployeesCollectionData extends EmployeesBase {
    cases: CasesBase[]
    content: ContentItem[]
}

export interface EmployeesCollectionMeta extends BaseMeta {
}

export type EmployeesCollectionResponse = BasePageResponse<EmployeesCollectionData, EmployeesCollectionMeta>