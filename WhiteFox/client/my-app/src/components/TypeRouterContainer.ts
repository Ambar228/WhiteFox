import {AppStateType} from "../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import TypeBar, {AboutPropsTypeDispatch, AboutPropsTypeState} from "./TypeBar";
import {
    changeSelectedType,
    changeTypes,
    TypesGlobalActionType
} from "../redux/reducers/TypeReducer";
import {TypeObject} from "../models/TypeObject";

let mapStateToProps = (state: AppStateType) : AboutPropsTypeState => {
    return {
        type: state.typeReducer.type,
        selectedType: state.typeReducer.selectedType
    }
}
let mapDispatchToProps  = (dispatch : Dispatch<TypesGlobalActionType>) : AboutPropsTypeDispatch => {
    return {
        setSelectedType: (selectedType: TypeObject) => {
            dispatch(changeSelectedType(selectedType))
        },
        setTypes: (type: Array<TypeObject>) => {
            dispatch(changeTypes(type))
        }
    }
}

const TypeRouterContainer = connect(mapStateToProps, mapDispatchToProps)(TypeBar);

export default TypeRouterContainer;