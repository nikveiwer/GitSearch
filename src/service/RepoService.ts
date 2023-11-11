import { AxiosResponse } from "axios";
import { RepoResponse } from "../models";
import { $api } from "./AxiosSetup";

export default class RepoService {
    static async getRepos(): Promise<AxiosResponse<RepoResponse>> {
        return $api.get<RepoResponse>("/repositories?q=repo");
    }
}
