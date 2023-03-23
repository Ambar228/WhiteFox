import {AppStateType} from "../redux/store";
import AppRouter, {AboutPropsDispatch, AboutPropsState} from "./AppRouter";
import {Dispatch} from "redux";
import {connect} from "react-redux";
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

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;