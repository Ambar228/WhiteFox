import {InitialStateDishType} from "../../types/InitialStateDishType";
import {DishObject} from "../../models/DishObject";

export type UserPageGlobalActionType = any

export const CHANGE_DISHES = "CHANGE_DISHES"

export type ChangeDishes = {
    type: typeof CHANGE_DISHES,
    dishes: Array<DishObject>
}

let initialState: InitialStateDishType = {
    dishes: [
    ],
}
const DishReducer = (state = initialState, action: ChangeDishes): InitialStateDishType => {
    switch (action.type) {
        case CHANGE_DISHES:
            return {
                ...state,
                dishes: action.dishes
            }

        default:
            return {
                ...state
            }
    }
}

export const changeDishes = (dishes: Array<DishObject>): ChangeDishes => ({
    type: CHANGE_DISHES, dishes: dishes
})

export default DishReducer;