import type {Image} from "~/types/responses/components/default-components/image";


export interface CleanCard {
    id: number
    button: string
    link: string
    cover: Image
    coverMobile: Image
}