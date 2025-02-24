import type {Image} from "~/types/responses/components/default-components/image";
import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {Vacancy} from "~/types/responses/components/section-components/vacancy";


export interface AboutEmployee {
    id: number
    __component: 'sections.about-employee'
    descriptions: Vacancy[]
    titleContainer: TitleContainer
    smallImage: Image
    largeImage: Image
    largeImageMobile: Image
}