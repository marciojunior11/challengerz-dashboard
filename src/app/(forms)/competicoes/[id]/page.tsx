interface IDetailsCompeticaoPageProps {
    params: Promise<{ id: number }>
}

export default async function DetailsCompeticaoPage({ params }: IDetailsCompeticaoPageProps) {
    const { id } = await params;
    
    return (
        <div>DETAILS {id}</div>
    );
}