import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {ForWhomCard} from "~/types/responses/components/section-components/for-whom-card";


export interface ForWhom {
    id: number
    __component: 'sections.for-whom'
    titleContainer: TitleContainer
    cards: ForWhomCard[]
}