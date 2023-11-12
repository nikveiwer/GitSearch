export function slicer(str: string | null, symbolsCount: number) {
    if (str && str.length > symbolsCount) {
        const res = str.slice(0, symbolsCount) + "...";
        console.log(res);
        return res;
    }
    return str;
}
