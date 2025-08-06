import SidebarItem, { ISidebarItemProps } from "./sidebar-item";

interface ISidebarItemsProps {
    items: ISidebarItemProps[]
}

export default function SidebarItems({ items }: ISidebarItemsProps) {
    return (
        <ul>
            {items.map(item => {
                return (
                    <li key={item.key}>
                        <SidebarItem label={item.label} href={item.href}/>
                    </li>
                )
            })}
        </ul>
    );
}