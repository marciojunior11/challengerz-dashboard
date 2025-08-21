"use client"

import { handleReset, handleSubmit } from "@/handlers/form-handlers";
import { Autocomplete, AutocompleteItem, BreadcrumbItem, Breadcrumbs, Button, Divider, Input, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRef } from "react";

export default function CreatePeriodoEsportePage() {
    const formRef = useRef<HTMLFormElement>(null);

    const esportes = [
        { label: "Vôlei de praia", key: "voleipraia01" },
        { label: "Futebol", key: "futebol01" },
    ];

    return (
        <div className="flex flex-1 h-screen justify-center">
            <div className="w-1/2 bg-paper m-4 rounded-xl flex flex-col bg-white dark:bg-[#12141A]">
                <div className="flex items-center justify-between p-5">
                    <div className="flex items-center">
                        <Link className="flex justify-center items-center text-foreground text-small" href="/periodos-esporte">
                            <Icon fontSize={24} icon="ion:chevron-back" />
                            Voltar
                        </Link>

                        <Divider className="mx-4 h-10" orientation="vertical" />

                        <Breadcrumbs size="md">
                            <BreadcrumbItem href="/periodos-esporte">Lista de períodos de esporte</BreadcrumbItem>
                            <BreadcrumbItem>Cadastrar período de esporte</BreadcrumbItem>
                        </Breadcrumbs>
                    </div>

                    <div className="flex gap-4">
                        <Button onPress={() => handleReset(formRef)} type="reset" color="danger" variant="light">Limpar</Button>
                        <Button onPress={() => handleSubmit(formRef)} color="primary" variant="solid">Salvar</Button>
                    </div>
                </div>

                <Divider orientation="horizontal" />

                <div className="grid grid-cols-12 mx-5 mt-5 gap-y-2 gap-x-2">
                    <Input className="col-span-12" label="Nome" />

                    <Autocomplete
                        className="col-span-12"
                        label="Esporte"
                        defaultItems={esportes}
                    >
                        {(esporte) => <AutocompleteItem key={esporte.key}>{esporte.label}</AutocompleteItem>}
                    </Autocomplete>
                </div>
            </div>
        </div>
    )
}