import type {Image} from "~/types/responses/components/default-components/image";

export interface Seo {
    id: number
    metaTitle?: string
    metaDescription?: string
    preview?: Image
    previewMobile?: Image
}