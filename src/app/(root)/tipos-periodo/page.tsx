import { GetTiposPeriodo } from "@/app/server-actions/tipo-periodo/actions";
import Lista from "./components/lista";
import { ITipoPeriodo } from "@/models/tipo-periodo/ITipoPeriodo";
import { IEsporte } from "@/models/esporte/IEsporte";

export default async function PeriodosEsportePage() {
    const rows = await GetTiposPeriodo();
    const data = rows.map((item) => {
        return {
            id: item.id,
            nome: item.nome,
            minimoPontos: item.minimoPontos?.toNumber(),
            maximoPontos: item.maximoPontos?.toNumber(),
            limiteTempo: item.limiteTempo,
            vantagemMinima: item.vantagemMinima?.toNumber(),
            Esporte: {
                id: item.idEsporte,
                nome: item.Esporte.nome
            } as IEsporte     
        } as ITipoPeriodo;
    });

    return (
        <div className="flex flex-col flex-1 gap-5 py-8">
            <h1 className="font-bold text-4xl">Lista de períodos de esporte</h1>

            <Lista data={data}/>
        </div>
    )
}