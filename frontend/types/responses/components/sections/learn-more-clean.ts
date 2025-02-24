import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {CleanCard} from "~/types/responses/components/section-components/clean-card";


export interface LearnMoreClean {
    id: number
    __component: 'sections.learn-more-clean'
    titleContainer: TitleContainer
    cards: CleanCard[]
}