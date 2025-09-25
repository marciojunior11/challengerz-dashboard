import { IEsporte } from "../esporte/IEsporte";

export interface ITipoPeriodo {
    id?: number,
    nome: string,
    minimoPontos?: number,
    maximoPontos?: number,
    vantagemMinima?: number,
    limiteTempo?: number,

    Esporte: IEsporte
}