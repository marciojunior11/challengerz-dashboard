import { Table } from "@heroui/react";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

interface ITableContainerProps extends Omit<ComponentProps<typeof Table>, "children"> {
    children: ComponentProps<typeof Table>["children"];
};

export default function TableContainer({ children, className }: ITableContainerProps) {
    return (
        <Table className={twMerge(
            "",
            className
        )}>
            {children}
        </Table>
    );
}