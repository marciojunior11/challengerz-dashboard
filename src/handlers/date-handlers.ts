import { DateValue } from "@heroui/react";
import { CalendarDate, parseDate } from "@internationalized/date";

export const DateValueToDate = (calendarDate?: DateValue): Date | undefined => {
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    if (!calendarDate) return undefined;

    return calendarDate.toDate(timeZone);
};

export const DateToCalendarDate = (date?: Date): CalendarDate | undefined => {
    if (!date) return undefined;

    const yyyy = String(date.getFullYear()).padStart(4, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const dd = String(date.getDate()).padStart(2, "0");

    const dataFormatada = `${yyyy}-${mm}-${dd}`;

    return parseDate(dataFormatada);
};