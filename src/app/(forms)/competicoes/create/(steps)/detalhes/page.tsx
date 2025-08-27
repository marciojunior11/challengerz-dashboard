"use client"

import { Stepper } from "@/components/stepper/stepper";
import { handleReset, handleSubmit } from "@/handlers/form-handlers";
import { Autocomplete, AutocompleteItem, BreadcrumbItem, Breadcrumbs, Button, DateRangePicker, Divider, Form, Input, Radio, RadioGroup, RadioProps, Textarea } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

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

export default function CreateCompeticaoDetalhesStepPage() {
    const formRef = useRef<HTMLFormElement>(null);

    const esportes = [
        { label: "Vôlei de praia", key: "voleipraia01" },
        { label: "Futebol", key: "futebol01" },
    ];

    return (
        <div className="mx-5 mt-5">
            <h2 className="mb-4 text-lg font-bold text-primary">Dados</h2>

            <Form className="grid grid-cols-12 gap-y-2 gap-x-2">
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

                <h2 className="mt-8 mb-2 text-lg col-span-12 font-bold text-primary">Configurar competidores</h2>

                <RadioGroup classNames={{ wrapper: "grid grid-cols-12" }} className="col-span-12" label="Selecione o tipo de competidor" orientation="horizontal">
                    <CustomRadio value="equipes" description="Fixar número de participantes">Equipes</CustomRadio>
                    <CustomRadio value="competidores" description="Fixar número de equipes">Pessoas</CustomRadio>
                </RadioGroup>

                <Input className="col-span-12" label="Quantidade" />
            </Form>
        </div>
    );
}