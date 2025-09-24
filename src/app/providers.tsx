"use client"

import { HeroUIProvider, ToastProvider } from "@heroui/react"
import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <HeroUIProvider>
            <ThemeProvider attribute="class">
                <ToastProvider />
                {children}
            </ThemeProvider>
        </HeroUIProvider>
    );
}