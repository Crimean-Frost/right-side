import type {TitleCard} from "~/types/responses/components/section-components/title-card";


export interface LeaveApplication {
    id: number
    __component: 'sections.leave-application'
    title: string
    card: TitleCard;
}