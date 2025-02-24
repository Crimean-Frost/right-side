import type {BaseData, BasePageResponse} from "~/types/responses/general/base";
import type {BaseMeta} from "@unhead/schema";
import type {Header} from "~/types/responses/components/section-components/header";
import type {Footer} from "~/types/responses/components/section-components/footer";
import type {Image} from "~/types/responses/components/default-components/image";

export interface LayoutData extends BaseData {
    favicon: Image
    header: Header
    footer: Footer
}

export interface LayoutMeta extends BaseMeta {
}

export type LayoutResponse = BasePageResponse<LayoutData, LayoutMeta>