import type {Image} from "~/types/responses/components/default-components/image";


export interface TitleCard {
    id: number
    title: string
    button: string
    link: string
    cover: Image
    coverMobile: Image
}