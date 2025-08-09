import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ISidebarContainerProps extends HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode
}

export default function SidebarContainer({ children, className }: ISidebarContainerProps) {
    return (
        <nav className={twMerge(
            "flex flex-col min-w-40 justify-between items-center rounded-xl overflow-hidden px-4",
            className
        )}>
            {children}
        </nav>
    );
}