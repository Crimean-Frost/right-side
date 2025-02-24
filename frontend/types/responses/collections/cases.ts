import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {EmployeesBase} from "~/types/responses/collections/employees";
import type {Image} from "~/types/responses/components/default-components/image";
import type {CategoriesBase} from "~/types/responses/collections/categories";
import type {IPagination} from "~/types/responses/components/default-components/pagination";
import type {BlogChapter} from "~/types/responses/components/section-components/blog-chapter";
import type {Seo} from "~/types/responses/seo/seo";


export interface CasesBase extends BaseData {
    shortTitle: string
    shortDescription: string
    title: string
    slug: string
    cover: Image
    coverMobile: Image
    manualCreatedAt?: string
}

export interface CasesCollectionData extends CasesBase {
    seo?: Seo
    employeers: EmployeesBase[]
    image: Image
    imageMobile: Image
    categories: CategoriesBase[]
    chapters: BlogChapter[]
}

export interface CasesCollectionMeta extends BaseMeta {
}

export type CasesCollectionResponse = BasePageResponse<CasesCollectionData, CasesCollectionMeta>


export interface CasesBasePaginate extends CasesBase {
    cover: Image
    coverImage: Image
    categories: CategoriesBase[]
}

export interface CasesCollectionPaginateMeta extends BaseMeta {
    pagination: IPagination
}

export type CasesCollectionPaginateResponse = BasePageResponse<CasesBasePaginate[], CasesCollectionPaginateMeta>



