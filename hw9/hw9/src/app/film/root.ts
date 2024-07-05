import { Doc } from "./doc"

export interface Root {
    docs: Doc[]
    total: number
    limit: number
    page: number
    pages: number
  }