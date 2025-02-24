import type {BaseData, BaseMeta, BasePageResponse} from "~/types/responses/general/base";
import type {Contacts} from "~/types/responses/components/sections/contacts";
import type {Map} from "~/types/responses/components/sections/map";
import type {Seo} from "~/types/responses/seo/seo";


type ContentItem = Contacts | Map

export interface ContactsPageData extends BaseData {
  seo?: Seo
  content: ContentItem[]
}


export interface ContactsPageMeta extends BaseMeta {
}


export type ContactsPageResponse = BasePageResponse<ContactsPageData, ContactsPageMeta>;