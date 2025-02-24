import type {Image} from "~/types/responses/components/default-components/image";
import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {Vacancy} from "~/types/responses/components/section-components/vacancy";


export interface AboutCommand {
    id: number
    __component: 'sections.about-command'
    descriptions: Vacancy[]
    titleContainer: TitleContainer
    cover: Image
    coverMobile: Image
}