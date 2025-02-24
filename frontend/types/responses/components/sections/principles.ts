import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {Principle} from "~/types/responses/components/section-components/principle";


export interface Principles {
    id: number
    __component: 'sections.principles'
    button: string
    link: any
    titleContainer: TitleContainer
    principles: Principle[]
}