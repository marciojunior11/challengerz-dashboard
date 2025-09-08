import { PrismaClient, Prisma } from "../generated/prisma";

const prisma = new PrismaClient();

const esportes: Prisma.EsporteCreateInput[] = [
    {
        nome: "VÔLEI DE QUADRA",
        TipoPeriodos: {
            createMany: {
                data: [
                    {
                        nome: "SET NORMAL",
                        minimoPontos: 21,
                        maximoPontos: null,
                        vantagemMinima: 2,
                        limiteTempo: null,
                    },
                    {
                        nome: "TIE-BREAK",
                        minimoPontos: 21,
                        maximoPontos: null,
                        vantagemMinima: 2,
                        limiteTempo: null,
                    },                      
                ]
            }
        }
    },
    {
        nome: "VÔLEI DE PRAIA",
        TipoPeriodos: {
            createMany: {
                data: [
                    {
                        nome: "SET NORMAL",
                        minimoPontos: 21,
                        maximoPontos: null,
                        vantagemMinima: 2,
                        limiteTempo: null,
                    },
                    {
                        nome: "TIE-BREAK",
                        minimoPontos: 21,
                        maximoPontos: null,
                        vantagemMinima: 2,
                        limiteTempo: null,
                    },                    
                ]
            }
        }
    },
    {
        nome: "FUTEBOL",
        TipoPeriodos: {
            createMany: {
                data: [
                    {
                        nome: "TEMPO REGULAR",
                        minimoPontos: 21,
                        maximoPontos: null,
                        vantagemMinima: 2,
                        limiteTempo: null,
                    },
                    {
                        nome: "PRO",
                        minimoPontos: 21,
                        maximoPontos: null,
                        vantagemMinima: 2,
                        limiteTempo: null,
                    },                    
                ]
            }
        }        
    },
    {
        nome: "FUTSAL"
    },
];

const tipoFases: Prisma.TipoFaseCreateInput[] = [
    {
        nome: "PONTOS CORRIDOS",
        vitoriasClassificacao: null,
        derrotasEliminacao: null,
        pontosVitoria: null,
        pontosEmpate: null,
        pontosDerrota: null,
        formato: null,
        formula: "",
        campos: JSON.stringify("")
    },    
    {
        nome: "FASE DE GRUPOS",
        vitoriasClassificacao: null,
        derrotasEliminacao: null,
        pontosVitoria: null,
        pontosEmpate: null,
        pontosDerrota: null,
        formato: null,
        formula: "",
        campos: JSON.stringify("")
    },
    {
        nome: "ELIMINATÓRIA SIMPLES",
        vitoriasClassificacao: null,
        derrotasEliminacao: 1,
        pontosVitoria: null,
        pontosEmpate: null,
        pontosDerrota: null,
        formato: null,
        formula: "",
        campos: JSON.stringify("")
    },   
    {
        nome: "ELIMINATÓRIA DUPLA",
        vitoriasClassificacao: null,
        derrotasEliminacao: 2,
        pontosVitoria: null,
        pontosEmpate: null,
        pontosDerrota: null,
        formato: null,
        formula: "",
        campos: JSON.stringify("")
    },      
];

export async function main() {
    for (const u of esportes) {
        await prisma.esporte.create({ data: u });
    }

    for (const u of tipoFases) {
        await prisma.tipoFase.create({ data: u });
    }
}

main();