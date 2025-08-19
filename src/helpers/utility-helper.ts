export function getNestedValue<T>(obj: T, path: string): unknown {
    return path.split('.').reduce<unknown>((acc, key) => {
        if (acc === null || acc === undefined) return undefined;
        if (typeof acc === "object" && key in acc) {
            return (acc as Record<string, unknown>)[key];
        }
        return undefined;
    }, obj);
}