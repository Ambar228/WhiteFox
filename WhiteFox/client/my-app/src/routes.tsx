import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE, DISH_ROUTE,
    LOGIN_ROUTE,
    ORDER_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./utils/consts";

import Order from "./pages/Order";
import Basket from "./pages/Basket";
import Shop from "./pages/Shop";
import Autharization from "./pages/Autharization";
import Dish from "./pages/Dish";
export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component : Admin
    },
    {
        path: ORDER_ROUTE,
        Component : Order
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export const publicRoutes = [
    // {
    //     path: SHOP_ROUTE,
    //     Component : Shop
    // },
    {
        path: LOGIN_ROUTE,
        Component : Autharization
    },
    {
        path: REGISTRATION_ROUTE,
        Component : Autharization
    },
    {
        path: DISH_ROUTE + '/:id',
        Component : Dish
    },
]
