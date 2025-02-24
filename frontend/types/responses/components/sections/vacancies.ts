import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {Vacancy} from "~/types/responses/components/section-components/vacancy";


export interface Vacancies {
    id: number,
    __component: 'sections.vacancies'
    button: string
    link: any
    titleContainer: TitleContainer
    vacancies: Vacancy[]
}