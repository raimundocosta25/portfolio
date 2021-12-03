import axios from "axios";
import { stringify } from "querystring";

const baseURL = 'http://localhost:3000/api/'

export const getFetch = async (url: string) => {

    const data = await axios.get(baseURL + url, {})

    return data
}

export const postFetch = async (url: string, body: object) => {

    const data = await axios.post(baseURL + url, {
        body
    })

    return data
}