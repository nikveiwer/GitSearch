import { type Repo, type RepoResponse } from "../models";
import { slicer } from "../utils/Slicer";

export function fromSourceToRepo(source: RepoResponse["items"][number]): Repo {
    return {
        id: source.id,
        name: source.name,
        repoLink: source.html_url,
        ownerName: source.owner.name || source.owner.login,
        ownerLink: source.owner.html_url,
        avatarLink: source.owner.avatar_url,
        description: slicer(source.description, 200),
        language: !source.language
            ? "Unknown"
            : (slicer(source.language, 12) as string),
        starsCount: source.stargazers_count,
    };
}
