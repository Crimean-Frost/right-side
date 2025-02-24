import type {BaseData} from "~/types/responses/general/base";
import type {Image} from "~/types/responses/components/default-components/image";


export interface PartnersBase extends BaseData {
    link: any
    weight: number
    label: string
}

export interface PartnersCollectionData extends PartnersBase {
    logo: Image
    logoHover: Image
}

