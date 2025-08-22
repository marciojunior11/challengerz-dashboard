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
        <Form className="grid grid-cols-12 mx-5 mt-5 gap-y-2 gap-x-2">
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

            <RadioGroup classNames={{ wrapper: "grid grid-cols-12" }} className="col-span-12 mt-3" label="Selecione o tipo de competidor" orientation="horizontal">
                <CustomRadio value="equipes" description="Fixar número de participantes">Equipes</CustomRadio>
                <CustomRadio value="competidores" description="Fixar número de equipes">Competidores</CustomRadio>
            </RadioGroup>

            <Input className="col-span-12" label="Tamanho" />
        </Form>

        // <div className="flex flex-1 h-screen justify-center">
        //     <div className="w-1/2 bg-paper m-4 rounded-xl flex flex-col bg-white dark:bg-[#12141A]">
        //         <div>
        //             <div className="flex items-center justify-between p-5">
        //                 <div className="flex items-center">
        //                     <Link className="flex justify-center items-center text-foreground text-small" href="/competicoes">
        //                         <Icon fontSize={24} icon="ion:chevron-back" />
        //                         Voltar
        //                     </Link>

        //                     <Divider className="mx-4 h-10" orientation="vertical" />

        //                     <Breadcrumbs size="md">
        //                         <BreadcrumbItem href="/competicoes">Lista de competições</BreadcrumbItem>
        //                         <BreadcrumbItem>Cadastrar competição</BreadcrumbItem>
        //                     </Breadcrumbs>
        //                 </div>

        //                 <div className="flex gap-4">
        //                     <Button onPress={() => handleReset(formRef)} type="reset" color="danger" variant="light">Limpar</Button>
        //                     <Button onPress={() => handleSubmit(formRef)} color="primary" variant="solid">Salvar</Button>
        //                 </div>
        //             </div>

        //             <Stepper.Container activeStep={1}>
        //                 <Stepper.Item label="DETALHES" />
        //                 <Stepper.Item label="FASES" />
        //                 <Stepper.Item label="COMPETIDORES" />
        //                 <Stepper.Item label="LANÇAMENTO" />
        //             </Stepper.Container>

        //         </div>

        //         <Divider orientation="horizontal" />

        //         <div className="grid grid-cols-12 mx-5 mt-5 gap-y-2 gap-x-2">
        //             <Input className="col-span-12" label="Nome" />

        //             <DateRangePicker className="col-span-6" label="Duração" />

        //             <Autocomplete
        //                 className="col-span-6"
        //                 label="Esporte"
        //                 defaultItems={esportes}
        //             >
        //                 {(esporte) => <AutocompleteItem key={esporte.key}>{esporte.label}</AutocompleteItem>}
        //             </Autocomplete>

        //             <Textarea className="col-span-6" label="Descrição" />

        //             <Textarea className="col-span-6" label="Observações" />

        //             <RadioGroup classNames={{ wrapper: "grid grid-cols-12" }} className="col-span-12 mt-3" label="Selecione o tipo de competidor" orientation="horizontal">
        //                 <CustomRadio value="equipes" description="Fixar número de participantes">Equipes</CustomRadio>
        //                 <CustomRadio value="competidores" description="Fixar número de equipes">Competidores</CustomRadio>
        //             </RadioGroup>

        //             <Input className="col-span-12" label="Tamanho" />
        //         </div>
        //     </div>
        // </div>
    );
}