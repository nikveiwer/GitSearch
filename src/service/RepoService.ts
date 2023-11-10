import { $api } from "./AxiosSetup";

export default class RepoService {
    static async getRepos() {
        return $api.get("/repositories?q=repo");
    }
}
