import { HTMLAttributes } from "react";

interface ISidebarFooterProps extends HTMLAttributes<HTMLDivElement> {
    children?: React.ReactNode
}

export default function SidebarFooter({ children, className = "" }: ISidebarFooterProps) {
    return (
        <div className={className}>
            {children}
        </div>
    )
}