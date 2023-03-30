import {AppStateType} from "../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {DishObject} from "../models/DishObject";
import {changeDishes, ChangeDishes} from "../redux/reducers/DishReducer";
import {AboutPropsDishDispatch, AboutPropsDishState} from "./DishList";
import Shop from "../pages/Shop";

let mapStateToProps = (state: AppStateType) : AboutPropsDishState => {
    return {
        dishes: state.dishReducer.dishes
    }
}
let mapDispatchToProps  = (dispatch : Dispatch<ChangeDishes>) : AboutPropsDishDispatch => {
    return {
        setDishes: (type: Array<DishObject>) => {
            dispatch(changeDishes(type))
        }
    }
}

const DishContainer = connect(mapStateToProps, mapDispatchToProps)(Shop);

export default DishContainer;