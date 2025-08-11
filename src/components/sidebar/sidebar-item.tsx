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
        <Link
            href={href}
            className={`
                    group w-full h-12 flex items-center gap-4 text-xl rounded-small
                    transition duration-500
                    ${pathname === href
                    ? "text-content-1 font-bold translate-x-2"
                    : "text-content-3 hover:text-primary"
                }
                `}
        >
            <Icon
                className={`
                        transition-colors duration-500
                        ${pathname === href
                        ? "text-primary"
                        : "text-content-3 group-hover:text-primary"
                    }
                    `}
                icon={icon ?? ""}
            />
            {label}
        </Link>
    );
}