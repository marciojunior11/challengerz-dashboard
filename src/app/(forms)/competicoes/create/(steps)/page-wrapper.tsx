"use client"

import { Stepper } from "@/components/stepper/stepper";
import { handleReset, handleSubmit } from "@/handlers/form-handlers";
import { BreadcrumbItem, Breadcrumbs, Button, Divider } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import React, { ReactElement, useRef, useState } from "react";
import { useRouter } from "next/navigation";

interface IHeaderProps {
    children: React.ReactNode;
}

export default function PageWrapper({ children }: IHeaderProps) {
    const router = useRouter();

    const [step, setStep] = useState(1);
    const formRef = useRef<HTMLFormElement>(null);

    const hrefs = [
        "detalhes",
        "fases",
        "competidores",
        "lancamento"
    ];

    const backward = () => {
        if (step > 1) {
            const currentStep = step - 1;
            setStep(currentStep);
            router.push(`/competicoes/create/${hrefs[currentStep - 1]}`)
        }

    };

    const forward = () => {
        debugger
        if (step < 4) {
            const currentStep = step + 1;
            setStep(currentStep);
            router.push(`/competicoes/create/${hrefs[currentStep - 1]}`)
        }

    };

    return (
        <div>
            <div className="flex items-center justify-between p-5">
                <div className="flex items-center">
                    <Link className="flex justify-center items-center text-foreground text-small" href="/competicoes">
                        <Icon fontSize={24} icon="ion:chevron-back" />
                        Voltar
                    </Link>

                    <Divider className="mx-4 h-10" orientation="vertical" />

                    <Breadcrumbs size="md">
                        <BreadcrumbItem href="/competicoes">Lista de competições</BreadcrumbItem>
                        <BreadcrumbItem>Cadastrar competição</BreadcrumbItem>
                    </Breadcrumbs>
                </div>

                <div className="flex gap-4">
                    <Button onPress={() => handleReset(formRef)} type="reset" color="danger" variant="light">Limpar</Button>

                    {
                        step > 1 ?
                            <Button onPress={() => backward()} color="primary" variant="flat">Voltar</Button> :
                            null
                    }

                    {
                        step < 4 ?
                            <Button onPress={() => forward()} color="primary" variant="solid">Avançar</Button> :
                            null
                    }
                </div>
            </div>

            <Stepper.Container activeStep={step}>
                <Stepper.Item label="DETALHES" />
                <Stepper.Item label="FASES" />
                <Stepper.Item label="COMPETIDORES" />
                <Stepper.Item label="LANÇAMENTO" />
            </Stepper.Container>

            <Divider orientation="horizontal" />

            {children}
        </div>
    )
}