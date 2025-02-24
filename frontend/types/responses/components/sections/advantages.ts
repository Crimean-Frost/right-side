import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {TitleCard} from "~/types/responses/components/section-components/title-card";


export interface Advantages {
    id: number
    __component: 'sections.advantages'
    titleContainer: TitleContainer
    cards: TitleCard[]
}