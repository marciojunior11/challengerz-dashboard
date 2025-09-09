"use server"

import prisma from "@/lib/prisma";

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