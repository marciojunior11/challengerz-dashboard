import { RefObject } from 'react';

export function handleReset(formRef: RefObject<HTMLFormElement | null>) {
    debugger
    if (formRef.current) {
        formRef.current.reset();
    }
}

export function handleSubmit(formRef: RefObject<HTMLFormElement | null>) {
    if (formRef.current) {
        formRef.current.requestSubmit();
    }
}