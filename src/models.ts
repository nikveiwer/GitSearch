export interface Repo {
    id: number;
    name: string;
    repoLink: string;
    ownerName: string;
    ownerLink: string;
    avatarLink: string;
    description: string | null;
    language: string;
    starsCount: number;
}

export interface RepoResponse {
    incomplete_results: boolean;
    total_count: number;
    items: {
        id: number;
        name: string;
        html_url: string;
        owner: {
            name?: string;
            login: string;
            html_url: string;
            avatar_url: string;
        };
        description: string;
        language: string;
        stargazers_count: number;
    }[];
}

export interface RepoRequest {
    q: string;
    sort: "stars" | "forks" | "help-wanted-issues" | "updated";
    order: "asc" | "desc";
    per_page: string;
    page: string;
}

export interface ErrorResponse {
    response: {
        data: {
            message: string;
        };
    };
}
