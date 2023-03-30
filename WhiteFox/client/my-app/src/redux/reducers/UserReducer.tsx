import {InitialStateUserType} from "../../types/InitialStateUserType";
import {CHANGE_SELECTED_TYPE, ChangeSelectedType} from "./TypeReducer";
import {TypeObject} from "../../models/TypeObject";
import {User} from "../../models/User";

export type UserPageGlobalActionType = ChangeUserType | ChangeIsAuthType

export const CHANGE_USER_TYPE = "CHANGE_USER_TYPE"
export const CHANGE_IS_AUTH_TYPE = "CHANGE_IS_AUTH_TYPE"


export type ChangeUserType = {
    type: typeof CHANGE_USER_TYPE,
    user: User
}

export type ChangeIsAuthType = {
    type: typeof CHANGE_IS_AUTH_TYPE,
    isAuth: boolean
}


let initialState: InitialStateUserType = {
    user: {id: 1, email: "", role: "", password: ""},
    isAuth: false
}
const UserReducer = (state = initialState, action: UserPageGlobalActionType): InitialStateUserType => {
    switch (action.type) {
        case CHANGE_USER_TYPE:
            return {
                ...state,
                user: action.user
            }
        case CHANGE_IS_AUTH_TYPE:
            return {
                ...state,
                isAuth: action.isAuth
            }

        default:
            return {
                ...state
            }
    }
}
export const changeUserType = (user: User): ChangeUserType => ({
    type: CHANGE_USER_TYPE, user: user
})

export const changeIsAuthType = (isAuth: boolean): ChangeIsAuthType => ({
    type: CHANGE_IS_AUTH_TYPE, isAuth: isAuth
})

export default UserReducer;