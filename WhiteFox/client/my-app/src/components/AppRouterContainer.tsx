import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../redux/store";
import {AboutPropsDispatch, AboutPropsState} from "./AppRouter";
import AppRouter from "./AppRouter";
import NavBar from "./NavBar";

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

const RouterContainer = connect(mapStateToProps, mapDispatchToProps)(AppRouter);

export default RouterContainer;