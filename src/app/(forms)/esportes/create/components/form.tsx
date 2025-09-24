"use client"

import { CreateEsporte } from "@/app/(server-actions)/esportes/actions";
import { handleInputChange } from "@/handlers/change-event-handlers";
import { handleReset, handleSubmit } from "@/handlers/form-handlers";
import { IEsporte } from "@/models/esporte/IEsporte";
import { BreadcrumbItem, Breadcrumbs, Button, Divider, Input, Form as HeroForm, addToast } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

export default function Form({ }) {
    const router = useRouter();
    const formRef = useRef<HTMLFormElement>(null);

    const [data, setData] = useState<IEsporte>({} as IEsporte);


    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        try {
            const result = await CreateEsporte(data);

            addToast({
                title: "Esporte criado com sucesso!",
                color: "success"
            });

            router.push("/esportes");
        } catch (e: any) {
            addToast({
                title: "Erro não tratado",
                description: e.message,
                color: "danger"
            });
        }
    }

    return (
        <div className="flex flex-1 h-screen justify-center">
            <div className="w-1/2 bg-paper m-4 rounded-xl flex flex-col bg-white dark:bg-[#12141A]">
                <header className="flex items-center justify-between p-5">
                    <nav className="flex items-center">
                        <Link className="flex justify-center items-center text-foreground text-small" href="/esportes">
                            <Icon fontSize={24} icon="ion:chevron-back" />
                            Voltar
                        </Link>

                        <Divider className="mx-4 h-10" orientation="vertical" />

                        <Breadcrumbs size="md">
                            <BreadcrumbItem href="/esportes">Lista de esportes</BreadcrumbItem>
                            <BreadcrumbItem>Cadastrar esporte</BreadcrumbItem>
                        </Breadcrumbs>
                    </nav>

                    <div className="flex gap-4">
                        <Button onPress={() => handleReset(formRef)} type="reset" color="danger" variant="light">Limpar</Button>
                        <Button onPress={() => handleSubmit(formRef)} color="primary" variant="solid">Salvar</Button>
                    </div>
                </header>

                <Divider orientation="horizontal" />

                <section>
                    <HeroForm className="grid grid-cols-12 mx-5 mt-5" ref={formRef} onSubmit={onSubmit}>
                        <Input
                            className="col-span-12"
                            label="Nome"
                            size="sm"
                            name="nome"
                            onChange={(e) => handleInputChange(e, setData)}
                            value={data.nome}
                            isRequired
                        />
                    </HeroForm>
                </section>
            </div>
        </div>
    )
}