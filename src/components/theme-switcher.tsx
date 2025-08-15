"use client"

import { handleSwitchChange } from "@/handlers/change-event-handlers";
import { Switch } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useTheme } from "next-themes"
import { useState } from "react";

export default function ThemeSwitcher() {
    const { theme, setTheme } = useTheme();

    return (
        <Switch
            onValueChange={value => setTheme(value === true ? "light" : "dark")}
            defaultSelected
            color="warning"
            endContent={<Icon icon="tabler:moon-filled" />}
            size="lg"
            startContent={<Icon icon="tabler:sun-filled" />}
        />
    );
}