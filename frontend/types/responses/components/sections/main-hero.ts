import type {Image} from "~/types/responses/components/default-components/image";
import type {TitleContainer} from "~/types/responses/components/section-components/title-container";


export interface MainHero {
    id: number
    __component: 'sections.main-hero'
    openModalButton: string
    hero: TitleContainer
    icon: Image[];
    iconMobile: Image;
}