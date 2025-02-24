import type {Images} from "~/types/responses/components/section-components/images";


export interface Certificates {
    id: number
    __component: 'sections.certificates'
    title: string
    images: Images[]
}