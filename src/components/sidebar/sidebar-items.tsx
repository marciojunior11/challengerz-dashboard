import SidebarItem, { ISidebarItemProps } from "./sidebar-item";

interface ISidebarItemsProps {
    items: ISidebarItemProps[]
}

export default function SidebarItems({ items }: ISidebarItemsProps) {
    return (
        <ul className="flex flex-col w-full h-full">
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