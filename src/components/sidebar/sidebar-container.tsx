interface ISidebarContainerProps {
    children: React.ReactNode
}

export default function SidebarContainer({ children }: ISidebarContainerProps) {
    return (
        <nav className="flex flex-col min-w-40 justify-between items-center bg-paper rounded-xl overflow-hidden">
            {children}
        </nav>
    );
}