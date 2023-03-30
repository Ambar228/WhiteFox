import {AppStateType} from "../redux/store";
import AppRouter, {AboutPropsDispatch, AboutPropsState} from "./AppRouter";
import {Dispatch} from "redux";
import {changeUserType, ChangeUserType} from "../redux/reducers/UserReducer";
import {User} from "../models/User";
import {connect} from "react-redux";
import Autharization from "../pages/Autharization";

let mapStateToProps = (state: AppStateType) : AboutPropsState => {
    return {
        isAuth: state.userReducer.isAuth,
        user: state.userReducer.user
    }
}
let mapDispatchToProps  = (dispatch : Dispatch<ChangeUserType>) : AboutPropsDispatch => {
    return {
        changeIsAuthType(isAuth: boolean): void {

        },
        changeUserType: (user: User) => {
            dispatch(changeUserType(user))
        }
    }
}

const RouterContainer = connect(mapStateToProps, mapDispatchToProps)(Autharization);

export default RouterContainer;