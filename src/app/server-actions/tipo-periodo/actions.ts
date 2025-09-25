"use server"

import prisma from "@/lib/prisma";
import { IEsporte } from "@/models/esporte/IEsporte";
import { ITipoPeriodo } from "@/models/tipo-periodo/ITipoPeriodo";
import { revalidatePath } from "next/cache";

export async function GetTiposPeriodo() {
    try {
        const result = await prisma.tipoPeriodo.findMany({
            include: {
                Esporte: true
            }
        });

        return result;
    } catch (e) {
        console.error("ERRO SERVER ACTION. Caminho pasta: 'server-actions/tipo-periodo/actions'. Ação: 'GetTiposPeriodo'");
        throw e;
    }
}

export async function CreateTipoPeriodo(data: ITipoPeriodo) {
    try {
        if (!!!data.Esporte.id)
            throw new Error("O identificador do esporte (Esporte.id) não pode ser nulo, vazio ou indefinido.");

        const result = await prisma.tipoPeriodo.create({
            data: {
                nome: data.nome,
                minimoPontos: data.minimoPontos,
                maximoPontos: data.maximoPontos,
                vantagemMinima: data.vantagemMinima,
                limiteTempo: data.limiteTempo,
                idEsporte: data.Esporte.id
            }
        });

        revalidatePath("tipos-periodo");

        return result;
    } catch (e) {
        console.error("ERRO SERVER ACTION. Caminho pasta: 'server-actions/tipo-periodo/actions'. Ação: 'CreateTipoPeriodo'");
        throw e;
    }
}