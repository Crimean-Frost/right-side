import type {Image} from "~/types/responses/components/default-components/image";

export interface ContactLink {
    id: number
    label: string
    action: string
    link: string
    icon: Image
}