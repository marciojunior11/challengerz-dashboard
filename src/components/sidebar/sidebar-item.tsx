"use client"

import Link from "next/link";
import { Icon } from "@iconify/react"
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export interface ISidebarItemProps {
    key?: string,
    icon?: string,
    label: string,
    href: string
}

export default function SidebarItem({ icon, label, href }: ISidebarItemProps) {
    const pathname = usePathname();
    const ref = useRef<HTMLDivElement>(null);

    return (
        <div ref={ref} className="relative flex items-center">
            <Link
                href={href}
                className={`
                    group w-full mx-4 py-2 flex items-center gap-4 text-xl rounded-small
                    transition-colors duration-500
                    ${pathname === href 
                        ? "text-content-1 font-bold" 
                        : "text-content-3 hover:text-blue-400"
                    }
                `}
            >
                <Icon
                    className={`
                        transition-colors duration-500
                        ${pathname === href
                            ? "text-primary"
                            : "text-content-3 group-hover:text-blue-400"
                        }
                    `}
                    icon={icon ?? ""}
                />
                {label}
            </Link>
        </div>
    );
}