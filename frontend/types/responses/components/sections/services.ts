import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {CategoriesBase} from "~/types/responses/collections/categories";


export interface Services {
    id: number,
    __component: 'sections.services'
    serviceButton: string
    button: string
    link: any
    titleContainer: TitleContainer
    categories: CategoriesBase[]
}