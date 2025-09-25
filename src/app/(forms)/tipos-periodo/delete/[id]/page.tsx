interface IDeletePeriodoEsportePageProps {
    params: Promise<{ id: number }>
}


export default async function DeletePeriodoEsportePage({ params }: IDeletePeriodoEsportePageProps) {
    const { id } = await params;

    return (
        <div>
            DELETE {id}
        </div>
    )
}