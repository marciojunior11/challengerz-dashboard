import Link from "next/link";

export interface ISidebarItemProps {
    key?: string,
    label: string,
    href: string
}

export default function SidebarItem({ label, href }: ISidebarItemProps) {
    return (
        <Link href={href}>{label}</Link>
    );
}