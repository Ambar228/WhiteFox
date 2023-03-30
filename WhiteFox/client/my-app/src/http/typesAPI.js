import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode"
import {TypeObject} from "../models/TypeObject";

export const create = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const get = async () => {
    const {data} = await $host.get('api/type')
    return data
}