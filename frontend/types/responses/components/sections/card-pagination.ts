import type {CategoriesBase} from "~/types/responses/collections/categories";
import type {Sortings} from "~/types/responses/collections/sortings";


export interface CardPagination {
    id: number
    __component: 'sections.card-pagination'
    generalButton: string
    categories: CategoriesBase[]
    sortings: Sortings[]
}