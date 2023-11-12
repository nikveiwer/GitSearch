import axios from "axios";

export const $api = axios.create({
    headers: {
        Accept: "application/vnd.github+json",
        Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28",
    },
});
