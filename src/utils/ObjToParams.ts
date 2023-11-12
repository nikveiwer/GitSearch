import { RepoRequest } from "../models";

export function objToParams<T extends RepoRequest>(obj: T, path: URL): string {
    for (let key in obj) {
        const value = obj[key];

        if (obj.hasOwnProperty(key) && value) {
            path.searchParams.set(key, value as string);
        }
    }

    return path.toString();
}
