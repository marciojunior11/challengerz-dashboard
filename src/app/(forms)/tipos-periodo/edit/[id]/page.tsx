interface IEditPeriodoEsportePageProps {
    params: Promise<{ id: number }>
}

export default async function EditPeriodoEsportePage({ params }: IEditPeriodoEsportePageProps) {
    const { id } = await params;

    return (
        <div>
            Edit {id}
        </div>
    )
}