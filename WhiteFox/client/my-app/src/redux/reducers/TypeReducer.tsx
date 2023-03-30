import {InitialStateType} from "../../types/InitialStateType";
import {Type} from "../../models/Type";
import {TypeObject} from "../../models/TypeObject";
import {ChangeIsAuthType, ChangeUserType} from "./UserReducer";

export type TypesGlobalActionType = ChangeSelectedType | ChangeTypes

export const CHANGE_SELECTED_TYPE = "CHANGE_SELECTED_TYPE"

export type ChangeSelectedType = {
    type: typeof CHANGE_SELECTED_TYPE,
    selectedType: TypeObject
}

export const CHANGE_TYPES = "CHANGE_TYPES"

export type ChangeTypes = {
    type: typeof CHANGE_TYPES,
    types: Array<TypeObject>
}


let initialState: InitialStateType = {
    type: [new TypeObject(0, "")],
    selectedType: new TypeObject(0, "")
}
const TypeReducer = (state = initialState, action: TypesGlobalActionType): InitialStateType => {
    switch (action.type) {
        case CHANGE_SELECTED_TYPE:
            return {
                ...state,
                selectedType: action.selectedType
            }
        case CHANGE_TYPES:
            return {
                ...state,
                type: action.types
            }

        default:
            return {
                ...state
            }
    }
}

export const changeTypes = (types: Array<TypeObject>): ChangeTypes => ({
    type: CHANGE_TYPES, types: types
})

export const changeSelectedType = (selectedType: TypeObject): ChangeSelectedType => ({
    type: CHANGE_SELECTED_TYPE, selectedType: selectedType
})

export default TypeReducer;