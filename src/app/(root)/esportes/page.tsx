"use client"

import DataTable, { IColumn } from "@/components/data-table";
import { Button, Divider, Input } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";

export default function EsportesPage() {
    const router = useRouter();

    const columns: IColumn<{ id: number, nome: string }>[] = [
        {
            key: "id",
            name: "id",
            align: "end"
        },

        {
            key: "nome",
            name: "nome",
            align: "start"
        },
    ];

    const rows = [
        {
            id: 1,
            nome: "VÔLEI DE PRAIA"
        }
    ]

    return (
        <div className="flex flex-col flex-1 bg-white dark:bg-[#12141A] rounded-xl mr-4">
            <div className="flex justify-between items-center p-5 gap-4">
                {/* Lado esquerdo - Busca */}
                <div className="flex items-center gap-4 w-1/3">
                    <Input label="Buscar esporte" />
                </div>

                {/* Lado direito - Perfil */}
                <div className="flex items-center gap-4">
                    <Divider orientation="vertical" className="h-12" />

                    <Button 
                        variant="flat" 
                        color="primary" 
                        startContent={<Icon fontSize={24} icon="basil:add-solid" />}
                        onPress={() => router.push("/esportes/create")}
                    >
                        Cadastrar
                    </Button>
                </div>
            </div>

            <Divider orientation="horizontal" />

            <div className="p-5">
                <DataTable columns={columns} rows={rows} />
            </div>

        </div>
    )
}