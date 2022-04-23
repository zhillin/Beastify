import { Reducer } from "redux";
import { catalogItmNum } from "../components/catalog/catalog";
import { GoodsObjectItm } from "../components/catalog/catalogType";
import { 
    AMOUNT_DATA,
    DATA_BASKET,
    GOODS_DATA,
    SHOW_CATALOG,
    VIEW_BASKET,
    VIEW_BASKET_ORDER,
    VIEW_MOBILE_MENU
} from "./actions";

// state type
export type MainState = {
    basketView: boolean,
    basketData: [],
    basketViewOrder: boolean,
    viewMobileMenu: boolean,
    amountData: number,
    catalogShow: number,
    goodsData: {
        [key: string]: GoodsObjectItm
    }
}

// state start
const initialState: MainState = {
    basketView: false,
    basketData: [],
    basketViewOrder: false,
    viewMobileMenu: false,
    amountData: 0,
    catalogShow: catalogItmNum,
    goodsData: {},
}

// reducer
export const mainReducer: Reducer<MainState> = (state = initialState, action) => {
    switch (action.type) {
        case VIEW_BASKET:
            return {
                ...state,
                basketView: action.value
            }
        case DATA_BASKET:
            return {
                ...state,
                basketData: action.value
            }
        case VIEW_BASKET_ORDER:
            return {
                ...state,
                basketViewOrder: !state.basketViewOrder
            }
        case VIEW_MOBILE_MENU:
            return {
                ...state,
                viewMobileMenu: !state.viewMobileMenu
            }
        case AMOUNT_DATA:
            return {
                ...state,
                amountData: action.value
            }
        case GOODS_DATA:
            return {
                ...state,
                goodsData: {...state.goodsData, ...action.value}
            }
        case SHOW_CATALOG:
            return {
                ...state,
                catalogShow: action.value
            }
        default:
            return state;
    }
}