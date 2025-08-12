/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { DateValueToDate } from "./date-handlers";
import { DateValue } from "@heroui/react";

export function handleInputChange<T>(
    e: ChangeEvent<HTMLInputElement>,
    setState: Dispatch<SetStateAction<T>>
) {
    const { name, value } = e.target;

    setState(prevState => ({
        ...prevState,
        [name]: value
    }));
}

export function handleNumberInputChange<T>(
    name: string,
    value: number,
    setState: Dispatch<React.SetStateAction<T>>
) {
    setState(prevState => ({
        ...prevState,
        [name]: value
    }));
}

export function handleRadioChange<T>(
    name: string,
    value: any,
    setState: Dispatch<SetStateAction<T>>
) {
    setState(prevState => ({
        ...prevState,
        [name]: value
    }));
}

export function handleDateChange<T>(
    name: string,
    value: DateValue | null,
    setState: React.Dispatch<React.SetStateAction<T>>
) {
    setState(prevState => ({
        ...prevState,
        [name]: DateValueToDate(value ?? undefined)
    }));
}