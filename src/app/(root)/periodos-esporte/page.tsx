"use client"

import DataTable, { IColumn } from "@/components/data-table";
import { Button, Divider, Input } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";

export default function PeriodosEsportePage() {
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

        {
            key: "esporte.nome",
            name: "esporte.nome",
            align: "center"
        },

        {
            key: "actions",
            name: "actions",
            label: " ",
            align: "center",
            render: (item) => {
                return (
                    <div className="flex justify-end gap-2">
                        <Button
                            isIconOnly
                            color="primary"
                            variant="flat"
                            onPress={() => router.push(`/periodos-esporte/edit/${item.id}`)}
                        >
                            <Icon className="m-1" fontSize={40} icon="lets-icons:edit-duotone" />
                        </Button>

                        <Button
                            isIconOnly
                            color="danger"
                            variant="flat"
                            onPress={() => router.push(`/periodos-esporte/delete/${item.id}`)}
                        >
                            <Icon className="m-1" fontSize={40} icon="lets-icons:trash-duotone" />
                        </Button>
                    </div>
                );
            }
        }
    ];

    const rows = [
        {
            id: 1,
            nome: "SET NORMAL",
            esporte: {
                id: 1,
                nome: "VÔLEI DE PRAIA"
            },
        },

        {
            id: 2,
            nome: "TIE-BREAK",
            esporte: {
                id: 1,
                nome: "VÔLEI DE PRAIA"
            },
        },

        {
            id: 3,
            nome: "TEMPO REGULAR",
            esporte: {
                id: 2,
                nome: "FUTEBOL"
            },
        },

        {
            id: 4,
            nome: "PRORROGAÇÃO",
            esporte: {
                id: 2,
                nome: "FUTEBOL"
            },
        },
    ]

    return (
        <div className="flex flex-col flex-1 gap-5 py-8">
            <h1 className="font-bold text-4xl">Lista de períodos de esporte</h1>

            <section className="flex flex-col bg-white dark:bg-[#12141A] rounded-xl mr-4">
                <div className="flex justify-between items-center p-5 gap-4">
                    {/* Lado esquerdo - Busca */}
                    <div className="flex items-center gap-4 w-1/3">
                        <Input label="Buscar período de esporte" />
                    </div>

                    {/* Lado direito - Perfil */}
                    <div className="flex items-center gap-4">
                        <Divider orientation="vertical" className="h-12" />

                        <Button
                            size="lg"
                            variant="flat"
                            color="primary"
                            startContent={<Icon fontSize={40} icon="lets-icons:add-square-duotone" />}
                            onPress={() => router.push("/periodos-esporte/create")}
                        >
                            Cadastrar
                        </Button>
                    </div>
                </div>

                <Divider orientation="horizontal" />

                <div className="p-5">
                    <DataTable columns={columns} rows={rows} />
                </div>

            </section>
        </div>
    )
}