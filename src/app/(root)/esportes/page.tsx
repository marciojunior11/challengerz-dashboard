"use client"

import DataTable, { IColumn } from "@/components/data-table";
import { Avatar, Divider, Input } from "@heroui/react";

export default function EsportesPage() {
    const columns: IColumn<{id: number, nome: string}> [] =[
        {
            key: "id",
            name: "id",
            align: "center",
            render: (item) => {
                return (
                    item.id
                )
            }
        },

        {
            key: "nome",
            name: "nome",
            align: "center",
            render: (item) => {
                return (
                    item.nome
                )
            }
        },
    ];

    const rows = [
        {
            id: 1,
            nome: "VÔLEI DE PRAIA"
        }
    ]

    return (
        <div className="flex flex-col flex-1 bg-paper rounded-xl mr-4">
            <div className="flex justify-between items-center p-5 gap-4">
                {/* Lado esquerdo - Busca */}
                <div className="flex items-center gap-4 w-1/3">
                    <Input fullWidth label="Buscar esporte" />
                </div>

                {/* Lado direito - Perfil */}
                <div className="flex items-center gap-4">
                    <Divider orientation="vertical" className="h-12" />
                    <Avatar
                        isBordered
                        radius="full"
                        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
                    />
                    <p className="font-bold text-content-1 whitespace-nowrap">
                        Fulano de Tal
                    </p>
                </div>
            </div>

            <Divider orientation="horizontal" />

            <div className="p-5">
                <DataTable columns={columns} rows={rows} />
            </div>

        </div>
    )
}