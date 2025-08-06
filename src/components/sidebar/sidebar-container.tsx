interface ISidebarContainerProps {
    children: React.ReactNode
}

export default function SidebarContainer({ children }: ISidebarContainerProps) {
    return (
        <nav>
            {children}
        </nav>
    );
}