import {AppStateType} from "../redux/store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import NavBar, {AboutPropsDispatch, AboutPropsState} from "./NavBar";
import {User} from "../models/User";
import {
    changeIsAuthType,
    ChangeIsAuthType,
    changeUserType,
    UserPageGlobalActionType
} from "../redux/reducers/UserReducer";

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

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;