import * as HeroUI from "@heroui/react";
import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

export interface IColumn {
    key?: string,
    name: string,
    label?: string,
    align: "start" | "center" | "end",
    render: () => React.ReactNode
}

interface ITableHeaderProps extends HTMLAttributes<HTMLDivElement> {
    columns: IColumn[]
}

export default function TableHeader({ columns, className = "" }: ITableHeaderProps) {
    return (
        <HeroUI.TableHeader className={twMerge(
            "",
            className
        )} columns={columns}>
            {(column) => (
                <HeroUI.TableColumn key={column.key} align={column.align}>
                    {!!column.label ? column.label : column.name.toUpperCase()}
                </HeroUI.TableColumn>
            )}
        </HeroUI.TableHeader>
    )
}