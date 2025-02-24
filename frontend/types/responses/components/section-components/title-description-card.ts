import type {Image} from "~/types/responses/components/default-components/image";


export interface TitleDescriptionCard {
    id: number
    title: string
    button: string
    link: string
    description: string
    cover: Image
    coverMobile: Image
}