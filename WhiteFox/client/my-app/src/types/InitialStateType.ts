import {Type} from "../models/Type";
import {TypeObject} from "../models/TypeObject";

export type InitialStateType = {
    type: Array<TypeObject>;
    selectedType: TypeObject;
}