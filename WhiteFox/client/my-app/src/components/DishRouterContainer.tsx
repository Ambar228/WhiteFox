import {AppStateType} from "../redux/store";
import AppRouter, {AboutPropsDispatch, AboutPropsState} from "./AppRouter";
import {Dispatch} from "redux";
import {connect} from "react-redux";

let mapStateToProps = (state: AppStateType) : AboutPropsState => {
    return {
        isAuth: state.userReducer.isAuth,
        user: state.userReducer.user
    }
}
let mapDispatchToProps  = (dispatch : Dispatch<any>) : AboutPropsDispatch => {
    return {

    }
}

const DishContainer = connect(mapStateToProps, mapDispatchToProps)(AppRouter);