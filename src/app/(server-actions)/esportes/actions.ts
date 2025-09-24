"use server"

import prisma from "@/lib/prisma";
import { IEsporte } from "@/models/esporte/IEsporte";
import { revalidatePath } from "next/cache";

export async function GetEsportes() {
    try {
        const result = await prisma.esporte.findMany({
            include: {
                TiposPeriodo: true
            }
        });

        return result;
    } catch (e) {
        console.error("ERRO SERVER ACTION. Caminho pasta: '(server-actions)/esportes/actions'. Ação: 'GetEsportes'");
        throw e;
    }
}

export async function CreateEsporte(data: IEsporte) {
    try {    
        const result = await prisma.esporte.create({
            data: {
                nome: data.nome
            }
        });

        revalidatePath("esportes");

        return result;
    }
    catch (e) {
        console.error("ERRO SERVER ACTION. Caminho pasta: '(server-actions)/esportes/actions'. Ação: 'GetEsportes'");
        throw e;
    }
}