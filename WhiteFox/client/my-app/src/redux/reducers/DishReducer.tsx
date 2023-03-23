import {InitialStateDishType} from "../../types/InitialStateDishType";
import {Dish} from "../../models/Dish";

export type UserPageGlobalActionType = any

let initialState: InitialStateDishType = {
    dishes: [{id: 1, name: "zxc", rating: 228, price: 228, compound: "zxcxzc", img: "zxczxc"}]
}
const DishReducer = (state = initialState, action: UserPageGlobalActionType): InitialStateDishType => {
    return {
        ...state
    }
}

export default DishReducer;