import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {Image} from "~/types/responses/components/default-components/image";
import type {CategoriesBase} from "~/types/responses/collections/categories";
import type {IPagination} from "~/types/responses/components/default-components/pagination";
import type {BlogChapter} from "~/types/responses/components/section-components/blog-chapter";
import type {Seo} from "~/types/responses/seo/seo";


export interface BlogsBase extends BaseData {
    shortTitle: string
    shortDescription: string
    title: string
    description: string
    slug: string
    cover: Image
    coverMobile: Image
    manualCreatedAt?: string
}

export interface BlogsCollectionData extends BlogsBase {
    seo?: Seo
    image: Image
    imageMobile: Image
    category: CategoriesBase
    chapters: BlogChapter[]
}

export interface BlogsCollectionMeta extends BaseMeta {
}

export type BlogsCollectionResponse = BasePageResponse<BlogsCollectionData, BlogsCollectionMeta>


export interface BlogsBasePaginate extends BlogsBase {
    category: CategoriesBase
}

export interface BlogsCollectionPaginateMeta extends BaseMeta {
    pagination: IPagination
}

export type BlogsCollectionPaginateResponse = BasePageResponse<BlogsBasePaginate[], BlogsCollectionPaginateMeta>



