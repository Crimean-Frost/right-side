import type {Image} from "~/types/responses/components/default-components/image";
import type {ContactLink} from "~/types/responses/components/section-components/contact-link";
import type {FileData} from "~/types/responses/components/default-components/file-data";


export interface FileLink {
    id: number
    label: string
    file: FileData
}


export interface FooterItem {
    id: number
    label: string
    path: string
}


export interface FooterMenu {
    id: number
    items: FooterItem[]
}


export interface Footer {
    id: number
    address?: string
    workingTime?: string
    description?: string
    credit?: string
    disclaimer?: string
    logo?: Image
    footerMenu?: FooterMenu
    contactLinks?: ContactLink[]
    centerFileLinks?: FileLink[]
    rightFileLinks?: FileLink[]
}