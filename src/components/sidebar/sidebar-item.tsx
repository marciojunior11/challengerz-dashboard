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
        <div className="flex">
            <div className={`
                w-2 h-12 rounded-r-full
                ${pathname == href ? "bg-primary" : ""}
            `}/>

            <Link href={href} className={`
                w-full mx-4 py-2 flex items-center gap-4 text-xl rounded-small
            `}>
                <Icon icon={icon ?? ""}/>
                {label}
            </Link>
        </div>
    );
}