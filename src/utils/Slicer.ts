export function slicer(str: string | null, symbolsCount: number) {
    if (str && str.length > symbolsCount) {
        return str.slice(symbolsCount) + "...";
    }
    return str;
}
