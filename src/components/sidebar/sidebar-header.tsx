import { HTMLAttributes } from "react";

interface ISidebarHeaderProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export default function SidebarHeader ({ children, className }: ISidebarHeaderProps) {
    return (
        <div className={className}>
            {children}
        </div>
    );
}