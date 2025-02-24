import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {EmployeesBase} from "~/types/responses/collections/employees";


export interface OurEmployees {
    id: number
    __component: 'sections.our-employees'
    openButton: string
    closeButton: string
    titleContainer: TitleContainer
    employees: EmployeesBase[]
}