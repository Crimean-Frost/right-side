import type {TitleContainer} from "~/types/responses/components/section-components/title-container";


export interface SectorApplication {
  id: number
  __component: 'sections.sector-application'
  titleContainer: TitleContainer
  button: string
  link: any
}