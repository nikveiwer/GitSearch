export function debounce<T extends (...args: any[]) => any>(
    func: T,
    time: number
) {
    let prevTimeout: number = 0;

    return (...args: Parameters<T>) => {
        clearTimeout(prevTimeout);

        prevTimeout = setTimeout(() => {
            func(...args);
        }, time);
    };
}
