interface IDeleteCompeticaoPageProps {
    params: Promise<{ id: number }>
}


export default async function DeleteCompeticaoPage({params}: IDeleteCompeticaoPageProps) {
    const { id } = await params;

    return (
        <div>DELETE {id}</div>
    )
}