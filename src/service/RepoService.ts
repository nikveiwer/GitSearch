import { AxiosResponse } from "axios";
import { RepoRequest, RepoResponse } from "../models";
import { $api } from "./AxiosSetup";
import { objToParams } from "../utils/ObjToParams";
import { BASE_REPO_URL } from "../constants";

export default class RepoService {
    static async getRepos(
        reqParams: RepoRequest
    ): Promise<AxiosResponse<RepoResponse>> {
        const url = objToParams(reqParams, BASE_REPO_URL);

        return $api.get<RepoResponse>(url);
    }
}
