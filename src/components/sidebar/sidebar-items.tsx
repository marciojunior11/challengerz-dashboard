import { HTMLAttributes } from "react";
import SidebarItem, { ISidebarItemProps } from "./sidebar-item";
import { twMerge } from "tailwind-merge";

interface ISidebarItemsProps extends HTMLAttributes<HTMLDivElement> {
    items: ISidebarItemProps[]
}

export default function SidebarItems({ items, className }: ISidebarItemsProps) {
    return (
        <ul className={twMerge(
            "flex flex-col gap-2 w-full h-full",
            className
        )}>
            {items.map(item => {
                return (
                    <li key={item.key}>
                        <SidebarItem icon={item.icon} label={item.label} href={item.href}/>
                    </li>
                )
            })}
        </ul>
    );
}