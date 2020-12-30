export interface CreateFormReq {
  name: string
  region: string | undefined
  date: string[]
  delivery: boolean
  type: number[]
  resource: number
  desc: string
}

export interface FormListReq {
  name: string
  region: string | undefined
  resource: number | undefined
  page: number
  pageSize: number
}

export interface FormListRes extends CreateFormReq {
  id?: string
}

export interface FormColumn {
  title?: string
  dataIndex: string
  [key: string]: any
}