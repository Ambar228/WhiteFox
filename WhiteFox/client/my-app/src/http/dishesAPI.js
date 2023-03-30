import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"

export const create = async (dish) => {
    const {data} = await $host.post('api/dish', dish)
    return jwt_decode(data.token)
}

export const get = async () => {
    const {data} = await $host.get('api/dish')
    return data
}

export const getById = async (id) => {
    const {data} = await $host.get('api/dish/' + id)
    return data
}