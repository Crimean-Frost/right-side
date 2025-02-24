
export interface BasePageResponse<TData, TMeta> {
  data: TData
  meta: TMeta
}

export interface BaseData {
  id: number
  documentId: string
  createdAt: string
  updatedAt: string
  publishedAt: any
  locale: any
}



export interface BaseMeta {}