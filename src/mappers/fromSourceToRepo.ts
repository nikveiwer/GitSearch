import { Repo } from "../models";

export function fromSourceToRepo(source: any): Repo {
    return {
        id: source.id,
        name: source.name,
        repoLink: source.html_url,
        ownerName: source.owner.name || source.owner.login,
        ownerLink: source.owner.html_url,
        description: source.description,
        language: source.language,
        starsCount: source.stargazers_count,
    };
}
