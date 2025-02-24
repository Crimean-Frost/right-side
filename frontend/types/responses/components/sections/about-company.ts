import type {CompetenceTitleCard} from "~/types/responses/components/section-components/competence-title-card";
import type {TitleContainer} from "~/types/responses/components/section-components/title-container";


export interface AboutCompany{
    id: number
    __component: 'sections.about-company'
    button: string
    link: any
    titleContainer: TitleContainer
    cards: CompetenceTitleCard[]
}