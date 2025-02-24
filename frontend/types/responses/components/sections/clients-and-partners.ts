import type {PartnersCollectionData} from "~/types/responses/collections/partners";


export interface ClientsAndPartners {
    id: number
    __component: 'sections.clients-and-partners'
    title: string
    partners: PartnersCollectionData[]
}