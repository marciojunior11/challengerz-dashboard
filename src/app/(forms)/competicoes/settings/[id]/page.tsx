"use client"

import DataTable from "@/components/data-table";
import { Autocomplete, AutocompleteItem, BreadcrumbItem, Breadcrumbs, Button, cn, Divider, Input, Radio, RadioGroup, RadioProps, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRef } from "react";

export default function SettingsCompeticaoPage() {
    const formRef = useRef<HTMLFormElement>(null);

    return (
        <div className="flex flex-1 h-screen justify-center">
            <div className="w-1/2 bg-paper m-4 rounded-xl flex flex-col bg-white dark:bg-[#12141A]">
                <div className="flex items-center justify-between p-5">
                    <div className="flex items-center">
                        <Link className="flex justify-center items-center text-foreground text-small" href="/competicoes">
                            <Icon fontSize={24} icon="ion:chevron-back" />
                            Voltar
                        </Link>

                        <Divider className="mx-4 h-10" orientation="vertical" />

                        <Breadcrumbs size="md">
                            <BreadcrumbItem href="/competicoes">Lista de competições</BreadcrumbItem>
                            <BreadcrumbItem>Configurar competição</BreadcrumbItem>
                        </Breadcrumbs>
                    </div>
                </div>

                <Divider orientation="horizontal" />

                <div className="grid grid-cols-12 mx-5 mt-5 gap-y-4 gap-x-2">
                    <div className="flex flex-col col-span-12 bg-default-200 p-5 rounded-xl shadow-small">
                        <span className="font-bold text-xl text-primary-500">CIRCUITO CHALLENGERZ DE VÔLEI DE PRAIA 2025</span>
                        <span className="text-small text-content3">VÔLEI DE PRAIA</span>
                    </div>

                    <div className="flex flex-col col-span-12 bg-default-200 rounded-xl shadow-small overflow-hidden">
                        <div className="flex items-center justify-between m-4">
                            <h1 className="text-xl">FASES</h1>

                            <div className="flex gap-4">
                                <Button
                                    size="md"
                                    variant="light"
                                    color="primary"
                                >
                                    Adicionar
                                </Button>
                            </div>
                        </div>

                        <Divider orientation="horizontal" />
                    </div>
                </div>
            </div>
        </div>
    );
}