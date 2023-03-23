import {InitialStateUserType} from "../../types/InitialStateUserType";

export type UserPageGlobalActionType = any

let initialState: InitialStateUserType = {
    user: {id: 1, email: "safonovebetsobak", role: "ebirsobak", password: "mama dast pizdi za mati"},
    isAuth: true
}
const UserReducer = (state = initialState, action: UserPageGlobalActionType): InitialStateUserType => {
    return {
        ...state
    }
}

export default UserReducer;