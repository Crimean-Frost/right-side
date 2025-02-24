import type {CompetenceCardComponent} from "~/types/responses/components/section-components/competence-card-component";
import type {TitleContainer} from "~/types/responses/components/section-components/title-container";


export interface CompetenceCard {
    id: number
    __component: 'sections.competence-card'
    button: string
    link: any
    titleContainer: TitleContainer
    competenceCards: CompetenceCardComponent[]
}