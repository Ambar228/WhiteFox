import {Dispatch} from "redux";
import {connect} from "react-redux";
import {AppStateType} from "../redux/store";
import {changeSelectedType, changeTypes, TypesGlobalActionType} from "../redux/reducers/TypeReducer";
import {TypeObject} from "../models/TypeObject";
import Shop, {AboutPropsTypeDispatch, AboutPropsTypeState} from "../pages/Shop";
import {DishObject} from "../models/DishObject";
import {changeDishes} from "../redux/reducers/DishReducer";

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
        },
    }
}

const ShopRouterContainer = connect(mapStateToProps, mapDispatchToProps)(Shop);

export default ShopRouterContainer;