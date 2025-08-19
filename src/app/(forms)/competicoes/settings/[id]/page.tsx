interface ISettingsCompeticaoPageProps {
    params: Promise<{ id: number }>
}

export default async function SettingsCompeticaoPage({ params }: ISettingsCompeticaoPageProps) {
    const { id } = await params;

    return (
        <div>SETTINGS {id}</div>
    );
}