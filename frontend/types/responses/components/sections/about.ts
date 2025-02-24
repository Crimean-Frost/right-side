import type {TitleCard} from "~/types/responses/components/section-components/title-card";
import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {Vacancy} from "~/types/responses/components/section-components/vacancy";


export interface About {
    id: number
    __component: 'sections.about'
    descriptions: Vacancy[]
    titleContainer: TitleContainer
    card: TitleCard
}