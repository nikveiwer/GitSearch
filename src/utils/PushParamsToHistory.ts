import { RepoRequest } from "../models";
import { objToParams } from "./ObjToParams";

export const pushParamsToHistory = (params: RepoRequest) => {
    const currentURL = new URL(window.location.toString());
    const urlWithParams = objToParams(params, currentURL);
    window.history.pushState({}, "", urlWithParams);
};
