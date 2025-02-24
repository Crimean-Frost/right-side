import type {CompetenceCardEmployee} from "~/types/responses/components/section-components/competence-card-employee";


export interface CompetencesEmployee {
    id: number
    __component: 'sections.competences-employee'
    title: string
    button: string
    link: any
    cards: CompetenceCardEmployee[]
}