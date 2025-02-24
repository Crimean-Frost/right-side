import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {CasesBase} from "~/types/responses/collections/cases";

export interface Cases {
    id: number
    __component: 'sections.cases'
    button: string
    titleContainer: TitleContainer
    cases: CasesBase[]
}

