
import axios from "axios";
import { handleError, handleResponse } from "./response.handler";

export const breedService = {
  getBreeds
};

async function getBreeds(url: string) {
    return axios({
        method: "get",
        url,
        timeout: 30000,
        headers: {
        "Access-Control-Allow-Origin": "*"
        }
    })
        .then((response: any) => {
        return handleResponse(response);
        })
        .catch((error: any) => {
        return handleError(error);
    });
}

