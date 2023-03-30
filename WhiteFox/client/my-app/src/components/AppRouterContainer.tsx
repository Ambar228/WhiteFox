import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../redux/store";
import {AboutPropsDispatch, AboutPropsState} from "./AppRouter";
import AppRouter from "./AppRouter";
import {
    changeIsAuthType,
    changeUserType, UserPageGlobalActionType
} from "../redux/reducers/UserReducer";
import {User} from "../models/User";

let mapStateToProps = (state: AppStateType) : AboutPropsState => {
    return {
        isAuth: state.userReducer.isAuth,
        user: state.userReducer.user
    }
}
let mapDispatchToProps  = (dispatch : Dispatch<UserPageGlobalActionType>) : AboutPropsDispatch => {
    return {
        changeIsAuthType(isAuth: boolean): void {
            dispatch(changeIsAuthType(isAuth))
        },
        changeUserType: (user: User) => {
            dispatch(changeUserType(user))
        }
    }
}

const RouterContainer = connect(mapStateToProps, mapDispatchToProps)(AppRouter);

export default RouterContainer;