import type {TitleContainer} from "~/types/responses/components/section-components/title-container";
import type {BlogsBase} from "~/types/responses/collections/blogs";

export interface Blog {
    id: number
    __component: 'sections.blog'
    description: string
    button: string
    titleContainer: TitleContainer
    blogs: BlogsBase[]
}

