import type {TitleDescriptionCard} from "~/types/responses/components/section-components/title-description-card";


export interface LeaveApplicationDescription {
    id: number
    __component: 'sections.leave-application-description'
    title: string
    card: TitleDescriptionCard;
}