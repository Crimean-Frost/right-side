import type {FileData} from "~/types/responses/components/default-components/file-data";

export interface FileLink {
    id: number
    label: string
    file: FileData
}

export interface Agreement {
    id: number
    agreement: string
    files: FileLink[]
}