interface IEditCompeticaoPageProps {
    params: Promise<{ id: number }>
}


export default async function EditCompeticaoPage({params}: IEditCompeticaoPageProps) {
    const { id } = await params;

    return (
        <div>EDIT {id}</div>
    )
}