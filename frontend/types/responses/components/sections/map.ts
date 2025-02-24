import type {Image} from "~/types/responses/components/default-components/image";


export interface Map {
    id: number
    __component: 'sections.map'
    centerX: number
    centerY: number
    iconX: number
    iconY: number
    zoom: number
    icon: Image
}