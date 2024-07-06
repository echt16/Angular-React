import { Doc } from "./doc"

export class Root {
    docs: Doc[] = []
    total: number = 0
    limit: number = 10
    page: number = 1
    pages: number = 0
}