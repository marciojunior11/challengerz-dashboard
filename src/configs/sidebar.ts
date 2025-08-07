export type SidebarConfig = typeof sidebarConfig;

export const sidebarConfig = {
    items: [
        {
            key: "sbi_0",
            icon: "heroicons:home-solid",
            label: "Home",
            href: "/",
        },

        {
            key: "sbi_1",
            icon: "ic:round-sports-handball",
            label: "Esportes",
            href: "/esportes",
        },
        
        {
            key: "sbi_2",
            icon: "tabler:tournament",
            label: "Competições",
            href: "/competicoes",
        },        
    ]
}