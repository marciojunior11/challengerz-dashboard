import { Icon } from "@iconify/react/dist/iconify.js"
import { HTMLAttributes } from "react"
import { twMerge } from "tailwind-merge"

interface IFaseContainerProps extends HTMLAttributes<HTMLDivElement> {
    icon?: React.ReactNode,
    title: string,
    description?: string
}

export default function FaseCompeticao({ icon = "", title, description = "", className = "", onClick }: IFaseContainerProps) {
    return (
        <div onClick={onClick} className={twMerge(
            "cursor-pointer w-72 rounded-2xl shadow-sm bg-white dark:bg-[#12141A] border border-default-100 hover:scale-102 hover:bg-primary-100 hover:shadow-md transition p-5 flex flex-col items-center text-center",
            className
        )}>
            {!!icon && (
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary-100 text-primary mb-4">
                    {icon}
                </div>
            )}
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            {!!description && <p className="text-gray-500 text-sm mt-2">{description}</p>}
        </div>
    )
}