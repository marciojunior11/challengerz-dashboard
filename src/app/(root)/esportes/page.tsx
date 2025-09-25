import { GetEsportes } from "@/app/server-actions/esporte/actions";
import Lista from "./components/lista";
import { IEsporte } from "@/models/esporte/IEsporte";

export default async function EsportesPage() {
    const rows = await GetEsportes();
    const data = rows.map((item) => {
        return {
            id: item.id,
            nome: item.nome
        } as IEsporte;
    });

    return (
        <div className="flex flex-col flex-1 gap-5 py-8">
            <h1 className="font-bold text-4xl">Lista de esportes</h1>

            <Lista data={data}/>
        </div>
    )
}