export const BASE_REPO_URL = new URL(
    import.meta.env.VITE_REPO_API_URL ??
        "https://api.github.com/search/repositories"
);

export const ItemsPerPage = [5, 10, 20, 30, 40, 50] as const;

export const sortParams = {
    stars: "Stars",
    forks: "Forks",
    "help-wanted-issues": "Help-Wanted Issues",
    updated: "Updated",
};

export const orderParams = {
    asc: "Ascending",
    desc: "Descending",
};
