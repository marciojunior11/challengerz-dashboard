"use client"

import { usePathname } from "next/navigation";
import SidebarItem, { ISidebarItemProps } from "./sidebar-item";
import { twMerge } from "tailwind-merge";
import { useEffect, useState, useRef } from "react";

interface ISidebarItemsProps {
  items: ISidebarItemProps[];
  className?: string;
}

export default function SidebarItems({ items, className }: ISidebarItemsProps) {
  const pathname = usePathname();
  const containerRef = useRef<HTMLUListElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Altura fixa do item - ajustar conforme seu css
  const ITEM_HEIGHT = 48; // 12 * 4 = 48px (h-12 em Tailwind)

  useEffect(() => {
    const index = items.findIndex(item => item.href === pathname);
    if (index !== -1) {
      setActiveIndex(index);
    }
  }, [pathname, items]);

  return (
    <ul
      ref={containerRef}
      className={twMerge("relative flex flex-col gap-2 w-full h-full py-1", className)}
    >
      {/* Indicador animado */}
      <span
        style={{
          top: activeIndex * (ITEM_HEIGHT + 4),
          height: ITEM_HEIGHT,
        }}
        className="
          absolute left-0 w-2 bg-primary rounded-r-large
          transition-top duration-300 ease-in-out
        "
      />
      {/* Itens */}
      {items.map(item => (
        <li key={item.key ?? item.href}>
          <SidebarItem icon={item.icon} label={item.label} href={item.href} />
        </li>
      ))}
    </ul>
  );
}