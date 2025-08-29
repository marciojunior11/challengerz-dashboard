"use client"

import DataTable, { IColumn } from "@/components/data-table";
import FaseCompeticao from "@/components/fase-competicao";
import { Stepper } from "@/components/stepper/stepper";
import { handleReset, handleSubmit } from "@/handlers/form-handlers";
import { Autocomplete, AutocompleteItem, BreadcrumbItem, Breadcrumbs, Button, DateRangePicker, Divider, Form, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Radio, RadioGroup, RadioProps, Textarea, useDisclosure } from "@heroui/react";
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
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    const [selectedFase, setSelectedFase] = useState<IFase | null | undefined>(null);

    const competicao_fases: IFase[] = [
        { 
            id: 1,
            nome: "Fase de grupos",
            ordem: 0,            
        },

        { 
            id: 2,
            nome: "Eliminatória simples",
            ordem: 0,            
        },
        
        { 
            id: 3,
            nome: "Eliminatória dupla",
            ordem: 0,            
        },        
    ];

    function setCard(id: number) {
        let fase = competicao_fases.find(u => u.id == id);

        setSelectedFase(fase);
    }

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

                    <FaseCompeticao
                        data-id={1}
                        onClick={() => {
                            setCard(1);
                            onOpen();
                        }}
                        className="col-span-4"
                        icon={
                            <Icon icon="fluent-mdl2:table-group" fontSize={28} />
                        }
                        title="Fase de grupos"
                        description="Competidores divididos em grupos competem entre si" />

                    <FaseCompeticao
                        data-id={2}
                        onClick={() => {
                            setCard(2);
                            onOpen();
                        }}
                        className="col-span-4"
                        icon={
                            <Icon icon="bi:diagram-2-fill" fontSize={28} />
                        }
                        title="Eliminatória simples"
                        description="Competidores jogam pela permanência na competição, partida a partida" />

                    <FaseCompeticao
                        data-id={3}
                        onClick={() => {
                            setCard(3);
                            onOpen();
                        }}
                        className="col-span-4"
                        icon={
                            <div className="flex justify-center items-center">
                                <Icon icon="bi:diagram-2-fill" fontSize={28} />
                                <span className="-ml-1 w-4 h-4 text-xs flex items-center justify-center rounded-full bg-primary text-primary-200">2</span>
                            </div>
                        }
                        title="Eliminatória dupla"
                        description="Competidores jogam com chance de retornar após perder" />
                </fieldset>
            </Form>

            <Modal
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                isOpen={isOpen}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>{selectedFase?.nome}</ModalHeader>
                            <ModalBody>
                                <Form className="grid grid-cols-12 gap-y-2 gap-x-2 w-full">
                                    <Input className="col-span-12" label="Pontos por vitória"/>
                                    <Input className="col-span-12" label="Pontos por empate"/>
                                    <Input className="col-span-12" label="Pontos por derrota"/>
                                    <Input className="col-span-12" label="Pontos para classificar"/>
                                    <Input className="col-span-12" label="Pontos para eliminar"/>
                                    <Input className="col-span-12" label="Mínimo de pontos requeridos"/>
                                    <Input className="col-span-12" label="Vitórias para classificar"/>
                                    <Input className="col-span-12" label="Vitórias para eliminar"/>
                                    <Input className="col-span-12" label="Máximo de participantes"/>
                                    <Input className="col-span-12" label="Qtd. Mínima de classificados"/>
                                    <Input className="col-span-12" label="Qtd. Mínima de eliminados"/>
                                </Form>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Fechar
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Adicionar
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}