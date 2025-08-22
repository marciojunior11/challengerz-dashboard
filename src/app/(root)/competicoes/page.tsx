"use client"

import DataTable, { IColumn } from "@/components/data-table";
import { Button, Divider, Input } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useRouter } from "next/navigation";

export default function CompeticoesPage() {
    const router = useRouter();

    const columns: IColumn<{ id: number, nome: string }>[] = [
        {
            key: "id",
            name: "id",
            label: "ID",
            align: "end"
        },
        {
            key: "nome",
            name: "nome",
            label: "NOME",
            align: "start"
        },
        {
            key: "esporte",
            name: "esporte.nome",
            label: "ESPORTE",
            align: "center"
        },
        {
            key: "tipoParticipante",
            name: "tipoParticipante",
            label: "TIPO DE PARTICIPANTE",
            align: "center"
        },
        {
            key: "quantidadeParticipantes",
            name: "quantidadeParticipantes",
            label: "QUANT. PARTICIPANTES",
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
                            onPress={() => router.push(`/competicoes/edit/${item.id}`)}
                        >
                            <Icon className="m-1" fontSize={40} icon="lets-icons:edit-duotone" />
                        </Button>

                        <Button 
                            isIconOnly 
                            color="danger" 
                            variant="flat"
                            onPress={() => router.push(`/competicoes/delete/${item.id}`)}
                        >
                            <Icon className="m-1" fontSize={40} icon="lets-icons:trash-duotone" />
                        </Button>

                        <Button 
                            isIconOnly 
                            color="default" 
                            variant="flat"
                            onPress={() => router.push(`/competicoes/settings/${item.id}`)}
                        >
                            <Icon className="m-1" fontSize={40} icon="lets-icons:setting-line-duotone" />
                        </Button>
                    </div>
                );
            }
        }
    ];

    const rows = [
        {
            id: 1,
            nome: "CIRCUITO CATARATAS DE VÔLEI DE PRAIA",
            esporte: {
                id: 1,
                nome: "VÔLEI DE PRAIA"
            },
            tipoParticipante: "EQUIPE",
            quantidadeParticipantes: 16
        }
    ]

    return (
        <div className="flex flex-col flex-1 gap-5 py-8">
            <h1 className="font-bold text-4xl text-content4">Lista de competições</h1>

            <section className="flex flex-col bg-white dark:bg-[#12141A] rounded-xl mr-4">
                <div className="flex justify-between items-center p-5 gap-4">
                    {/* Lado esquerdo - Busca */}
                    <div className="flex items-center gap-4 w-1/3">
                        <Input label="Buscar competição" />
                    </div>

                    {/* Lado direito - Perfil */}
                    <div className="flex items-center gap-4">
                        <Divider orientation="vertical" className="h-12" />

                        <Button
                            size="lg"
                            variant="flat"
                            color="primary"
                            startContent={<Icon fontSize={40} icon="lets-icons:add-square-duotone" />}
                            onPress={() => router.push("/competicoes/create/detalhes")}
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