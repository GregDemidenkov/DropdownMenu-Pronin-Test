import { ReactNode } from 'react'

export interface DropdownMenuProps {
    trigger: ReactNode
    content: string[]
    onItemSelect: (item: string) => void
}
