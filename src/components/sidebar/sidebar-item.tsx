"use client"

import Link from "next/link";
import { Icon } from "@iconify/react"
import { usePathname } from "next/navigation";

export interface ISidebarItemProps {
    key?: string,
    icon?: string,
    label: string,
    href: string
}

export default function SidebarItem({ icon, label, href }: ISidebarItemProps) {
    const pathname = usePathname();

    return (
        <div className={`
            flex overflow-hidden rounded-small
            ${pathname == href ? "bg-paper shadow-sm" : "hover:bg-blue-100"}
        `}>
            <div className={`
                w-2 h-12
                ${pathname == href ? "bg-primary" : ""}
            `} />

            <Link href={href} className={`
                w-full mx-4 py-2 flex items-center gap-4 text-xl rounded-small
                ${pathname == href ? "text-content-1 font-bold" : "text-content-4 hover:text-blue-400"}
            `}>
                <Icon className={`
                    ${pathname == href ? "text-primary" : "text-content-4 hover:text-blue-400"}
                `} icon={icon ?? ""} />
                {label}
            </Link>
        </div>
    );
}