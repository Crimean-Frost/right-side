import type {Image} from "~/types/responses/components/default-components/image";


export interface PageNotFound {
    id:          number;
    description: string;
    button:      string;
    link:        null;
    image:       Image;
    imageMobile: Image;
}