import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";

export interface IColumn<T> {
    key?: string;
    name: string;
    label?: string;
    align: "start" | "center" | "end";
    render: (item: T) => React.ReactNode;
}

interface IDataTableProps<T> {
    columns: IColumn<T>[];
    rows: T[];
}

export default function DataTable<T extends { id?: string | number }>({
    columns,
    rows,
}: IDataTableProps<T>) {
    return (
        <Table>
            <TableHeader columns={columns}>
                {(column) => (
                    <TableColumn key={column.key} align={column.align}>
                        {column.label ?? column.name.toUpperCase()}
                    </TableColumn>
                )}
            </TableHeader>

            <TableBody items={rows}>
                {(item) => (
                    <TableRow key={item.id ?? JSON.stringify(item)}>
                        {columns.map((column) => (
                            <TableCell key={column.key}>
                                {column.render(item)}
                            </TableCell>
                        ))}
                    </TableRow>
                )}
            </TableBody>
        </Table>
    );
}