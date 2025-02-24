import type {Publication} from "~/types/responses/components/section-components/publication";


export interface Publications {
    id: number
    __component: 'sections.publications'
    title: string
    publications: Publication[]
}