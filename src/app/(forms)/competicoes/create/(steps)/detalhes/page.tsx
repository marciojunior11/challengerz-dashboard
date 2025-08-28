"use client"

import DataTable, { IColumn } from "@/components/data-table";
import { Stepper } from "@/components/stepper/stepper";
import { handleReset, handleSubmit } from "@/handlers/form-handlers";
import { Autocomplete, AutocompleteItem, BreadcrumbItem, Breadcrumbs, Button, DateRangePicker, Divider, Form, Input, Radio, RadioGroup, RadioProps, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface IFase {
    id: number,
    ordem: number,
    nome: string,
    minParticipantes?: number,
    maxParticipantes?: number,
    maxClassificados?: number
}

interface ICreateCompeticaoDetalhesStepPageProps {
    formRef: React.RefObject<HTMLFormElement>
}

const CustomRadio = (props: RadioProps) => {
    const { children, ...otherProps } = props;

    return (
        <Radio
            {...otherProps}
            classNames={{
                label: twMerge("font-bold text-content-4 group-data-[selected=true]:text-primary"),
                description: twMerge("text-content3 group-data-[selected=true]:text-primary-400"),
                base: twMerge(
                    "col-span-6 inline-flex m-0 bg-default-100 transition hover:bg-default-200 items-center justify-between",
                    "flex-row-reverse max-w-full w-full cursor-pointer rounded-medium gap-4 p-4",
                    "data-[selected=true]:bg-primary-200",
                ),
            }}
        >
            {children}
        </Radio>
    );
};

export default function CreateCompeticaoDetalhesStepPage({ formRef }: ICreateCompeticaoDetalhesStepPageProps) {
    const [dtFase_rows, setDtFase_rows] = useState<IFase[]>([]);

    const esportes = [
        { label: "Vôlei de praia", key: "voleipraia01" },
        { label: "Futebol", key: "futebol01" },
    ];

    const dtFases_columns: IColumn<IFase>[] = [
        {
            name: "ordem",
            key: "ordem",
            label: "ORDEM",
            align: "end"
        },

        {
            name: "nome",
            key: "nome",
            label: "FASE",
            align: "start"
        }
    ];

    return (
        <div className="mx-5 my-5">
            <Form ref={formRef} className="flex flex-col gap-5">
                <fieldset className="grid grid-cols-12 gap-y-2 gap-x-2 w-full">
                    <legend className="col-span-12 text-lg mb-2 font-bold text-content4">Dados</legend>
                    <span className="col-span-12 text-sm mb-2 text-content3">Dados gerais da competição</span>

                    <Input className="col-span-12" label="Nome" />

                    <DateRangePicker className="col-span-6" label="Duração" />

                    <Autocomplete
                        className="col-span-6"
                        label="Esporte"
                        defaultItems={esportes}
                    >
                        {(esporte) => <AutocompleteItem key={esporte.key}>{esporte.label}</AutocompleteItem>}
                    </Autocomplete>

                    <Textarea className="col-span-6" label="Descrição" />

                    <Textarea className="col-span-6" label="Observações" />
                </fieldset>

                <Divider orientation="horizontal" />

                <fieldset className="grid grid-cols-12 gap-y-2 gap-x-2 w-full">
                    <legend className="col-span-12 text-lg mb-2 font-bold text-content4">Competidores</legend>
                    <span className="col-span-12 text-sm mb-2 text-content3">Configurar como os competidores são tratados</span>

                    <RadioGroup classNames={{ wrapper: "grid grid-cols-12" }} className="col-span-12" label="Selecione o tipo de competidor" orientation="horizontal">
                        <CustomRadio value="equipes" description="Fixar número de participantes">Equipes</CustomRadio>
                        <CustomRadio value="competidores" description="Fixar número de equipes">Pessoas</CustomRadio>
                    </RadioGroup>

                    <Input className="col-span-12" label="Quantidade" />
                </fieldset>

                <Divider orientation="horizontal" />

                <fieldset className="grid grid-cols-12 gap-y-2 gap-x-2 w-full">
                    <legend className="col-span-12 text-lg mb-2 font-bold text-content4">Fases</legend>
                    <span className="col-span-12 text-sm mb-2 text-content3">Configurar as fases da competição</span>

                    <div className="w-72 rounded-2xl shadow-md bg-white border border-gray-200 hover:shadow-lg transition p-5 flex flex-col items-center text-center">
                        <div className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mb-4">
                            <Icon icon="icon-park-twotone:trophy" fontSize={28} />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Fase de Grupos</h3>
                        <p className="text-gray-500 text-sm mt-2">Times divididos em grupos jogam entre si.</p>
                    </div>
                </fieldset>
            </Form>
        </div>
    );
}