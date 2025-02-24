import type {Image} from "~/types/responses/components/default-components/image";
import type {ContactLink} from "~/types/responses/components/section-components/contact-link";
import type {CategoriesBase} from "~/types/responses/collections/categories";


export interface Item {
    id: number
    label: string
    path: string
    categories: CategoriesBase[]
}

export interface HeaderMenu {
    id: number,
    logo: Image,
    contactLinks?: ContactLink[],
    items: Item[],
}


export interface Header {
    id: number,
    openModalButton: string,
    logo: Image,
    headerMenu: HeaderMenu
}